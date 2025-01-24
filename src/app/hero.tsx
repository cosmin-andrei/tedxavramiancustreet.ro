"use client";

import {Button, Typography} from "@material-tailwind/react";
import React, {useState, useEffect} from "react";
import Image from "next/image";

const speakers = [
    {
        id: 1,
        name: "Ștefan Boca",
        image: "/image/editia2025/speakeri/stefanboca.png",
        link: "/2025/stefan-boca",
    },
    {
        id: 2,
        name: "Raly Țonea",
        image: "/image/editia2025/team/ralytonea.png",
        link: "/2025/raly-tonea",
    },
    // Adaugă alți speakeri aici cu un id unic
];

function Hero() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image/event.jpg')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 text-center">
                    {/* Titlu */}
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
                        as="h1"
                    >
                        Life Changing Decisions
                    </Typography>

                    {/* Subtitlu */}
                    <Typography
                        variant="h4"
                        color="white"
                        className="mb-8 text-lg sm:text-xl lg:text-2xl"
                        as="h4"
                    >
                        24 mai 2025 @ Cluj-Napoca
                    </Typography>

                    {/* Buton */}
                    <Button
                        placeholder="Cumpără bilet"
                        onClick={() => window.location.href = "/ticket"}
                        variant="gradient"
                        color="white"
                        className="px-6 py-3 text-gray-900 shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-12"
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        Cumpără bilet
                    </Button>

                    {/* Speakers */}
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                        {speakers.map((speaker, index) => (
                            <div key={index} className="text-center">
                                <a href={speaker.link} aria-label={`Vizitează profilul lui ${speaker.name}`}>
                                    <Image
                                        height={1200}
                                        width={1200}
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="mx-auto h-32 w-32 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                                    />
                                </a>
                                <Typography
                                    variant="paragraph"
                                    color="white"
                                    className="mt-4 text-base font-semibold"
                                    as="p"
                                >
                                    {speaker.name}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

// Componenta Countdown
function Countdown() {
    let eventDate: Date;
    eventDate = new Date("2025-05-24T13:00:00"); // Data și ora evenimentului
    const [timeLeft, setTimeLeft] = useState({
        luni: 0,
        zile: 0,
        ore: 0,
        minute: 0,
        secunde: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = eventDate.getTime() - now.getTime();

            if (diff > 0) {
                const luni = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
                const zile = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
                const ore = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const secunde = Math.floor((diff % (1000 * 60)) / 1000);

                setTimeLeft({luni, zile, ore, minute, secunde});
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <>
            <div className="py-8 sm:py-12 bg-black text-white text-center">
                <Typography
                    variant="h5"
                    className="mb-4 font-bold text-lg sm:text-2xl"
                    as="h5"
                >
                    Au mai rămas
                </Typography>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div
                            key={key}
                            className={`flex flex-col items-center bg-gray-200 text-black rounded-lg px-2 py-2 sm:px-4 sm:py-2 shadow-lg w-[70px] sm:w-auto ${
                                key === "secunde" ? "hidden sm:flex" : ""
                            }`}
                        >
                            <span className="text-xl sm:text-2xl font-bold">{value}</span>
                            <span className="text-xs sm:text-sm font-medium capitalize">
                                {key}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default function EventPage() {
    return (
        <>
            <Hero/>
            <Countdown/>
        </>
    );
}
