import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiCloud } from "react-icons/fi"; // Cloud icon for Vercel

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 text-gray-900 transition-all">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 dark:text-gray-100">
          About Me
        </h1>

        {/* Centered Paragraph */}
        <p className="text-lg sm:text-xl mb-6 dark:text-gray-100 mx-auto max-w-2xl">
          Hello! I’m Pradip Bisht, a passionate MERN Stack Developer who
          specializes in front-end technologies (React) and back-end development
          (Node.js). I started learning through resources like Udemy and
          YouTube, and I’ve practiced my skills by building several projects. I
          am constantly evolving as a developer, and I'm excited to learn more
          and take on new challenges.
        </p>

        <p className="text-md sm:text-lg mb-6 dark:text-gray-100">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:pradipbisht007@gmail.com"
            className="text-teal-500 hover:underline dark:text-gray-100">
            pradipbisht007@gmail.com
          </a>
        </p>

        {/* Social Links Section */}
        <div className="flex justify-center gap-8 mb-8 dark:text-gray-100">
          <a
            href="https://vercel.com/pradipbishts-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl dark:text-gray-100 text-gray-800 hover:text-teal-500 transition-colors">
            <FiCloud /> {/* Vercel cloud icon */}
          </a>
          <a
            href="https://github.com/pradipbisht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl dark:text-gray-100 text-gray-800 hover:text-teal-500 transition-colors">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pradip-bisht-879753271"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl dark:text-gray-100 text-gray-800 hover:text-teal-500 transition-colors">
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Pradip91478309"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl dark:text-gray-100 text-gray-800 hover:text-teal-500 transition-colors">
            <FaTwitter />
          </a>
          <a
            href="mailto:pradipbisht007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl dark:text-gray-100 text-gray-800 hover:text-teal-500 transition-colors">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
