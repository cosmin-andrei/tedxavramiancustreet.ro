// components
import {Navbar, Footer} from "@/components";
import React, {Suspense} from "react";
// sections
import Hero from "./hero";
import Parteners from "./parteners";
import AboutEvent from "./about-event";
import Tedtalks from "./tedtalks";
import EventContent from "./event-content";

export default function Portfolio() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <AboutEvent/>
            <Tedtalks/>
            <EventContent/>
            <Parteners/>
            <Footer/>
        </>
    );
}
