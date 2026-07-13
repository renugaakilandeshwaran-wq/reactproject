import React from 'react'
import sch1 from '../assets/sch1.png';
import sch2 from '../assets/sch2.png';
import sch3 from '../assets/sch3.png';
import sch4 from '../assets/sch4.png';
import sch5 from '../assets/sch5.png';
import sch6 from '../assets/sch6.png';
import sch7 from '../assets/sch7.png';
import sch8 from '../assets/sch8.png';


export default function Schedule() {
    return (
        <section
            id='schedule'
            className='mt-10  relative
            overflow-hidden
            min-h-screen max-w-[1296px]
            mx-auto px-4 md:px-8
            lg:px-12'>
            <h1 className='text-[#FA2A20] text-center uppercase text-2xl lg:text-center'>
                Schedule
            </h1>
            <p className='text-center'>KEEP UP WITH THE SCHEDULE TO STAY FIT</p>
            <p className='py-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-4 px-8 gap-5 max-auto'>
                <img src={sch1} alt="" />
                <img src={sch2} alt="" />
                <img src={sch3} alt="" />
                <img src={sch4} alt="" />
                <img src={sch5} alt="" />
                <img src={sch6} alt="" />
                <img src={sch7} alt="" />
                <img src={sch8} alt="" />

            </div>
        </section>
    )
}
