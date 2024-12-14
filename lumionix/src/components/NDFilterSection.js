"use client";
import Image from "next/image";

const NDFilterSection = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - ND Calculator */}
          <div className="flex flex-col items-center">
            <Image
              src="/assets/iPhone_Mockup_ND-Filter.webp"
              alt="KOMET ND Filter Interface"
              width={350}
              height={700}
              className="w-auto h-auto mb-6"
            />
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-2.5 w-16 bg-[#4299ff]"></div>
              <h3 className="text-2xl font-bold italic">
                Built-in ND calculator
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                KOMET App offers built-in ND calculator. Simply tap to choose
                your desired ND STOP to update camera exposure automatically.
              </p>
            </div>
          </div>

          {/* Right - ND Filter GIF */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/ND-Filter.gif"
              alt="ND Filter Demonstration"
              width={600}
              height={400}
              className="w-auto h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
          {/* Left - HDR Text */}
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="h-2.5 w-16 bg-[#4299ff]"></div>
              <h3 className="text-2xl font-bold italic">
                Break the bracketing limit
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                KOMET takes HDR photography an extra mile forward by offering
                bracket photos by Exposure or ISO or Aperture or even blend them
                together.
              </p>
            </div>
          </div>

          {/* Right - HDR Interface */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/iPhone_Mockup_HDR.webp"
              alt="KOMET HDR Interface"
              width={600}
              height={400}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NDFilterSection;
