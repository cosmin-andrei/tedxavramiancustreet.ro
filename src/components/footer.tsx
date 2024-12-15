import {Typography} from "@material-tailwind/react";
import React from "react";

const CURRENT_YEAR = new Date().getFullYear();

const LINKS = [
    {name: "Confidențialitate", url: "https://onedu.ro/confidentialitate"},
    {name: "Termeni", url: "https://onedu.ro/termeni"},
    {name: "Contact", url: "mailto:contact@tedxavramiancustreet.ro"},
];

export function Footer() {
    return (
        <footer className="bg-black text-white py-8 relative">
            {/* Footer Content */}
            <div className="missionContainer mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                {/* Links Section Aliniate la stânga */}
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

                {/* SAL și SOL imagini aliniate la mijloc */}
                <div className="flex justify-center items-center gap-4 pb-4 md:pb-0">
                    <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/logos/SAL.png"
                            alt="SAL - Soluționarea alternativă a litigiilor"
                            className="h-6 w-auto"
                        />
                    </a>
                    <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                       target="_blank" rel="noopener noreferrer">
                        <img
                            src="/logos/SOL.png"
                            alt="SOL - Soluționarea online a litigiilor"
                            className="h-6 w-auto"
                        />
                    </a>
                </div>

                {/* Partners Section */}
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
                        <img
                            src="/logos/web365-logo.png"
                            alt="Partener Digitalizare"
                            className="h-6 w-auto"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
