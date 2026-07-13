import React, { useState } from "react";
import { Link } from "react-router-dom";
import logow from "../assets/logow.png";
import logob from "../assets/logob.png";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-white md:bg-transparent">
            <div className="max-w-[1296px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-6">

                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <img
                        src={logow}
                        alt="Logo"
                        className="hidden md:block w-36"
                    />

                    <img
                        src={logob}
                        alt="Logo"
                        className="block md:hidden w-32"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-1 justify-center items-center gap-8 text-white text-sm font-medium">
                    <li><Link to="/#aboutus" className="hover:text-[#FA2A20]">ABOUT US</Link></li>
                    <li><Link to="/#facilities" className="hover:text-[#FA2A20]">FACILITIES</Link></li>
                    <li><Link to="/#bmi" className="hover:text-[#FA2A20]">BMI</Link></li>
                    <li><Link to="/#schedule" className="hover:text-[#FA2A20]">SCHEDULE</Link></li>
                    <li><Link to="/#reviews" className="hover:text-[#FA2A20]">REVIEWS</Link></li>
                    <li><Link to="/#coaches" className="hover:text-[#FA2A20]">COACHES</Link></li>
                    <li><Link to="/#blog" className="hover:text-[#FA2A20]">BLOG</Link></li>
                    <li><Link to="/#gallery" className="hover:text-[#FA2A20]">GALLERY</Link></li>
                </ul>

                {/* Join Now */}
                <Link
                    to="/#joinnow"
                    className="hidden md:block bg-[#FA2A20] text-white px-8 py-3 font-semibold hover:bg-red-600 transition"
                >
                    JOIN NOW
                </Link>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden text-4xl text-black"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-white z-[999] md:hidden max-h-[500px] flex flex-col">

                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-6 right-6 text-4xl"
                    >
                        ✕
                    </button>

                    <div className="flex flex-col  px-8 text-lg font-medium text-center">

                        <Link
                            to="/#aboutus"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            ABOUT US
                        </Link>

                        <Link
                            to="/#facilities"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            FACILITIES
                        </Link>

                        <Link
                            to="/#bmi"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            BMI
                        </Link>

                        <Link
                            to="/#schedule"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            SCHEDULE
                        </Link>

                        <Link
                            to="/#reviews"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            REVIEWS
                        </Link>

                        <Link
                            to="/#coaches"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            COACHES
                        </Link>

                        <Link
                            to="/#blog"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            BLOG
                        </Link>

                        <Link
                            to="/#gallery"
                            onClick={() => setMenuOpen(false)}
                            className="py-2"
                        >
                            GALLERY
                        </Link>

                        <Link
                            to="/#joinnow"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 bg-[#FA2A20] text-white py-2 text-center font-semibold rounded"
                        >
                            JOIN NOW
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}