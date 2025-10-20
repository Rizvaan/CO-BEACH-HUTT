"use client";

import React, { Fragment, useState } from "react";
import Image from "next/image";

type Img = { src: string; title: string };
type Feature = { label: string; value: string };

export default function HutsGallery() {
  const [selectedImage, setSelectedImage] = useState<Img | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedHut, setSelectedHut] = useState<{
    name: string;
    features: Feature[];
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    people: "",
  });

  const ownerNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const galleries: { name: string; features: Feature[]; images: Img[] }[] = [
    {
      name: "A-84",
      features: [
        { label: "Bedrooms", value: "2" },
        { label: "Washrooms", value: "3" },
        { label: "Lounge", value: "Big Lounge" },
        { label: "Balcony", value: "Sea View" },
        { label: "Kitchen", value: "With Gas Cylinder" },
        { label: "BBQ Area", value: "Yes" },
        { label: "Parking", value: "Available" },
        { label: "Water", value: "Sweet Water" },
        { label: "Generator", value: "Available (Fuel not included)" },
        { label: "Location", value: "Turtle Beach" },
      ],
      images: [
        { src: "/a84-room2.jpeg", title: "ROOM-1" },
        { src: "/a84-room3.jpeg", title: "ROOM-2" },
        { src: "/a84-15.jpeg", title: "LOUNGE" },
        { src: "/a84-14.jpeg", title: "OUTER AREA" },
        { src: "/a84-toilet.jpeg", title: "TOILET" },
        { src: "/a84-front.jpeg", title: "FRONT VIEW" },
      ],
    },
    {
      name: "A-86",
      features: [
        { label: "Bedrooms", value: "2" },
        { label: "Washrooms", value: "3" },
        { label: "Lounge", value: "Smart Lounge" },
        { label: "Balcony", value: "Big Balcony" },
        { label: "Kitchen", value: "Modern Setup" },
        { label: "BBQ Area", value: "Yes" },
        { label: "Parking", value: "Available" },
        { label: "Water", value: "Fresh Spring" },
        { label: "Generator", value: "Available (Fuel not included)" },
        { label: "Location", value: "Turtle Beach" },
      ],
      images: [
        { src: "/a-86 front.jpeg", title: "FRONT" },
        { src: "/a-86 inside.jpeg", title: "INSIDE" },
        { src: "/a-86 lounge.jpeg", title: "LOUNGE" },
        { src: "/a-86 toilet.jpeg", title: "TOILET" },
        { src: "/a-86-kitchen.jpeg", title: "KITCHEN" },
        { src: "/a-86 view.jpeg", title: "VIEW" },
      ],
    },
    {
      name: "A-97",
      features: [
        { label: "Bedrooms", value: "2" },
        { label: "Washrooms", value: "3" },
        { label: "Lounge", value: "Cozy Lounge" },
        { label: "Balcony", value: "Large Covered Balcony" },
        { label: "Kitchen", value: "Kitchen With Gas" },
        { label: "BBQ Area", value: "Available" },
        { label: "Parking", value: "Available" },
        { label: "Water", value: "Natural Stream" },
        { label: "Generator", value: "Available (Fuel not included)" },
        { label: "Location", value: "Turtle Beach" },
      ],
      images: [
        { src: "/a-97 front.jpeg", title: "FRONT" },
        { src: "/a-97 lounge.jpeg", title: "LOUNGE" },
        { src: "/a-97 room.jpeg", title: "ROOM" },
        { src: "/a-97 inner.jpeg", title: "INSIDE" },
        { src: "/a-97 kitchen.jpeg", title: "KITCHEN" },
        { src: "/a-97 toilet.jpeg", title: "TOILET" },
      ],
    },
  ];

  const handleBooking = (gallery: { name: string; features: Feature[] }) => {
    setSelectedHut(gallery);
    setShowForm(true);
  };

  // ✅ Updated: Formatted WhatsApp Message
  const handleSubmit = () => {
    if (!selectedHut) return;

    const specs = selectedHut.features
      .map((f) => {
        switch (f.label.toLowerCase()) {
          case "bedrooms": return `🛏 ${f.label}: ${f.value}`;
          case "washrooms": return `🚿 ${f.label}: ${f.value}`;
          case "lounge": return `🛋 ${f.label}: ${f.value}`;
          case "balcony": return `🌅 ${f.label}: ${f.value}`;
          case "kitchen": return `🍳 ${f.label}: ${f.value}`;
          case "bbq area": return `🔥 ${f.label}: ${f.value}`;
          case "parking": return `🚗 ${f.label}: ${f.value}`;
          case "water": return `💧 ${f.label}: ${f.value}`;
          case "generator": return `⚡ ${f.label}: ${f.value}`;
          case "location": return `📍 ${f.label}: ${f.value}`;
          default: return `• ${f.label}: ${f.value}`;
        }
      })
      .join("\n");

    const message =
      `📌 *Booking Request*\n\n` +
      `🏠 *Hut:* ${selectedHut.name}\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `👥 *People:* ${formData.people}\n\n` +
      `--- *Specifications* ---\n${specs}\n\n` +
      `🌊 *Thank you for choosing CO Beach Hutt!*\nWe’ll contact you soon to confirm your booking.`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
    setShowForm(false);
    setFormData({ name: "", date: "", people: "" });
  };

  return (
    <section id="huts" className="py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-500">
          Explore Our Huts
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Choose the perfect hut for your next unforgettable stay.
        </p>
      </div>

      {galleries.map((gallery, i) => (
        <div
          key={i}
          className={`max-w-6xl mx-auto px-6 mb-24 flex flex-col md:flex-row gap-8 items-stretch ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Hut Info Card */}
          <div className="md:w-1/3 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition flex flex-col">
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-4 text-blue-500">
                {gallery.name}
              </h2>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                {gallery.features.map((f, index) => (
                  <Fragment key={index}>
                    <div className="text-gray-600 dark:text-gray-400">
                      {f.label}
                    </div>
                    <div className="text-gray-900 dark:text-gray-200 font-medium">
                      {f.value}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <button
                onClick={() => handleBooking(gallery)}
                className="w-full px-4 py-2 text-sm rounded-lg shadow text-white transition transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-600"
                style={{ backgroundColor: "rgb(59 130 246)" }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Hut Gallery */}
          <div className="md:w-2/3 flex">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px] flex-grow">
              {gallery.images.map((img, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer transition-transform duration-500 hover:scale-105"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <p className="text-white text-center mt-2">{selectedImage.title}</p>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showForm && selectedHut && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-lg font-semibold mb-4 text-blue-500">
              Booking for {selectedHut.name}
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-3 p-2 border rounded-lg dark:bg-gray-800"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="date"
              className="w-full mb-3 p-2 border rounded-lg dark:bg-gray-800"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Number of People"
              className="w-full mb-3 p-2 border rounded-lg dark:bg-gray-800"
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
            />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
