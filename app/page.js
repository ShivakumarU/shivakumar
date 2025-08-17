"use client"
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { Roboto, Playfair_Display, Pacifico, Edu_NSW_ACT_Foundation, Barlow_Condensed, Nunito, Rubik } from 'next/font/google';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaExternalLinkAlt, } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiGooglecloud, SiHtml5, SiCss3, SiTailwindcss, SiRedux, SiShell, SiFigma } from "react-icons/si";
import { MdFileDownload } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import ResumeModal from "./components/ResumeModal";
import Skills from './components/Skills';



export const roboto = Roboto({ subsets: ['latin'], weight: ['500'] })
export const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600'] })
export const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })
export const eduHand = Edu_NSW_ACT_Foundation({
  weight: ["600"], 
  subsets: ["latin"], 
});
export const barlowCondensed = Barlow_Condensed({
  weight: ['500'],
  subsets: ['latin'],
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  const phrases = [
    { article: "a", role: "Full Stack Developer" },
    { article: "a", role: "Software Engineer" },
    { article: "an", role: "Artist . . ." },
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[index].role;

    if (!isDeleting && subIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100); 

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-200">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center md:bg-gradient-to-br from-gray-900 to-black via-gray-900 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {isVisible && (<div className={`${nunito.className} bg-amber-900 text-center flex items-center justify-between rounded-2xl md:w-49 md:text-sm px-2 absolute md:left-15 md:top-40 text-[8px] top-29 left-35`}>
               <span> Welcome to My Portfolio 🙏</span>
               <button
                  onClick={() => setIsVisible(false)}
                  className="absolute md:top-[-22px] top-[-14px] right-0 mt-1 mr-1 text-orange-200 font-bold hover:text-gray-200 cursor-pointer"
                >
                  ✕
                </button>
            </div>)}
            <div className="w-24 h-40 md:w-40 md:h-70 mx-auto mb-5 md:mb-8 mt-4 rounded-4xl overflow-hidden">
              <Image
                src="/Pasted_image.png" 
                alt="ShivaKumar Ummeda"
                width={160}
                height={160}
                className="object-cover md:mt-[-25px] mt-[-15px]"
                priority
              />
            </div>
            <h1 className={`text-xl md:text-5xl sm:text-2xl font-bold text-orange-100 md:mb-6 mb-3 ${nunito.className}`}>
              Hie <span className='wave-hand'>👋</span>, I&apos;m <span className={`text-2xl md:text-5xl sm:text-2xl gradient-flex ${nunito.className}`}>ShivaKumar Ummeda</span>
            </h1>
            <p
              className={`text-lg md:text-3xl text-orange-100 md:mb-8 mb-4 ${barlowCondensed.className}`}
            >
              <span className="text-orange-400">
                {phrases[index].article}&nbsp;
              </span>
              {phrases[index].role.substring(0, subIndex)}
              <span className="animate-pulse">|</span>
            </p>
            <p className={`text-sm md:text-lg text-gray-400 max-w-3xl mx-auto ${eduHand.className}`}>
              Passionate about creating innovative web solutions and turning ideas into reality through code.
            </p>
            <div className="mt-6 md:mt-8 flex justify-center space-x-6 text-md md:text-2xl">
              <a href="https://github.com/ShivakumarU" title='GitHub' target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivakumarummeda29/" title='LinkedIn' target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/trendie_calligraphie/" title='Instagram' target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
                <FaInstagram />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ummedashivakumar@gmail.com&su=Hello%20ShivaKumar&body=Hi%20ShivaKumar,"
                target="_blank" title='Email'
                rel="noopener noreferrer"
                className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100"
              >
                <FaEnvelope />
              </a>  
            </div>
            <div className="md:mt-8 mt-6 flex flex-col sm:flex-row md:gap-4 gap-3 justify-center items-center">
              <ResumeModal />
              <Link
                href="#contact"
                className=" w-fit flex items-center justify-center gap-2 bg-gradient-to-r to-orange-800 via-pink-700 from-purple-900 text-orange-100 md:px-4.5 md:py-2.5 rounded-lg md:font-medium  hover:from-purple-900 hover:to-pink-700 hover:via-purple-900 hover:text-gray-100 transition-colors duration-200 px-4 py-1.5 md:text-lg text-sm"
              >
                Get In Touch <FaLocationArrow className="md:text-lg text-sm leftRight" />
              </Link>
            </div>
          </div>
      </section>

      {/* Skills Section */}
    <Skills />

{/* Projects Section */}
<section
  id="projects"
  className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: 'A Social-Media Platform',
          description:
            'An interactive social platform combining writing and debating (“Wribates”) alongside articles and blogs. Features user authentication, content creation tools, and a vibrant discussion system.',
          tech: 'Next.js, Node.js, MongoDB, TailwindCSS',
          link: 'https://www.wribate.com',
          codeLink: 'https://www.github.com/ShivakumarU'
        },
        {
          title: 'Insurance Investigation App',
          description:
            'A task and case management tool designed for insurance investigation teams. Supports case tracking, and real-time collaboration to streamline investigative workflows.',
          tech: 'React.js, JavaScript, MongoDB, Express.js, TailwindCSS',
          link: 'https://tejaswisolutions.vercel.app/home',
          codeLink: 'https://www.github.com/ShivakumarU'
        },
        {
          title: 'ThinkBoard Todo-List',
          description:
            'A clean to-do list app to help users organize daily tasks. Includes a minimal UI for distraction-free productivity.',
          tech: 'React.js, Tailwind CSS, DaisyUI',
          link: 'https://thinkboard-j3tx.onrender.com',
          codeLink: 'https://www.github.com/ShivakumarU'
        },
      ].map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-orange-200 mb-2">
                {project.title}
              </h3>
              <p className={`text-gray-600 dark:text-gray-300 mb-4 ${barlowCondensed.className}`}>
                {project.description}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                {project.tech}
              </p>
            </div>
            <div className="mt-4 flex space-x-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-orange-300 hover:underline"
              >
                <FaExternalLinkAlt className="mr-2" /> Visit Project
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:underline"
              >
                <FaGithub className="mr-2" /> View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Contact Me</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s connect and discuss how we can work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ummedashivakumar@gmail.com&su=Hello%20ShivaKumar&body=Hi%20ShivaKumar,"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Email ME
              </a>  
              <a
                href="https://linkedin.com/in/shivakumarummeda29/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Shiva. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
