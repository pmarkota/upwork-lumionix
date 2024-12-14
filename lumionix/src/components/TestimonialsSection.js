"use client";
import Image from "next/image";
import Link from "next/link";

const TestimonialsSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {/* Reviews Grid Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center text-white mb-12">
            Hear What Others Say
          </h2>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-[#111] rounded-lg p-6 aspect-[4/3] flex items-center justify-center"
              >
                <p className="text-gray-400 text-center">
                  Review placeholder {index}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative h-[50vh]">
        {/* Background Image */}
        <Image
          src="/assets/Coming_Soon.webp"
          alt="Coming Soon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-between py-16">
          <h2 className="text-6xl font-bold text-center text-white">
            Can't wait to get yours?
          </h2>

          <div className="flex flex-col items-center">
            <button
              onClick={scrollToTop}
              className="bg-[#4299ff] text-white px-10 py-2 rounded-full text-lg font-bold italic hover:bg-[#3182f6] transition-colors mb-6"
            >
              Order Now!
            </button>
            <p className="text-lg text-white">
              Prices start at <span className="font-semibold italic">$299</span>{" "}
              <span className="relative">
                <span className="absolute inset-x-0 top-1/2 h-[1px] bg-white/60 -rotate-6"></span>
                <span className="text-white/80">$370</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
