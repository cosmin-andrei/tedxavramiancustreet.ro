"use client";

import {Button, Typography} from "@material-tailwind/react";
import React, {useState, useEffect} from "react";

const speakers = [
    {name: "Ana Morodan", image: "/image/ana-morodan.png", link: "/speaker/ana-morodan"},
    {name: "Sebastian Dobrincu", image: "/image/sebastian-dobrincu.png", link: "/speaker/sebastian-dobrincu"},
    {name: "George Buhnici", image: "/image/george-buhnici.png", link: "/speaker/george-buhnici"},
    {name: "Virgil Ianțu", image: "/image/virgil-iantu.png", link: "/speaker/virgil-iantu"},
    {name: "Horia Tecău", image: "/image/horia-tecau.png", link: "/speaker/horia-tecau"},
    {name: "Mircea Căpățînă", image: "/image/mircea-capatina.png", link: "/speaker/mircea-capatina"},
    {name: "Andreea Roșca", image: "/image/andreea-rosca.png", link: "/speaker/andreea-rosca"},
    {name: "Paul Olteanu", image: "/image/paul-olteanu.png", link: "/speaker/paul-olteanu"},
    {name: "Dan Frînculescu", image: "/image/dan-frinculescu.png", link: "/speaker/dan-frinculescu"},
    {name: "Raly Țonea", image: "/image/editia2025/team/ralytonea.png", link: "/editia2025/raly-tonea"},
];

function Hero() {
    return (
        <div className="relative min-h-[70vh] w-full bg-[url('/image/event.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 h-full w-full bg-black/70" />

            {/* Content */}
            <div className="grid min-h-[70vh] px-4 sm:px-8 pt-20 sm:pt-32 gap-2">
                <div className="missionContainer relative z-10 mx-auto grid place-items-center text-center">
                    {/* Titlu */}
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-1 text-3xl font-bold sm:text-4xl lg:text-5xl"
                        as="h1"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        Life Changing Decisions
                    </Typography>

                    {/* Subtitlu */}
                    <Typography
                        variant="h4"
                        color="white"
                        className="mt-0 mb-4 text-base sm:text-lg lg:text-xl"
                        as="h4"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        24 mai 2025 @ Cluj-Napoca
                    </Typography>

                    {/* Action Button */}
                    <Button
                        onClick={() => (window.location.href = "/participa")}
                        variant="gradient"
                        color="white"
                        className="px-4 sm:px-6 py-2 sm:py-3 text-gray-900 text-sm sm:text-base shadow-lg hover:shadow-xl mb-8 sm:mb-12"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        Cumpără bilet
                    </Button>
                </div>
            </div>
        </div>
    );
}

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

                setTimeLeft({ luni, zile, ore, minute, secunde });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="py-8 sm:py-12 bg-black text-white text-center">
            <Typography variant="h5" className="mb-4 font-bold text-lg sm:text-2xl" as="h5"
                        placeholder=""
                        onPointerEnterCapture={() => {
                        }}
                        onPointerLeaveCapture={() => {
                        }}>
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
                        <span className="text-xs sm:text-sm font-medium capitalize">{key}</span>
                    </div>
                ))}
            </div>
        </div>
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
