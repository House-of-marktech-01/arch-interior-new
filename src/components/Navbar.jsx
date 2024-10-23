import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/assets/images/RCH.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all font-cormorant duration-300 ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block"></div>

          {/* CTA Button */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <Link
                to="/about"
                className="text-gray-200 hover:text-primaryRed px-3 py-2 rounded-md text-xl font-medium transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-200 hover:text-primaryRed px-3 py-2 rounded-md text-xl font-medium transition duration-300"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-200 hover:text-primaryRed px-3 py-2 rounded-md text-xl font-medium transition duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="text-gray-200 hover:text-primaryRed px-3 py-2 rounded-md text-xl font-medium transition duration-300"
              >
                Blog
              </Link>
              <Link
                to="/industrial-prefab"
                className="text-gray-200 hover:text-primaryRed px-3 py-2 rounded-md text-xl font-medium transition duration-300"
              >
                Pre-fab
              </Link>
            </div>
            <Link
              to="/contact"
              className="bg-primaryRed text-white px-4 py-2 rounded-full text-xl font-medium hover:bg-[#ffffff] hover:text-black transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex space-x-2 md:hidden">
            <Link
              to="/contact"
              className="bg-primaryRed text-white block px-3 py-2 rounded-full text-base font-medium hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </Link>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-primaryRed hover:bg-gray-800"
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
        <div className="md:hidden absolute z-20 shadow-lg rounded-lg top-[60px] right-0 transition-all ease-in-out bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="text-gray-200 hover:text-primaryRed block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-200 hover:text-primaryRed block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-200 hover:text-primaryRed block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className="text-gray-200 hover:text-primaryRed block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/industrial-prefab"
              className="text-gray-200 hover:text-primaryRed block px-3 py-2 rounded-md text-base font-medium transition duration-300"
            >
              Industrial Pre-fab Work
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
