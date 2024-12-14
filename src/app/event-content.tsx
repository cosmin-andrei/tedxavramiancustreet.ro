"use client";
import React, { Suspense } from "react";
import {Button, Typography} from "@material-tailwind/react";

export function EventContent() {
  return (
      <div
          className="flex !w-full py-10 mb-5 md:mb-10 flex-col justify-center !items-center bg-black max-w-6xl mx-auto rounded-2xl p-5 ">
        <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
            placeholder=""
            onPointerEnterCapture={() => {
            }}
            onPointerLeaveCapture={() => {
            }}
        >
          Asigură-ți locul la ediția din 2025
        </Typography>
        <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
            placeholder=""
            onPointerEnterCapture={() => {
            }}
            onPointerLeaveCapture={() => {
            }}
        >
          Biletele sunt disponibile în număr limitat la preț redus cu 70%.
        </Typography>
        <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
          <Button
              onClick={() => window.open("/participa", "_self")}
              color="white"
              size="md"
              placeholder=""
              onPointerEnterCapture={() => {
              }}
              onPointerLeaveCapture={() => {
              }}
          >
            Ia-ți biletul acum
          </Button>
        </div>
      </div>
  );
}

export default EventContent;