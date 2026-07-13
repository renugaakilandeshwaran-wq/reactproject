import React from 'react'
import blg1 from '../assets/blg1.png';
import blg2 from '../assets/blg2.png';
import blg3 from '../assets/blg3.png';

export default function Blogs() {
    return (


        <section
            id="blog"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 
    
            ">
            <div>
                <h1 className='text-[#FA2A20] text-center text-2xl mt-10'>
                    BLOG
                </h1>
                <p className='text-center'>READ TO STAY IN SHAPE</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap- lg:gap-'>
                <div className='relaive'>
                    <img src={blg1} alt="" />
                    <h1 className='mt-5 font-bold'>Build yourself in hours of exercise everyday for 6 months.</h1>
                    <p className='text-sm mb-5'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='relative '>
                    <img src={blg2} alt="" />
                    <button className='absolute top-5 right-10 bg-[#FA2A20] text-white px-3 py-1'><b>22 NAV</b> </button>

                    <h1 className='mt-4 font-bold'>Fat burning cardio workout to keep yourself in shape</h1>
                    <p className='text-sm mt-3 mb-5'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='relative'>
                    <img src={blg3} alt="" />
                    <button className='absolute top-5 right-10 bg-[#FA2A20] text-white px-3 py-1'><b>22 NAV</b> </button>

                    <h1 className='mt-4 font-bold'> Crossfit Guide for beginners: 10 things you must know</h1>
                    <p className='text-sm mt-3 mb-5'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
        </section>
    )
}
