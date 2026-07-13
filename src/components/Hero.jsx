
import { FaPlay, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full min-h-[600px] lg:min-h-[720px] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(10,10,10,0.55), rgba(10,10,10,0.75)), url('sch1.png')",
            }}
        >
            <div className="max-w-7xl mx-auto w-full px-5 lg:px-10 pt-28 pb-16 flex justify-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    <div className="flex lg:flex-col items-center gap-4">
                        <button className="w-14 h-14 rounded-full border-2 border-white/70 flex items-center justify-center text-white hover:bg-beast-red hover:border-beast-red transition-colors">
                            <FaPlay className="ml-1" />
                        </button>
                        <span className="text-white/80 text-xs tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180 hidden lg:block">
                            Play Video
                        </span>
                    </div>


                    <div className="text-center lg:text-left">
                        <p className="text-[#FA2A20] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
                            CARDIO                        </p>
                        <h1 className="text-white font-heading font-bold uppercase text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
                            Live it
                            <br />
                            Like a Rock!
                        </h1>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-18 left-0 right-0 lg:-bottom-3 lg:-left-12 lg:right-auto w-full lg:px-0">
                <div className="w-full lg:max-w-4xl bg-white shadow-xl flex items-center gap-4 px-4 sm:px-6 py-10">
                    <span className="text-sm font-semibold text-beast-dark whitespace-nowrap">
                        1 / 4
                    </span>
                    <div className="flex-1 h-[2px] bg-gray-200 relative">
                        <div className="absolute left-0 top-0 h-[2px] w-1/4 " />
                    </div>

                    <FaArrowLeft className="text-beast-gray/40" />
                    <FaArrowRight className="text-black" />
                </div>
            </div>





        </section>
    );
};

export default Hero;





