import React, { useRef } from "react";
import { ContactGlobe, ContactForm, SparklesBackground } from "../components";
import { animate, useInView, motion } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="px-2 md:py-0">
      {/* Sparkle background */}
      <div className="absolute h-full w-[95%]">
        <SparklesBackground />
      </div>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="z-20 py-32"
      >
        <div className="flex md:hidden flex-col items-center">
          <p className="text-white text-center text-4xl py-2 opacity-95 z-0 font-jost">
            CONTACT
          </p>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-1 mb-5 h-[1px] w-1/2" />
        </div>
        <div className="flex flex-col lg:flex-row ">
          {/* Globe */}
          <div className="hidden md:flex lg:block w-full lg:w-1/2 items-center">
            <ContactGlobe />
          </div>

          {/* Form */}
          <div className="w-full flex items-center lg:w-1/2 z-50">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
