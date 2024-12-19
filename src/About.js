const About = () => {
  return (
    <section className="pt-10 bg-gray-200 text-center h-[544px]">
      <h1 className="text-base w-fit mb-8 bg-gradient-to-r from-[#EAC3C3] to-[#C2BE84] px-2 rounded-sm mx-auto">
        What we do
      </h1>
      <h2 className="text-4xl font-bold mb-8">About Us</h2>
      <p className="text-lg max-w-2xl mx-auto mb-10">
        Detect, prioritize, and mitigate vulnerabilities, misconfigurations, and{" "}
        <br />
        compliance issues across your laptops, servers, and network devices.
      </p>

      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-8 ">


          {/* Vulnerabilities */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[253px] w-[244px] bottom-0">
            <h2 className="text-lg font-semibold mb-4">Vulnerabilities</h2>
            <div className="space-y-4">
              <div className="bg-[#7EB05A] text-white text-center py-2 rounded h-12">
                07 SQL Injections
              </div>
              <div className="bg-[#DCC779] text-white text-center py-2 rounded h-12">
                {/* Replace with dynamic data */}
                Medium
              </div>
              <div className="bg-red-400 text-white text-center py-2 rounded h-12">
                Critical
              </div>
            </div>
          </div>

          {/* Critical Risks */}
          <div className="bg-white p-4 rounded-lg shadow-md h-[272px] w-[252px]">
            <h2 className="text-lg font-semibold mb-4">Critical Risks</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-red-400 text-white py-2 px-3 rounded h-12">
                <span>Critical</span>
                <span>58</span>
              </div>
              <div className="flex justify-between items-center bg-[#DCC779] text-white py-2 px-3 rounded h-12">
                <span>Medium</span>
                <span>06</span>
              </div>
              <div className="flex justify-between items-center bg-[#7EB05A] text-white py-2 px-3 rounded h-12">
                <span>High</span>
                <span>50</span>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white p-4 px-8 rounded-lg shadow-md h-[253px] w-[235px]">
            <h2 className="text-lg font-semibold mb-4 ">Security</h2>
            <div className="flex justify-around items-end h-48">
              <div
                className="bg-[#DCC779] w-[120px] rounded-t"
                style={{ height: "70%" }}
              ></div>
              <div
                className="bg-[#7EB05A] w-[120px]  rounded-t "
                style={{ height: "100%" }}
              ></div>
              <div
                className="bg-red-400 w-[120px] rounded-t"
                style={{ height: "60%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
