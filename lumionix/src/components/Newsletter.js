"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    // Here you would typically handle the email submission
    console.log("Email submitted:", email);
    // Smoothly hide the newsletter
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg overflow-hidden w-[800px] mx-4 grid md:grid-cols-2 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-8 right-0 text-white hover:text-gray-300 text-2xl z-50"
        >
          ×
        </button>

        {/* Left side - Image */}
        <div className="relative h-[400px]">
          <Image
            src="/assets/Cart_BG.jpg"
            alt="KOMET"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
            <div className="p-8">
              <h2 className="text-white font-bold text-3xl mb-2">LUMIONIX</h2>
              <h3 className="text-[#4299ff] font-bold text-4xl">KOMET</h3>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-12 flex flex-col justify-center">
          <div className="space-y-4 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address ..."
              className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#4299ff] text-gray-800 placeholder-gray-500"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-[#4299ff] text-white px-4 py-2 rounded-2xl hover:bg-[#3182f6] transition-colors font-bold italic"
            >
              JOIN NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
