"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
    return (
        <a href="https://onedu.ro" target="_blank">
            <Button
                color="white"
                size="sm"
                className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
            >
                <Image
                    width={520}
                    height={50}
                    className="w-12 h-8"
                    alt="Material Tailwind"
                    src="https://assets.onedu.ro/logos/logo.webp"
                />{" "}
                Made by
            </Button>
        </a>
    );
}