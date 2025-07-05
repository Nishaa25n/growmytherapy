import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Services Offered</h2>

        <div className="grid gap-10 md:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <Image
              src="/anxiety.jpeg"
              alt="Anxiety & Stress"
              width={1200}
              height={1200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Anxiety & Stress</h3>
            <p className="text-gray-600">
              Evidence-based therapy to manage anxiety, reduce stress, and regain control.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <Image
              src="/relationship.jpeg"
              alt="Relationship Counseling"
              width={1200}
              height={1200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Relationship Counseling</h3>
            <p className="text-gray-600">
              Helping couples and individuals build stronger, more fulfilling relationships.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-xl transition">
            <Image
              src="/trauma.jpeg"
              alt="Trauma Recovery"
              width={1200}
              height={1200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Trauma Recovery</h3>
            <p className="text-gray-600">
              Support and tools for healing from past trauma and building resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
