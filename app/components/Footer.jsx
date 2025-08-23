import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
        
        {/* Left: Name & Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold text-orange-400">Shivakumar Ummeda</h3>
          <div className="mt-4 flex space-x-4 text-xl">
            <a href="https://github.com/ShivakumarU" title="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shivakumarummeda29/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/trendie_calligraphie/" title="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
              <FaInstagram />
            </a>
            <a href="mailto:ummedashivakumar@gmail.com" title="Email" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transform transition duration-300 hover:-translate-y-1 hover:rotate-12 text-amber-100">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Quick Links</h3>
          <div className="flex flex-col space-y-2 md:space-y-3 text-amber-50 text-xs">
            <a href="#home" className="hover:text-orange-400 transition-colors duration-300">About Me</a>
            <a href="#skills" className="hover:text-orange-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-orange-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors duration-300">Contact Me</a>
          </div>
        </div>

        {/* Right: Get in Touch */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Get in Touch</h3>
          <div className="flex items-center gap-2 text-amber-50 text-xs mb-2">
            <FaPhone className="text-cyan-400" />
            <span>+91 94945 58983</span>
          </div>
          <div className="flex items-center gap-2 text-amber-50 text-xs">
            <FaEnvelope className="text-cyan-400" />
            <span>ummedashivakumar@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-300 text-xs">
        &copy; 2025 Shiva. All rights reserved. Made with ❤️
      </div>
    </footer>
  );
}
