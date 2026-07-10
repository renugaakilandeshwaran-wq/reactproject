import React from "react";
import logow from "../assets/logow.png";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import insta from "../assets/insta.png";
import linkin from "../assets/linkin.png";


export default function Footer() {
    return (
        <section
            id="footer"
            className="
                   scroll-mt-24
                    relative
                    overflow-hidden
w-full                   mx-auto px-4 md:px-8
                     lg:px-12 mt-10
                  " >
            <footer className="bg-[#121212] py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Top */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                        {/* Logo */}
                        <img src={logow} alt="logo" className="w-40" />

                        {/* Text */}
                        <p className="text-white uppercase text-sm tracking-wide">
                            Subscribe To Our Newsletter
                        </p>

                        {/* Email Box */}
                        <div className="bg-[#212529] w-full lg:w-[380px] h-18 px-5 flex items-center justify-between">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL"
                                className="bg-transparent outline-none text-white placeholder:text-white font-semibold w-full"
                            />

                            <span className="text-white text-2xl">→</span>
                        </div>

                    </div>

                    {/* Line */}
                    <div className="border-t border-gray-700 my-10"></div>

                    {/* Bottom */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                        {/* Left */}
                        <p className="text-gray-300 text-sm">
                            © Beast 2019 All Rights reserved.
                        </p>

                        {/* Center */}
                        <div className="flex items-center gap-5 text-white text-sm font-semibold">
                            <span>TERMS & CONDITIONS</span>

                            <div className="w-px h-5 bg-gray-500"></div>

                            <span>PRIVACY POLICY</span>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-6">
                            <img src={fb} alt="" className="w-6 h-6 cursor-pointer" />
                            <img src={x} alt="" className="w-6 h-6 cursor-pointer border-1 bg-white" />
                            <img src={insta} alt="" className="w-6 h-6 cursor-pointer" />
                            <img src={linkin} alt="" className="w-6 h-6 cursor-pointer border-1  bg-white " />
                        </div>

                    </div>

                </div>
            </footer>
        </section>
    );
}