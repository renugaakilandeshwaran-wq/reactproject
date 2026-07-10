import React from 'react'
import gal1 from '../assets/gal1.png';
import gal2 from '../assets/gal2.png';

export default function Gallery() {
    return (
        <section id="gallery"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 
            "
        >
            <div>         <h1 className='text-[#FA2A20] text-center font-bold text-xl  hidden lg:block'>GALLERY</h1>
            </div>
            <div className='relative mt-10 hidden lg:block'>
                <img src={gal1} alt="" />
                <img src={gal2} alt="" className='absolute right-25 top-90' />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">

                {/* Left */}
                <div className="flex flex-col justify-center">
                    <p className="text-red-500 uppercase font-bold tracking-wider text-center mb-6">
                        Contact Us
                    </p>

                    <h2 className="lg:text-4xl text-2xl font-bold leading-tight text-center">
                        GET IN TOUCH
                    </h2>

                    <h2 className="lg:text-4xl text-2xl font-bold text-red-500 leading-tight mt-2 text-center">
                        REACH OUT TO US
                    </h2>
                </div>

                {/* Right */}
                <form className="space-y-10 mt-10 ">

                    <div>
                        <label className="block text-gray uppercase text-sm mb-">
                            Name
                        </label>

                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-gray-400 outline-none py-"
                        />
                    </div>

                    <div>
                        <label className="block text-gray uppercase text-sm ">
                            Email
                        </label>

                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-gray-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray uppercase text-sm ">
                            Message
                        </label>

                        <textarea
                            rows="2"
                            className="w-full bg-transparent border-b border-gray-400 outline-none resize-none py-3"
                        ></textarea>
                    </div>

                    <button className="w-full bg-red-600 text-white hover:bg-red-700 py-5 uppercase font- tracking-wide transition">
                        SEND MESSAGE →
                    </button>

                </form>

            </div>
        </section>
    )
}
