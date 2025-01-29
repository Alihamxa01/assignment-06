import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="hidden sm:flex w-full h-auto bg-[#F7F7F7] px-4 py-2 sm:px-6 lg:px-10 flex-col sm:flex-row items-center justify-between">

      {/* Contact Information */}
      <div className="text-sm flex flex-col sm:flex-row gap-2 sm:gap-8 w-full sm:w-auto text-center sm:text-left text-black">
        <p>
          Phone Number: <span className="font-medium">956 742 455 678</span>
        </p>
        <p>
          Email: <span className="font-serif">info@ddsgnr.com</span>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center justify-center sm:justify-end text-black w-full sm:w-auto mt-4 sm:mt-0">
        <Link href="/" target="_blank">
          <FaFacebook size={20} />
        </Link>
        <Link href="/" target="_blank">
          <FaInstagram size={20} />
        </Link>
        <Link href="/" target="_blank">
          <FaTwitter size={20} />
        </Link>
        <Link href="/" target="_blank">
          <FaLinkedin size={20} />
        </Link>
      </div>

    </div>
  );
}
