"use client";
import Image from "next/image";
import { motion } from "framer-motion"; 
export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-16 px-6" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Animation */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/doctor.png"
            alt="Dr. Serena Blake"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800">Meet Dr. Serena Blake</h2>
          <p className="text-gray-600 text-lg">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with 8 years of experience and over 500 successful client sessions.
          </p>
          <p className="text-gray-600">
            She blends evidence-based therapies like cognitive-behavioral therapy (CBT) and mindfulness
            with personalized care to help individuals manage anxiety, improve relationships, and recover from trauma.
          </p>
          <p className="text-gray-600">
            Whether you're meeting her in the calming environment of her Maplewood Drive office or virtually via Zoom,
            Dr. Blake is committed to creating a safe, non-judgmental space for your growth and healing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
