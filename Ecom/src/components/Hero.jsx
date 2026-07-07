import React from 'react'
import wall1 from "../assets/wall1.png"
import path from "../assets/path.png";
function Hero() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (

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

            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                {/* Left Content */}
                <div className="w-full md:w-1/2 ml-10 text-center md:text-left">
                    {/* <div className="text-red-500 text-6xl"> */}
                    <h1 className="text-3xl mt-0 md:text-4xl  lg:text-5xl font-bold leading-tight">
                        Stand Out
                        from The Crowd.
                    </h1>

                    <p className="mt-6 text-gray-500 text-base md:text-lg leading-8 max-w-md mx-auto md:mx-0">
                        Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">

                        <button
                            onClick={() => scrollToSection("works")}
                            className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
                        >
                            Recent Work
                        </button>

                    </div>

                    <div className="mt-5 p-10 flex items-center gap-4 justify-center md:justify-start">

                        <button
                            onClick={() => scrollToSection("footer")}
                            className="w-14 h-14 md:block hidden rounded-full bg-[#B39DDB] flex items-center justify-center"
                        >
                            <span className="text-white   sm md:block hidden  text-2xl">↓</span>
                        </button>

                        <span className="text-gray-500 text-sm md:block hidden  tracking-wider">
                            Scroll Down
                        </span>


                    </div>

                </div>

                {/* {/* Right Image */}



                <div className="w-full flex justify-center
                                items-center 
                                
                                md:-mt-10 
                                lg:-mt-20"
                >

                    <img
                        src={wall1}
                        alt="Hero"

                        className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[850px] h-auto object-contain"


                    />
                </div>


            </div>

        </section >
    );
}



export default Hero;