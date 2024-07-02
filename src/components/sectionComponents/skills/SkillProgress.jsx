import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function SkillProgress({ skill = {} }) {
  const circumference = 2 * Math.PI * 120;
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
   if(isInView){
    controls
    .start({
      value: skill.percent,
      transition: { duration: 2, ease: "easeInOut" },
    })
    .then(() => setProgress(skill.percent));
   }
  }, [skill, controls, isInView]);

  useEffect(() => {
    if (progress > 0) {
      const interval = setInterval(() => {
        setDisplayNumber((prev) => {
          if (prev < progress) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return progress;
          }
        });
      }, 20);
    }
  }, [progress, isInView]);

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center text-white"
        // style={{ position: "relative" }}
      >
        <svg
          className="transform -rotate-90 w-40 h-40 sm:w-52 sm:h-52 md:w-58 md:h-58 lg:w-[15.5rem] lg:h-[15.5rem]"
          viewBox="0 0 290 290"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#06b6d4", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1e3a8a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle
            cx="145"
            cy="145"
            r="120"
            stroke="currentColor"
            strokeWidth="20"
            fill="transparent"
            className="text-gray-700"
          />
          <motion.circle
          ref={ref}
            cx="145"
            cy="145"
            r="120"
            stroke="url(#gradient)"
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset:
                circumference - (progress / 100) * circumference,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <motion.span
          className="absolute text-2xl sm:text-3xl md:text-5xl text-neutral-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {displayNumber}%
        </motion.span>
      </div>

      <div className="text-neutral-800 dark:text-slate-100 mt-2 text-lg sm:text-2xl xl:text-4xl">
        <p>{skill.title}</p>
      </div>
    </div>
  );
}

export default SkillProgress;
