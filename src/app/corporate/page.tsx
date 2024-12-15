"use client";

import React from "react";
import styles from "./CorporatePage.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export default function CorporatePage() {
    return (
        <>
            <Navbar/>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
            </section>

            {/* About Section */}
            <section className={styles.aboutSection}>
                <div className={styles.missionContainer}>
                    <div className={styles.aboutContentWrapper}>
                        <div className={styles.carouselWrapper}>
                            <Image
                                className={styles.aboutImage}
                                src="/image/editia2024/stefan-profi.jpg"
                                alt="Participanti TEDxAvramIancuStreet"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className={styles.aboutTextWrapper}>
                            <h2 className={styles.aboutTitle}>Pachete pentru corporate</h2>
                            <p className={styles.aboutText}>
                                Participă la ediția 2025 și oferă echipei tale șansa de a se dezvolta prin activități
                                inspirate, sesiuni interactive și networking valoros. Beneficiază de o experiență unică,
                                învățând noi strategii și idei care îți vor transforma echipa într-un grup mai unit și
                                mai performant, la tarife preferențiale.
                            </p>
                            <br/>
                            <p className={styles.aboutText}>

                                Discută cu noi la <a href="mailto:contact@tedxavramiancustreet.ro" className={styles.emailMission}>contact@tedxavramiancustreet.ro</a>
                                și hai în familia
                                #TEDxAvramIancuStreet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.missSection}>
                <div className={styles.missContainer}>
                    <h2 className={styles.aboutTitle}>Devino partenerul nostru</h2>

                    {/* Imagine */}
                    <div className={styles.missImage}>
                        <Image
                            src="/image/editia2024/participanti2.jpg"
                            alt="Devino partenerul nostru"
                            width={1200}
                            height={100}
                            className={styles.image}
                        />
                    </div>

                    {/* Paragrafe text */}
                    <p className={styles.paragraphMission}>
                        <strong>TEDxAvram Iancu Street – Life Changing Decisions</strong> este un eveniment care își
                        propune
                        să inspire și să provoace prin idei care pot transforma vieți. Evenimentul reunește vorbitori
                        remarcabili, fiecare aducând în scenă experiențe de viață și decizii curajoase care au schimbat
                        traiectorii și au deschis noi perspective.
                    </p>

                    <p className={styles.paragraphMission}>
                        Credem că fiecare decizie importantă vine cu oportunități de creștere și învățare.
                        <i> TEDxAvram Iancu Street</i> creează un spațiu pentru explorarea alegerilor
                        semnificative,
                        susținând valori precum autenticitatea, vulnerabilitatea și curajul. Alătură-te nouă pentru o
                        experiență care te va inspira să îți redefinești propriile decizii și să explorezi noi direcții
                        cu
                        impact pozitiv.
                    </p>

                    {/* Subtitlu */}
                    <h3 className={styles.subtitleMission}>De ce să te alături misiunii TEDx?</h3>

                    {/* Paragraf de încheiere */}
                    <p className={styles.paragraphMission}>
                        Ne dorim să discutăm despre oportunități de colaborare și să explorăm împreună cele mai bune
                        opțiuni
                        care se potrivesc companiei tale. Contactează-ne la{" "}
                        <a href="mailto:contact@tedxavramiancustreet.ro" className={styles.emailMission}>
                            contact@tedxavramiancustreet.ro
                        </a>{" "}
                        și hai în familia #TEDxAvramIancuStreet.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    );
}
