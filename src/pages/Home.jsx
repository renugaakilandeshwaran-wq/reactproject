import React from 'react'
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import Bmi from "../components/Bmi";
import Coaches from "../components/Coaches";
import Facilities from "../components/Facilities";
import Reviews from "../components/Reviews";
import Schedule from "../components/Schedule";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import herobg from "../assets/herobg.png";
import JoinNow from '../components/JoinNow';

export default function Home() {
    return (


        <>
            <section
                className="relative w-full h-screen bg-cover bg-center bg-no-repeat  min-h-screen max-w-[1296px] 
            mx-auto px-4 md:px-8 
            lg:px-12 "
                style={{ backgroundImage: `url(${herobg})` }}
            >
                <NavBar />
                <Hero />
            </section>

            <AboutUs />
            <Facilities />
            <Bmi />


            <Schedule />
            <Reviews />
            <JoinNow />
            <Coaches />
            <Blogs />
            <Gallery />

            <Footer />
        </>



    )
}
