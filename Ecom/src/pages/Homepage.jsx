import About from '../components/About';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Works from '../components/Works';
import path from "../assets/path.svg";

export default function Homepage() {
    return (
        <>
            <div className="relative 
            overflow-hidden 
            pt-24"
            >
                <img
                    src={path}
                    alt="Pattern"
                    className="absolute
                    top-0 
                    left-[220px] 
                    lg:left-[260px]
                    w-[1200px]
                    h-[500px]
                    opacity-100 
                    -z-10
                    pointer-events-none"



                />

                <Navbar />
                <Hero />

            </div>
            <About />

            <Services />
            <Works />


            <Jobs />
            <Footer />


        </>
    );

}
