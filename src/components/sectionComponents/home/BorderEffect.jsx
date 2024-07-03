"use client";
import React from "react";
import { Button } from "../../ui/MovingBorder";
import { motion } from "framer-motion";

export function BorderEffect({ text = "" }) {
  return (
    <a href="Sandesh Resume.pdf" download="Sandesh's Resume">
      <Button
        borderRadius="0.5rem"
        className="bg-neutral-900 font-jost lg:text-lg font-medium dark:bg-slate-800 text-slate-50 border-neutral-200 dark:border-slate-800"
      >
        {text}
      </Button>
    </a>
  );
}
