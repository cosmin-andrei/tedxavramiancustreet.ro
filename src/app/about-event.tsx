"use client";

import React from "react";
import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";

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
            <div className="container mx-auto text-center">
                <Typography
                    variant="h5"
                    className="text-white font-bold mb-6"
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

                <button className="mt-8 bg-white text-black py-2 px-4 rounded shadow-md hover:shadow-lg">
                    Vezi mai multe
                </button>
            </div>
        </div>
    );
}

export function AboutEvent() {
    return (
        <div>
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 px-4 py-10">
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
                    >
                        I Love Failure (ILF) 2024 is about innovation and creativity...
                    </Typography>
                    <Typography
                        variant="lead"
                        className="text-gray-700"
                        as="p"
                    >
                        At its heart, ILF 2024 is a love letter to all the setbacks,
                        missteps, and challenges that have defined our lives. It’s an
                        emotional rollercoaster that guides you through the valleys of
                        despair to the peaks of innovation. The stories shared here are
                        not just anecdotes; they are heart-wrenching and inspiring
                        narratives of individuals who’ve turned their failures into
                        beautiful stories of resilience and success.
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="italic text-gray-600"
                        as="p"
                    >
                        “There is no innovation and creativity without failure. Period.”
                        – Brene Brown
                    </Typography>
                    <Typography
                        variant="lead"
                        className="text-gray-700"
                        as="p"
                    >
                        At I Love Failure Innovation, you will find 2 days in which very
                        diverse speakers from top entrepreneurs, investors, influencers to
                        high-performing athletes and artists, will deliver short powerful
                        speeches about their failures & lessons learned.
                    </Typography>
                </div>
            </section>

            {/* Slider Section */}
            <ImageSlider />
        </div>
    );
}

export default AboutEvent;
