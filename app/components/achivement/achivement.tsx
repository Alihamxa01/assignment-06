import React from 'react'

export default function Achievement() {
  return (
    <div id="3" className="w-auto sm:max-w-full pt-28 pb-28 px-6 sm:px-16 text-black mb-12 scroll-smooth">
      <div className="gap-4">
        <h2 className="font-bold text-3xl lg:text-5xl text-center">Our Achievements</h2>
        <p className="sm:text-lg text-center mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <br />
      <br />
      <br />

      {/* Achievement Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="font-bold text-4xl text-black">+200</h3>
          <p className="text-[16px]">Courses</p>
        </div>

        <div>
          <h3 className="font-bold text-4xl text-black">50K</h3>
          <p className="text-[16px]">Mentors</p>
        </div>

        <div>
          <h3 className="font-bold text-4xl text-black">370K</h3>
          <p className="text-[16px]">Students</p>
        </div>

        <div>
          <h3 className="font-bold text-4xl text-black">100+</h3>
          <p className="text-[16px]">Recognition</p>
        </div>
      </div>
    </div>
  )
}
