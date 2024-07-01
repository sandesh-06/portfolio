"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";


export function TextGenerate({sentence=""}) {
    const words = sentence;

  return <TextGenerateEffect words={words} />;
}
