import React from "react";
import logosymbol from "../assets/logosymbol.png";
import line1 from "../assets/line1.png";
import { HiOutlineArrowRight } from "react-icons/hi2";
import ben3d from "../assets/ben3d.png"
function Jobs() {
    return (
        <section
            id="jobs"
            className="relative max-w-[1296px] mx-auto px-4 md:px-8 lg:px-12 py-24 overflow-hidden"
        >
            {/* Background Line */}
            <img
                src={line1}
                alt="line"
                className="
          hidden
          lg:block
          absolute
          left-[20%]
          top-0
          w-[650px]
          opacity-70
          pointer-events-none
        "
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                {/* LEFT SIDE */}
                <div className="relative z-10">

                    {/* Top Label */}
                    <div className="flex items-center gap-5">

                        <img
                            src={logosymbol}
                            alt=""
                            className="w-8"
                        />

                        <span className="text-[#5468E7] font-semibold">
                            06.
                        </span>

                        <p className="text-[#5468E7] font-semibold">
                            We are hiring
                        </p>

                    </div>

                    {/* Heading */}
                    <h1
                        className="
              mt-10
              text-[60px]
              md:text-[90px]
              lg:text-[110px]
              font-bold
              leading-none
              text-[#232340]
            "
                    >
                        Jobs
                    </h1>

                    {/* Description */}
                    <p
                        className="
              mt-10
              text-[#606060]
              text-lg
              leading-10
              max-w-[420px]
            "
                    >
                        Agency is a full-service agency, busy designing and
                        building beautiful digital products, brands,
                        and experiences.
                    </p>

                    {/* Available Jobs */}
                    <div className="flex items-center gap-5 mt-16">

                        <button
                            className="
                w-16
                h-16
                rounded-full
                bg-[#C996E8]
                flex
                items-center
                justify-center
              "
                        >
                            <HiOutlineArrowRight
                                size={28}
                                className="text-white"
                            />
                        </button>

                        <p
                            className="
                text-[#606060]
                text-xl
                font-semibold
              "
                        >
                            Available <br />
                            jobs
                        </p>

                    </div>

                </div>

                {/* RIGHT SIDE */}






                <div className="flex flex-col gap-8">

                    {/* Card 1 */}
                    <div
                        className="
      bg-white
      rounded-[36px]
      shadow-sm

      px-8
      md:px-10

      py-10

      h-[220px]

      flex
      flex-col
      justify-center
    "
                    >
                        <div className="flex items-center gap-4">

                            <h2 className="text-4xl font-bold text-[#232340]">
                                Graphic Designer
                            </h2>

                            <span
                                className="
          w-10
          h-10

          rounded-full

          bg-[#5468E7]

          flex
          items-center
          justify-center

          text-white
          font-semibold
        "
                            >
                                2
                            </span>

                        </div>

                        <p className="mt-4 text-[#606060] text-xl">
                            2 years experience
                        </p>

                        <button className="mt-8">
                            <HiOutlineArrowRight
                                size={32}
                                className="text-[#232340]"
                            />
                        </button>

                    </div>

                    {/* Card 2 */}
                    <div
                        className="
      bg-[#232340]
      rounded-[36px]

      px-8
      md:px-10

      py-8

      flex
      items-center
      justify-between

      min-h-[240px]
    "
                    >

                        {/* Left */}
                        <div>

                            <h2 className="text-4xl font-bold text-white">
                                Visual Designer
                            </h2>

                            <p className="mt-4 text-[#B6B6C5] text-xl">
                                2 years experience
                            </p>

                            <button className="mt-8">
                                <HiOutlineArrowRight
                                    size={32}
                                    className="text-white"
                                />
                            </button>

                        </div>

                        {/* Right Image */}
                        <div
                            className="
        bg-[#5468E7]
        rounded-[28px]

        w-[180px]
        h-[180px]

        flex
        items-center
        justify-center
      "
                        >

                            <img
                                src={ben3d}
                                alt="Visual Designer"
                                className="
          w-[150px]
          h-auto
        "
                            />

                        </div>

                    </div>

                    {/* Card 3 */}
                    <div
                        className="
      bg-white
      rounded-[36px]
      shadow-sm

      px-8
      py-10

      h-[220px]

      flex
      flex-col
      justify-center
    "
                    >

                        <h2 className="text-4xl font-bold text-[#232340]">
                            Art Director
                        </h2>

                        <p className="mt-4 text-[#606060] text-xl">
                            2 years experience
                        </p>

                        <button className="mt-8">
                            <HiOutlineArrowRight
                                size={32}
                                className="text-[#232340]"
                            />
                        </button>

                    </div>

                    {/* Card 4 */}
                    <div
                        className="
      bg-white
      rounded-[36px]
      shadow-sm

      px-8
      py-10

      h-[220px]

      flex
      flex-col
      justify-center
    "
                    >

                        <div className="flex items-center gap-4">

                            <h2 className="text-4xl font-bold text-[#232340]">
                                Web Designer
                            </h2>

                            <span
                                className="
          w-10
          h-10

          rounded-full

          bg-[#5468E7]

          flex
          items-center
          justify-center

          text-white
          font-semibold
        "
                            >
                                6
                            </span>

                        </div>

                        <p className="mt-4 text-[#606060] text-xl">
                            2 years experience
                        </p>

                        <button className="mt-8">
                            <HiOutlineArrowRight
                                size={32}
                                className="text-[#232340]"
                            />
                        </button>

                    </div>

                </div>





                <div>

                </div>

            </div>

        </section>
    );
}

export default Jobs;