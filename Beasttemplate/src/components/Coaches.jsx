import React, { useState } from 'react'
import coa1 from '../assets/coa1.png';
import coa2 from '../assets/coa2.png';
import coa3 from '../assets/coa3.png';
import coa4 from '../assets/coa4.png';
import { Link } from "react-router-dom";

export default function Coaches() {

    return (



        <section
            id="coaches"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 
            bg-[#212529]
            "
        >
            <div>
                <h1 className='text-[#FA2A20] text-center text-2xl mt-10'>
                    COACHES
                </h1><br />
                <p className='text-white text-center'>OUR TRAINING FORCE</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-20">

                <Link to="/coach-details">
                    <img src={coa1} alt="" className="w-full cursor-pointer" />
                </Link>

                <Link to="/coach-details">
                    <img src={coa2} alt="" className="w-full cursor-pointer" />
                </Link>

                <Link to="/coach-details">
                    <img src={coa3} alt="" className="w-full cursor-pointer" />
                </Link>

                <Link to="/coach-details">
                    <img src={coa4} alt="" className="w-full cursor-pointer" />
                </Link>

            </div>
        </section>
    )
}
