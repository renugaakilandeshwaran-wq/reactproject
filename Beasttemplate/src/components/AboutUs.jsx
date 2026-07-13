import React from 'react'
import aboutfem from "../assets/aboutfem.png"
export default function AboutUs() {
    return (
        <section
            id="aboutus"
            className="
            scroll-mt-24
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8
            lg:px-12 
            ">
            <div className='grid  grid-grid-1 lg:grid-cols-2 mt-10 leading-8 md:text-left text-center item-cener'>

                <div>
                    <h1 className='text-[#FA2A20]  mt-5 '>
                        ABOUT US </h1>
                    <p>KNOW MORE TO BE MORE WITH US
                    </p>
                    <p className='text-gray-500 text-start mt-5 sm:px-5 '>Lorem ipsum dolor sit amet consectetur.
                        Non faucibus ut turpis magnis suscipit. Lorem etiam sem condimentum ultrices mauris lacus.
                        Vel sed eget nulla sit sit. Vitae aliquet fames accumsan magna tempor et adipiscing aliquet arcu. Mauris nisi mauris dignissim morbi. Donec aliquam nisl eu pretium tortor enim nunc risus rhoncus. Urna a eu in nibh mi malesuada. Eget curabitur bibendum semper non eget. Nibh faucibus eget fermentum nibh mauris. Turpis eget in morbi nec. Sit at luctus ultricies tristique magna pulvinar. Semper scelerisque fringilla ut ornare cum nibh scelerisque.
                        Vitae pharetra vitae in proin. Odio id arcu egestas eget imperdiet enim amet massa nulla.</p>
                </div>
                <div>
                    <img src={aboutfem} alt="" className='  mt-5  ' />

                </div>
            </div>
        </section >
    )
}
