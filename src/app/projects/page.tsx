"use client";

import { motion, MotionProps } from "framer-motion";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import { MemloopGradient } from "@/components/ui/memloop-gradient";

import { 
  BookOpenIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";

import {
  TicketIcon,
} from "@heroicons/react/24/solid";

const animationProps: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
};

export default function ProjectsPage() {

  const projects: ProjectProps[] = [
    {
      icon: MemloopGradient,
      iconBackground: "bg-zinc-500/15 dark:bg-zinc-500/10",
      iconForeground: "",
      title: "Memloop.ai",
      role: "Founder & Full-Stack Developer",
      websiteLink: "https://www.memloop.ai",
      description: "An AI assistant that knows your business like the back of your hand. Built with a whole lot of love.",
      tech: [
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "React" },
        { name: "Node.js" },
        { name: "OpenAI" },
        { name: "PostgreSQL" },
        { name: "TypeScript" },
      ],
    },
    {
      icon: TicketIcon,
      iconBackground: "bg-indigo-500/15 dark:bg-indigo-500/10",
      iconForeground: "text-indigo-700 dark:text-indigo-500",
      title: "Ethereum Ticketing DApp",
      role: "Solo Solidity & Frontend Dev",
      websiteLink: "https://ticketing-dapp.netlify.app/",
      githubLink: "https://github.com/Marshal-Kalynchuk/ethereum-ticketing-app",
      description: "NFT-based event ticketing with on-chain verification, anti-scalping, and resale royalties.",
      tech: [
        { name: "Solidity" },
        { name: "Ethereum" },
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Sepolia" },
      ],
    },
    {
      icon: BookOpenIcon,
      iconBackground: "bg-yellow-400/20 dark:bg-yellow-400/10",
      iconForeground: "text-yellow-700 dark:text-yellow-400",
      title: "Readbee",
      role: "Founder & Full-Stack Developer",
      description: "A full-stack e-book platform hosting 90,000 books and interactive character chat.",
      tech: [
        { name: "Tailwind CSS" },
        { name: "React" },
        { name: "Ruby on Rails" },
        { name: "OpenAI" },
        { name: "PostgreSQL" },
        { name: "Ruby" },
      ],
    },
    {
      icon: BanknotesIcon,
      iconBackground: "bg-green-500/15 dark:bg-green-500/10",
      iconForeground: "text-green-700 dark:text-green-500",
      title: "LSTM Crypto Predictor",
      role: "Data Scientist / ML Engineer",
      githubLink: "https://github.com/Marshal-Kalynchuk/crypto-lstm-prediction",
      description: "Time-series LSTM model forecasting cryptocurrency log-returns, complete with performance plots.",
      tech: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "Jupyter Notebook" },
      ],
    },
    {
      icon: DocumentTextIcon,
      iconBackground: "bg-rose-400/15 dark:bg-rose-400/10",
      iconForeground: "text-rose-700 dark:text-rose-400",
      title: "Surewill",
      role: "Full-Stack Developer",
      githubLink: "https://github.com/Marshal-Kalynchuk/surewill",
      description: "Online last-will-and-testament creation platform complete with PDF generation.",
      tech: [
        { name: "Tailwind CSS" },
        { name: "Ruby on Rails" },
        { name: "PostgreSQL" },
        { name: "Ruby" }, 
      ],
    },
    {
      icon: CodeBracketIcon,
      iconBackground: "bg-teal-500/15 dark:bg-teal-500/10",
      iconForeground: "text-teal-700 dark:text-teal-500",
      title: "Puppeteer-Extra Fork",
      role: "Open-Source Maintainer",
      githubLink: "https://github.com/Marshal-Kalynchuk/puppeteer-extra",
      description: "Enhanced Puppeteer-Extra recaptcha plugin with on-demand proxy rotation for reliable browser automation.",
      tech: [
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Node.js" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div {...animationProps} className="flex flex-col gap-8">
        <div className="divide-y divide-stone-200 dark:divide-stone-900 overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900 shadow-sm sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project}
              projectIdx={index}
              projectsLength={projects.length}
            />
          ))}
        </div>
      </motion.div>
      
    </div>
  );
} 