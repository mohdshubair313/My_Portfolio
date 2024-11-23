"use client";

import React, { useState } from "react";

export function GridBackgroundDemo() {

  const [darkmode, setdarkmode] = useState('light');

  const darkmodebutton = () => {
      const currMode = darkmode === 'light' ? 'dark' : 'light'
      setdarkmode(currMode);

      if(currMode === 'dark') {
        document.documentElement.classList.add('dark');
      }
      else {
        document.documentElement.classList.remove('dark');
      }
  }
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
      <button onClick={darkmodebutton}>Dark Mode</button>
    </div>
  );
}
