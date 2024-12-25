import nmap
import pandas as pd
from scapy.all import sniff, IP, TCP, UDP, ICMP
import csv
import sqlite3
import threading
import time
import queue
import socket
import sys

# Configuration settings
TARGET = sys.argv[1] if len(sys.argv) > 1 else input("Enter the IP address or domain name: ")
ALERT_THRESHOLD = 100  # Packet rate threshold for DoS/DDoS alerts

# Initialize nmap scanner
nm = nmap.PortScanner()

# Function to connect to the database
def connect_db():
    return sqlite3.connect('network_monitoring.db')

# Resolve domain name to IP address
def resolve_domain_to_ip(domain):
    try:
        ip_address = socket.gethostbyname(domain)
        return ip_address
    except socket.gaierror as e:
        print(f"Error resolving domain {domain}: {e}")
        return None

# Initialize database
def init_db():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS port_scan 
                      (id INTEGER PRIMARY KEY, port INTEGER, protocol TEXT, state TEXT)''')
    cursor.execute('''CREATE TABLE IF NOT EXISTS vulnerability_scan
                      (id INTEGER PRIMARY KEY, host TEXT, port INTEGER, protocol TEXT, vulnerability TEXT)''')
    cursor.execute('''CREATE TABLE IF NOT EXISTS packet_capture
                      (id INTEGER PRIMARY KEY, src_ip TEXT, dst_ip TEXT, protocol TEXT, timestamp TEXT)''')
    cursor.execute('''CREATE TABLE IF NOT EXISTS threat_alerts
                      (id INTEGER PRIMARY KEY, ip_address TEXT, packet_count INTEGER, alert_type TEXT)''')
    conn.commit()
    conn.close()

# Port Scanning Function
def port_scan(ip):
    try:
        print("Starting Port Scan...")
        nm.scan(ip, '1-1024')
        conn = connect_db()
        cursor = conn.cursor()
        for proto in nm[ip].all_protocols():
            lport = nm[ip][proto].keys()
            for port in lport:
                state = nm[ip][proto][port]['state']
                cursor.execute("INSERT INTO port_scan (port, protocol, state) VALUES (?, ?, ?)", (port, proto, state))
        conn.commit()
        conn.close()
        print("Port Scan Completed.")
    except Exception as e:
        print(f"Error in Port Scan: {e}")

# Vulnerability Scanning Function
def vulnerability_scan(ip):
    try:
        print("Starting Vulnerability Scan...")
        nm.scan(ip, arguments="--script vuln")
        conn = connect_db()
        cursor = conn.cursor()
        for host in nm.all_hosts():
            for proto in nm[host].all_protocols():
                lport = nm[host][proto].keys()
                for port in lport:
                    if 'script' in nm[host][proto][port]:
                        vuln_info = nm[host][proto][port]['script']
                        # Convert the dictionary to a string
                        vuln_info_str = str(vuln_info)
                        cursor.execute("INSERT INTO vulnerability_scan (host, port, protocol, vulnerability) VALUES (?, ?, ?, ?)", (host, port, proto, vuln_info_str))
        conn.commit()
        conn.close()
        print("Vulnerability Scan Completed.")
    except Exception as e:
        print(f"Error in Vulnerability Scan: {e}")

# DoS/DDoS Detection Function
packet_counts = {}

def detect_dos_ddos(packet):
    try:
        if IP in packet:
            src_ip = packet[IP].src
            packet_counts[src_ip] = packet_counts.get(src_ip, 0) + 1
            if packet_counts[src_ip] > ALERT_THRESHOLD:
                conn = connect_db()
                cursor = conn.cursor()
                cursor.execute("INSERT INTO threat_alerts (ip_address, packet_count, alert_type) VALUES (?, ?, ?)", (src_ip, packet_counts[src_ip], "Potential DoS/DDoS detected"))
                conn.commit()
                conn.close()
    except Exception as e:
        print(f"Error in DoS/DDoS Detection: {e}")

# Packet Capture Function
def packet_capture(interface, result_queue):
    try:
        packet_data = []
        protocol_counts = {}

        def packet_callback(packet):
            try:
                if packet.haslayer(IP):
                    src_ip = packet[IP].src
                    dst_ip = packet[IP].dst
                    protocol = packet[IP].proto
                    timestamp = packet.time
                    packet_data.append([src_ip, dst_ip, protocol, timestamp])
                    protocol_counts[protocol] = protocol_counts.get(protocol, 0) + 1
                    conn = connect_db()
                    cursor = conn.cursor()
                    cursor.execute("INSERT INTO packet_capture (src_ip, dst_ip, protocol, timestamp) VALUES (?, ?, ?, ?)", (src_ip, dst_ip, protocol, timestamp))
                    conn.commit()
                    conn.close()
            except Exception as e:
                print(f"Error in Packet Capture Callback: {e}")

        sniff(iface=interface, count=100, prn=packet_callback, store=True)

        result_queue.put(protocol_counts)
    except Exception as e:
        print(f"Error in Packet Capture: {e}")

# Fetch Data Functions
def fetch_port_scan_data():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM port_scan")
    data = cursor.fetchall()
    conn.close()
    return data

def fetch_vuln_scan_data():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM vulnerability_scan")
    data = cursor.fetchall()
    conn.close()
    return data

def fetch_packet_capture_data():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM packet_capture")
    data = cursor.fetchall()
    conn.close()
    return data

def fetch_threat_alerts_data():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM threat_alerts")
    data = cursor.fetchall()
    conn.close()
    return data

# Report Generation Function
def generate_report():
    port_scan_data = fetch_port_scan_data()
    vuln_scan_data = fetch_vuln_scan_data()
    packet_capture_data = fetch_packet_capture_data()
    threat_alerts_data = fetch_threat_alerts_data()

    with open("network_report.txt", "w") as report:
        report.write("Network Monitoring Report\n\n")

        report.write("1. Port Scan Results:\n")
        report.write("Port | Protocol | State\n")
        report.write("-----------------------\n")
        for row in port_scan_data:
            report.write(f"{row[1]} | {row[2]} | {row[3]}\n")

        report.write("\n2. Vulnerability Scan Results:\n")
        report.write("Host | Port | Protocol | Vulnerability\n")
        report.write("--------------------------------------\n")
        for row in vuln_scan_data:
            report.write(f"{row[1]} | {row[2]} | {row[3]} | {row[4]}\n")

        report.write("\n3. Packet Capture Data:\n")
        report.write("Source IP | Destination IP | Protocol | Timestamp\n")
        report.write("-----------------------------------------------\n")
        for row in packet_capture_data:
            report.write(f"{row[1]} | {row[2]} | {row[3]} | {row[4]}\n")

        report.write("\n4. Threat Alerts:\n")
        report.write("IP Address | Packet Count | Alert Type\n")
        report.write("--------------------------------------\n")
        for row in threat_alerts_data:
            report.write(f"{row[1]} | {row[2]} | {row[3]}\n")

    print("Comprehensive Report Generated: network_report.txt")

# Run Analyzer Function
def run_analyzer():
    init_db()
    result_queue = queue.Queue()

    with open("threat_alerts.csv", "w") as alert_file:
        writer = csv.writer(alert_file)
        writer.writerow(["IP Address", "Packet Count", "Alert Type"])

    ip_address = TARGET
    if not TARGET.replace('.', '').isdigit():  # Check if it's not an IP address
        ip_address = resolve_domain_to_ip(TARGET)
        if not ip_address:
            return

    port_scan_thread = threading.Thread(target=port_scan, args=(ip_address,))
    vuln_scan_thread = threading.Thread(target=vulnerability_scan, args=(ip_address,))
    packet_capture_thread = threading.Thread(target=packet_capture, args=("Wi-Fi", result_queue))

    port_scan_thread.start()
    vuln_scan_thread.start()
    packet_capture_thread.start()

    port_scan_thread.join()
    vuln_scan_thread.join()
    packet_capture_thread.join()

    generate_report()

if __name__ == "__main__":
    run_analyzer()
