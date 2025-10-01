"use client";

export default function WhatsAppButton() {
  const ownerNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <a
      href={`https://wa.me/${ownerNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 font-roboto"
    >
      💬
    </a>
  );
}
