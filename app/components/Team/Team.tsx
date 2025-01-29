import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGlobe, FaStar, FaCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Team() {
  return (
    <div className="bg-[#f7f7f7] flex flex-col justify-center items-center max-w-full text-center pt-28 pb-28 px-4 sm:px-16">
      <h2 className="text-4xl sm:text-5xl font-bold">Our team</h2>
      <p className="text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

      {/* team section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {/* team 1 */}
        <div className="text-center">
          <Image
            src="/22.png"
            width={80}
            height={80}
            alt="team1"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">James Nduku</h1>
          <p className="text-lg mt-2">Marketing Coordinator</p>
          <div className="flex space-x-5 items-center justify-center mt-7 mb-7">
            <FaLinkedin width={24} height={24} />
            <FaTwitter width={24} height={24} />
            <FaGlobe width={24} height={24} />
          </div>
        </div>

        {/* team 2 */}
        <div className="text-center">
          <Image
            src="/66.png"
            width={80}
            height={80}
            alt="team2"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Joseph Munyambu</h1>
          <p className="text-lg mt-2">Nursing Assistant</p>
          <div className="flex space-x-5 items-center justify-center mt-7 mb-7">
            <FaLinkedin width={24} height={24} />
            <FaTwitter width={24} height={24} />
            <FaGlobe width={24} height={24} />
          </div>
        </div>

        {/* team 3 */}
        <div className="text-center">
          <Image
            src="/11.png"
            width={80}
            height={80}
            alt="team3"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Joseph Ngumbau</h1>
          <p className="text-lg mt-2">Medical Assistant</p>
          <div className="flex space-x-5 items-center justify-center mt-7 mb-7">
            <FaLinkedin width={24} height={24} />
            <FaTwitter width={24} height={24} />
            <FaGlobe width={24} height={24} />
          </div>
        </div>

        {/* team 4 */}
        <div className="text-center hidden sm:block">
          <Image
            src="/44.png"
            width={80}
            height={80}
            alt="team4"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Erick Kipkemboi</h1>
          <p className="text-lg mt-2">Web Designer</p>
          <div className="flex space-x-5 items-center justify-center mt-7">
            <FaLinkedin width={24} height={24} />
            <FaTwitter width={24} height={24} />
            <FaGlobe width={24} height={24} />
          </div>
        </div>

        {/* team 5 */}
        <div className="text-center hidden sm:block">
          <Image
            src="/55.png"
            width={80}
            height={80}
            alt="team5"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Stephen Kerubo</h1>
          <p className="text-lg mt-2">President of Sales</p>
          <div className="flex space-x-5 items-center justify-center mt-7">
            <FaLinkedin width={24} height={24} />
            <FaTwitter width={24} height={24} />
            <FaGlobe width={24} height={24} />
          </div>
        </div>

        {/* team 6 */}
        <div className="text-center hidden sm:block">
          <Image
            src="/33.png"
            width={80}
            height={80}
            alt="team6"
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">John Leboo</h1>
          <p className="text-lg mt-2">Dog Trainer</p>
          <div className="flex space-x-5 items-center justify-center mt-7">
            <FaLinkedin width={24} height={24} />
            <FaTwitter width={24} height={24} />
            <FaGlobe width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Customer testimonials */}
      <div id="5" className="mt-24 text-left">
        <h2 className="text-3xl sm:text-5xl font-bold">Customer testimonials</h2>
        <p className="text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* testimonial box */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center items-center mt-10">
        <div className="border border-black p-6 sm:p-10 text-left w-full sm:w-1/3">
          <p>
            <span className="flex gap-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
          <div className="flex space-x-4 mt-4">
            <Image src="/11.png" alt="11" width={56} height={56} className="rounded-full" />
            <span className="text-lg font-semibold">James Nduku<br />
              <span className="font-normal text-sm block">Software Developer</span>
            </span>
          </div>
        </div>

        <div className="border border-black p-6 sm:p-10 text-left w-full sm:w-1/3">
          <p>
            <span className="flex gap-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
          <div className="flex space-x-4 mt-4">
            <Image src="/22.png" alt="22" width={56} height={56} className="rounded-full" />
            <span className="text-lg font-semibold">Erick Kipkemboi<br />
              <span className="font-normal text-sm block">Scrum Master</span>
            </span>
          </div>
        </div>

        <div className="border border-black p-6 sm:p-10 text-left w-full sm:w-1/3">
          <p>
            <span className="flex gap-1">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
          <div className="flex space-x-4 mt-4">
            <Image src="/33.png" alt="33" width={56} height={56} className="rounded-full" />
            <span className="text-lg font-semibold">Stephen Kerubo<br />
              <span className="font-normal text-sm block">UI/UX Designer</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pagination Circles */}
      <div className="flex space-x-2 items-center mt-10">
        <FaCircle size={5} />
        <FaCircle size={5} className="text-gray-500" />
        <FaCircle size={5} className="text-gray-500" />
        <FaCircle size={5} className="text-gray-500" />
      </div>

      {/* Arrows */}
      <div className="ml-auto lg:mr-16 flex justify-end gap-4 mt-6">
        <FaArrowLeft size={32} className="border rounded-full p-2 text-black border-black" />
        <FaArrowRight size={32} className="border rounded-full p-2 text-black border-black" />
      </div>
    </div>
  );
}
