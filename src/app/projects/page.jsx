import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  const projects = [
    {
      name: "Vercel E-Com",
      description:
        "A fully functional e-commerce site built with React and Node.js.",
      link: "https://vercel.com/pradipbishts-projects/e-com",
      imageUrl: "pic-2.PNG",
    },
    {
      name: "Zira App",
      description: "A task management app built using React and Firebase.",
      link: "https://zira-khaki.vercel.app/",
      imageUrl: "pic-1.PNG",
    },
    {
      name: "Reading App",
      description:
        "An app to track your reading progress built with React and Firebase.",
      link: "https://reading-target.vercel.app/",
      imageUrl: "pic-3.PNG",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 dark:text-gray-100">
          My Projects
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
                  {project.name}
                </h2>
                <p className="text-lg mb-4 dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline dark:text-teal-400">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div className="mt-12 dark:text-gray-100 text-lg">
          <h2 className="text-3xl font-bold mb-4">Ongoing & Other Projects</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>Twitter Clone:</strong> A social media platform clone
              built using the MERN stack.
            </li>
            <li className="mb-2">
              <strong>Clerk Integration:</strong> Integrating Clerk
              authentication in a new MERN project.
            </li>
            <li className="mb-2">
              <strong>MERN Projects:</strong> I have done many MERN stack
              projects focusing on both front-end and back-end development.
            </li>
          </ul>
        </div>

        {/* Links to Vercel and GitHub */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-gray-100">
            More Links
          </h2>
          <div className="flex justify-center gap-8">
            <a
              href="https://vercel.com/pradipbishts-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-800 hover:text-teal-500 transition-colors dark:text-gray-200 dark:hover:text-teal-400">
              Vercel Projects
            </a>
            <a
              href="https://github.com/pradipbisht"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl text-gray-800 hover:text-teal-500 transition-colors dark:text-gray-200 dark:hover:text-teal-400">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
