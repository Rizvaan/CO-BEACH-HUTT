"use client";

import React from "react";
import { Users, Star, Heart, UserRound } from "lucide-react";

const reviews = [
  { name: "Muhammad Asim Khan", stars: 4, text: "My experience was very good..." },
  { name: "Abdullah Khalid", stars: 5, text: "I visited Co beach hut on Thursday..." },
  { name: "Hameer Bhatti", stars: 4, text: "Had a great time with friends..." },
  { name: "Sobia Khan", stars: 5, text: "Experience is good.... Cooperative staff..." },
  { name: "Arshad Ansari", stars: 5, text: "Very neat and clean and properly maintained..." },
  { name: "Daad Shah", stars: 5, text: "That was an amazing trip at this hut..." },
  { name: "Ghulab Ali", stars: 4, text: "Highly recommended, peaceful environment..." },
  { name: "Sagar Dilshad", stars: 5, text: "Booked this hut. Great experience..." },
  { name: "Talha Khan", stars: 3, text: "Nice hut!!" },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen transition-colors duration-300 font-poppins pt-10 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            We are a small team of two passionate owners running cozy beach huts...
          </p>
        </div>

        {/* Owners Section */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="p-4 rounded-2xl text-center">
            <UserRound className="w-24 h-24 mx-auto text-blue-500 mb-3 hover:scale-110 hover:rotate-6 transition-transform duration-300" />
            <h3 className="text-lg font-semibold">Mohsin Ahmed</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Loves organizing beach stays and making sure everyone enjoys their time.
            </p>
          </div>
          <div className="p-4 rounded-2xl text-center">
            <UserRound className="w-24 h-24 mx-auto text-indigo-500 mb-3 hover:scale-110 hover:-rotate-6 transition-transform duration-300" />
            <h3 className="text-lg font-semibold">Muhammad Deen</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Focused on making your stay comfortable and unforgettable.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-500">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {reviews.map((r, i) => (
              <div key={i} className="p-3 rounded-lg bg-transparent">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-blue-500" />
                  <p className="font-medium text-sm">{r.name}</p>
                </div>
                <div className="text-yellow-400 text-sm mb-1">
                  {"★".repeat(r.stars) + "☆".repeat(5 - r.stars)}
                </div>
                <p className="text-muted-foreground text-xs">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6 text-blue-500">
            Why Choose Us
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-2xl text-center bg-transparent">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Personal Attention</h3>
              <p className="text-muted-foreground text-sm">
                We personally manage everything to make your stay comfortable.
              </p>
            </div>
            <div className="p-4 rounded-2xl text-center bg-transparent">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Quality Experience</h3>
              <p className="text-muted-foreground text-sm">
                Clean, cozy huts with guided tours and full support.
              </p>
            </div>
            <div className="p-4 rounded-2xl text-center bg-transparent">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Trusted by Guests</h3>
              <p className="text-muted-foreground text-sm">
                Loved by our clients, with positive reviews and returning guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
