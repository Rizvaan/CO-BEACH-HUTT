
"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  // Values from .env.local
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // e.g., 923001234567
  const email = process.env.NEXT_PUBLIC_OWNER_EMAIL;       // e.g., info@beachhuts.com

  // Map URL (same as your embed, but used for click action)
  const mapUrl ="https://maps.app.goo.gl/izjn9fYZbi5DuW4KA";

  return (
    <div className="max-w-6xl mx-auto px-6 py-12" id="contact">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions or want to book a hut? Reach out to us anytime – we’re here to help.
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {/* Phone */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl shadow hover:shadow-lg transition text-center block bg-white/80 dark:bg-gray-900/80"
        >
          <Phone className="w-10 h-10 text-green-500 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">WhatsApp</h3>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="p-6 rounded-2xl shadow hover:shadow-lg transition text-center block bg-white/80 dark:bg-gray-900/80"
        >
          <Mail className="w-10 h-10 text-purple-500 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Email</h3>
        </a>

        {/* Location */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl shadow hover:shadow-lg transition text-center block bg-white/80 dark:bg-gray-900/80"
        >
          <MapPin className="w-10 h-10 text-red-500 mx-auto mb-3" />
          <h3 className="text-xl font-semibold">Location</h3>
        </a>
      </div>

      {/* Google Map Section */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.9581637475889!2d66.87679436958342!3d24.85485761550659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb313e01f3b2d0f%3A0xdb5271af9c028cc4!2sCo-Beach%20Hut%20A84!5e1!3m2!1sen!2sus!4v1758613835120!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

