"use client";

import React from "react";
import Slider from "react-slick";
import {Button, Typography} from "@material-tailwind/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
    { src: "/image/editia2024/participanti.jpg", alt: "Participanti" },
    { src: "/image/editia2024/scena.jpg", alt: "Echipa" },
    { src: "/image/editia2024/speakeri.jpg", alt: "Speakeri 2024" },
    { src: "/image/editia2024/stas-interviu.jpg", alt: "Marian Stas" },
    { src: "/image/editia2024/stefan-raly.jpg", alt: "Stefan ofera flori" },
    { src: "/image/editia2024/tatu-avon.jpg", alt: "Machiaj speakeri" },
];

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="bg-black py-10">
            <div className="missionContainer mx-auto text-center">
                <Typography
                    variant="h3"
                    className="text-white font-bold mb-6"
                    as="h3"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                >
                    2024 - ediția dedicată inovației în educație
                </Typography>

                <div className="max-w-4xl mx-auto">
                    <Slider {...settings}>
                        {sliderImages.map((image, index) => (
                            <div key={index} className="flex justify-center">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <Button
                    onClick={() => (window.location.href = "https://www.facebook.com/media/set/?set=a.287149584426600&type=3&rdid=wx3N3PEUhpglUexd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15S9rvM6oF%2F")}
                    variant="gradient"
                    color="white"
                    className="px-6 py-3 text-gray-900 shadow-lg hover:shadow-xl mt-10 mb-10"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                >
                    Vezi mai multe
                </Button>
            </div>
        </div>
    );
}

export function AboutEvent() {
    return (
        <div>
            <section className="missionContainer mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 px-4 py-10">
                {/* Video Column */}
                <div className="w-full h-[300px] flex justify-center overflow-hidden">
                    <video
                        className="w-[500px] h-full object-cover object-center rounded-lg shadow-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/event-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Text Column */}
                <div className="flex flex-col justify-start space-y-4">
                    <Typography
                        variant="h3"
                        className="font-bold text-black"
                        as="h3"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        TEDxAvram Iancu Street 2025 este despre decizii care îți schimbă viața...
                    </Typography>
                    <Typography
                        variant="lead"
                        className="text-gray-700"
                        as="p"
                        placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                    >
                        Explorează cum alegerile curajoase și momentele de răscruce modelează destine,
                        într-o ediție TEDx dedicată celor care îndrăznesc să schimbe cursul vieții lor.
                    </Typography>
                </div>
            </section>

            {/* Slider Section */}
            <ImageSlider />
        </div>
    );
}

export default AboutEvent;
