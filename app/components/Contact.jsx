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

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!name.trim()) return "Please enter your name.";
    if (!mobileRegex.test(mobile)) return "Please enter a valid 10-digit mobile number.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (message.trim().length < 10) return "Message should be at least 10 characters long.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      alert("Internal Error Occured");
      console.error('EmailJS credentials are missing. Please check your environment variables.')
      return;
    }
    console.log("SERVICE ID:", process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
console.log("TEMPLATE ID:", process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);


    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      { user_name: name, user_mobile: mobile, user_email: email, message },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('✅ Thanks! Your message has been sent.');
      setName('');
      setMobile('');
      setEmail('');
      setMessage('');
    }).catch((err) => {
      alert('❌ Oops! Something went wrong. Please try again.');
      console.error("EmailJS Error:", err);
    });
  };

  return (
    <section id='contact' className="relative min-h-screen flex items-center justify-center bg-gradient-to-bl from-black via-gray-900 to-gray-800 overflow-hidden px-6 py-24">
      {/* Left & Right UI same as yours */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Let&apos;s Connect !
          </h2>
          <p className="text-gray-300 text-md">
            I&apos;m always excited to collaborate on <span className="text-cyan-400 font-semibold">innovative projects</span> and connect with amazing people.
          </p>

          <div className="flex flex-col gap-4 mt-4 text-lg text-cyan-200">
            <div className="flex items-center gap-4">
              <FiPhone className="text-cyan-400" size={24} />
              <span>+91 94945 58983</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400" size={24} />
              <span>ummedashivakumar@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4 justify-center md:justify-start">
            <motion.a
              href="https://linkedin.com/in/shivakumarummeda29/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="https://www.instagram.com/trendie_calligraphie/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-900 to-gray-900 text-white font-bold shadow-lg text-center"
            >
              Instagram 64.3k+ Followers
            </motion.a>
          </div>
        </div>

        <div className="bg-gray-900/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg flex flex-col gap-6 border-1 border-cyan-500">
          <motion.form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400" />
            <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400" />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400" />
            <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full px-6 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 resize-none" rows={4} />
            <motion.button type="submit"
              className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-500 via-purple-900 to-cyan-500 shadow-lg hover:scale-105 transition-all">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
