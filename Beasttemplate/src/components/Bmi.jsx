import React from 'react'
import fac5 from "../assets/fac5.png";
import fac6 from "../assets/fac6.png";
import cal from "../assets/cal.png";

export default function Bmi() {
    return (
        <section id='bmi'
            className='relative
            overflow-hidden
            min-h-screen max-w-[1296px]
            mx-auto px-4 md:px-8
            lg:px-12'>
            <h1 className='text-[#FA2A20] text-center text-2xl mt-10'>
                BMI
            </h1>


            <div className='relative mt-5'>

                <div className='
            '>
                    <img src={fac6} alt="" className='absolute w-72 lg:right-20 lg:top-35' />
                    <img src={cal} alt="" className='absolute lg:right-20 lg:top-101 lg:w-72 top-55' /></div>
                <img src={fac5} alt="" className='5xl hidden lg:block' />

            </div>

        </section>

    )
}
