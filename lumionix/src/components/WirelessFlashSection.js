"use client";
import Image from "next/image";

const WirelessFlashSection = () => {
  return (
    <section className="relative h-[50vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Video_Fallback/Flash_Video_Fallback.webp"
          alt="Wireless Flash Photography"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h2 className="text-white text-6xl font-bold max-w-2xl leading-tight">
            Supercharged with
            <br />
            Wireless Flash Receiver
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WirelessFlashSection;
