import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-96 w-full mb-24">
      {/* Contact Info */}
      <div className="  pt-28 ">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <div className="space-y-12 h-[260px]">
          <div className="flex items-center space-x-4">
            <span className=""><MdOutlineEmail size={38}/></span>
            <div>
              <h3 className="font-medium text-xl">Chat with Us</h3>
              <p className=" text-base">email address will be placed here</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl"><FiPhoneCall size={38} /></span>
            <div>
              <h3 className="font-medium text-xl">Phone</h3>
              <p className="text-base">phonenumber will be placed here</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl"><IoLocationOutline size={38}/>
            </span>
            <div>
              <h3 className="font-medium text-xl">Office</h3>
              <p className="text-base">location will be placed here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-[488px]  px-4 pt-24">
        <div className="bg-white h-[520px] px-10 p-6 rounded-lg shadow-md border border-1 border-zinc-500">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Fill the following details to contact us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                className="w-full h-[86px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-l from-[#9C5656] to-[#9BA155] text-white py-2 rounded-lg hover:opacity-90"
            >
              Submit Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
