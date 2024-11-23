"use client";

import { motion } from "framer-motion";
import { Monitor, User, Briefcase, Mail, BarChart2 as Stats } from "lucide-react";
import { useEffect, useState } from "react";


export function Navigation() {
  const [darkmode, setdarkmode] = useState('light')

  const toggleDarkMode = () => {
    const newMode = darkmode === 'light' ? 'dark' : 'light';
    setdarkmode(newMode);

    if(newMode === 'dark') {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(()=> {
    const savedDarkMode = localStorage.getItem('theme') || 'light';
    setdarkmode(savedDarkMode);

    if(savedDarkMode === "dark") {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 dark:[#222831] shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-300 cursor-pointer"
          >
            
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6 dark:text-gradient-to-r from-buttonmix via-buttonmix2 to-buttonmix3:">
            <NavItem icon={<Monitor />} text="Home" href="#home" />
            <NavItem icon={<User />} text="About" href="#about" />
            <NavItem icon={<Briefcase />} text="Projects" href="#projects" />
            <NavItem icon={<Stats />} text="Stats" href="#stats" />
            <NavItem icon={<Mail />} text="Contact" href="#contact" />
          </div>

          {/* CTA Button */}
          <motion.button
          onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className= " font-semibold text-slate-800 rounded-full w-15 h-10 dark:text-white"
          >
            {darkmode === 'light' ? 'Dark Mode' : "Light Mode"}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavItem({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, x: 5 }}
      href={href}
      className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-600 hover:text-buttonmix2 dark:hover:text-buttonmix3 transition-all cursor-pointer"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </motion.a>
  );
}
