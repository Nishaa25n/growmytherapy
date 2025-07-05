"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can send data to backend if needed

    toast.success("Thank you! Message sent 😊");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section id="contact" className="py-20 bg-white px-6">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-[#43a047] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
