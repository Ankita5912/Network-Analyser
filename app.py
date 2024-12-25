from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route('/api/scan', methods=['POST'])
def scan():
    data = request.json
    target = data.get('target')
    if not target:
        return jsonify({'error': 'No target provided'}), 400
    
    try:
        # Path to the network analyzer script
        script_path = os.path.join(os.getcwd(), 'full_network_analyzer.py')
        subprocess.Popen(['python', script_path, target])
        return jsonify({'message': 'Scan started', 'target': target})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
