import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import "./Projects.css";

const projects = [
  {
    title: "Modern E-Commerce Website (Vanilla JS)",
    description:
      "A fully responsive e-commerce website built with Vanilla JavaScript, HTML, and CSS. Features dynamic product listings, shopping cart functionality, product detail pages, and a smooth checkout process with admin control features.",
    link: "https://resplendent-vacherin-78468e.netlify.app/",
  },
  {
    title: "Bootstrap Admin Panel UI",
    description:
      "A responsive admin dashboard created using HTML, CSS, and Bootstrap. Includes sidebar navigation, data tables, charts, and essential components for backend management and data monitoring.",
    link: "https://admin-panel-ashy-gamma.vercel.app/",
  },
  {
    title: "MERN Stack Blog Application",
    description:
      "A fullstack blog platform developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implements JWT authentication, CRUD operations for posts, and role-based access management for admin and regular users.",
    link: "https://github.com/Taeksha/BLOG-PROJECT",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="projects-title">Projects</h2>
      <div className="project-cards animate__animated animate__backInRight">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              🚀 Live Demo
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
