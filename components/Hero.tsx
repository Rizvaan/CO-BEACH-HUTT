import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center"
    >
      {/* Background Image */}
      <Image
        src="/bg.jpeg"
        alt="Beach background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="relative z-10 text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold font-poppins">
          Welcome To <span className="text-blue-500">CO-BEACH HUTS</span>
        </h2>
        <p className="mt-4 text-lg font-roboto">
          Relax, Enjoy, and Book Your Perfect Beach Hut
        </p>
      </div>
    </section>
  );
}
