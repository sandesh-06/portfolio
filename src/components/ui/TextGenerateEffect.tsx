"use client";
import React, { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";
import { useInView } from "framer-motion";
export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let wordsArray = words.split(" ");
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope.current, isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              ref={ref}
              key={word + idx}
              className="text-neutral-400  opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" text-neutral-400 text-center text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
