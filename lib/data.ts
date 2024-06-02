import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reltivaImg from "@/public/reltiva.png";
import innoworkImg from "@/public/innowork.png";
import hrmsImg from "@/public/hrms.png";
import jmsImg from "@/public/jms.jpg";
import { SiVisualstudio } from "react-icons/si";
import { FaPython } from "react-icons/fa";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Developer",
    location: "Synergent Tech Solutions, Chennai",
    description:
      "I possess extensive experience in developing web products utilizing Laravel, Express.js, MySQL, React, TypeScript, and Tailwind, with a primary focus on RESTful APIs. I collaborate closely with clients to define problem specifications, design systems, and ensure accurate implementation of requirements.",
    icon: React.createElement(FaReact),
    date: "Feb 2021 - Present",
  },
  {
    title: "Lead Developer",
    location: "Chennovate Solutions",
    description:"I have led the development and deployment of web products, adhering to industry best practices, utilizing Laravel, Angular, and Python.",
    icon: React.createElement(FaPython),
    date: "Feb 2017 - Jan 2021",
  },
  {
    title: "Junior Developer",
    location: "Lapiz Digital Services, Vellore",
    description:"I crafted web and desktop applications using .NET Framework 4, collaborating with stakeholders to realize their vision. By creating workflow processing apps, I significantly enhanced performance and productivity, increasing employee productivity by 200% while improving output quality by 120%. These efforts were recognized with the 'Best Employee of the Year' award.",
    icon: React.createElement(SiVisualstudio),
    date: "Jan 2015 - Dec 2016",
  },
] as const;

export const projectsData = [
  {
    title: "Reltiva (Jupiter)",
    description:
      "The application includes features such as Timesheet, Expense, Invoice, and Credit Note, enabling customers to efficiently manage their Order to Cash flow.",
    tags: ["Typescript", "React", "Express.js","Tailwind",  "MySQL", "AWS", "Docker"],
    imageUrl: reltivaImg,
  },
  {
    title: "Reltiva (TCM)",
    description: "The application handles tenant configuration, onboarding, subscriptions, and super admin roles for each client, while also offering analytics features.",
    tags: ["Typescript", "React", "Laravel", "Tailwind", "MySQL", "AWS", "Docker"],
    imageUrl: reltivaImg,
  },
  {
    title: "Performance Management System",
    description: "The application helps organizations assess employee performance to meet OKRs through task assignments and performance evaluations.",
    tags: ["Angular", "Laravel", "Flask", "MySQL", "AWS"],
    imageUrl: innoworkImg,
  },
  {
    title: "Learning Experience Platform",
    description: "The application identifies role competencies, assesses employee skills, recommends courses, and tracks skill development.",
    tags: [ "Codeigniter", "MySQL", "Python", "AngularJS", "AWS"],
    imageUrl: innoworkImg,
  },
  {
    title: "Journal Workflow Management System",
    description:
      "Desktop application to streamline 12 different workflows for E-publishing clients, ensuring process adherence while enhancing productivity and quality.",
    tags: ["C#", "WPF", "SQL Server"],
    imageUrl: jmsImg,
  },
  { 
    title: "Human Resource Management System",
    description:
      "A web app with payroll, attendance and shift management, utilizes desktop application data for productivity tracking and reporting.",
    tags: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
    imageUrl: hrmsImg,
  },
] as const;

export const skillsData = [
  
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Tailwind",
  "Laravel",
  "FastAPI",
  "AWS",
  "Docker",
  // "Kubernetes",
  "Test Driven Development (TDD)",
  // "Behavior Driven Development (BDD)",
  "REST API Design",
  "Project Managemet",
  "Node.js",
  "Express.js",
  "Git",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "PHP",
  "Python",
  "Codeigniter",
  "HTML",
  "CSS",
  "JavaScript",
  ".NET 4",
  "C#",
  "Framer Motion",
  "User Stories"
  //API Hacking
  //Domain Driven Design (DDD)
  //Algorithms and Data Structures
  //Microservices
  //AI and Machine Learning
] as const;
