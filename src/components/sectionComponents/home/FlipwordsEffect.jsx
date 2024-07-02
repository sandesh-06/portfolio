import React from "react";
import { FlipWords } from "../../ui/Flipwords";

export function FlipwordsEffect({effectWords=[]}) {
  const words = effectWords

  return (
    <div className="flex justify-center items-center">
    <div className="sm:text-[3vh] md:text-xl lg:text-[3vh] mx-auto font-juno text-neutral-700 dark:text-neutral-400">
      A Passionate
      <FlipWords words={words} />
    </div>
  </div>
  );
}
