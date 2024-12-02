
import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGlobe, FaStar, FaCircle, FaArrowLeft, FaArrowRight} from 'react-icons/fa';

export default function Team() {
  return (
    <div className="bg-[#f7f7f7] justify-center items-center max-w-full text-center pt-28 pb-28 pr-16 pl-16 ">

<h2 className="text-5xl font-bold">Our team</h2>
<p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>


{/* team1 */}
<div className=" grid grid-cols-1 sm:grid-cols-3 grid-rows-2  text-center justify-center items-center mt-20 ">
<div>
  <Image
  src="/22.png"
  width={80}
  height={80}
  alt="team1"
  className="ml-28 sm:ml-40"
  />

<h1 className="text-xl font-semibold">James Nduku</h1 >
<p className="text-lg">Marketing Coordinator
</p>
<div className=" flex space-x-5 items-center justify-center  mt-7 mb-7">

  <FaLinkedin
  width={24}
  height={24}
  />
 <FaTwitter
  width={24}
  height={24}
  />
   <FaGlobe
  width={24}
  height={24}
  />
</div>
</div>

{/* team2 */}
<div>
  <Image
  src="/66.png"
  width={80}
  height={80}
  alt="team1"
  className="ml-28 sm:ml-40"
  />

<h1 className="text-xl font-semibold">Joseph Munyambu</h1 >
<p className="text-lg">Nursing Assistant
</p>
<div className=" flex space-x-5 items-center justify-center  mt-7 mb-7">

  <FaLinkedin
  width={24}
  height={24}
  />
 <FaTwitter
  width={24}
  height={24}
  />
   <FaGlobe
  width={24}
  height={24}
  />
</div>
</div>

{/* team3 */}

{/* team2 */}
<div>
  <Image
  src="/11.png"
  width={80}
  height={80}
  alt="team1"
  className="ml-28 sm:ml-40"
  />

<h1 className="text-xl font-semibold">Joseph Ngumbau</h1 >
<p className="text-lg">Medical Assistant
</p>
<div className=" flex space-x-5 items-center justify-center  mt-7">

  <FaLinkedin
  width={24}
  height={24}
  />
 <FaTwitter
  width={24}
  height={24}
  />
   <FaGlobe
  width={24}
  height={24}
  />
</div>
</div>

{/* team4 */}

<div className="hidden sm:block">
  <Image
  src="/44.png"
  width={80}
  height={80}
  alt="team1"
  className="ml-28 sm:ml-40"
  />

<h1 className="text-xl font-semibold">Erick Kipkemboi</h1 >
<p className="text-lg">Web Designer
</p>
<div className=" flex space-x-5 items-center justify-center  mt-7">

  <FaLinkedin
  width={24}
  height={24}
  />
 <FaTwitter
  width={24}
  height={24}
  />
   <FaGlobe
  width={24}
  height={24}
  />
</div>
</div>

{/* team5 */}

<div className="hidden sm:block">
  <Image
  src="/55.png"
  width={80}
  height={80}
  alt="team1"
  className="ml-28 sm:ml-40"
  />

<h1 className="text-xl font-semibold">Stephen Kerubo</h1 >
<p className="text-lg">President of Sales
</p>
<div className=" flex space-x-5 items-center justify-center  mt-7">

  <FaLinkedin
  width={24}
  height={24}
  />
 <FaTwitter
  width={24}
  height={24}
  />
   <FaGlobe
  width={24}
  height={24}
  />
</div>
</div>

{/* team6 */}

<div className=" hidden sm:block ">
  <Image
  src="/33.png"
  width={80}
  height={80}
  alt="team1"
  className="ml-28 sm:ml-40"
  />

<h1 className="text-xl font-semibold">John Leboo</h1 >
<p className="text-lg">Dog Trainer
</p>
<div className=" flex space-x-5 items-center justify-center  mt-7">

  <FaLinkedin
  width={24}
  height={24}
  />
 <FaTwitter
  width={24}
  height={24}
  />
   <FaGlobe
  width={24}
  height={24}
  />
</div>
</div>
{/* button */}


</div>

{/* Customer testimonials */}

<div id="5" className="items-start mt-24">
<h2 className="text-left items-start text-5xl font-bold">Customer testimonials</h2>
<p  className="text-lg  text-left items-start mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>

{/* box*/}
<div className="justify-center items-center  flex flex-col  space-y-4 mt-10 sm:flex-row sm:space-x-4 sm:space-y-0 ">
<div className="border border-black text-left p-10">
<p >
  <span className="gap-1 flex">
    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> 
    </span>
     <br/>
     
      Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Suspendisse varius enim in eros<br/> elementum tristique. Duis cursus, mi<br/> quis viverra ornare.
     
     <br/><br/>
     </p> 
     {/* img */}
<div className="flex space-x-4">
<Image
src="/11.png"
alt="11"
width={56}
height={56}
className="rounded-full"
/>
     <span className="text-lg font-semibold">James Nduku<br/>
     <span className="font-normal text-sm block">Software Developer</span>
     </span>
</div>
 
  </div>
     


<div className="border border-black text-left p-10 ">
 <p >
  <span className="gap-1 flex">
    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> 
    </span>
     <br/>
     lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Suspendisse varius enim in eros<br/> elementum tristique. Duis cursus, mi<br/> quis viverra ornare.
     <br/><br/>
     </p>
      {/* img */}
      <div className="flex space-x-4">
<Image
src="/22.png"
alt="11"
width={56}
height={56}
className="rounded-full"
/>
     <span className="text-lg font-semibold">Erick Kipkemboi<br/>
     <span className="font-normal text-sm block">Scrum Master</span>
     </span>

</div>
 </div>
     


     <div className="border border-black text-left p-10 ">
     <p >
  <span className="gap-1 flex">
    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> 
    </span>
     <br/> 
     
     lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Suspendisse varius enim in eros<br/> elementum tristique. Duis cursus, mi<br/> quis viverra ornare.
     <br/><br/>
     
     </p> 
      {/* img */}
      <div className="flex space-x-4">
<Image
src="/33.png"
alt="11"
width={56}
height={56}
className="rounded-full"
/>
     <span className="text-lg font-semibold">Stephen Kerubo<br/>
     <span className="font-normal text-sm block">UI/UX Designer</span>
     </span>
</div>

     </div>


</div>

<div className=" flex space-x-2 items-center  ml-15 sm:ml-24 mt-10  ">
  <FaCircle 
size={5}

/>
<FaCircle 
size={5}
    className="text-gray-500"
/>

<FaCircle 
size={5}
     className="text-gray-500"
/>

<FaCircle 
size={5}
     className="text-gray-500"
/>

<FaCircle 
size={5}
     className="text-gray-500"
/>

</div>
{/* arrows */}
<div className="ml-auto lg:mr-16 flex justify-end gap-4">
  <FaArrowLeft
 size={32}
  className="border rounded-full p-2 text-black border-black "/>
  <FaArrowRight
 size={32}
  className="border rounded-full p-2 text-black border-black"/>
</div>


</div>
  )
}
