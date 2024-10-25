import React from 'react';
import livingroom from '/assets/images/livingroom2.png';
import blogs from '../blog.json';

const Blog = () => {
  return (
    <div>
      <header>
        <div className="relative flex items-center justify-center h-[50vh] bg-gray-100">
          <img
            src={livingroom}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
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
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="shadow-lg h-[60vh] flex flex-col rounded-lg overflow-hidden transition-transform transform hover:scale-105 ">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="h-2/3 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-2xl font-semibold mb-2 font-cormorant">{blog.title}</h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <div className="text-sm text-gray-500">
                  <p>{blog.date}</p>
                  <p className="italic">{blog.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
