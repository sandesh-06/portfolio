import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const TitleUnderline = ({className=""}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      className={`bg-gradient-to-r from-transparent via-neutral-600 dark:via-neutral-700 to-transparent mt-1 mb-5 h-[2px] ${className}`}
    />
  );
};

export default TitleUnderline;
