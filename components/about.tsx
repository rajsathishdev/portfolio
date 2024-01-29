"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">Hello, I'm Sathish R, an accomplished full-stack developer with a passion for crafting scalable, clean code. My expertise spans across React (Next.js) with TypeScript, FastAPI, Laravel, MySQL, .NET 4, SQL Server, Redis, AWS, Docker, and Kubernetes. I'm proficient in implementing software patterns to simplify code and achieve loose coupling, ensuring maintainability and scalability.</p>

            <p className="mb-3">I have a strong focus on industry best practices, including Test-Driven Development (TDD), Behavior-Driven Development (BDD), and writing user stories. Proficient in testing frameworks like Jest and PyTest, I prioritize code simplicity, security, and performance. Additionally, I have extensive experience in CI/CD using Bitbucket and AWS, JIRA for project management</p>

            <p  className="mb-3">Currently, I'm expanding my skill set by delving into microservices architecture and Domain-Driven Design (DDD) and AI & Machine Learning. Outside of coding, I enjoy sci-fi and action thriller movies, as well as series and occasionally enrich my knowledge through books on self-improvement and programming. Let's <a href="#contact" className='text-blue-500 underline'>connect</a> and discuss how my diverse skill set can contribute to your projects.</p>
    </motion.section>
  );
}
