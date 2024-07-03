"use client";
import React from "react";
import { CardStack } from "../../ui/CardStack";
import { cn } from "../../../utils/cn";

export function CardStackUI({className=""}) {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-blue-100 text-blue-700 dark:bg-blue-700/[0.2] dark:text-blue-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Fact 1",
    designation: "Languages",
    content: (
      <p>
        I can impress (or confuse) people in five languages: <Highlight>English, Tamil, Telugu, Hindi, and Kannada.</Highlight> Who knew my talent for talking too much could be so <Highlight>versatile</Highlight>?
      </p>
    ),
  },
  {
    id: 1,
    name: "Fact 2",
    designation: "Social Media",
    content: (
      <p>
       I've been off <Highlight>Instagram</Highlight> and <Highlight>Snapchat</Highlight>{" "} 
       for the past year, and life has been great.
      </p>
    ),
  },
  {
    id: 2,
    name: "Fact 3",
    designation: "Skill",
    content: (
      <p>
        I can type at an average of <Highlight>85WPM</Highlight>. It's a shame my code still runs slower than my <Highlight>typing speed</Highlight>!
      </p>
    ),
  },
];
