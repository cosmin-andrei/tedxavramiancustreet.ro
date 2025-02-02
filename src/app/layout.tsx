import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import React, { Suspense } from "react";
import Head from "next/head";
import Script from "next/script";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "TEDxAvram Iancu Street - Life Changing Decisions",
    description:
        "TEDxAvram Iancu Street este locul unde inspirația și inovația se întâlnesc pentru a schimba lumea. Descoperă poveștile care au schimbat vieți și fă parte dintr-o comunitate de oameni care își doresc să facă o diferență.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ro">
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" type="image/png" />

            {/* SEO Meta Tags */}
            <meta name="title" content="TEDxAvram Iancu Street - Life Changing Decisions" />
            <meta name="description" content="Evenimentul TEDxAvram Iancu Street din Cluj-Napoca aduce în prim-plan povești inspiraționale și decizii care au schimbat vieți. Află mai multe și rezervă-ți locul acum!" />
            <meta name="keywords" content="TEDx, TEDxAvramIancu, TEDx Cluj, eveniment Cluj, inspirație, dezvoltare personală" />
            <meta name="author" content="TEDxAvram Iancu Street" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="content-language" content="ro" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tedxavramiancustreet.ro" />
            <meta property="og:title" content="TEDxAvram Iancu Street - Life Changing Decisions" />
            <meta property="og:description" content="Descoperă povești inspiraționale la TEDxAvram Iancu Street din Cluj-Napoca. Rezervă-ți locul acum!" />
            <meta property="og:image" content="https://tedxavramiancustreet.ro/image/og-image.jpg" />

            {/* Twitter Card */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://tedxavramiancustreet.ro" />
            <meta property="twitter:title" content="TEDxAvram Iancu Street - Life Changing Decisions" />
            <meta property="twitter:description" content="Evenimentul TEDxAvram Iancu Street aduce inspirație și schimbare. Rezervă-ți locul!" />
            <meta property="twitter:image" content="https://tedxavramiancustreet.ro/image/og-image.jpg" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://tedxavramiancustreet.ro" />

            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
                integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
        </Head>
        <body className={roboto.className}>
        {/* CookieYes Script */}
        <Script
            id="cookieyes"
            type="text/javascript"
            src="https://cdn-cookieyes.com/client_data/065537713e9f3f75679a8979/script.js"
            async
        />
        {/* Google Analytics */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-72E9MLT5DC"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-72E9MLT5DC');
                    `}
        </Script>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
