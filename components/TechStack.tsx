"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "React", icon: "/react.svg" },
  { name: "MongoDB", icon: "/mongodb.svg" },
  { name: "Node.js", icon: "/nodejs.svg" },
  { name: "TailwindCSS", icon: "/tailwind.png" },
  { name: "Java", icon: "/java.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "Django", icon: "/django.svg" },
];

export function TechStack() {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.01 }}
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center p-6  hover:bg-gray-400 hover:text-black rounded-lg scroll-smooth"
        >
          <div className="relative w-16 h-16 mb-4 ">
            <Image
              src={tech.icon}
              alt={tech.name}
              fill
              className="object-contain"
            />
          </div>
          <span className="text-sm font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}