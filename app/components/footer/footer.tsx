import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



export default function footer() {
  return (
    <footer id="4" className="bg-white border-t border-gray-400 py-8  scroll-smooth  px-4 md:px-16">
    {/* Newsletter Section */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      <div>
        <h2 className="text-[18px] font-bold ml-2 text-[#000000]">
          Subscribe to our newsletter</h2>
        <p className="text-[16px] text-black mt-0 ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

      <div className="max-w-6xl mx-auto mt-4 ">
        <form className="flex items-center justify-start gap-8 ">
          <input
            type="email"    placeholder="Enter your E-mail"  className="flex-auto px-4 py-2 border border-black text-[#505050] rounded-md text-sm "
          />
          <button
            type="submit" className="px-5  py-2 text-sm border border-black hover:bg-black hover:text-white duration-200 ease-in-out text-[#505050] rounded-[5px]" >
            Subscribe</button>
        </form>

        <p className="text-[14px] text-black mt-4 pl-36">
          By subscribing, you agree to our <a href="#" className="underline">Privacy Policy</a>.</p>
      </div>
    </div>

    {/* Link */}
    <div className="max-w-9xl mx-auto mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-9 ">
      <div className="flex items-center space-x-10 pt-5 pb-5">
  
    
        <h3 className="text-xl font-bold ml-5 mb-36 text-black">Ddsgnr</h3>
      </div>

      <div>
        <h4 className="text-lg font-black text-black">Courses</h4>
     <ul className="mt-4 space-y-2 text-black text-sm">
     <li>Business</li>
     <li>Development</li>
        <li>Technology</li>
    <li>Design</li>
       <li>Programming</li>
    </ul>
      </div>
    <div>
        <h4 className="text-lg font-black text-black">Resources</h4>
   <ul className="mt-4 space-y-2 text-black text-sm">
      <li>Career</li>
   <li>Resume</li>
     <li>Learning</li>
  <li>Interview Preparation</li>
          <li>Jobs</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-black text-black">About Us</h4>
        <ul className="mt-4 space-y-2 text-black text-sm">
      <li>Contact</li>
     <li>Help/Support</li>
        <li>FAQ</li>
<li>Terms and Conditions</li>
       <li>Partners</li>
        </ul>
      </div>
    </div>

   
    <hr className="border-t border-gray-500 my-8 " />


    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#000000] text-sm  lg:pb-36 ">
    <p>© 2023 Ddsgnr. All rights reserved.</p>
      <div className="flex space-x-10 mt-2 md:mt-0">
        <a href="#" className="hover:underline">Privacy Policy</a>  <a href="#" className="hover:underline">Terms of Service</a>  <a href="#" className="hover:underline">Cookies Settings</a>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a
          href="#" className="text-black"
        > <FaFacebook size={25} />
        </a> <a
          href="#"className="text-black"
        >  <FaInstagram size={25} />
        </a>  <a
href="#" className="text-black">
          <FaTwitter size={25} />
        </a> <a
          href="#" className="text-black"
        > <FaLinkedin size={25} /> </a>
      </div>
      
    </div>
  </footer>
  )
}
