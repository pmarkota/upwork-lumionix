"use client";
import Image from "next/image";

const FreezeSection = () => {
  return (
    <section className="relative h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Video_Fallback/High-Speed_Video_Fallback.webp"
          alt="High Speed Photography"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-white text-7xl font-bold text-center max-w-3xl leading-tight">
          Freeze the
          <br />
          moment in time
        </h2>
      </div>
    </section>
  );
};

export default FreezeSection;
