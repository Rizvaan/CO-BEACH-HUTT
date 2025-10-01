"use client";

import { Home, Brush, Flame, MapPin, Clock, Zap } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Hut Rentals",
      icon: <Home className="w-10 h-10 text-blue-500" />,
      description:
        "Comfortable beach huts available for daily, weekly, and monthly stays.",
    },
    {
      title: "Cleaning & Maintenance",
      icon: <Brush className="w-10 h-10 text-purple-500" />,
      description:
        "Daily housekeeping and cleaning services to keep your hut fresh.",
    },
    {
      title: "Bonfire & Activities",
      icon: <Flame className="w-10 h-10 text-red-500" />,
      description:
        "Evening bonfires, BBQ nights, and fun beachside activities.",
    },
    {
      title: "Location Guidance",
      icon: <MapPin className="w-10 h-10 text-teal-500" />,
      description:
        "We guide visitors about hut locations, nearby sea spots, and local facilities.",
    },
    {
      title: "24/7 Booking Support",
      icon: <Clock className="w-10 h-10 text-indigo-500" />,
      description:
        "Book your hut anytime with our round-the-clock customer support.",
    },
    {
      title: "Generator Facility",
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      description:
        "Generator available for electricity backup (fuel not included).",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-background transition-colors duration-300 font-poppins pt-12 pb-6"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto font-roboto">
            We provide more than just huts – enjoy a complete beachside experience
            with our range of services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-roboto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
