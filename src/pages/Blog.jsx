import React from 'react';
import livingroom from '/assets/images/Commercial Work/10 (1).jpg';
import blogs from '../blog.json';
import nothing from '/assets/images/nothing.webp'
import { Link } from 'react-router-dom';
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
      {/* <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-5xl font-cormorant  mb-2">No Blogs Yet</h2>
        <p className="text-gray-500 mb-6">Stay tuned! We are working on some exciting content for you.</p>
        <img src={nothing} alt="No Blogs Illustration" className="w-1/2 md:w-1/3 lg:w-1/4" />
      </div> */}

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <Link to={`${blog.id}`} key={index} className="shadow-lg h-[60vh] flex flex-col rounded-lg overflow-hidden transition-transform transform hover:scale-105 ">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
