import React from "react";
import { FlipWords } from "../../ui/Flipwords";

export function FlipwordsEffect({effectWords=[]}) {
  const words = effectWords

  return (
    <div className="flex justify-center items-center">
    <div className="lg:text-3xl mx-auto font-juno text-neutral-600 dark:text-neutral-400">
      A Passionate
      <FlipWords words={words} />
    </div>
  </div>
  );
}
