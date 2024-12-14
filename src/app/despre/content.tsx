"use client";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export function DespreComponent() {
    return (
        <div>
            {/* Hero Section */}
            <section
                style={{
                    width: '100vw',
                    height: '50vh',
                    background: "url('/image/editia2024/stefan-raly.jpg') no-repeat center center",
                    backgroundSize: 'cover',
                    position: 'relative',
                    margin: 0,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}
                ></div>
                <div
                    style={{
                        position: 'relative',
                        maxWidth: '500px',
                        color: '#ffffff',
                        marginLeft: '2rem',
                    }}
                >
                </div>
            </section>

            {/* About Section */}
            <section
                style={{
                    width: '100vw',
                    padding: '3rem 0',
                    backgroundColor: '#fdfdff',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{flex: 1, maxWidth: '500px'}}>
                        <Image
                            style={{borderRadius: '10px', maxWidth: '500px'}}
                            src="/image/editia2024/scena.jpg"
                            alt="Scena TEDxAvramIancuStreet"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div style={{flex: 1, maxWidth: '500px', padding: '1rem'}}>
                        <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                            Povestea noastră
                        </h2>
                        <p style={{fontSize: '1rem', lineHeight: 1.5}}>
                            Primele încercări pentru organizarea unui eveniment dedicat schimbului de idei au început la
                            Galați în anul 2019, la
                            inițiativa fondatorului Comunității ONedu România, Cosmin. Din păcate, pandemia a făcut ca
                            organizarea unui TEDx pentru educație
                            să fie imposibil, astfel că în 2024, un vis a fost împlinit, visul de a aduce oameni cu idei
                            frumoase și inspiraționale într-un
                            singur loc, pentru a le împărtăși cu ceilalți. Așa a luat naștere TEDxAvram Iancu Street, un
                            eveniment organizat de tineri pentru comunitatea locală și națională.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section
                style={{
                    padding: '4rem 2rem',
                }}
            >
                <h2 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: "center"}}>
                    Echipa #TEDxAvramIancuStreet
                </h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {[
                        {name: 'Raly Țonea', role: 'Curator', image: '/image/editia2025/team/ralytonea.png'},
                        {
                            name: 'Claudiu Chiorean',
                            role: 'Asistent curator',
                            image: '/image/editia2025/team/claudiu.png'
                        },
                        {name: 'Bianca Țuligă', role: 'Manager comunicare', image: '/image/editia2025/team/bianca.png'},
                        {
                            name: 'Ștefan Poenaru',
                            role: 'Asistent logistică',
                            image: '/image/editia2025/team/stefan.png'
                        },
                        {
                            name: 'Darius Bordeanu',
                            role: 'Asistent Manager',
                            image: '/image/editia2025/team/dariusb.png'
                        },
                        {name: 'Florin Baciu', role: 'HR Manager', image: '/image/editia2025/team/florinbaciu.png'},
                        {
                            name: 'Darius Constantin',
                            role: 'Asistent comunicare',
                            image: '/image/editia2025/team/dariusconstantin.webp'
                        },
                        {
                            name: 'Vanessa Mathe',
                            role: 'Asistent comunicare',
                            image: '/image/editia2025/team/vanessa.jpg'
                        },
                        {name: 'Ilia Streche', role: 'Asistent comunicare', image: '/image/editia2025/team/ilia.jpg'},
                        {name: 'Ioana Otilia', role: 'Copywriter', image: '/image/editia2025/team/ioana.jpg'},

                    ].map((member, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: '#fff',
                                padding: '1rem',
                                textAlign: 'center',
                                borderRadius: '12px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginBottom: '10px',
                                }}
                                src={member.image}
                                alt={member.name}
                                width={100}
                                height={100}
                            />
                            <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem', color: '#333'}}>
                                {member.name}
                            </h3>
                            <p style={{fontSize: '1rem', color: '#777'}}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default DespreComponent;
