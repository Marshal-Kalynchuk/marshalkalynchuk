"use client";

import { motion, MotionProps } from "framer-motion";
import { Strong, Text } from "@/components/ui/text";
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
      iconBackground: "bg-zinc-100 dark:bg-zinc-900",
      iconForeground: "",
      title: "Memloop.ai",
      websiteLink: "https://www.memloop.ai",
      description: "An AI-powered tool to help you think clearer, remember more, and move faster. Built with Next.js, Tailwind CSS, and a whole lot of love.",
    },
    {
      icon: TicketIcon,
      iconBackground: "bg-indigo-50 dark:bg-indigo-900",
      iconForeground: "text-indigo-700 dark:text-indigo-300",
      title: "Ethereum Ticketing DApp",
      websiteLink: "https://ticketing-dapp.netlify.app/",
      githubLink: "https://github.com/Marshal-Kalynchuk/ethereum-ticketing-app",
      description: "NFT-based event ticketing on Ethereum with on-chain verification and anti-scalping features. Built with Solidity.",
    },
    {
      icon: BookOpenIcon,
      iconBackground: "bg-yellow-50 dark:bg-yellow-900",
      iconForeground: "text-yellow-700 dark:text-yellow-300",
      title: "Readbee",
      description: "Public-domain book reader platform featuring 90,000 books. Built with React, Ruby on Rails, and GCP.",
    },
    {
      icon: BanknotesIcon,
      iconBackground: "bg-green-100 dark:bg-green-900",
      iconForeground: "text-green-700 dark:text-green-300",
      title: "LSTM Crypto Predictor",
      githubLink: "https://github.com/Marshal-Kalynchuk/crypto-lstm-prediction",
      description: "Jupyter notebook demonstrating an LSTM model forecasting cryptocurrency prices on log-returns, complete with performance plots.",
    },
    {
      icon: DocumentTextIcon,
      iconBackground: "bg-rose-50 dark:bg-rose-900",
      iconForeground: "text-rose-700 dark:text-rose-300",
      title: "Surewill",
      githubLink: "https://github.com/Marshal-Kalynchuk/surewill",
      description: "Rails-powered last-will-and-testament platform with user authentication and PDF generation.",
    },
    {
      icon: CodeBracketIcon,
      iconBackground: "bg-teal-100 dark:bg-teal-900",
      iconForeground: "text-teal-700 dark:text-teal-300",
      title: "Puppeteer-Extra Fork",
      githubLink: "https://github.com/Marshal-Kalynchuk/puppeteer-extra",
      description: "Enhanced Puppeteer-Extra recaptcha plugin with on-demand proxy rotation for reliable browser automation.",
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