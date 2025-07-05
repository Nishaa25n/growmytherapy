"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Anxiety & Stress",
      image: "/anxiety.jpeg",
      description: "Evidence-based therapy to manage anxiety, reduce stress, and regain control.",
    },
    {
      title: "Relationship Counseling",
      image: "/relationship.jpeg",
      description: "Helping couples and individuals build stronger, more fulfilling relationships.",
    },
    {
      title: "Trauma Recovery",
      image: "/trauma.jpeg",
      description: "Support and tools for healing from past trauma and building resilience.",
    },
  ];

  return (
    <motion.section
      id="services"
      className="bg-white py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services Offered
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={1200}
                height={1200}
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
