import React from 'react';
import Image from 'next/image';


const HeroSection: React.FC = () => {
  return (
    <div id="1" className=" mx-auto sm:px-6 lg:px-0 max-w-full scroll-smooth">
      
      <div className="py-12 lg:py-0 md:py-16 ">
        <div className="grid grid-cols-1  gap-4 items-center md:grid-cols-2">
          
          <div className="space-y-6">
     <h1 className="  font-bold tracking-tight text-5xl sm:text-4xl md:text-5xl text-black">
       Learn new skills online with ease</h1>
        <p className="max-w-lg text-lg sm:text-xl text-gray-700 ">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors. </p>
    <div className="flex flex-wrap gap-4">
              <button className=" bg-black text-white rounded-lg  text-sm sm:text-base px-2 py-3 ">
                Start learning now </button>
        <button className="text-sm sm:text-base px-2 py-3 border border-gray-300 text-black rounded-md hover:border-black transition-colors">
                Explore Courses</button>
            </div>
          </div>

          
          <div className=" w-full h-autorelative">
            <div className="bg-gray-100  overflow-hidden">
              <Image
                src="/abc.jpeg"  alt="PIC" className="object-cover"
                layout="responsive"   width={720}  height={900} priority />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-8  bg-[#F7F7F7] pt-20 pb-20">
          <p className="text-center sm:text-left text-2xl sm:text-3xl font-bold text-black px-2 pr-2 " >
            Trusted by 2000+ companies worldwide.
          </p>
          <div className="items-center justify-center grid grid-cols-6 sm:grid-cols-6 gap-6 pr-2 ">
<Image src="/image.png" alt="pic"width={123} height={38} />
<Image src="/image copy.png" alt="pic" width={123} height={38} />
<Image src="/image copy 2.png" alt="pic" width={123} height={38} />
<Image src="/image copy 3.png" alt="pic" width={123} height={38} />
<Image src="/image copy 4.png" alt="pic" width={123} height={38} />
<Image src="/image copy 5.png" alt="pic" width={123} height={38} />
</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;