import React from "react";
import { cn } from "../../utils/cn";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { motion } from "framer-motion";

export function ProjectDisplay() {
  return (
    <BentoGrid className="max-w-4xl mx-auto font-sans">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={item.className ? item.className : ''}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({imgSrc=""}) => (
    <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
    <img className="w-full h-full rounded-md object-cover" src={imgSrc} alt="" />
  </div>
  
);
const items = [
  {
    title: "Env-sync",
    description: "A website for retrival and prediction of real-time air quality insights and smart waste management using ML with Env Sync.",
    header: <Skeleton imgSrc={"https://res.cloudinary.com/sandesh-06/image/upload/v1720032510/portfolio/fljwakgdmdwxpkec6l6b.png"}/>,
    link: "https://github.com/sandesh-06/env-sync",
    className: ""
  },
  {
    title: "Lifeline",
    description: "A platform for managing medical documents and accessing complete health details, including family medical history.",
    header: <Skeleton  imgSrc={"https://res.cloudinary.com/sandesh-06/image/upload/v1720032508/portfolio/sxyv5cnlvgtgvzxmcsjd.png"}/>,
    link: "https://github.com/sandesh-06/lifeline-site",
    className: ""
  },
  {
    title: "Real-Estate Website",
    description: "Developed a comprehensive real estate platform using the MERN stack, with seamless property browsing and detailed listings.",
    header: <Skeleton  imgSrc={"https://res.cloudinary.com/sandesh-06/image/upload/v1720032506/portfolio/smwvcctmwoxjmr5z4qpj.png"}/>,
    link: "https://github.com/sandesh-06/Real_Estate_Site",
    className: ""
  },
  {
    title: "Project+",
    description:"Developed a project management tool for creating projects, assigning tasks, setting deadlines, and tracking progress.",
    header: <Skeleton  imgSrc={"https://res.cloudinary.com/sandesh-06/image/upload/v1720032512/portfolio/itc3bymsgij25oonxezq.png"}/>,
    link: "https://github.com/sandesh-06/HCL_PROJECT",
    className: "md:col-span-2"
  },
  {
    title: "MERN Dashboard",
    description: "Developed a user-friendly data analysis dashboard for visualization and insights.",
    header: <Skeleton  imgSrc={"https://res.cloudinary.com/sandesh-06/image/upload/v1720032507/portfolio/bu0tuvf6fbxsax1yttyp.png"}/>,
    link: "https://github.com/sandesh-06/MERN_Dashboard",
    className: ""
  },

  {
    title: "COMITY (upcoming)",
    description: "A community-based social media platform that enables users to connect within communities, host and join them with just a few clicks.",
    header: <Skeleton  imgSrc={"https://res.cloudinary.com/sandesh-06/image/upload/v1720032505/portfolio/wp8ngdrbmawjnaiv5hr0.png"}/>,
    link: "",
    className: "md:col-span-3"
  },
];
