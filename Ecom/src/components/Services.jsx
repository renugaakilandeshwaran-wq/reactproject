import React from "react";
import logosymbol1 from "../assets/logosymbol1.png";
import path1 from "../assets/path1.png"
import { HiOutlineArrowRight } from "react-icons/hi";
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
import phone from "../assets/phone.png"
import circle from "../assets/circle.png"
import logosymbol from "../assets/logosymbol.png";


function Services() {
    return (
        <section
            id="services"
            className="relative 
            max-w-[1296px] mx-auto 
            px-4 md:px-8 lg:px-12 py-20 
            bg-[#EDE5F081]
             relative isolate
             overflow-hidden
             w-full 
             min-h-screen
                scroll-mt-40"

        >
            <div className="div">

                {/* Background */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-cover opacity-20"
                    style={{
                        backgroundImage: `url(${path1})`,
                        backgroundSize: "85%",
                    }}
                ></div>



                {/* Top Label */}
                <div className="flex items-center gap-5">

                    <img
                        src={logosymbol1}
                        alt="Logo"
                        className="hidden md:block w-10"
                    />

                    <span className="text-[#5468E7]  text-sm md:text-base">
                        02
                    </span>

                    <h2 className="font-semibold text-[#5468E7] text-sm md:text-base">
                        What We Do
                    </h2>

                </div>

                {/* Heading */}

                <div className="mt-8">

                    <h1
                        className="
          text-4xl
          md:text-5xl
          lg:text-5xl
          font-bold
          text-[#232340]
          leading-tight
          max-w-xl
          lg:pb-[50px]
          md:pb-[40px]
        "
                    >
                        We Make Designs that
                        Lead and Inspire.
                    </h1>

                    {/* <div> */}
                    <div className="flex gap-4 lg:gap-1 mt-8 md:absolute md:right-8 md:top-30 lg:right-0 lg:top-20 z-30">

                        <button className="w-12 h-12 md:w-12 md:h-12 rounded-full bg-[#5468FF] flex items-center justify-center lg:m-10     text-white">
                            <HiOutlineArrowRight size={22} />
                        </button>
                    </div>




                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 lg:gap-0   gap-5 ">

                        <div className="bg-white 
                    rounded-xl h-28 
                    sm:h-80 shadow-md 
                    flex-row
                    flex sm:flex-col 
                    items-center 
                    justify-start
                    px-10
                    gap-4
                    lg:-mt-8
                    sm:justify-center">
                            <img src={icon1} alt="icon1" className="w-14 sm:w-16 mb-4" />
                            <p className="text-[#5468E7] font-semibold">Strategy</p>
                        </div>


                        <div
                            className="
    bg-[#5468E7]
    rounded-2xl
    h-28 sm:h-80

    shadow-md
    flex
    flex-row
    sm:flex-col
    justify-start
    items-center
    sm:justify-center
    px-10
    gap-4
    lg:-mt-8
    
  "
                        >
                            <img src={icon2} alt="icon2" className="w-16  mb-4" />
                            <p className="text-white font-semibold">Branding</p>
                        </div>


                        <div className="bg-white 
                    rounded-xl h-28 
                    sm:h-80 shadow-md 
                    flex-row
                    flex sm:flex-col 
                    items-center 
                    justify-start
                    px-10
                    gap-4
                    lg:-mt-8
                    sm:justify-center">
                            <img src={icon3} alt="icon3" className="w-14 sm:w-16 mb-4" />
                            <p className="text-[#5468E7] font-semibold">Interactive</p>
                        </div>

                        <div className="bg-white rounded-xl
                     h-28 
                    sm:h-80 
                    shadow-md flex 
                    sm:flex-col
                    justify-start
                    flex-row
                    items-center 
                    px-10
                    gap-4
                    lg:-mt-8
                    sm:justify-center">
                            <img src={icon4} alt="icon4" className="w-14 sm:w-16 mb-4" />
                            <p className="text-[#5468E7] font-semibold">Communicative</p>
                        </div>



                    </div>
                </div>




                <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

                    {/* Left */}
                    <div className="flex justify-center">
                        <img
                            src={phone}
                            alt="Phone"
                            className="w-[520px] 
                            sm:w-[550px] 
                            lg:w-[550px]"
                        />
                    </div>

                    {/* RIGHT */}
                    <div>

                        {/* Top Label */}
                        <div className="flex items-center gap-5">

                            <img
                                src={logosymbol}
                                alt="Logo"
                                className="hidden md:block w-10"
                            />

                            <span className="text-gray-500  text-sm md:text-base">
                                03
                            </span>

                            <h2 className="font-semibold text-[black] text-sm md:text-base">
                                Achievement
                            </h2>

                        </div>

                        <div className=" text-xl ">
                            <h1 className="mt-5"><b>A design team building a curated marketplace for UI designers.</b></h1>

                            <h1 className=" 
                        
                         text-8xl md:text-7xl lg:text-9xl text-[#5468E7] font-bold leading-nonne px-20">
                                68
                            </h1>
                            <p className="mt-5">😎    Successful Projects</p>

                        </div>

                    </div>

                </div>















            </div>
        </section >
    );
}

export default Services;