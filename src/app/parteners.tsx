"use client";

import React from "react";
import Image from "next/image";
import {Typography} from "@material-tailwind/react";


const SPONSORS = [
    "onedu.png",
    "aqua.svg",
    "avon.png",
    "epg.png",
    "vibrehotel.png",
    "bdv.png",
    "centrokinetic.png",
    "cartofiserie.png",
    "jidvei.png",
    "m5.webp"
];

export function Parteners() {
    return (
        <section className="py-8 px-8 lg:py-20" id="parteneri">
            <div className="missionContainer mx-auto text-center">
                <Typography
                    variant="h3"
                    className="text-black text-center font-bold mb-6"
                    as="h3"
                >
                    Partenerii ediției 2025
                </Typography>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
                    {SPONSORS.map((logo, key) => (
                        <div
                            key={key}
                            className="flex items-center justify-center bg-white border border-gray-300 rounded-lg p-px aspect-square"
                        >
                            <Image
                                width={156}
                                height={156}
                                src={`/logos/parteners/logo_${logo}`}
                                alt={logo}
                                className="object-contain"
                            />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}

export default Parteners;