import Image from 'next/image';
import styles from './EditiePage.module.css';
import editii from './editii.json';
import speakeri from './[slug]/speakeri.json';
import { Metadata } from 'next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";

// Generăm rutele statice pe baza ediţiilor disponibile
export async function generateStaticParams() {
    return editii.map((editie) => {
        return {
            editie: editie.an.toString(),
        };
    });
}

// Metadate dinamice în funcţie de ediţie
export async function generateMetadata({ params }: { params: { editie: string } }): Promise<Metadata> {
    const editieNumar = parseInt(params.editie, 10);
    const editie = editii.find((e) => e.an === editieNumar);

    if (!editie) {
        return {
            title: 'Edition not found'
        };
    }

    return {
        title: `TEDx Avram Iancu Street ${editie.an}`,
        description: `TEDx Avram Iancu Street ${editie.an} - ${editie.tema}, ${editie.noParticipants} participanți.`
    };
}

export default function EditiePage({ params }: { params: { editie: string } }) {
    const editieNumar = parseInt(params.editie, 10);
    const editie = editii.find((e) => e.an === editieNumar);

    if (!editie) {
        return <div>Ediție negăsită</div>;
    }

    const { an, tema, photo, data, noParticipants } = editie;

    // Filtrăm speakerii care aparțin acestei ediții
    const speakeriiEdiției = speakeri.filter((speaker) => speaker.anul === params.editie);

    return (
        <>
            <Navbar />
            <section className={styles.hero} style={{ backgroundImage: `url(${photo})` }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h2 className={styles.heroSubtitle}>{tema}</h2>
                    <div className={styles.heroDetails}>
                        <p className={styles.heroDetailItem}>
                            <i className="fas fa-calendar-alt"></i> Data: {data}
                        </p>
                        <p className={styles.heroDetailItem}>
                            <i className="fas fa-users"></i> Participanți: {noParticipants}
                        </p>
                    </div>
                </div>
            </section>


            {/* Secțiunea cu speakerii ediției */}
            <section className={styles.speakersSection}>
                <div className={styles.container}>
                    <div className={styles.speakersGrid}>
                        {speakeriiEdiției.map((speaker, idx) => (
                            <a
                                key={idx}
                                href={`/${speaker.anul}/${speaker.slug}`}
                                className={styles.speakerCard}
                            >
                                <div className={styles.speakerImageWrapper}>
                                    <Image
                                        src={speaker.calePoza}
                                        alt={`${speaker.prenume} ${speaker.nume_familie}`}
                                        width={300}
                                        height={300}
                                        className={styles.speakerCardImage}
                                    />
                                </div>
                                <h3 className={styles.speakerCardName}>{speaker.prenume} {speaker.nume_familie}</h3>
                                <p className={styles.speakerCardCalitate}>{speaker.calitate}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
