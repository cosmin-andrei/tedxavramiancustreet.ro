import {Navbar, Footer} from "@/components";
import React, {Suspense} from "react";
import Hero from "./hero";
import Parteners from "./parteners";
import AboutEvent from "./about-event";
import Tedtalks from "./tedtalks";
import EventContent from "./event-content";
import {FixedPlugin} from "@/components/fixed-plugin";

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
            {/*<FixedPlugin/>*/}
        </>
    );
}
