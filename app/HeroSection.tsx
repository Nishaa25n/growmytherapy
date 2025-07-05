export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // 👈 Put your image in public/hero-bg.jpg
      }}
    >
      <div className="max-w-2xl text-center space-y-6 bg-black/50 p-6 rounded-md shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to Grow My Therapy
        </h1>
        <h2 className="text-xl md:text-2xl font-light">
          Your mental well-being matters. Let's grow together.
        </h2>
        <a
          href="#contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
