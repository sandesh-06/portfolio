"use client";
import React from "react";
import { HoverBorderGradient } from "../../ui/HoverBorderGradient";

export function HoverGradient({text=""}) {
  return (
    <div className="">
      <HoverBorderGradient
        containerClassName="rounded-lg"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full"
      >
        <span className="font-nunito">{text}</span>
      </HoverBorderGradient>
    </div>
  );
}
