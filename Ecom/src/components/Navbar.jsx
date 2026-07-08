import React, { useState } from "react";
import logosymbol from "../assets/logosymbol.png";
import Path from "../assets/Path.png";
import icons from "../assets/icons.png"




export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50  shadow-md bg-white">
                <div className="max-w-[1296px] mx-auto flex items-center 
                justify-between px-4 md:px-8 lg:px-12 py-5">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src={logosymbol}
                            alt="Logo"
                            className="w-8 sm:w-10 md:w-12 lg:w-14 h-auto"
                        />
                        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                            folio
                        </h1>

                        {/* Blue Square */}
                        <div className="w-2 h-2 bg-blue-600 self-end mb-2"></div>                    </div>

                    {/* Desktop + Tablet Menu */}
                    <ul className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#works" className="hover:text-blue-500">Works</a></li>
                        <li><a href="#services" className="hover:text-blue-500">Services</a></li>
                        <li className="flex items-start gap-1">
                            <a href="#jobs" className="hover:text-blue-500">
                                Jobs
                            </a>

                            <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center -mt-2 justify-center">
                                2
                            </span>
                        </li>
                        <li className="ml-10">
                            <a
                                href="#contact"
                                className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition"
                            >
                                Contact Us
                            </a>
                        </li>                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-3xl"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}

            {menuOpen && (
                <div className="fixed inset-0 bg-[#0A1F44] z-50 md:hidden">

                    <img
                        src={Path}
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
                    />

                    <div className="relative z-10">

                        {/* <div className="flex items-center gap-3"> */}
                        <div className="flex justify-between items-center px-6 pt-8">

                            <div className="flex items-center gap-2">
                                <img
                                    src={logosymbol}
                                    alt="Logo"
                                    className="w-8 sm:w-10  h-auto"
                                />

                                <h1 className="font-bold text-white text-xl sm:text-2xl">
                                    folio
                                </h1>

                                {/* Blue Square */}

                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 mt-3"></div>
                            </div>

                            <button
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-3xl sm:text-4xl "
                            >
                                ✕
                            </button>
                        </div>

                        <ul className="flex flex-col gap-8 mt-16 px-8 text-white text-2xl ">
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                            <li><a href="#works" onClick={() => setMenuOpen(false)}>Works</a></li>
                            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
                            <li><a href="#jobs" onClick={() => setMenuOpen(false)}>Jobs</a></li>
                            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
                        </ul>
                        <div className="absolute -bottom-30 left-30  -translate-x-1/2">
                            <img
                                src={icons}
                                alt="Social Icons"
                                className="w-40 h-auto"
                            />
                        </div>
                    </div>

                </div>
            )}
        </>

    );
}