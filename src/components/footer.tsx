"use client";
import {Typography} from "@material-tailwind/react";
import React from "react";
import Image from "next/image";


const LINKS = [
    {name: "Confidențialitate", url: "https://onedu.ro/privacy"},
    {name: "Termeni", url: "https://onedu.ro/terms"},
    {name: "Contact", url: "mailto:contact@tedxavramiancustreet.ro"},
];

export function Footer() {
    return (
        <footer className="bg-black text-white py-8 relative">
            <div className="missionContainer mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="flex-1 flex justify-start pb-4 md:pb-0">
                    <ul className="flex flex-wrap gap-4">
                        {LINKS.map((link, index) => (
                            <li key={index}>
                                <Typography
                                    as="a"
                                    href={link.url}
                                    variant="small"
                                    className="font-normal text-white hover:text-gray-300 transition-colors"
                                    placeholder=""
                                    onPointerEnterCapture={() => {
                                    }}
                                    onPointerLeaveCapture={() => {
                                    }}
                                >
                                    {link.name}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center items-center gap-4 pb-4 md:pb-0">
                    <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/logos/SAL.png"
                            alt="SAL - Soluționarea alternativă a litigiilor"
                            width={100}
                            height={100}
                        />
                    </a>
                    <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                       target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/logos/SOL.png"
                            alt="SOL - Soluționarea online a litigiilor"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>

                <div className="flex flex-1 justify-end items-center space-x-2">
                    <Typography variant="small" className="text-white font-semibold text-sm"
                                placeholder=""
                                onPointerEnterCapture={() => {
                                }}
                                onPointerLeaveCapture={() => {
                                }}>
                        Partener digitalizare
                    </Typography>
                    <a href="https://web365.ro" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/logos/web365-logo.png"
                            alt="Partener Digitalizare"
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
