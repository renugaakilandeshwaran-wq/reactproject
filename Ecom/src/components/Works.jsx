import React from "react";
import logosymbol from "../assets/logosymbol.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import female from "../assets/female.png";
import female1 from "../assets/female1.png";
import male from "../assets/male.png";
import line1 from "../assets/line1.png";
import ben2 from "../assets/ben2.png";
import ben3d from "../assets/ben3d.png";
import ben3 from "../assets/ben3.png";
import apply from "../assets/apply.png";
import apply2 from "../assets/apply2.png";
import logosymbol1 from "../assets/logosymbol1.png";
import { useNavigate } from "react-router-dom";

function Works() {


    const navigate = useNavigate();

    return (
        <section
            id="works"
            className="max-w-[1296px] mx-auto px-4 md:px-8 lg:px-12 py-10"
        >
            {/* Heading Row */}
            <div className="relative mt-10 ">

                {/* Center Heading */}
                <h1
                    className="
      text-center
      text-4xl
      md:text-5xl
      font-bold
      text-[#232340]
    "
                >
                    Our Partnerships.
                </h1>
                <p className="mt-5
                      text-center        
                ">
                    Agency is a full-service agency, busy designing and <br />building beautiful digital products, <br /> brands, and experiences.</p>
                {/* Contact Box - Desktop */}
                <div
                    className="
      hidden
      lg:flex
      absolute
      right-0
      top-1/2
      -translate-y-1/2

      bg-[#5468E7]
      rounded-2xl

      w-[150px]
      h-[64px]

      items-center
      justify-center

      shadow-lg
    "
                >
                    <p className="text-white font-medium text-base">
                        Contact us
                    </p>
                </div>

            </div>

            {/* Contact Box - Mobile & Tablet */}
            <div className="flex justify-center mt-6 lg:hidden">
                <div
                    className="
      bg-[#5468E7]
      rounded-2xl

      w-[150px]
      h-[64px]

      flex
      items-center
      justify-center
    "
                >
                    <p className="text-white font-medium text-base">
                        Contact us
                    </p>
                </div>
            </div>

            {/* Featured Project */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <div>

                    <p className="text-[#5468E7] 
                    uppercase tracking-[2px] font-semibold">
                        Featured Project
                    </p>
                    <h2 className="mt-5  text-4xl lg:text-5xl font-bold text-[#232340] leading-tight">
                        Sapiens: The Free  Character Builder App
                    </h2>

                    <p className="mt-6 lg:text-2xl max-w-md text-[#606060] leading-8">
                        Beautiful library of modular, component-based character illustrations free to use for all your personal or client projects.
                    </p>



                </div>
            </div>
            {/* Right */}
            <div className=" mt-5 flex justify-center lg:justify-end  ">

                <div

                    className="
        relative
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

        overflow-visible
      "
                >
                    <img
                        src={female}
                        alt="Female"
                        onClick={() => navigate("/case-study")}

                        className="
                        cursor-pointer
          w-[230px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
          h-auto
        "
                    />


                    <button
                        onClick={() => navigate("/case-study")}

                        className="
                        cursor-pointer
                        
    absolute
    -right-8
    top-1/2
    -translate-y-1/2

    w-16
    h-16

    rounded-full
    bg-[#5468E7]
    shadow-lg

    flex
    items-center
    justify-center

    border
    border-gray-200
  "
                    >
                        <HiOutlineArrowRight
                            size={28}
                            className="text-white
                            
                            "
                        />
                    </button>



                </div>

            </div>








            <div className="mt-1 flex relative justify-between">

                <div className="w-full lg:w-[480px]">

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#232340]">
                        Bento Vol. 2
                    </h2>

                    <div
                        className="
        relative
        mt-8

        bg-[#E8BEFF]
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
        items-center
        justify-center
      "
                    >
                        <img
                            src={ben2}
                            alt="Bento Vol.2"
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
                            
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
          h-auto
        "
                        />

                        <button
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          absolute
          -right-8
          top-1/2
          -translate-y-1/2

          w-16
          h-16
          rounded-full
          bg-white
          shadow-lg

          flex
          items-center
          justify-center
        "
                        >
                            <HiOutlineArrowRight size={28} className="text-[#232340]" />
                        </button>
                    </div>

                    <p className="mt-8 text-[#606060] leading-8 max-w-md">
                        Agency is a full-service agency, busy designing and building beautiful
                        digital products, brands, and experiences.
                    </p>

                </div>
                <img
                    src={line1}
                    alt="line"
                    className="
    hidden lg:block
    absolute

    left-[560px]
    top-[220px]

    w-[380px]
    h-[350px]
  "
                />
            </div>



            <div className="mt-0 relative md:mt-32 lg:mt-1 flex justify-end">
                <div className="w-full lg:w-[480px]">

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#232340]">
                        Bento 3D Illustration
                    </h2>

                    {/* Card */}
                    <div
                        className="
        relative
        mt-8
        bg-[#FFCE79]
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
        items-center
        justify-center
      "
                    >
                        <img
                            src={ben3d}
                            alt="Bento 3D Illustration"
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
          h-auto
        "
                        />

                        {/* Arrow */}
                        <button
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          absolute
          -right-8
          top-1/2
          -translate-y-1/2

          w-16
          h-16
          rounded-full
          bg-white
          shadow-lg

          flex
          items-center
          justify-center
        "
                        >
                            <HiOutlineArrowRight
                                size={28}
                                className="text-[#232340]"
                            />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="mt-8 text-[#606060] leading-8 max-w-md">
                        Agency is a full-service agency, busy designing and building beautiful
                        digital products, brands, and experiences.
                    </p>

                </div>
                <img
                    src={line1}
                    alt="line"
                    className="
    hidden lg:block
    absolute

    left-[290px]
    top-[200px]

    w-[430px]
    h-[300px]
  "
                />
            </div>




            <div className="mt-1 flex justify-between">

                <div className="w-full lg:w-[480px]">

                    <h2 className="text-4xl lg:text-5xl font-bold text-[#232340]">
                        Bento Vol. 3
                    </h2>

                    <div
                        className="
        relative
        mt-8

        bg-[#D1ECFD]
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
        items-center
        justify-center
      "
                    >
                        <img
                            src={ben3}
                            alt="Bento Vol.2"
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
          h-auto
        "
                        />

                        <button
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          absolute
          -right-8
          top-1/2
          -translate-y-1/2

          w-16
          h-16
          rounded-full
          bg-white
          shadow-lg

          flex
          items-center
          justify-center
        "
                        >
                            <HiOutlineArrowRight size={28} className="text-[#232340]" />
                        </button>
                    </div>

                    <p className="mt-8 text-[#606060] leading-8 max-w-md">
                        Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                    </p>

                </div>

            </div>




            <div className="mt- md:mt-32 lg:mt-1 flex justify-end">
                <div className="w-full lg:w-[480px]">

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#232340]">
                        Sapiens: Man                    </h2>

                    {/* Card */}
                    <div
                        className="
        relative
        mt-8
        bg-[#FFADD0]
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
        items-center
        justify-center
      "
                    >
                        <img
                            src={male}
                            alt="pic"
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          w-[220px]
          sm:w-[280px]
          md:w-[340px]
          lg:w-[400px]
          h-auto
        "
                        />

                        {/* Arrow */}
                        <button
                            onClick={() => navigate("/case-study")}

                            className="
                            cursor-pointer
          absolute
          -right-8
          top-1/2
          -translate-y-1/2

          w-16
          h-16
          rounded-full
          bg-white
          shadow-lg

          flex
          items-center
          justify-center
        "
                        >
                            <HiOutlineArrowRight
                                size={28}
                                className="text-[#232340]"
                            />
                        </button>
                    </div>

                    {/* Description */}
                    <p className="mt-8 text-[#606060] leading-8 max-w-md">
                        Agency is a full-service agency, busy designing and building beautiful
                        digital products, brands, and experiences.
                    </p>

                </div>

            </div>

            {/* Call To Action */}

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
    right-4
    
    xl:right-10
    top-5
overflow-visible
    w-[260px]
    lg:w-[290px]
    h-[480px]
    lg:h-[520px]

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
                w-[300px]
                sm:w-[380px]
                md:w-[470px]
                lg:w-[560px]
                h-auto
                
            "
                        />




                    </div>

                    {/* Right Content */}
                    <div
                        className="
        relative
        w-full
        lg:w-1/2

        text-center
        lg:text-left

        mt-12
        lg:mt-0

        lg:pr-[300px]
        lg:-ml-16

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
            font-bold
            leading-tight
        "
                        >
                            We Are Looking for Talented Designers
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


        </section >
    );
}

export default Works;