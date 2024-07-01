"use client";
import React from "react";
import { SparklesCore } from "../../ui/Sparkles";
import { motion } from "framer-motion";
export function SparklesBackground({ children }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
