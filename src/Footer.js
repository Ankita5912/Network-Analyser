import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    alert("Subscribed!");
  };

  return (
    <footer className="mt-40 bg-[#242323] text-white">
      <div className="container place-self-center px-4 py-8 flex flex-wrap xl:gap-36 lg:gap-20 md:gap-2 gap-x-28 gap-y-20 justify-center w-fit">
        {/* About Section */}
        <div className="space-y-4 max-w-xs">
          <img src="/logo.svg" loading="lazy" alt="logo" />
          <p className="lg:text-lg text-base md:text-sm">
            Travel helps people to find their dream destination easily.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#df6951]"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <h2 className="lg:text-lg text-base md:text-sm font-semibold">
            Company
          </h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="lg:text-base text-xs">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="lg:text-base text-xs">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="lg:text-base text-xs">
                Blog
              </Link>
            </li>
            <li>
              <Link to="#" className="lg:text-base text-xs">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Destinations Section */}
        <div className="space-y-4 ">
          <h2 className="lg:text-lg text-base md:text-sm font-semibold">
            Destinations
          </h2>
          <ul className="space-y-2">
            <li className="lg:text-base text-xs">
              <Link to="#">Delhi</Link>
            </li>
            <li className="lg:text-base text-xs">
              <Link to="#">Mumbai</Link>
            </li>
            <li className="lg:text-base text-xs">
              <Link to="#">Banglore</Link>
            </li>
            <li className="lg:text-base text-xs">
              <Link to="#">Shimla</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4 w-fit">
          <h2 className="lg:text-lg text-base md:text-sm font-semibold">
            Join Our Newsletter
          </h2>
          <form
            className="flex flex-row items-center"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="xl:p-2 p-1 bg-gray-100 rounded-l-md h-10 w-32 xl:w-fit focus:outline-none focus:ring-2 focus:ring-[#df6951]"
              required
            />
            <button
              type="submit"
              className="p-2 bg-[#df6951] text-white rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="my-8 border-gray-300 mx-8" />

      <div className="text-center py-4 text-sm">
        &copy; 2024 Travel Tour | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
