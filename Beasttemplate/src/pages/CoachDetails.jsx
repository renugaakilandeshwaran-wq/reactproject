import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import coa2 from '../assets/coa2.png';
import coachbg from '../assets/coachbg.png';
import NavBar from "../components/NavBar";
import gim1 from "../assets/gim1.png";
import gim2 from "../assets/gim2.png";
import gim3 from "../assets/gim3.png";
import gim4 from "../assets/gim4.png";
import gim5 from "../assets/gim5.png";
import gim6 from "../assets/gim6.png";
import gim7 from "../assets/gim7.png";
import gim8 from "../assets/gim8.png";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import insta from "../assets/insta.png";
import linkin from "../assets/linkin.png";
import log1 from "../assets/log1.png";
import log2 from "../assets/log2.png";
import log3 from "../assets/log3.png";

export default function CoachDetails() {
    const { id } = useParams();

    return (
        <>
            <section className='
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 '>

                <section className="relative bg-cover bg-center bg-no-repeat py-20"
                    style={{ backgroundImage: `url(${coachbg})` }}>

                    <div className="absolute top-0 left-0 w-full z-50">
                        <NavBar />
                    </div>

                    {/* Hero Section */}

                    <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">

                        {/* Left Image */}
                        <div>
                            <img
                                src={coa2}
                                alt="Coach"
                                className="w-fit mt-8 border-2 border-red-500"
                            />
                        </div>

                        {/* Right Details */}
                        <div className="flex flex-col justify-center">
                            <h1 className="text-6xl text-white  font-bold">JOHN SNOW</h1>

                            <p className="text-red-500 text-xl mt-4">
                                BODY BUILDING COACH
                            </p>

                            <div className="space-y-4 mt-8 text-white">
                                <p><span className="text-gray-400">AGE :</span> 29</p>
                                <p><span className="text-gray-400">EXPERIENCE :</span> 5 Years</p>
                                <p><span className="text-gray-400">PHONE :</span> +1 9876543210</p>
                                <p><span className="text-gray-400">EMAIL :</span> john@beast.com</p>
                                <div className="flex items-center gap-6">
                                    <img src={fb} alt="" className="w-6 h-6 cursor-pointer" />
                                    <img src={x} alt="" className="w-6 h-6 cursor-pointer border-1 bg-white" />
                                    <img src={insta} alt="" className="w-6 h-6 cursor-pointer" />
                                    <img src={linkin} alt="" className="w-6 h-6 cursor-pointer border-1  bg-white " />
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <section>

                    <div className="grid grid-cols-1 bg-white gap-5 px-12 mt-10 md:px-12 md:py-6 lg:grid-cols-3  ">
                        <img src={log1} alt="" />
                        <img src={log2} alt="" />
                        <img src={log3} alt="" />

                    </div>
                </section>
                {/* Introduction */}
                <section className="bg-white text-black py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-red-500 text-3xl font-bold">
                            INTRODUCTION
                        </h2>
                        <h1 className="text-xl mt-2">READ BIOGRAPHY OF A COACH</h1>
                        <p className="mt-10 text-gray-600 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                            </p>
                    </div>
                </section>

                {/* Skills */}
                <section className="bg-white py-20">
                    <div className="max-w-6xl mx-auto">

                        <h1 className="text-red-500  text-3xl text-center font-bold ">SKILLS</h1>
                        <h1 className="text-center text-xl">SKILLSET OF OUR COACH</h1>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                            <div><div className="space-y-10">

                                {/* Body Building */}
                                <div className="mt-4">
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-bold uppercase text-lg">BODY BUILDING</h3>
                                        <span className="font-bold text-lg">92%</span>
                                    </div>

                                    <div className="w-full h-3 bg-red-100 rounded-full">
                                        <div className="w-[92%] h-3 bg-[#FA2A20] rounded-full"></div>
                                    </div>
                                </div>

                                {/* Cardio */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-bold uppercase text-lg">CARDIO</h3>
                                        <span className="font-bold text-lg">74%</span>
                                    </div>

                                    <div className="w-full h-3 bg-red-100 rounded-full">
                                        <div className="w-[74%] h-3 bg-[#FA2A20] rounded-full"></div>
                                    </div>
                                </div>

                                {/* Weight Training */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <h3 className="font-bold uppercase text-lg">WEIGHT TRAINING</h3>
                                        <span className="font-bold text-lg">83%</span>
                                    </div>

                                    <div className="w-full h-3 bg-red-100 rounded-full">
                                        <div className="w-[83%] h-3 bg-[#FA2A20] rounded-full"></div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>

                    </div>


                </section>

                {/* Instagram */}
                <section
                    className="relative bg-cover bg-center bg-no-repeat py-20"
                    style={{ backgroundImage: `url(${coachbg})` }}
                >
                    <div className="max-w-[1296px] mx-auto px-4">

                        {/* Heading */}
                        <div className="text-center mb-14">
                            <h1 className="text-[#FA2A20] text-4xl font-bold">
                                INSTAGRAM
                            </h1>

                            <p className="text-white mt-2">
                                FOLLOW JOHN SNOW ON INSTAGRAM
                            </p>
                        </div>

                        {/* Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <img src={gim1} alt="" className="w-full" />
                            <img src={gim2} alt="" className="w-full" />
                            <img src={gim3} alt="" className="w-full" />
                            <img src={gim4} alt="" className="w-full" />
                            <img src={gim5} alt="" className="w-full" />
                            <img src={gim6} alt="" className="w-full" />
                            <img src={gim7} alt="" className="w-full" />
                            <img src={gim8} alt="" className="w-full" />
                        </div>

                        {/* Follow Button */}
                        <div className="flex justify-center mt-12">
                            <button className="bg-[#FA2A20] text-white px-8 py-3 hover:bg-red-700 transition">
                                FOLLOW →
                            </button>
                        </div>
                        <div className="w-full">                <Footer />
                        </div>
                    </div>
                </section>



            </section >



        </>
    );
}