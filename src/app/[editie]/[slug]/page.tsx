import Image from 'next/image';
import styles from './SpeakerPage.module.css';
import speakeri from './speakeri.json';
import {Metadata} from 'next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";

export async function generateStaticParams() {
    return speakeri.map((speaker) => {
        return {
            editie: speaker.anul,
            slug: speaker.slug
        };
    });
}

export async function generateMetadata({params}: { params: { editie: string; slug: string } }): Promise<Metadata> {
    const {editie, slug} = params;
    const speaker = speakeri.find((s) => s.anul === editie && s.slug === slug);

    if (!speaker) {
        return {
            title: 'Speaker not found'
        };
    }

    const {prenume, nume_familie, anul} = speaker;
    return {
        title: `${prenume} ${nume_familie} | TEDx Avram Iancu Street ${anul}`,
        description: `Prezentarea speakerului ${prenume} ${nume_familie} la TEDx Avram Iancu Street ${anul}.`
    };
}

export default function SpeakerPage({params}: { params: { editie: string; slug: string } }) {
    const {editie, slug} = params;

    const speaker = speakeri.find((s) => s.anul === editie && s.slug === slug);

    if (!speaker) {
        return <div>Speaker not found</div>;
    }

    const {prenume, nume_familie, calitate, scurtBio, calePoza, linkTEDxTalk, anul} = speaker;

    return (
        <>
            <Navbar/>
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroText}>
                    <h3>{`Ediția ${anul}`}</h3>
                </div>
            </section>

            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <div className={styles.aboutContentWrapper}>
                        <div className={styles.carouselWrapper}>
                            <Image
                                className={styles.aboutImage}
                                src={calePoza}
                                alt={`${prenume} ${nume_familie}`}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className={styles.aboutTextWrapper}>
                            <h1>{prenume} {nume_familie}</h1>
                            <h2 className={styles.speakerCalitate}>{calitate}</h2>
                            <p>{scurtBio}</p>

                            {linkTEDxTalk && linkTEDxTalk.trim() !== '' && (
                                <a
                                    href={linkTEDxTalk}
                                    className={styles.button}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vezi discursul
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}
