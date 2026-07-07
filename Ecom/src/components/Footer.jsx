import React from "react";
import footericon from "../assets/footericon.png";
import Contact from "../assets/Contact.png";
import rect from "../assets/rect.png";
import line1 from "../assets/line1.png";
import logosymbol1 from "../assets/logosymbol1.png";
import message from "../assets/message.png";
import logosymbol from "../assets/logosymbol.png";

function Footer() {
    return (
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
    );
}

export default Footer;