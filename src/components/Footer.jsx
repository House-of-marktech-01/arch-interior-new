import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "/assets/images/RCH.png";
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-primaryBlack ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="ml-0 md:ml-16 col-span-1 md:col-span-2">
            <img src={logo} alt="" className="h-24" />
            <p className=" text-3xl mt-3 font-cormorant">Arch Space Interio</p>
            <p className=" mb-4 text-blue-700">
              Where Dimension Take Shapes...
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/archspaceinterio21"
                className="text-primaryRed hover:text-blue-600"
              >
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/designer-yash227989/"
                className="text-primaryRed hover:text-blue-600"
              >
                <FaLinkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/archspace_interio/"
                className="text-primaryRed hover:text-blue-600"
              >
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.behance.net/asi21"
                className="text-primaryRed hover:text-blue-600"
              >
                <FaBehance size={24} />
                <span className="sr-only">Behance</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold  mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className=" hover:text-primaryRed">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primaryRed">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primaryRed">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primaryRed">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h3 className="text-lg font-bold  mb-4 ">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center ">
                <Mail className="mr-2 text-primaryRed" />
                <a
                  href="mailto:archspaceinterio21@gmail.com"
                  className="hover:text-primaryRed"
                >
                  archspaceinterio21@gmail.com
                </a>
              </li>
              <li className=" flex items-center ">
                <MapPin className="mr-2 text-primaryRed" />
                Alwar, India
              </li>
              
              <li className="flex items-center ">
                <Phone className="mr-2 text-primaryRed" />
                +91 9999167989
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className=" flex justify-between mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Arch Space Interio. All rights
            reserved.
          </p>
          <p className="text-center text-gray-500 text-sm">
            Designed and Developed by{" "}
            <Link
              to="https://www.houseofmarktech.com/"
              className="text-primaryRed"
            >
              House Of Marktech
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
