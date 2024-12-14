// components
import {Navbar, Footer} from "@/components";
import React, {Suspense} from "react";
import {DespreComponent} from "@/app/despre/content";

export default function DesprePage() {
    return (
        <>
            <Navbar/>
            <DespreComponent/>
            <Footer/>
        </>
    );
}
