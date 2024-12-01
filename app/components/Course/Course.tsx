import React from 'react'
import Image from 'next/image'

export default function Course() {
  return (
    <div  className="text-black max-w-full   flex flex-col justify-center items-center text-center pt-28 pb-28 scroll-smooth ">
 <h1 className="font-bold text-6xl">Courses</h1>
 <p id="1" className="text-lg max-w-3xl text-center mb-9">Your Ultimate Guide to learning</p>

{/* buttons */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8 mb-8">
          <button className="text-black border-b-2 border-black pb-1 font-semibold">Popular</button>
          <button className="text-gray-500 hover:text-black">Recommended</button>
          <button className="text-gray-500 hover:text-black">Best Price</button>
        </div>
        

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10 text-left ">
          {/* Card 1 */}

          <div className="bg-[#f7f7f7] rounded-lg shadow-lg p-5 text-left hover:scale-110 duration-150">
            <Image src="/a.jpg" width={416} height={300} alt="UX/UI Design" className="rounded mb-4" />
            <p className=" text-sm mb-2">Design </p>
            <h5 className="text-2xl font-bold mb-2">UX/UI Design 2021</h5>
            <p className=" text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex ">
              <button className="  border border-black px-4 py-2 rounded">Enroll Now</button>
              <span className="font-semibold text-left mt-2 mb-2 ml-5 mr-5">$400</span>
            </div>
          </div>

          {/* Card 2 */}

          <div className="bg-[#f7f7f7] rounded-lg shadow-lg p-5 hover:scale-110 duration-150">
            <Image src="/b.jpg" width={416} height={300} alt="Introduction to Python" className="rounded mb-4" />
            <p className=" text-sm mb-2">Programming</p>
            <h5 className="text-2xl font-bold mb-2">Introduction to Python</h5>
            <p className=" text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex ">
              <button className="border border-black px-4 py-2 rounded">Enroll Now</button>
              <span className=" font-semibold mt-2 mb-2 ml-5 mr-5">$400</span>
            </div>
          </div>

          {/* Card 3 */}

          <div className="bg-[#f7f7f7] rounded-lg shadow-lg p-5 hover:scale-110 duration-150">
            <Image src="/c.jpg" width={416} height={300}  alt="Data Analysis" className="rounded mb-4" />
            <p className=" text-sm mb-2">Business</p>
            <h5 className="text-2xl font-bold mb-2">Data Analysis for Beginners</h5>
            <p className=" text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex ">
              <button className=" text-black border border-black px-4 py-2 rounded">Enroll Now</button>
              <span className=" font-semibold  mt-2 mb-2 ml-5 mr-5">$400</span>




            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10 text-left ">
     
        <div className= "bg-[#f7f7f7] rounded-lg shadow-lg p-5 hover:scale-110 duration-150 hidden sm:block">
            <Image  src="/d.jpg"  width={416} height={300} alt="UX/UI Design" className="rounded mb-4 " />
            <p className=" text-sm mb-2">Art </p>
            <h5 className="text-2xl font-bold mb-2">Art Specialization</h5>
            <p className=" text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex ">
              <button className=" text-black border border-black px-4 py-2 rounded">Enroll Now</button>
              <span className="mt-2 mb-2 ml-5 mr-5 font-semibold">$400</span>
            </div>
          </div>
          {/* 5 */}
          <div className=" bg-[#f7f7f7] rounded-lg shadow-lg p-5 hover:scale-110 duration-150 hidden sm:block">
            <Image  src="/e.jpg" width={416} height={300} alt="UX/UI Design" className="rounded mb-4 " />
            <p className="text-sm mb-2">Law </p>
            <h5 className="text-2xl font-bold mb-2">RIule Of Law</h5>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex ">
              <button className="  text-black border border-black px-4 py-2 rounded">Enroll Now</button>
              <span className=" font-semibold mt-2 mb-2 ml-5 mr-5">$400</span>
            </div>
          </div>
          {/* 6 */}
          <div className=" bg-[#f7f7f7] rounded-lg shadow-lg p-5 hover:scale-110 duration-150 hidden sm:block">
            <Image  src="/f.jpg" width={416} height={300} alt="UX/UI Design" className="rounded mb-4 " />
            <p className="0 text-sm mb-2">  Tech</p>
            <h3 className="text-2xl font-bold mb-2">Introduction to webflow</h3>
            <p className=" text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex ">
              <button className="b text-black border border-black px-4 py-2 rounded">Enroll Now</button>
              <span className=" font-semibold mt-2 mb-2 ml-5 mr-5">$400</span>
            </div>
          </div>
   
      </div>
      </div>
      <div className="flex justify-center items-center hover:scale-110 duration-300 ">
<button className="border rounded-md mt-3 mb-3 pt-3 pb-3 pl-6 pr-6 text-black px-6 hover:border-2 border-black ">View All Course</button>
</div>
    </div>
  )
}







