// import React from 'react'
import { Mail, Phone, Globe, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-5xl  mb-8 font-cormorant">Get in touch</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 bg-secondaryBlack p-8 rounded-3xl flex flex-col justify-evenly space-y-6 md:space-y-0">
          {/* <div className="space-y-4"> */}
          <div className="flex items-center space-x-3">
            <Mail className="text-primaryRed" />
            <span>info@yourdomain.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-primaryRed" />
            <span>+1 (378) 400-1234</span>
          </div>
          <div className="flex items-center space-x-3">
            <Globe className="text-primaryRed" />
            <span>www.yourdomain.com</span>
          </div>
          {/* </div> */}
          <div className="mt-8 flex space-x-10">
            <a href="#" className="text-primaryRed hover:text-black">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-primaryRed hover:text-black">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-primaryRed hover:text-black">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-primaryRed hover:text-black">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border bg-primaryBlack border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border bg-primaryBlack border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border bg-primaryBlack border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border bg-primaryBlack border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-3 py-2 border bg-primaryBlack border-b-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Hello, I am interested in.."
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-primaryRed text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300"
              >
                Send Now
                <ArrowRight className="inline-block ml-2" size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}