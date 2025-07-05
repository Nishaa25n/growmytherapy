"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission to your insurance provider.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes, virtual sessions are held via Zoom on Mon, Wed & Fri between 1 PM–5 PM.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations require at least 24-hour notice to avoid charges.",
  },
  {
    question: "How long is each therapy session?",
    answer: "Each individual session is 50 minutes long. Couples sessions may run for 60 minutes.",
  },
  {
    question: "How do I schedule my first appointment?",
    answer: "Click the 'Book a Free Consult' button on the homepage or contact via email/phone.",
  },
  {
    question: "Is therapy confidential?",
    answer: "Yes, all sessions are confidential in accordance with HIPAA regulations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f9fafb] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="text-left space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                {item.question}
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-4 text-gray-600 text-base"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
