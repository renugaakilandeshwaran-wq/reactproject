import React from 'react'
import join1 from '../assets/join1.png';
import join2 from '../assets/join2.png';
import join3 from '../assets/join3.png';

export default function JoinNow() {
    return (
        <section
            id="joinnow"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 
            
            "
        >
            <div><h1 className='text-[#FA2A20] text-center text-2xl font-bold py-4'>
                JOIN NOW
            </h1>
                <p className='text-center '>JOIN & BE ONE OF US</p>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-20 mt-10  py-4 max-auto">
                <div className="grid lg:grid-cols-3 lg:gap-0 xl:gap-0 gap-3  ">
                    <div className="h-68 w-72 bg-white border-1 border-black ">
                        <h1 className='text-[#FA2A20] text-center text-xl p-2'><b>BASIC</b></h1>
                        <img src={join1} alt="" className=' mx-auto' />
                        <p className='text-center'>PERSONAL TRAINER</p>
                        <p className='text-center'>SERVICE LOCKER ROOMS</p>
                        <p className='text-center'>FITNESS ASSESSMENT</p>
                        <p className='text-center'>MORNING SLOT </p>
                        <p className='text-[#FA2A20] text-center text-xl p-2'><b>$ 9.99 / MONTH</b></p>

                    </div>

                    <div className="h-68  w-72 bg-white border-1 border-black ">
                        <h1 className='text-[#FA2A20] text-center p-2 text-xl'><b>PREMIUM</b></h1>
                        <img src={join2} alt="" className=' mx-auto' />
                        <p className='text-center'>PERSONAL TRAINER</p>
                        <p className='text-center'>SERVICE LOCKER ROOMS</p>
                        <p className='text-center'>FITNESS ASSESSMENT/CONSULTATION</p>
                        <p className='text-center'>MORNING&EVENING SLOT </p>
                        <p className='text-[#FA2A20] text-center text-xl p-2'><b>$ 24.99 / MONTH</b></p>

                    </div>

                    <div className="h-68 w-72 bg-white border-1 border-black  ">
                        <h1 className='text-[#FA2A20] text-center p-2 text-xl'><b>ADVANCED</b></h1>
                        <img src={join3} alt="" className=' mx-auto' />
                        <p className='text-center'>PERSONAL TRAINER</p>
                        <p className='text-center'>SERVICE LOCKER ROOMS</p>
                        <p className='text-center'>FITNESS ASSESSMENT</p>
                        <p className='text-center'>MORNING SLOT </p>
                        <p className='text-[#FA2A20] text-center text-xl p-2'><b>$ 14.99 / MONTH</b></p>

                    </div>
                    <button className='bg-[#FA2A20] text-white p-3'>ENTROLL NOW →</button>


                </div>
            </div>
        </section>

    )
}
