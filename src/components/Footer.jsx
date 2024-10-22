import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, LocateIcon, MapPin, Phone } from "lucide-react";
import logo from "../assets/images/RCH.png";
export default function Footer() {
    return (
        <footer className="bg-white">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="ml-0 md:ml-16 col-span-1 md:col-span-2">
                        <img src={logo} alt="" className="h-24" />
                        <p className="text-primaryBlue text-2xl mt-3">
                            Arch Space Interio 
                        </p>
                        <p className="text-primaryBlue mb-4">
                            Arch Space Interio Tagline.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-primaryRed hover:text-blue-600">
                                <Facebook size={24} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-primaryRed hover:text-blue-600">
                                <Twitter size={24} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-primaryRed hover:text-blue-600">
                                <Instagram size={24} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-primaryRed hover:text-blue-600">
                                <Linkedin size={24} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/portfolio"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-600 hover:text-blue-600">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/industrial-prefab"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    Industrial Pre-fab Work
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 ">
                            Contact Us
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center ">
                                <Mail className="mr-2 text-primaryRed" />
                                <a
                                    to="mailto:info@yourcompany.com"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    info@yourcompany.com
                                </a>
                            </li>
                            <li className="text-gray-600 flex items-center ">
                                <MapPin className="mr-2 text-primaryRed"/>
                                123 Industrial Park Rd
                            </li>
                            <li className=" text-gray-600 ml-8">Anytown, ST 12345</li>
                            <li className="flex items-center text-gray-600 ">
                                <Phone className="mr-2 text-primaryRed"/>
                                 (555) 123-4567</li>
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
