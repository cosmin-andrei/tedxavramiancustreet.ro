"use client";

import React from 'react';
import Image from 'next/image';
import styles from './DespreComponent.module.css';

export function DespreComponent() {
    return (
        <div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroText}>
                    <h3>Despre TEDxAvram Iancu Street</h3>
                </div>
            </section>


            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.aboutContentWrapper}>
                        <div className={styles.carouselWrapper}>
                            <Image
                                className={styles.aboutImage}
                                src="/image/editia2024/scena.jpg"
                                alt="Scena TEDxAvramIancuStreet"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className={styles.aboutTextWrapper}>
                            <h2 className={styles.aboutTitle}>Povestea noastră</h2>
                            <p className={styles.aboutText}>
                                Primele încercări pentru organizarea unui eveniment dedicat schimbului de idei au
                                început
                                la Galați în anul 2019, la inițiativa fondatorului Comunității ONedu România, Cosmin.
                                Din
                                păcate, pandemia a făcut ca organizarea unui TEDx pentru educație să fie imposibil,
                                astfel
                                că în 2024, un vis a fost împlinit, visul de a aduce oameni cu idei frumoase și
                                inspiraționale într-un singur loc, pentru a le împărtăși cu ceilalți. Așa a luat naștere
                                TEDxAvram Iancu Street, un eveniment organizat de tineri pentru comunitatea locală și
                                națională.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Echipa #TEDxAvram Iancu Street</h2>
                    <div className={styles.teamWrapper}>
                        {[
                            {name: 'Raly Țonea', role: 'Curator', image: '/image/editia2025/team/ralytonea.png'},
                            {
                                name: 'Bianca Țuligă',
                                role: 'Manager comunicare',
                                image: '/image/editia2025/team/bianca.png'
                            },
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
                            {
                                name: 'Ilia Streche',
                                role: 'Asistent comunicare',
                                image: '/image/editia2025/team/ilia.jpg'
                            },
                            {name: 'Ioana Otilia', role: 'Copywriter', image: '/image/editia2025/team/ioana.jpg'},
                        ].map((member, index) => (
                            <div key={index} className={styles.teamMember}>
                                <Image
                                    className={styles.teamImage}
                                    src={member.image}
                                    alt={member.name}
                                    width={100}
                                    height={100}
                                />
                                <h3 className={styles.teamName}>{member.name}</h3>
                                <p className={styles.teamRole}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DespreComponent;
