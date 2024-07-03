import React from "react";
import { cn } from "../../utils/cn";
import { useAnimate, stagger, motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link?: string;
}) => {
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
      transition={{ duration: 0.2 }}
      className={cn(
        "row-span-1 cursor-default rounded-xl  hover:shadow-xl shadow-input p-3 bg-black border-white/[0.2] justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <a
          href={link}
          target={link ? "_blank" : "_self"}
          className="hover:underline font-sans font-bold text-neutral-300 mb-2 mt-2 sm:text-xl flex gap-3 items-center"
        >
          <span>{title}</span>
          <span><FaExternalLinkAlt size={"15px"} /></span>
        </a>
        <div className="hidden sm:block font-sans font-normal text-neutral-500 text-[15px] ">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
