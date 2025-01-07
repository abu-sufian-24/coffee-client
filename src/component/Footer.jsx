import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import img1 from "../assets/images/more/logo1.png"

function Footer() {
  return (
    <>
      <footer className="bg-white py-10 px-6 bg-[url('/13.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={img1}
                alt="Espresso Emporium Logo"
                className="w-12 h-12"
              />
              <h2 className="text-2xl font-bold text-brown-900">
                Espresso Emporium
              </h2>
            </div>
            <p className="text-gray-700">
              Always ready to be your friend. Come & Contact with us to share your
              memorable moments, to share with your best companion.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="p-3 rounded-full bg-brown-900 text-white hover:bg-brown-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-brown-900 text-white hover:bg-brown-700"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-brown-900 text-white hover:bg-brown-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-brown-900 text-white hover:bg-brown-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-lg font-bold pt-5">Get in Touch</p>
            <div className="">
              <div className="flex items-center space-x-4 mb-4">
                <FiPhoneCall />
                <span className="text-gray-700">+88 01533 333 333</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <FiMail />
                <span className="text-gray-700">info@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <HiLocationMarker />
                <span className="text-gray-700">
                  72, Wall street, King Road, Dhaka
                </span>
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-bold text-brown-900">Connect with Us</h2>
            <form className="space-y-4 mt-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-brown-900 text-white rounded hover:bg-brown-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </footer>

      <div className="border-t bg-[url('/15.jpg')] bg-cover bg-center bg-no-repeat h-20 flex justify-center items-center">
        <p className="text-sm text-white ">
          Copyright © Espresso Emporium | All Rights Reserved
        </p>
      </div>

    </>

  );
}

export default Footer;
