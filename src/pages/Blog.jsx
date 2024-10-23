import React from 'react'
import livingroom from '/assets/images/livingroom2.png'
const Blog = () => {
  return (
    <div className='bg-gray-50'>
      <header className="">
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src={livingroom} // Replace with your background image path
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50 rounded-lg shadow-lg">
            <div className="text-center">
              <h1 className="text-6xl mb-4 tracking-wide text-white leading-tight font-cormorant">
                Blogs
              </h1>
              <p className="text-xl mb-6 italic font-cormorant text-white">
                Latest trends and projects for you.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Blog
