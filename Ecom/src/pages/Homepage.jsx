import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Works from '../components/Works';
import Path from "../assets/Path.svg";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Homepage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            // wait a tick so the section has rendered before scrolling
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        }
    }, [location]);

    return (
        <>
            <div className="relative 
            overflow-hidden 
            pt-24"
            >
                <img
                    src={Path}
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
