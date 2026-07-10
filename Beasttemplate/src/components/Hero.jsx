import React from "react";
import play from "../assets/play.png";
import pagination from "../assets/pagination.png";

export default function Hero() {
    return (

        <section
            id="hero"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto md:px-8 
            lg:px-12 
            "
        >

            <div className="relative min-h-screen flex items-center">

                <div className="max-w-[1296px] mx-auto w-full px-6 lg:px-10">

                    <div className="flex flex-row md:flex-row items-center justify-between lg:justify-start gap-5 md:gap-10">


                        <div className="flex-shrink-0">
                            <img
                                src={play}
                                alt="Play"
                                className="w-14 sm:w-20 md:w-28 lg:w-40 cursor-pointer lg:mb-62"
                            />
                        </div>

                        {/* Hero Content */}

                        <div className="flex-1 text-center md:text-left lg:mb-62">
                            <p className="text-[#FA2A20] text-sm sm:text-base md:text-xl tracking-widest">
                                CARDIO
                            </p>

                            <h1 className="text-white font-bold leading-none mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                                LIVE IT
                            </h1>

                            <h1 className="text-white font-bold leading-none mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                                LIKE A ROCK!
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="absolute  top-135  sm:top-140  sm:left-0 ">
                    <img
                        src={pagination}
                        alt="Pagination"
                        className="w-full  lg:w-fit  md:w-24 lg:w-28"
                    />
                </div>
            </div>

        </section>
    );
}