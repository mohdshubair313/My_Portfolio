"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { LaptopScene } from "@/components/LaptopScene";
import { TechStack } from "@/components/TechStack";
import { Navigation } from "@/components/Navigation";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";


export default function Home() {
  const router = useRouter();

  const NavigatetoProject = () => {
    router.push('/projects')
  }
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1Y3WqIpQ2GooUqI_PwrN3nBwpMTYxLcSw/view?usp=drive_link', '_blank');
  };

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(".tech-stack", {
        scrollTrigger: {
          trigger: ".tech-stack",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        y: 0,
        opacity: 1,
        duration: 1,
      });
    }
  }, []);

  return (
    <main className="m/in-h-screen text-gray-600 scroll-smooth dark:bg-[#222831] dark:text-white ">
      <Navigation />
      <BackgroundLinesDemo />

      <section ref={containerRef} className="mt-20 relative min-h-screen border-b border-slate-600">
        <div className="container mt-5 mx-auto px-4">
          <div className="tech-stack translate-y-20 opacity-0">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </div>
      </section>

      <section className="relative min-h-screen py-20 dark:bg-neutral-900/50 border-b border-slate-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <LaptopScene />
          </div>

          <button
            onClick={NavigatetoProject}
            className="ml-28 h-16 w-40 relative text-lg flex items-center justify-center font-semibold  text-white rounded-3xl shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
            transition-transform duration-400 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300">
            My Projects
          </button>

          </div>
      </section>

      <section className="py-20 border-t-blue-500">
        <div className="container mx-auto px-4 text-center border-t-blue-500">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <div className="flex gap-4 justify-center">
            <button className="text-gray-800 dark:text-white h-10 rounded-full font-semibold focus:shadow-outline px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl ">
              Contact me
            </button>
            <button onClick={handleClick} className="text-gray-800 dark:text-white font-semibold h-10 rounded-full focus:shadow-outline px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-xl ">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}