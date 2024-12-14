"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const SPONSORS = [
  "onedu.png",
  "epg.png",
  "aqua.svg",
  "jidvei.png",
  "avon.png",
  "cartofiserie.png",
  "publica.webp",
  "m5.webp",
  "cinema.webp",
  "primarie.webp",
  "ellproject.png"
];

export function Parteners() {
  return (
      <section className="py-8 px-8 lg:py-20">
        <div className="container mx-auto text-center">
          <Typography
              variant="h3"
              className="text-black text-center font-bold mb-6"
              as="h3"
              placeholder=""
              onPointerEnterCapture={() => {
              }}
              onPointerLeaveCapture={() => {
              }}
          >
           Partenerii ediției 2024
          </Typography>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {SPONSORS.map((logo, key) => (
                <div
                    key={key}
                    className="w-40 h-40 flex items-center justify-center bg-white border border-gray-300 rounded-lg p-4"
                >
                  <Image
                      width={156}
                      height={156}
                      src={`/image/editia2024/parteners/logo_${logo}`}
                      alt={logo}
                      className="object-contain"
                  />
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Parteners;
