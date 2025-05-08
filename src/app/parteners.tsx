"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS_BY_CATEGORY: Record<string, string[]> = {
    "Main Partner": ["onedu.png"],
    "Food & Drinks Partners": ["cartofiserie.png", "aqua.svg", "jidvei.png"],
    "Hospitality & Production Partners": [
        "vibrehotel.png", "epg.png", "avon.png", "centrokinetic.png", "m5.webp"
    ],
    "Mobility Partner": ["bdv.png"],
    "Media Partners": ["clujinfo.png", "media9.png", "ilikecluj.png"]
};

export function Parteners() {
    return (
        <section className="py-8 px-8 lg:py-20" id="parteneri">
            <div className="missionContainer mx-auto">
                <Typography
                    variant="h3"
                    className="text-black text-center font-bold mb-12"
                    as="h3"
                >
                    Partenerii ediției 2025
                </Typography>

                {/* Main Partner */}
                <div className="mb-12 text-center">
                    <Typography variant="h5" className="text-gray-800 font-semibold mb-4 text-center">
                        Main Partner
                    </Typography>
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center bg-white border border-gray-300 rounded-lg aspect-square w-36 h-36 p-2">
                            <Image
                                width={120}
                                height={120}
                                src={`/logos/parteners/logo_onedu.png`}
                                alt="onedu"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {Object.entries(SPONSORS_BY_CATEGORY).map(([category, logos]) => {
                    if (category === "Main Partner") return null;

                    return (
                        <div key={category} className="mb-12 text-center">
                            <Typography
                                variant="h5"
                                className="text-gray-800 font-semibold mb-4 text-center"
                            >
                                {category}
                            </Typography>
                            <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                                {logos.map((logo, key) => (
                                    <div
                                        key={key}
                                        className="flex items-center justify-center bg-white border border-gray-300 rounded-lg aspect-square w-36 h-36 p-2"
                                    >
                                        <Image
                                            width={120}
                                            height={120}
                                            src={`/logos/parteners/logo_${logo}`}
                                            alt={logo}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default Parteners;
