// components
import {Navbar, Footer} from "@/components";
import React, {Suspense} from "react";
// sections
import Hero from "./hero";
import Parteners from "./parteners";
import AboutEvent from "./about-event";
import Tedtalks from "./tedtalks";
import EventContent from "./event-content";
import Faq from "./faq";

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutEvent/>
            <Tedtalks/>
            <Parteners/>
            {/*<EventContent/>*/}
            {/*<Faq/>*/}
            <Footer/>
        </>
    );
}
