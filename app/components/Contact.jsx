'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 
import { FiPhone } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { user_name: name, user_mobile: mobile, user_email: email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Thanks! Your message has been sent!');
      setName('');
      setMobile('');
      setEmail('');
      setMessage('');
    }).catch((err) => {
      alert('Oops! Something went wrong. Please try again.');
      console.error(err);
    });
  };

  return (
    <section id='contact' className="relative min-h-screen flex items-center justify-center bg-gradient-to-bl from-black via-gray-900 to-gray-800 overflow-hidden px-6 py-24">
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob top-[-10%] left-[-10%]"></div>
        <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000 bottom-[-20%] right-[-10%]"></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Title & Contact Info */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Let&apos;s Connect !
          </h2>
          <p className="text-gray-300 text-lg">
            I&apos;m always excited to collaborate on <span className="text-cyan-400 font-semibold">innovative projects</span> and connect with amazing people.  
            Drop your details for updates, tips, and more!
          </p>
          {/* Contact Info */}
          <div className="flex flex-col flex-col items-left gap-4 text-gray-300 font-bold mt-4 text-2xl">
            <div className="flex items-center gap-4">
                <FiPhone className="text-cyan-400" size={28} />
                <span>+91 94945 58983</span>
            </div>
            <div className="flex items-center gap-4 text-xl">
                <FaEnvelope className="text-cyan-400" size={28} />
                <span>ummedashivakumar@gmail.com</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4 mt-4 justify-center md:justify-start">
            <motion.a
              href="https://linkedin.com/in/shivakumarummeda29/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="https://www.instagram.com/trendie_calligraphie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-900 to-gray-900 text-white font-bold shadow-lg text-center relative overflow-hidden neon-glow"
              whileHover={{ scale: 1.1 }}
            >
              Instagram 64.3k+ Followers
            </motion.a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col gap-6 border-1 border-cyan-500">
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              rows={4}
              required
            />
            <motion.button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-500 via-purple-900 to-cyan-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }

        .neon-glow {
          box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
          transition: box-shadow 0.3s ease-in-out;
        }
        .neon-glow:hover {
          box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 80px #ff00ff;
        }
      `}</style>
        <motion.a
        href="/"
        className="absolute bottom-8 right-8 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 text-white flex items-center justify-center shadow-lg cursor-pointer z-50 animate-pulse"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        title="Back to Home"
        >
        <span className="text-lg md:text-2xl font-bold">⮝</span>
        </motion.a>

    </section>
  );
};

export default Contact;
