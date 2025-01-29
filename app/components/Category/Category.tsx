import React from 'react';
import Image from 'next/image';

export default function Category() {
  return (
    <div className="pt-28 pb-28 max-w-7xl mx-auto px-4">
      <h2 className="font-bold font-roboto text-black text-5xl text-center">
        Explore Courses By Category
      </h2>
      <p className="font-normal text-black text-lg text-center mb-12">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        
        {/* 1 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/1.png" width={100} height={100} alt="Design & Development" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Design & Development</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 2 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/2.jpg" width={100} height={100} alt="Marketing" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Marketing</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 3 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/3.jpg" width={100} height={100} alt="Development" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Development</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 4 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/4.png" width={100} height={100} alt="Communication" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Communication</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 5 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/5.jpg" width={100} height={100} alt="Digital Marketing" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Digital Marketing</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 6 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/6.jpg" width={100} height={100} alt="Self Development" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Self Development</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 7 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/7.jpg" width={100} height={100} alt="Business" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Business</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 8 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/8.jpg" width={100} height={100} alt="Finance" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Finance</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

        {/* 9 */}
        <div className="bg-[#F7F7F7] rounded-lg h-32 w-full max-w-sm flex items-center p-4 hover:scale-95 duration-150 shadow-md">
          <Image src="/9.jpg" width={100} height={100} alt="Consulting" className="h-24 w-24" />
          <p className="ml-4">
            <span className="text-xl font-semibold">Consulting</span><br />
            <span className="text-lg">50+ Courses Available</span>
          </p>
        </div>

      </div>

      {/* View All Courses Button */}
      <div className="flex justify-center mt-10">
        <button className="border border-black rounded-md px-6 py-3 text-black hover:border-2 hover:scale-105 duration-300">
          View All Courses
        </button>
      </div>
    </div>
  );
}
