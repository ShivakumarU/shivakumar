'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaJenkins, FaCode
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, 
  SiPostgresql, SiGooglecloud, SiTailwindcss, SiRedux, SiShell, 
  SiFigma, SiHtml5, SiCss3, SiJsonwebtokens, SiFusionauth, 
  SiSocketdotio, SiRedis, SiMysql, SiGithub, SiGit, SiJira, 
  SiBitbucket, SiPostman
} from 'react-icons/si';
import { nunito } from '../page';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsMd(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React.js', Icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'HTML5', Icon: SiHtml5, color: '#E44D26' },
        { name: 'CSS', Icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38BDF8' },
        { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
        { name: 'Java', Icon: FaJava, color: '#007396' },
        { name: 'REST APIs', Icon: SiExpress, color: '#00C853' },
        { name: 'JWT', Icon: SiJsonwebtokens, color: '#A100FF' },
        { name: 'OAuth 2.0', Icon: SiFusionauth, color: '#F58320' },
        { name: 'WebSockets', Icon: SiSocketdotio, color: '#FFFFFF' },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: 'GCP', Icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
        { name: 'Jenkins CI/CD', Icon: FaJenkins, color: '#D24939' },
        { name: 'Git', Icon: SiGit, color: '#F05032' },
        { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
        { name: 'Bitbucket', Icon: SiBitbucket, color: '#0052CC' },
        { name: 'Shell Scripting', Icon: SiShell, color: '#4EAA25' },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
        { name: 'Redis', Icon: SiRedis, color: '#DC382D' }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
        { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
        { name: 'Jira', Icon: SiJira, color: '#2684FF' },
        { name: 'VS Code', Icon: FaCode, color: '#007ACC' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
    })
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 md:bg-gradient-to-bl to-gray-900 md:via-gray-900 from-black py-16 md:mx-0 mx-2"
    >
      {/* Big floating preview icon (only for md and up) */}
      <AnimatePresence>
        {hoveredSkill && isMd && (
          <motion.div
            key={hoveredSkill.name}
            className="absolute top-30 left-10 hidden md:block pointer-events-none"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -20] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <hoveredSkill.Icon color={hoveredSkill.color} size={220} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className={`md:text-5xl text-xl font-bold text-center text-orange-300 mb-15 ${nunito.className}`}>
          Skills and Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              className="rounded-2xl p-6 border-2 border-amber-400 shadow-[1px_1px_5px_rgba(255,191,129,0.8)] bg-black/30 backdrop-blur-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              animate={{ 
                y: [0, -8, 0, 8, 0],
                rotate: [0, -1.5, 0, 1.5, 0] 
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-amber-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="text-md flex items-center text-center space-x-2 bg-black/70 rounded-lg p-3 hover:bg-gray-900 transition-colors border border-amber-400/60 duration-200 shadow-[0px_1px_3px_rgba(255,255,255,0.25)] cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <skill.Icon color={skill.color} className="text-xl md:text-2xl" />
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
