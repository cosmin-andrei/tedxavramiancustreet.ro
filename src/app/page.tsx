// components
import {Navbar, Footer} from "@/components";
import React, {Suspense} from "react";
// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutEvent/>
            <SponsoredBy/>
            <OurStats/>
            <EventContent/>
            <Faq/>
            <Footer/>
        </>
    );
}
