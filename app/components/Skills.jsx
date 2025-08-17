'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaJenkins, FaCode, 
  FaArrowDown
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, 
  SiPostgresql, SiGooglecloud, SiTailwindcss, SiRedux, SiShell, 
  SiFigma, SiHtml5, SiCss3, SiJsonwebtokens, SiFusionauth, 
  SiSocketdotio, SiRedis, SiMysql, SiGithub, SiGit, SiJira, 
  SiBitbucket, SiPostman
} from 'react-icons/si';
import { nunito } from '../page';
import { FaArrowDownLong, FaArrowTurnDown } from 'react-icons/fa6';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React.js', icon: <FaReact className="text-blue-300" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
        { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-white" /> },
        { name: 'Java', icon: <FaJava className="text-red-400" /> },
        { name: 'REST APIs', icon: <SiExpress className="text-green-500" /> },
        { name: 'JWT', icon: <SiJsonwebtokens className="text-pink-500"/>},
        { name: 'OAuth 2.0', icon: <SiFusionauth className="text-purple-500" />},
        { name: 'WebSockets', icon: <SiSocketdotio className="text-gray-600" /> },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: 'GCP', icon: <SiGooglecloud className="text-yellow-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
        { name: 'Jenkins CI/CD', icon: <FaJenkins /> },
        { name: 'Git', icon: <SiGit className="text-orange-500" /> },
        { name: 'GitHub', icon: <SiGithub className="text-gray-700 dark:text-white" /> },
        { name: 'Bitbucket', icon: <SiBitbucket className="text-blue-600" /> },
        { name: 'Shell Scripting', icon: <SiShell className="text-gray-600 dark:text-white" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> },
        { name: 'MySQL', icon: <SiMysql className='text-blue-400'/>},
        { name: 'Redis', icon: <SiRedis className="text-red-500" /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'Jira', icon: <SiJira className="text-blue-500" /> },
        { name: 'VS Code', icon: <FaCode className="text-blue-400" /> },
      ]
    }
  ];

  // Animation for categories
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
    })
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center bg-gray-800 bg-gradient-to-br to-gray-900 md:via-gray-900 from-black py-16 md:mx-0 mx-2">
      
      {/* Big preview icon */}
     <AnimatePresence>
        {hoveredSkill && (
            <motion.div
            key={hoveredSkill.name}
            className="absolute top-22 right-10 hidden md:block"
            initial={{ opacity: 0, scale: 0.2, rotate: -30 }}
            animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.2, rotate: 30 }}
            transition={{ duration: 0.5, type: "spring" }}
            >
            {/* Render the icon fresh with big size */}
            <div className="text-yellow-100 text-[14rem]">
                {hoveredSkill.icon.type 
                ? <hoveredSkill.icon.type className="text-current" /> 
                : hoveredSkill.icon}
            </div>
            </motion.div>
        )}
     </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className={`md:text-5xl text-xl font-bold text-center text-white mb-15 ${nunito.className} gradient-flex ml-15`}>
          Skills and Technologies 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              className="rounded-2xl p-6 border-2 border-amber-400 shadow-[1px_1px_5px_rgba(255,191,129,0.8)]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <h3 className="text-xl font-semibold gradient mb-4 text-center text-amber-400">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="text-md flex items-center text-center space-x-2 bg-black rounded-lg p-3 hover:bg-gray-900 transition-colors border-1 border-amber-400 duration-200 shadow-[0px_1px_3px_rgba(255,255,255,0.4)] cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill.icon}
                    <span className="text-white text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
