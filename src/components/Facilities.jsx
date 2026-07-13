import React from 'react'
import fac1 from "../assets/fac1.png";
import fac2 from "../assets/fac2.png";
import fac3 from "../assets/fac3.png";
import fac4 from "../assets/fac4.png";

export default function Facilities() {
    return (
        <section id='facilities'
            className=' relative
            overflow-hidden
            min-h-screen max-w-[1296px]
            mx-auto px-4 md:px-8
            lg:px-12' >

            <h1 className='text-[#FA2A20] text-center text-2xl mt-5'>
                FACILITIES
            </h1>
            <p className='text-center mt-5 '>HOW IT FEELS TO BE WITH US</p>
            <p className='mt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse laborum.</p>
            <div className='grid grid-col-1 lg:grid-cols-4 gap-6   px-12 py-5 lg:px-16 mt-5 '>
                <img src={fac1} alt="" />
                <img src={fac2} alt="" />
                <img src={fac3} alt="" />
                <img src={fac4} alt="" />

            </div>

        </section>
    )
}
