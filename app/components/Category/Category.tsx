import React from 'react'
import Image from 'next/image'


export default function Category() {
  return (
    <div className="pt-28 pb-28 max-w-6xl sm:max-w-full  justify-center items-center scroll-smooth">
        <h2 className="font-bold  font-roboto text-black text-5xl text-center max-w-7xl mx-auto">Explore Courses By Category</h2>
<p className="font-normal  text-black text-lg text-center mb-20">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    {/* cards */}

    <div  className=" grid sm:grid-cols-3 grid-rows-3 grid-cols-1 text-black   item  gap-y-2 gap-x-[100px] max-w-max " >
    
{/* 1 */}
  <div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150  ">
    <Image
      src="/frame 292.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Design & Development</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>

{/* 2 */}
  <div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/2.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Marketing </span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>

{/* 3 */}
<div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/3.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Development</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>

{/* 4 */}
<div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/4.png"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Communication</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>

  {/* 5 */}
  <div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/5.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Digital Marketing</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>


{/* 6 */}

<div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/6.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Self Development</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>
{/* 7 */}
<div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center  p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/7.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Business</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>
{/* 8 */}
<div className="bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/8.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Finance</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>
{/* 9 */}
<div className=" bg-[#F7F7F7] rounded-md h-32 w-96 flex items-center p-4 mb-5 hover:scale-95 duration-150">
    <Image
      src="/9.jpg"
      width={100}
      height={100}
      alt="img."
      className="h-24 w-24"
    />
    <p className="ml-4 ">
    
   <span className=" text-xl font-semibold">Consulting</span><br/>
    <span className="text-lg " >50+ Courses Available</span>
    </p>
  </div>
  </div>

<div className="flex justify-center items-center hover:scale-110 duration-300 ">
<button className="border rounded-md mt-3 mb-3 pt-3 pb-3 pl-6 pr-6 text-black px-6 hover:border-2 border-black ">View All Course</button>
</div>


</div>



  )
}


