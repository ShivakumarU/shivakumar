'use client';

import { motion } from 'framer-motion';
import { rubik } from '../page';

export default function Projects() {
  const projects = [
    {
      title: 'A Social-Media Platform',
      description:
        'An interactive platform combining writing and debating (“Wribates”) alongside blogs. Features authentication, content creation tools, and lively discussions.',
      tech: 'Next.js, Node.js, Express.js, MongoDB, TailwindCSS, Firebase, GCP',
      link: 'https://www.wribate.com',
      codeLink: 'https://www.github.com/ShivakumarU',
      imgSrc: '/wribate.png'
    },
    {
      title: 'Insurance Investigation App',
      description:
        'A task and case management tool for insurance investigation teams. Enables case tracking, team collaboration, and workflow optimization.',
      tech: 'React.js, JavaScript, MongoDB, Express.js, TailwindCSS, daisyUI',
      link: 'https://tejaswisolutions.vercel.app/home',
      codeLink: 'https://www.github.com/ShivakumarU',
      imgSrc: '/insurance.png'
    },
    {
      title: 'ThinkBoard Todo-List',
      description:
        'A clean to-do list app to organize daily tasks. Features a distraction-free minimal UI. You can track the tasks and modify or delete them at any time.',
      tech: 'React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Redis',
      link: 'https://thinkboard-j3tx.onrender.com',
      codeLink: 'https://www.github.com/ShivakumarU',
      imgSrc: '/thinkboard.png'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } },
    hover: {
      y: -10,
      boxShadow: '0px 25px 60px rgba(138, 43, 226, 0.35)',
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent mb-20"
            >
            See All My Projects
        </motion.h2>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-transform duration-300"
            >
              {/* Project Screenshot */}
              <div className="relative w-full h-48 md:h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-semibold text-lg">
                  View Project
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                <p className={`text-gray-300 mb-4 leading-relaxed ${rubik.className}`}>
                  {project.description}
                </p>
                <p className="text-sm text-green-400 font-medium mb-4">{project.tech}</p>

                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg text-sm font-semibold text-amber-100 hover:text-gray-900 hover:bg-orange-400 bg-indigo-500 transition-colors duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    >
                    Visit
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg text-sm font-semibold text-purple-400 border border-purple-500 hover:text-white hover:border-pink-500 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
