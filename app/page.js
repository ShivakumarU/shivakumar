"use client"
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { Roboto, Playfair_Display, Pacifico, Edu_NSW_ACT_Foundation, Barlow_Condensed, Nunito, Rubik } from 'next/font/google';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaReact, FaNodeJs, FaJava, FaDocker, FaGitAlt, FaExternalLinkAlt, } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';
import ResumeModal from "./components/ResumeModal";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';



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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 md:bg-gradient-to-br from-gray-900 to-black via-gray-900 px-4 sm:px-6 lg:px-8">
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
              Hie <span className='wave-hand'>👋</span>, I&apos;m 
              <span className={`text-2xl md:text-5xl sm:text-2xl gradient-flex ${nunito.className}`}>
                ShivaKumar Ummeda 
                <Image
                src="/india-450_256.gif"
                alt="Indian Flag"
                width={32}
                height={32}
                title="I'm from India"
                className="hidden md:block absolute top-32 right-10 w-16 h-auto animate-pulse"
                />

              </span>
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
      <Projects />


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Shiva. All rights reserved. Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
