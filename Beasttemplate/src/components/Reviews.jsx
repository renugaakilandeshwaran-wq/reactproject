import React from 'react';
import rev1 from '../assets/rev1.png';
import rev2 from '../assets/rev2.png';


export default function Reviews() {
    return (

        <section id="reviews"
            className="
            relative 
            overflow-hidden 
            min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 
            "
        >

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-16'>

                <div>
                    <img src={rev1} alt="" />
                </div>
                <div>

                    <h1 className='text-[#FA2A20] text-center text-2xl mt-10'>Reviews</h1>
                    <p className='text-center'>READ WHAT PEOPLE SAYS</p>
                    <p className='mt-5 text-center'>Lorem ipsum dolor sit amet consectetur. Magnis massa fringilla purus porta sed varius. Mauris egestas pharetra sed id eget.
                        Vulputate malesuada purus amet turpis arcu venenatis cum nisl. Lorem tincidunt urna laoreet auctor.
                        Vestibulum sit quam mi dui egestas convallis a tellus.
                        Id urna aliquam risus mauris lectus lorem convallis elit.</p>
                    <p className='text-center'><b>Nell Francls</b></p>
                    <p><img src={rev2} alt="" className='mx-auto' /></p>
                </div>

            </div>
        </section>
    )
}
