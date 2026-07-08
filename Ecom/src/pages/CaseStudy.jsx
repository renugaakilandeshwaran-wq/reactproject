import desktop from "../assets/desktop.png";
import React, { useState } from "react";
import logosymbol from "../assets/logosymbol.png";
import Path from "../assets/Path.png";
import icons from "../assets/icons.png"
import bluecase from "../assets/bluecase.png";
import case1 from "../assets/case1.png";
import { HiOutlineArrowRight } from "react-icons/hi2";
import line1 from "../assets/line1.png";
import iben1 from "../assets/iben1.png";
import iben2 from "../assets/iben2.png";
import case2 from "../assets/case2.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import shape1 from "../assets/shape1.svg";
import download from "../assets/download.png";
import Slide from "../assets/Slide.png";
import case3 from "../assets/case3.png";
import apply from "../assets/apply.png";
import message from "../assets/message.png";
import rect from "../assets/rect.png";
import footericon from "../assets/footericon.png";
import apply2 from "../assets/apply2.png";
import logosymbol1 from "../assets/logosymbol1.png";
import ben3d from "../assets/ben3d.png";
import ben3 from "../assets/ben3.png";

export default function CaseStudy() {

    const [menuOpen, setMenuOpen] = useState(false);


    return (



        <div className="min-h-screen max-w-[1296px] mx-auto px-4 md:px-8 lg:px-12 py-5">
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
                        <div className="w-2 h-2 mt-5    bg-blue-600 "></div>
                    </div>

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


            <section
                id="home"
                className="max-w-[1296px] 
            relative 
            overflow-hidden 
            mx-auto 
            px-4 md:px-8 
            lg:px-5   
            bg-transparent
            pt-24
            md:pt-28
            "
            >
                <img
                    src={line1}
                    alt="line"
                    className="
          hidden
          lg:block
          absolute
          left-[20%]
          top-25
          w-[650px]
          opacity-70
          h-70
          pointer-events-none
        "
                />

                <div className=" relative z-10  flex flex-col-reverse md:flex-row items-center justify-between ">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2  text-center md:text-left">

                        <button className="
                        absolute
                        left-8
                        top-1/2
                        -translate-y-1/2
                        flex
                        items-center
                        justify-center
                        w-16
                        h-16
                        lg:-mt-75
                        rounded-full
                        bg-[#5468E7]">
                            <HiOutlineArrowRight
                                size={28}
                                className="text-white
                            
                            "
                            />
                        </button>
                        <div className="flex flex-col justify-center">
                            <p className="text-white bg-[#FFBA79] 
                         tracking-[2px]
                         rounded-[30px] 
                         
                         py-3 
                         w-fit
                         mt-5
                         mb-5
                         
                         flex
                        font-semibold">
                                Featured Project
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-3xl mt-0 md:text-4xl  lg:text-5xl font-bold leading-tight">
                                Bento <span className="text-blue-500 w-8 h-8">.</span>

                            </h1>
                        </div>
                        <p className="mt-6 text-gray-500 text-base md:text-lg leading-8 max-w-md mx-auto md:mx-0">
                            Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>

                        <div className="flex flex-cols gap-10  mt-10">
                            <div>
                                <img src={iben1}
                                    alt="" />
                                <p className="text-blue-600 mt-5">Global Digital Agency of Record</p>
                            </div>
                            <div>
                                <img src={iben2} alt="" />
                                <p className="text-blue-600 mt-5 ">5 Years of Digital Marketing Excellence </p>

                            </div>
                        </div>
                    </div>


                    <div className="w-full flex relative justify-center
                                items-center">

                        <img
                            src={bluecase}
                            alt="bluecase"

                            className="
w-full
max-w-[320px]
sm:max-w-[420px]
md:max-w-[520px]
lg:max-w-[620px]
h-auto
object-contain"

                        />


                        <img src={case1}
                            alt=""
                            className="absolute w-full max-w-[1174px] h-auto object-contain"
                        />

                    </div>


                </div>
            </section >

            {/* overview */}


            < section className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-5 py-24" >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={case2}
                            alt="Overview"
                            className="w-full max-w-[520px] h-auto"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 max-w-[500px]">
                        <p className="text-[#5468E7] uppercase tracking-[2px] font-semibold">
                            <span className="text-gray-500">01.</span> Overview
                        </p>

                        <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#232340] leading-tight">
                            The First Fully Editable, 3D Visual Design System.
                        </h2>

                        <p className="mt-8 text-[#606060] text-lg leading-8">
                            Effortlessly combine different elements to create compelling compositions that will surely help you tell a better story for your landing pages, websites, portfolios, presentations, and more in just a matter of minutes.
                        </p>
                        <p className="mt-8 text-black font-bold text-lg leading-8">
                            🔥 The number of applications and use cases is nearly endless.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5  ">

                            {/* Card 1 */}
                            <div className="bg-white rounded-[28px] p-8 w-full max-w-[220px]  shadow-sm border border-gray-100">

                                <img
                                    src={icon3}
                                    alt="icon"
                                    className="w-14 h-14"
                                />

                                <h3 className="mt-8   text-blue-500">
                                    Fully Editable
                                </h3>

                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-[28px] p-8 w-40 shadow-sm border border-gray-100">

                                <img
                                    src={icon4}
                                    alt="icon"
                                    className="w-14 h-14 "
                                />

                                <h3 className="mt-8  text-blue-500">
                                    High Resolution                        </h3>

                            </div>

                        </div>

                    </div>







                </div>




            </section >


            <section className="relative max-w-[1296px] mx-auto w-full bg-[#232340] max-h-[1966px] overflow-hidden py-24 lg:py-32">

                {/* Background Line */}
                <img
                    src={line1}
                    alt=""
                    className="absolute left-0 top-0 h-full opacity-25 pointer-events-none"
                />

                {/* Background Shape */}
                <img
                    src={shape1}
                    alt=""
                    className="absolute top-0 right-0 w-[45%] max-w-[700px] pointer-events-none"
                />

                <div className="relative z-10 max-w-[1296px] mx-auto px-6">

                    {/* Top Row */}
                    <div className="relative flex items-center justify-center">

                        {/* Logo */}
                        <div className="absolute left-0 flex items-center gap-2">
                            <img
                                src={logosymbol}
                                alt="logo"
                                className="w-10 h-10"
                            />

                        </div>

                        {/* Section Number */}
                        <p className="text-white  tracking-[3px] font-semibold">
                            <span className="text-gray-500">  02.</span> Folio Agency
                        </p>

                    </div>

                    {/* Heading */}
                    <h2 className="mt-16 text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        By the Numbers.
                    </h2>



                    {/* Statistics */}
                    <div className="relative mt-24 min-h-[650px]">

                        {/* 40+ Right Top */}
                        <div className="lg:absolute lg:right-20 lg:top-0 max-w-[420px] text-center lg:text-left mx-auto lg:mx-0">

                            <h2 className="text-[80px] md:text-[110px] font-bold text-white leading-none">
                                40<span className="text-[#5468E7]">+</span>
                            </h2>

                            <h3 className="mt-6 text-white text-2xl font-semibold">
                                Scene Objects 🤩
                            </h3>

                            <p className="mt-5 text-[#B7B7C5] leading-8">
                                Bento is the first fully editable, 3D visual design system with
                                global auto-updatable style guides built right in Figma.
                            </p>
                            <div className="mt-12 flex justify-center lg:justify-center">
                                <button className="flex items-center gap-3 text-white hover:text-[#5468E7] transition">
                                    <img
                                        src={download}
                                        alt="Download"
                                        className="w-10 h-10 object-contain"
                                    />

                                    <span className="text-lg font-medium">
                                        Download
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* 20+ Left Bottom */}
                        <div className="lg:absolute lg:left-20 lg:bottom-0 max-w-[420px] text-center lg:text-left mx-auto lg:mx-0 mt-10 lg:mt-0">

                            <h2 className="text-[80px] md:text-[110px] font-bold text-white leading-none">
                                20<span className="text-[#5468E7]">+</span>
                            </h2>

                            <h3 className="mt-6 text-white text-2xl font-semibold">
                                Pre-build Scenes 🔥
                            </h3>

                            <p className="mt-5 text-[#B7B7C5] leading-8">
                                Bento is the first fully editable, 3D visual design system with
                                global auto-updatable style guides built right in Figma.
                            </p>
                            <div className="mt-12 flex justify-center lg:justify-center">
                                <button className="flex items-center mb-10 gap-3 text-white hover:text-[#5468E7] transition">
                                    <img
                                        src={download}
                                        alt="Download"
                                        className="w-10 h-10 object-contain"
                                    />

                                    <span className="text-lg font-medium">
                                        Download
                                    </span>
                                </button>




                            </div>




                        </div>

                    </div>

                    <div className=" flex justify-center ">
                        <img src={Slide} alt="" className=" max-auto" />
                    </div>
                </div>

                {/* Center Image Section */}
                <div className="relative z-20 mt-20 mt-20 flex justify-center">
                    <img
                        src={case3}
                        alt="Case Study"
                        className="w-full max-w-[950px] lg:max-w-[750px] h-auto object-contain"
                    />
                </div>
            </section>



            <section className=" relative w-full max-w-[1296px] mx-auto bg-white py-24 md:py-32">


                <img
                    src={line1}
                    alt=""
                    className="
      absolute
      inset-0
      w-100
     lg: mt-50
     lg: ml-109
      
      object-cover
      pointer-events-none
      z-0
      opacity-80
    "
                />

                <div className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-5">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                        {/* Left */}
                        <div className="w-full lg:w-1/2">

                            <p className="text-[#5468E7] uppercase tracking-[2px] font-semibold">
                                03. Visual Identity
                            </p>

                            <h2 className="mt-6 text-[#232340] text-4xl md:text-5xl font-bold leading-tight">
                                Evolving the <br />
                                look & feel.
                            </h2>

                            <p className="mt-8 text-[#606060] leading-8 max-w-md">
                                Agency is a full-service agency, busy designing and building
                                beautiful digital products, brands and experiences.
                            </p>

                            <h1 className="mt-14 text-[72px] md:text-[96px] font-bold text-[#5468E7] leading-none">
                                80<span className="text-[40px] align-top">+</span>
                            </h1>

                            <p className="mt-2 text-[#232340] font-semibold uppercase tracking-[3px]">
                                UI Elements
                            </p>

                        </div>

                        {/* Right */}
                        <div className="w-full lg:w-[430px]">

                            <div className="bg-white rounded-[30px] shadow-xl p-8">

                                <div className="space-y-8">

                                    <div className="flex items-center gap-5">
                                        <img src={icon2} alt="" className="w-14 h-14" />
                                        <p className="font-semibold text-[#232340]">
                                            Auto-updatable Global Styleguide
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <img src={icon3} alt="" className="w-14 h-14" />
                                        <p className="font-semibold text-[#232340]">
                                            The number of acquisitions and user consistency
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-5">
                                        <img src={icon4} alt="" className="w-14 h-14" />
                                        <p className="font-semibold text-[#232340]">
                                            Auto-updatable Global Styleguide
                                        </p>
                                    </div>

                                </div>

                                <button className="mt-10 w-full bg-[#5468E7] text-white py-4 rounded-xl font-semibold hover:bg-[#4357d8] duration-300">
                                    Contact Us                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className=" max-w-[1296px]
            relative
            overflow-hidden
            mx-auto
            px-4 md:px-8
            lg:px-5
            bg-transparent
            pt-24
            md:pt-28
            ">


                <div className="relative mt-40">

                    {/* Left Background Card */}
                    <div
                        className="
        hidden lg:block
        absolute
        -left-12
        top-12
        w-[180px]
        h-[520px]
        bg-[#D8EDFB]
        z-0">
                    </div>

                    {/* Right Background Image */}
                    <img
                        src={apply2}
                        alt="Apply Background"
                        className="
    hidden lg:block
    absolute
    right-0
    -top-5
overflow-visible
    w-[290px]
    h-[520px]

    object-cover
    rounded-[30px]
    z-20
  "
                    />

                    {/* Main Blue Card */}
                    <div
                        className="
        relative
        bg-[#5468E7]
        rounded-[40px]

        px-8
        md:px-12
        lg:px-10

        py-12
        lg:py-20

        flex
        flex-col
        lg:flex-row

        items-center
        justify-left

        overflow-hidden
        z-10
    "
                    >


                        {/* Left Image */}
                        <div className="flex justify-center w-full lg:w-1/2">

                            <img
                                src={logosymbol1}
                                alt="Logo"
                                className="hidden md:blockw w-5 h-5 sm:mt-5 "
                            />


                            <img
                                src={apply}
                                alt="Apply"
                                className="
                w-[260px]
                sm:w-[340px]
                md:w-[430px]
                lg:w-[520px]
                h-auto
            "
                            />




                        </div>

                        {/* Right Content */}
                        <div
                            className="
            w-full
            lg:w-100

            text-center
            lg:text-left

            mt-12
            lg:mt-0

            text-white
        "
                        >

                            <p className="text-lg font-medium">
                                05.Call to action
                            </p>

                            <h2
                                className="
                mt-6

                text-4xl
                md:text-4xl
                lg:text-5xl
lg:text-left
z-30
                font-bold
                leading-tight
            "
                            >
                                We Are Looking  for Talented Designers
                            </h2>

                            <button
                                className="
                mt-10

                bg-white
                text-[#5468E7]

                px-10
                py-4

                rounded-xl

                font-semibold
                text-lg

                hover:scale-105
                duration-300
            "
                            >
                                Apply Now
                            </button>

                        </div>

                    </div>
                </div>



            </section>


            <section className="w-full bg-white py-20 md:py-28 lg:py-32">

                <div className="max-w-[1296px] mx-auto px-5 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                        {/* Left */}
                        <div className="max-w-2xl">

                            <p className="text-[#5468E7] uppercase tracking-[2px] font-semibold text-sm">
                                04. You may also like
                            </p>

                            <h2 className="mt-4 text-[#232340] text-3xl sm:text-4xl lg:text-5xl font-bold">
                                Recent Works
                            </h2>

                            <p className="mt-6 text-[#606060] leading-8">
                                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                            </p>

                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => navigate("/case-study")}
                            className="
          w-16
          h-16
          rounded-full
          bg-[#5468E7]
          flex
          items-center
          justify-center
          shrink-0
          hover:scale-105
          duration-300
        "
                        >
                            <HiOutlineArrowRight
                                size={28}
                                className="text-white"
                            />
                        </button>

                    </div>

                    {/* Cards */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">

                        {/* Card 1 */}

                        <div
                            className="group cursor-pointer"
                            onClick={() => navigate("/case-study")}
                        >

                            <div className="relative overflow-hidden rounded-[28px]
                             
        bg-[#FFCE79]
        

        w-[300px]
        h-[300px]

        sm:w-[360px]
        sm:h-[360px]

        md:w-[420px]
        md:h-[420px]

        lg:w-[480px]
        lg:h-[480px]

        flex
        items-end
        justify-center

        
                            ">

                                <img
                                    src={ben3d}
                                    alt="Bento Illustration"
                                    className="w-full h-auto transition duration-500 group-hover:scale-105"
                                />

                                <span
                                    className="
              absolute
              top-6
              left-6
              bg-[#9A97ED]
              text-white
              text-sm
              font-medium
              px-5
              py-2
              rounded-full
            "
                                >
                                    Featured Project
                                </span>

                            </div>

                            <h3 className="mt-8 text-2xl lg:text-3xl font-bold text-[#232340]">
                                Bento 3D Illustration
                            </h3>

                            <p className="mt-5 text-[#606060] leading-8">
                                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                            </p>

                        </div>

                        {/* Card 2 */}

                        <div
                            className="group cursor-pointer"
                            onClick={() => navigate("/case-study")}
                        >

                            <div className="relative overflow-hidden rounded-[28px]
                             
        bg-[#CFE8FF]
        rounded-[32px]

        w-[300px]
        h-[300px]

        sm:w-[360px]
        sm:h-[360px]

        md:w-[420px]
        md:h-[420px]

        lg:w-[480px]
        lg:h-[480px]

        flex
        items-end
        justify-center

        
                            
                            ">

                                <img
                                    src={ben3}
                                    alt="Bento Vol.3"
                                    className="w-full h-auto transition duration-500 group-hover:scale-105"
                                />

                            </div>

                            <h3 className="mt-8 text-2xl lg:text-3xl font-bold text-[#232340]">
                                Bento Vol.3
                            </h3>

                            <p className="mt-5 text-[#606060] leading-8">
                                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            <section
                id="footer"
                className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-12 py-20"
            >
                {/* Rectangle Container */}
                <div
                    className="
    relative

    w-full

    min-h-[650px]
    sm:min-h-[750px]
    md:min-h-[850px]
    lg:min-h-[720px]

    rounded-[32px]
    bg-cover
    bg-center
    bg-no-repeat

    px-6
    py-8

    md:px-10
    md:py-10

    lg:px-16
    lg:py-14
  "
                    style={{ backgroundImage: `url(${rect})` }}
                >
                    {/* Background Line */}
                    <img
                        src={line1}
                        alt="line"
                        className="
    absolute

    top-0
    left-1/2
    -translate-x-1/2

    w-[80%]
    md:w-[70%]
    lg:w-[60%]

    h-auto
    opacity-40

    pointer-events-none
    select-none

    z-0
  "
                    />
                    {/* Background Rectangle */}
                    <img
                        src={rect}
                        alt="Rectangle"
                        className="w-full h-auto object-contain"
                    />

                    {/* All Content Goes Inside */}
                    <div
                        className="
    absolute
    inset-0

    flex
    flex-col

    justify-between

    px-6
    py-6

    md:px-10
    md:py-10

    lg:px-16
    lg:py-14
  "
                    >

                        {/* Top */}
                        <div className="flex flex-col items-center">

                            <img
                                src={logosymbol1}
                                alt="Logo"
                                className="
        w-6
        sm:w-7
        md:w-8
        lg:w-10
      "
                            />

                            <p
                                className="
        mt-3
        text-white
        text-sm
        sm:text-base
        md:text-lg
      "
                            >
                                👋 Say hello
                            </p>

                            <h2
                                className="
        mt-6

        max-w-4xl

        text-center
        text-white

        font-bold

        text-xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl

        leading-snug
      "
                            >
                                A design team building a curated marketplace for UI designers.
                            </h2>

                        </div>

                        {/* Bottom */}
                        <div
                            className="
      mt-4

      flex
      flex-col
      md:flex-row

      items-center
      justify-between

      gap-10    "
                        >

                            {/* Left */}
                            <h3
                                className="
        text-white

        text-2xl
        md:text-4xl
        lg:text-5xl

        font-bold

        text-center
        md:text-left
      "
                            >
                                Let's talk <br />
                                about your <br />
                                next project
                            </h3>

                            {/* Right */}
                            <div
                                className="
        flex
        flex-col

        items-center
        md:items-start
      "
                            >

                                {/* Green Icon */}
                                <div
                                    className="
          w-20
          h-20
          mb-5">

                                    <img src={message} alt="" />
                                </div>

                                <p
                                    className="
          text-white

          text-lg
          md:text-xl

          text-center
          md:text-left
        "
                                >
                                    Invest in your designs <br />
                                    today!
                                </p>

                                <button
                                    className="
          mt-6

          w-12
          h-12

          rounded-full

          border
          border-white

          flex
          items-center
          justify-center

          text-white
          text-2xl
        "
                                >
                                    →
                                </button>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="flex relative flex-col items-center text-center">
                    <img
                        src={line1}
                        alt="line"
                        className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2

      w-[90%]
      md:w-[75%]
      lg:w-[60%]

      opacity-20
      pointer-events-none
      z-0
    "
                    />
                    {/* Logo Row */}
                    <div className="flex items-center mt-10 gap-2">

                        <img
                            src={logosymbol}
                            alt="Logo"
                            className="w-8 sm:w-10 md:w-12 lg:w-10 h-auto"
                        />

                        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
                            folio
                        </h1>

                        <div className="w-2 h-2 mt-3 bg-blue-600"></div>

                    </div>

                    {/* Paragraph */}
                    <p
                        className="
      mt-6
      max-w-2xl
      text-center
      text-gray-500
      text-sm
      sm:text-base
      leading-7
    "
                    >
                        Agency is a full-service agency, busy designing and building
                        beautiful digital products, brands, and experiences.
                    </p>

                    {/* Menu */}
                    <ul
                        className="
      mt-8
      flex
      flex-wrap
      justify-center
      gap-6
      lg:gap-10

      text-base
      font-medium
    "
                    >
                        <li>
                            <a href="#about" className="hover:text-blue-500">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#works" className="hover:text-blue-500">
                                Works
                            </a>
                        </li>

                        <li>
                            <a href="#services" className="hover:text-blue-500">
                                Services
                            </a>
                        </li>

                        <li>
                            <a href="#jobs" className="hover:text-blue-500">
                                Jobs
                            </a>
                        </li>
                    </ul>

                </div>


                {/* Bottom Footer */}
                <div
                    className="
    mt-16
    pt-8
    border-t border-gray-300

    flex
    flex-col
    md:flex-row

    items-center
    justify-between

    gap-6
  "
                >

                    {/* Copyright */}
                    <p
                        className="
      text-[#232340]
      text-sm
      md:text-base
    "
                    >
                        © 2020, UI8 LLC.
                    </p>

                    {/* Follow Us */}
                    <div
                        className="
      flex
      items-center
      gap-5
    "
                    >

                        <a
                            href="#"
                            className="
        text-[#232340]
        hover:text-[#5468E7]
        font-medium
        duration-300
      "
                        >
                            Follow us
                        </a>

                        <img
                            src={footericon}
                            alt="Social Icons"
                            className="
        w-[120px]
        sm:w-[140px]
        md:w-[160px]
        h-auto
      "
                        />

                    </div>

                </div>

            </section>


        </div >
    );
}