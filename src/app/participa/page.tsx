"use client";

import React from "react";
import styles from "./TicketsPage.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const tickets = [
    {
        type: "Standard",
        price: "€10",
        oldPrice: "€32",
        benefits: [
            "Acces la conferință",
            "Album foto de la eveniment",
            "Acces la activări ale partenerilor",
        ],
        buttonText: "IA BILET",
        badge: null,
    },
    {
        type: "Cuplu",
        price: "€19",
        oldPrice: "€61",
        benefits: [
            "Acces la conferință",
            "Album foto de la eveniment",
            "Acces la activări ale partenerilor",
        ],
        buttonText: "IA BILET",
        badge: "OFERTĂ DE CUPLU",
    },
    {
        type: "VIP",
        price: "€20",
        oldPrice: "€65",
        benefits: [
            "Acces la conferință",
            "Album foto de la eveniment",
            "Acces la activări ale partenerilor",
            "Loc în primele rânduri",
            "Acces la cina cu speakerii",
        ],
        buttonText: "IA BILET",
        badge: "Locuri limitate",
    },
];

export function TicketsPage() {
    return (
        <>
            <Navbar/>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
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
                            <button className={styles.buyButton}
                                    onClick={() => window.open("#ticket")}>{ticket.buttonText}</button>
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

            <div className={styles.oveitContainer}>

            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script type="text/javascript" src="https://l.oveit.com/embed/a111c56a72.js?l=ro"
                    data-eventid="a111c56a72" data-init="pending"></script>
            </div>
            <Footer/>
        </>
    );
}

export default TicketsPage;
