"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const images = [
    "/assets/Video_Fallback/Home_Video_Fallback.webp",
    "/assets/Video_Fallback/High-Speed_Video_Fallback.webp",
    "/assets/Video_Fallback/Flash_Video_Fallback.webp",
  ];

  const changeImage = (newIndex) => {
    if (newIndex === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      if (!showVideo) {
        changeImage(nextIndex);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex, showVideo]);

  return (
    <>
      <main className="min-h-screen bg-black">
        <Newsletter />
        <main className="min-h-[75vh] relative">
          {/* Hero Section */}
          <div className="relative h-[75vh]">
            {/* Background Image/Video */}
            <div className="absolute inset-0">
              {!showVideo &&
                images.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt="KOMET Camera Trigger"
                    fill
                    className={`object-cover brightness-90 transition-all duration-500 absolute inset-0
                    ${
                      currentImageIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                    priority={index === 0}
                  />
                ))}
              {showVideo && (
                <div className="absolute inset-0 bg-black">
                  <iframe
                    src="https://player.vimeo.com/video/853267150?autoplay=1&loop=1&background=1"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
              <p className="text-xl mb-2 italic tracking-wider font-montserrat font-bold">
                INTRODUCING
              </p>
              <div className="mb-3 relative w-[280px] h-[70px]">
                <Image
                  src="/assets/KOMET.png"
                  alt="KOMET"
                  fill
                  className="object-contain brightness-200"
                  priority
                />
              </div>
              <h2 className="text-3xl mb-12 font-montserrat tracking-wider font-bold">
                A CAMERA TRIGGER REDEFINED
              </h2>

              {/* Play Button */}
              <button
                onClick={() => setShowVideo(true)}
                className="w-20 h-20 rounded-[100%] bg-gray-400/20 flex items-center justify-center mb-12 hover:bg-gray-400/30 transition-all duration-300 backdrop-blur-sm"
              >
                <BsFillPlayFill className="w-10 h-10 text-white ml-1.5" />
              </button>

              {/* CTA Button */}
              <Link
                href="/order"
                className="bg-[#4299ff] text-white px-10 py-2.5 rounded-full text-lg font-semibold italic hover:bg-[#3182f6] transition-colors mb-5 font-montserrat"
              >
                Order Now!
              </Link>

              {/* Price */}
              <p className="text-lg font-montserrat font-light mb-12">
                Prices start at{" "}
                <span className="text-white font-semibold">$299</span>{" "}
                <span className="relative">
                  <span className="absolute inset-x-0 top-1/2 h-[1px] bg-white/60 -rotate-6"></span>
                  <span className="text-white font-light">$370</span>
                </span>
              </p>

              {/* Lines Navigation */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setShowVideo(false);
                      changeImage(index);
                    }}
                    className={`w-8 h-[2px] transition-all duration-300 ${
                      index === currentImageIndex && !showVideo
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </main>
    </>
  );
}
