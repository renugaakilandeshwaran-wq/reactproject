import React from 'react'
import logosymbol from "../assets/logosymbol.png";
import shape1 from "../assets/shape1.svg"
import path from "../assets/path.png"
import desktop from "../assets/desktop.png"
import desktop1 from "../assets/desktop1.png"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
function About() {
    return (


        <section
            id="about"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 
            bg-[#232340]"
        >

            <div className="hidden md:flex lg:flex md:left-6  lg:left-35 md:top-[320px] absolute z-20 left-35 top-[380px] lg:mt-10 flex-col gap-8 lg:gap-12">
                <div className="flex items-center gap-5">

                    <span className="text-gray-400 ml-11">
                        2017</span>
                </div>

                <span className="ml-11 text-gray-500">2018</span>

                <span className="ml-11 text-gray-500">2019</span>

                {/* Active Year */}
                <div className="flex  items-center gap-5">
                    <div className="w-6 h-[2px] lg:ml-1 bg-white"></div>

                    <span className="text-white lg:ml-0 font-semibold">2020</span>

                    <div className="relative w-40 h-[2px] bg-gray-500">
                        <div className="absolute right-0  top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></div>
                    </div>
                </div>

                <span className="ml-11 text-gray-500">2021</span>
            </div>

            {/* <div className="md:hidden mt-10 flex flex-col "> */}
            {/* 
                <select
                    className=" text-white    w-40"
                >
                    <option className='bg-black text-white'>2017</option>
                    <option className='bg-black text-white'>2018</option>
                    <option className='bg-black text-white'>2019</option>
                    <option className='bg-black text-white' selected>2020</option>
                    <option className='bg-black text-white'>2021</option>
                </select> */}

            {/* </div> */}



            {/* Top */}
            <div className="mt-16 lg:mt-20 flex items-center gap-6">
                <img
                    src={logosymbol}
                    alt=""
                    className="hidden lg:block md:block lg:w-10"
                />

                <span className="text-gray-400 md:ml-16 lg:ml-40">01</span>

                <h2 className="text-white font-semibold lg:ml-2">
                    Who We Are
                </h2>
            </div>



            <div className="mt-8 flex flex-col lg:flex-row lg:justify-between lg:ml-30 lg:items-start ">

                {/* Heading */}


                <h1 className="relative z-20 text-white font-bold text-2xl md:ml-40 md:text-3xl lg:text-4xl leading-tight">
                    We Make Designs that
                    <br />
                    Lead and Inspire.
                </h1>

                {/* Arrows */}

                <div className="flex gap-4 lg:gap-1 mt-8 md:absolute md:right-8 md:top-30 lg:right-0 lg:top-20 z-30">

                    {/* <div className="flex  gap-4 mt-8 relative z-30 lg:mt-0"> */}
                    <button className="w-12 h-12  md:w-12 md:h-12  rounded-full border border-gray-500 flex items-center justify-center lg:mr-10 text-white">
                        <HiOutlineArrowLeft size={22} />
                    </button>

                    <button className="w-12 h-12 md:w-12 md:h-12 rounded-full bg-[#5468FF] flex items-center justify-center lg:mr-10 text-white">
                        <HiOutlineArrowRight size={22} />
                    </button>
                </div>

            </div>

            {/* Background Path */}
            <img
                src={path}
                alt="path"
                className="
    hidden md:block
    z-0
    absolute
    top-10
    left-1/2
    -translate-x-1/2
    w-[280px]
    md:w-[420px]
    opacity-30
    pointer-events-none
    
  "
            />

            {/* Background Shape */}
            <img
                src={shape1}
                alt=""
                className="
                hidden md:block 
                absolute 
                top-0 
                right-0 
                h-[70%] 
                md:h-[85%]
                lg:h-full
                object-contain
                z-10
                "
            />

            <div className="mt-16 flex justify-center relative z-10">

                {/* Mobile + Tablet */}
                <img
                    src={desktop1}
                    alt="Mobile"
                    className="block lg:hidden w-full max-w-[450px]"
                />

                {/* Desktop */}
                <img
                    src={desktop}
                    alt="Desktop"
                    className="hidden lg:block w-full max-w-[550px]"
                />

            </div>


            {/* Bottom */}
            <div className="  relative z-10 mt-20 md:ml-20 flex flex-col md:flex-row justify-between gap-10 lg:gap-16">

                <div className="max-w-lg md:max-w-lg  md:ml-20 lg:ml-60 lg:mt-0">
                    <h2 className="text-white text-l md:text-xl lg:text-2xl font-bold">
                        A design team building a curated marketplace for UI designers.
                    </h2>

                    <p className="mt-6 text-gray-400">
                        4,404 curated design resources to energize your creative workflow. We're a growing family of 334,531 designers and makers from around the world                    </p>

                    <button className="lg:mt-30 bg-blue-600 px-8  py-4 rounded-lg text-white  mt-8 ml-3 mb-10">
                        Contact Us
                    </button>
                </div>




                <div className="text-center flex flex-col items-center">

                    {/* Circle - Mobile & Tablet */}
                    <div
                        className="

        
        bg-[#323259]
        w-40 h-40
        md:w-52 md:h-52
        lg:w-0 
        lg:h-0
        rounded-full
        lg:border-0
        flex 
        flex-col
        items-center
         justify-center
         lg:mr-50
         lg:mt-30

         

        "
                    >
                        <h1 className=" 
                        
                        text-white text-6xl md:text-7xl lg:text-9xl font-bold leading-nonne">
                            28
                        </h1>

                        <p className="text-white 
                                      text-sm 
                                      md:text-lg 
                                      leading-none 
                                      mt-1text-center   
                                      items-center">
                            Biggest Branding
                        </p>
                    </div>



                </div>


            </div>

        </section >





    );
}

export default About;