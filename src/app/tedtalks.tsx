"use client";

import {Button, Typography} from "@material-tailwind/react";
import React, {useState} from "react";
import Modal from "react-modal";

const VIDEOS = [
    {
        name: "Alin Chifor",
        image: "/image/editia2024/speakeri/alinchifor.webp",
        videoUrl: "https://www.youtube.com/embed/ehMmQ2XTuh0?si=Ira8Fv5MoECU5WLG",
    },
    {
        name: "Mihaela Tatu",
        image: "/image/editia2024/speakeri/mihaelatatu.jpeg",
        videoUrl: "https://www.youtube.com/embed/RookWZmol0k?si=m4ZcZMz_pohRoB5k",
    },
    {
        name: "Titus și Iris",
        image: "/image/editia2024/speakeri/titusiris.webp",
        videoUrl: "https://www.youtube.com/embed/eAu9Bm_DnPc?si=dWNY8XTWYOl-chsf",
    },
    {
        name: "Raly Țonea",
        image: "/image/editia2024/speakeri/ralytonea.jpg",
        videoUrl: "https://www.youtube.com/embed/i0IousWQF-0?si=awhPVOWtXOCDDvWm",
    },
    {
        name: "Marian Staș",
        image: "/image/editia2024/speakeri/marianstas.webp",
        videoUrl: "https://www.youtube.com/embed/9KHppPkPl-o?si=UIN0ja0UzhtuhTlS",
    },

];

export function Tedtalks() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const openModal = (videoUrl: string) => {
        setCurrentVideo(videoUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentVideo("");
    };

    return (
        <section className="container mx-auto py-16">
            <Typography
                variant="h3"
                className="text-black text-center font-bold mb-6"
                as="h3"
                placeholder=""
                onPointerEnterCapture={() => {
                }}
                onPointerLeaveCapture={() => {
                }}
            >
                Inspirație de la edițiile anterioare
            </Typography>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {VIDEOS.map((video, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                        onClick={() => openModal(video.videoUrl)}
                    >
                        <img
                            src={video.image}
                            alt={video.name}
                            className="w-full h-56 object-cover group-hover:opacity-75"
                        />
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all">
                            <div className="bg-white p-2 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <Typography
                            variant="paragraph"
                            className="absolute bottom-0 left-0 w-full bg-black/75 text-white text-center py-2 text-sm font-bold"
                        >
                            {video.name}
                        </Typography>
                    </div>
                ))}
            </div>

            <div className="missionContainer mx-auto text-center">
                <Button
                    onClick={() => (window.location.href = "/2024")}
                    variant="gradient"
                    color="red"
                    className="px-6 py-3 text-white shadow-lg hover:shadow-xl mt-10 mb-10"
                    placeholder=""
                    onPointerEnterCapture={() => {
                    }}
                    onPointerLeaveCapture={() => {
                    }}
                >
                    Edițiile noastre precedente
                </Button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center bg-black/75"
                overlayClassName="fixed inset-0 bg-black/50"
            >
                <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
                    >
                        ✕
                    </button>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src={currentVideo}
                            title="Video"
                            className="w-full h-[400px]"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </Modal>
        </section>
    );
}

export default Tedtalks;
