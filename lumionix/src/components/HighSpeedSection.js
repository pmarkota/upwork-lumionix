"use client";
import Image from "next/image";

const HighSpeedSection = () => {
  return (
    <section className="bg-[#f8f9fa] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-end text-right space-y-6">
            <div className="flex flex-col items-end gap-3">
              <div className="h-2 w-16 bg-[#4299ff]"></div>
              <h3 className="text-3xl font-extrabold italic text-black">
                High-Speed
              </h3>
            </div>
            <p className="text-gray-600 text-base max-w-lg">
              In many cases capturing the perfect moment is tricky. But KOMET
              helps you to trigger the shutter at the right time. It's in-built
              with ambient light and sound sensor, helps you to effortlessly
              capture breathtaking lighting strikes, stunning splash and many
              more.
            </p>
          </div>

          {/* Image Content */}
          <div className="relative">
            <Image
              src="/assets/Touchscreen_Mockup_High-Speed.webp"
              alt="KOMET High Speed Interface"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighSpeedSection;
