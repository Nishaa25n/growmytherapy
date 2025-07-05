"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Message sent 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-white px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Contact Me
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.01 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.01 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#43a047] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
