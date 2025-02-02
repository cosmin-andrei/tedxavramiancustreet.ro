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