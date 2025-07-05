"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // 👈 Make sure image exists in public folder
      }}
    >
      <div className="max-w-2xl text-center space-y-6 bg-black/50 p-6 rounded-md shadow-lg">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Grow My Therapy
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your mental well-being matters. Let's grow together.
        </motion.h2>

        <motion.a
          href="#contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Book a Free Consult 😊
        </motion.a>
      </div>
    </section>
  );
}
