function Header(){
  return(
    <div className="h-[611px] w-full" style={{
      backgroundImage: 'url("/Header2.png")', 
      opacity:"100%"
    }}>
    
    <section className="min-h-[611px] flex flex-col justify-center px-5 py-8 text-white">
      <h1 className="text-4xl mb-4 px-[70px] pt-16 font-semibold">Network Security Service</h1>
      <p className=" max-w-[570px] mx-[70px] text-xl pt-8 mb-8">Scan your websites, servers, networks, and APIs.<br/> View dashboards, get threat alerts, and generate audit-ready reports.</p>
      <p className="mx-[70px] mb-2">Enter the URl of server or website to Scan</p>
      <div className="flex max-w-lg mb-8 mx-[70px]">
        <input type="text" placeholder="Enter the URL, IP address or host name" className="flex-1 px-4 py-3 rounded-l-md bg-white text-black" />
        <button className="px-6 py-3 bg-gradient-to-tr from-[#9C5656] to-[#9BA155] text-white rounded-r-md hover:bg-red-500">SCAN NOW</button>
      </div>
    </section>
      
    </div>
  );
}

export default Header;