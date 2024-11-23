"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

export function BackgroundLinesDemo() {
  const words = `Hello Viewer ${String.fromCodePoint(0x1F44B)} I am Shubair A full stack Developer`;

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-8 border-b border-slate-600 dark:border-white">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <TextGenerateEffect words={words} />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Software Engineer | Full stack Developer | Open-Source Contributor | Ready to work!
      </p>
    </BackgroundLines>
  );
}
