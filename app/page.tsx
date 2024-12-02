import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/footer/footer';
import Hero from  './components/Heroo/Heroo'
import Category from './components/Category/Category';
import Achivement from './components/achivement/achivement';
import Course from './components/Course/Course';
import Team from './components/Team/Team';

import Image from 'next/image';

const web = () => {
  return (
    <div>
    <Header/>


{/* Navbar */}
    <div className="bg-[#F7F7F7]  text-black mt-2  border-b-2 border-gray-300 h-[72px] scroll-smooth ">

      <div className="flex items-center justify-between px-6 py-4 md:px-10">

        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[32px] flex items-center">

          </div>
          <Image 
          src="/77.png"
          alt="lgo"
          width={32}
          height={30}
          />
          <h1 className="text-xl font-bold font-inter">Ddsgnr</h1>
        </div>

 
        <div className="hidden md:flex items-center justify-between w-full bg-white ml-40 ">
          <ul className="flex gap-16 ml-auto">
            <li> <a href="#" className="hover:text-gray-700 hover:underline hover:underline-offset-8 ">
                Home   </a>
      </li> <li> 



        <a href="#1"  className="hover:text-gray-700 hover:underline hover:underline-offset-8">
       Courses   </a>
       
       
       
       </li>
  <li><a href="#2" className="hover:text-gray-700 hover:underline hover:underline-offset-8 ">
     Services </a>
            </li>
   <li>
              <a href="#3" target="_self" className="hover:text-gray-700 hover:underline hover:underline-offset-8">
                Achievement  </a>
            </li>
            <li>   <a href="#4" className="hover:text-gray-700 hover:underline hover:underline-offset-8">
            About Us
          </a>
  </li>     <li>
              <a href="#5" className="hover:text-gray-700 hover:underline hover:underline-offset-8">
             Testimonial  </a>
            </li>  </ul>
          <div className="flex gap-4 ml-6">
          <button className="px-4 py-2   text-gray-900 border border-gray-400 rounded hover:bg-gray-600">
              Login
      </button>
            <button className="px-4 py-2 bg-black text-white rounded">
        Sign Up
            </button>
   </div>
        </div>
     </div>
    </div>
  {/* Hero */}
<Hero/>
<Category/>
<Achivement/>
<Course/>
<Team/>

    <Footer/>

    </div>
  );
};

export default web
