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
import Footer from './components/Footer';



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
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black via-gray-900 px-4 sm:px-6 lg:px-8 relative"
      >
          {/* Dismissable Banner */}
          {isVisible && (
            <div className="fixed top-20 md:left-1/5 left-1/2 -translate-x-1/2 bg-amber-900 text-orange-100 rounded-xl px-2 text-[9px] sm:text-xs md:text-md flex items-center gap-1 shadow-lg w-fit">
              <span>🙏 Welcome to My Portfolio</span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-orange-200 hover:text-gray-200 font-bold ml-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          {/* Profile Image */}
          <div className="w-28 h-40 sm:w-36 sm:h-56 md:w-40 md:h-64 lg:w-44 lg:h-70 rounded-full overflow-hidden mb-6">
            <Image
              src="/Pasted_image.png"
              alt="ShivaKumar Ummeda"
              width={200}
              height={200}
              className="object-cover md:mt-[-25px] mt-[-15px]"
              priority
            />
          </div>

          {/* Heading */}
          <h1
            className={`text-2xl sm:text-3xl md:text-5xl font-bold text-orange-100 mb-4 text-center ${nunito.className}`}
          >
            Hie <span className="wave-hand">👋</span>, I&apos;m{" "}
            <span className="gradient-flex">ShivaKumar Ummeda</span>
          </h1>

          {/* Typing Effect */}
          <p
            className={`text-lg sm:text-xl md:text-3xl text-orange-100 mb-6 text-center ${barlowCondensed.className}`}
          >
            <span className="text-orange-400">{phrases[index].article}&nbsp;</span>
            {phrases[index].role.substring(0, subIndex)}
            <span className="animate-pulse">|</span>
          </p>

          {/* Subtext */}
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl text-center mx-auto mb-6 ${eduHand.className}`}
          >
            Passionate about creating innovative web solutions and turning ideas into
            reality through code.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 justify-center text-lg sm:text-xl md:text-2xl mb-6">
            <a
              href="https://github.com/ShivakumarU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition transform hover:-translate-y-1 hover:rotate-12 text-amber-100"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shivakumarummeda29/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition transform hover:-translate-y-1 hover:rotate-12 text-amber-100"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/trendie_calligraphie/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition transform hover:-translate-y-1 hover:rotate-12 text-amber-100"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:ummedashivakumar@gmail.com"
              className="hover:text-orange-400 transition transform hover:-translate-y-1 hover:rotate-12 text-amber-100"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <ResumeModal />
            <Link
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-900 via-pink-700 to-orange-800 text-orange-100 px-5 py-2 rounded-lg font-medium hover:from-purple-900 hover:via-purple-900 hover:to-pink-700 hover:text-gray-100 transition text-xs md:text-base"
            >
              Get In Touch <FaLocationArrow className="text-sm md:text-lg leftRight" />
            </Link>
          </div>

          {/* Flag */}
          <Image
            src="/india-450_256.gif"
            alt="Indian Flag"
            width={64}
            height={64}
            className="hidden md:block absolute top-20 right-10 w-14 h-auto animate-pulse"
          />
      </section>


      {/* Skills Section */}
       <Skills />

      {/* Projects Section */}
      <Projects />


      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
