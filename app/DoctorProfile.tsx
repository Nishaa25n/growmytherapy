import Image from "next/image";

export default function DoctorProfileSection() {
  return (
    <section id="about" className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Doctor Image */}
        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#ccc] shadow-lg">
          <Image
            src="/doctor.jpg"
            alt="Dr. Serena Blake"
            width={208}
            height={208}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Doctor Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Serena Blake, PsyD</h2>
          <p className="text-gray-600 text-lg mb-4">Clinical Psychologist</p>
          <p className="text-gray-700 text-base leading-relaxed mb-3">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like CBT and mindfulness—with personalized care to help you overcome anxiety,
            strengthen relationships, and heal from trauma.
          </p>
          <p className="text-sm text-gray-500">
            📍 1287 Maplewood Drive, Los Angeles, CA 90026 <br />
            📞 (323) 555-0192 &nbsp;|&nbsp;
            📧 <a href="mailto:serena@blakepsychology.com" className="text-blue-500 underline">serena@blakepsychology.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
