import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/RCH.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="" className="h-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block"></div>

          {/* CTA Button */}
          <div className="  hidden md:flex md:space-x-4 lg:space-x-8 ">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <Link
                to="/about"
                className="text-gray-600 hover:text-primaryRed px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-600 hover:text-primaryRed px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-600 hover:text-primaryRed px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-primaryRed px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-primaryRed px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
              <Link
                to="/industrial-prefab"
                className="text-gray-600 hover:text-primaryRed px-3 py-2 rounded-md text-sm font-medium"
              >
                Pre-fab
              </Link>
            </div>
            <Link
              to="/contact"
              className="bg-[#a5862f] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5e4c1a] transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex space-x-2 md:hidden">
            <Link
              to="/contact"
              className="bg-primaryRed text-white block px-3 py-2 rounded-full text-base font-medium hover:bg-primaryBlue transition duration-300"
            >
              Contact Us
            </Link>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full  text-gray-400 hover:text-blue-600 hover:bg-gray-100 "
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden transition-all ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="text-gray-600 hover:text-[#a5862f] block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-[#a5862f] block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-600 hover:text-[#a5862f] block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-[#a5862f] block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#a5862f] block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact Us
            </Link>
            <Link
              to="/industrial-prefab"
              className="text-gray-600 hover:text-[#a5862f] block px-3 py-2 rounded-md text-base font-medium"
            >
              Industrial Pre-fab Work
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}