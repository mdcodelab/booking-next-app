import { IoMdSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-6 bg-gray-200'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col'>
      <form className="w-[300px] mx-auto shadow rounded-md p-2 border-1 border-black "action="https://formspree.io/f/mbjvoylv"
      method="POST">
      <label className="block mb-2 text-sm">Subscribe to our newsletter</label>
       <div className="flex items-center justify-center">
       <input type="email" className=" rounded-md px-1 py-1" name="email"
         placeholder="Enter your email..."></input>
        <button type="submit"className="bg-black px-6 py-2 rounded-md ml-1 cursor-pointer hover:bg-blue-600 transition ease-in-out duration-60">
        <IoMdSend className="text-white"></IoMdSend></button>
       </div>
      </form>
      <div className="flex items-center justify-between lg:px-24">
          <h1 className="text-gray-600 text-xl font-semibold">Bookit</h1>
          <div className="flex items-center">
            <FaFacebook className="text-2xl mr-4 cursor-pointer hover:text-blue-600 transition ease-in-out duration-60"></FaFacebook>
            <FaTwitter className="text-2xl mr-4 cursor-pointer hover:text-blue-600 transition ease-in-out duration-60"></FaTwitter>
            <FaYoutube className="text-2xl cursor-pointer hover:text-blue-600 transition ease-in-out duration-60"></FaYoutube>
          </div>
      </div>
        <p className='text-center text-sm text-gray-600 mt-2 pt-4'>
          &copy; {currentYear} Bookit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
