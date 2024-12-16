import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";
import React, { Suspense } from "react";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEDxAvram Iancu Street - Life Chaning Decisions",
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
        {/* Nepcha Analytics */}
        <script
            defer
            data-site="https://tedxavramiancustreet.ro"
            src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>

        {/* Google Tag Manager */}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-72E9MLT5DC"
        ></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-72E9MLT5DC');
            `,
            }}
        ></script>

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />

        {/* Font Awesome */}
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
        />
      </Head>
      <body className={roboto.className}>
      <Layout>
        {children}
        {/*<FixedPlugin />*/}
      </Layout>
      </body>
      </html>
  );
}
