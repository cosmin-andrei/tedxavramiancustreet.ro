"use client";

import React, { useRef } from "react";
import styles from "./TicketsPage.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const tickets = [
    {
        type: "Standard",
        price: "€20",
        oldPrice: "€50",
        benefits: [
            "Acces la conferință",
            "Album foto de la eveniment (digital)",
            "Acces la activări ale partenerilor",
        ],
        buttonText: "Ia bilet acum",
        badge: null,
    },
    {
        type: "Cuplu",
        price: "€38",
        oldPrice: "€98",
        benefits: [
            "Acces la conferință",
            "Album foto de la eveniment (digital)",
            "Acces la activări ale partenerilor",
        ],
        buttonText: "Ia bilet acum",
        badge: "OFERTĂ DE CUPLU",
    },
    {
        type: "Ambasador",
        price: "€45",
        oldPrice: "€100",
        benefits: [
            "Acces la conferință",
            "Album foto de la eveniment (digital)",
            "Acces la activări ale partenerilor",
            "Loc în primele rânduri",
            "Acces la cina cu speakerii",
        ],
        buttonText: "Ia bilet acum",
        badge: "LOCURI LIMITATE",
    },
];

export default function TicketsPage() {
    const oveitRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroText}>
                    <h3>Participă acum</h3>
                </div>
            </section>

            {/* Tickets Section */}
            <div className={styles.ticketsContainer}>
            <h1 className={styles.title}>LIFE CHANGING DECISIONS <span>TICKETS</span></h1>
                <div className={styles.ticketsWrapper}>
                    {tickets.map((ticket, index) => (
                        <div key={index} className={styles.ticketCard}>
                            {ticket.badge && <div className={styles.badge}>{ticket.badge}</div>}
                            <h2 className={styles.ticketType}>{ticket.type}</h2>
                            <div className={styles.priceWrapper}>
                                {ticket.oldPrice && (
                                    <span className={styles.oldPrice}>{ticket.oldPrice}</span>
                                )}
                                <span className={styles.newPrice}>{ticket.price}</span>
                            </div>
                            <button
                                className={styles.buyButton}
                                onClick={() =>
                                    oveitRef.current?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                {ticket.buttonText}
                            </button>
                            <div className={styles.benefits}>
                                <h3>Ce este inclus:</h3>
                                <ul>
                                    {ticket.benefits.map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Oveit Embed Section */}
            <div
                className={styles.oveitContainer}
                id="oveitContainer"
                ref={oveitRef}
                dangerouslySetInnerHTML={{
                    __html: `<script type="text/javascript" src="https://l.oveit.com/embed/a111c56a72.js?l=ro" data-eventid="a111c56a72" data-init="pending"></script>`,
                }}
            ></div>

            <Footer />
        </>
    );
}
