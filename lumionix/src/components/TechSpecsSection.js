"use client";
import Image from "next/image";

const TechSpecsSection = () => {
  return (
    <section>
      {/* Tech Specs Part */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-6xl font-bold text-center mb-8 text-white">
            Tech Specs
          </h2>

          {/* Specs Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Left Image */}
            <div className="relative h-[500px]">
              <Image
                src="/assets/Trigger_Exploded View.webp"
                alt="KOMET-TR Exploded View"
                fill
                className="object-contain"
              />
            </div>

            {/* Middle Specs */}
            <div className="flex flex-col justify-between">
              {/* KOMET-TR */}
              <div className="relative pl-6 mb-8">
                <div className="absolute left-0 top-8 bottom-0 w-1 bg-[#4299ff]"></div>
                <h3 className="text-2xl font-extrabold italic text-white mb-4">
                  KOMET-TR
                </h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <span className="text-gray-400">CPU: </span>
                    <span className="text-white">
                      ARM Quad Core, DDR RAM, eMMC
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400">Wi-Fi: </span>
                    <span className="text-white">802.11 b/g/n</span>
                  </li>
                  <li>
                    <span className="text-gray-400">RF: </span>
                    <span className="text-white">2.4GHz Transmitter</span>
                  </li>
                  <li>
                    <span className="text-gray-400">USB: </span>
                    <span className="text-white">
                      2 x Type-C (Camera and Charging + DFU)
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-400">External Jack: </span>
                    <span className="text-white">Trigger, AUX</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Memory: </span>
                    <span className="text-white">SD Socket (Full-Size)</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Sensor: </span>
                    <span className="text-white">Ambient Light, Sound</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Status: </span>
                    <span className="text-white">LED RGB</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Battery: </span>
                    <span className="text-white">LiPo 3500mAH</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Dimensions: </span>
                    <span className="text-white">3.5" x 2.0" x 1.5"</span>
                  </li>
                </ul>
              </div>

              {/* KOMET-RC */}
              <div className="relative pr-6 text-right">
                <div className="absolute right-0 top-8 bottom-0 w-1 bg-[#4299ff]"></div>
                <h3 className="text-2xl font-extrabold italic text-white mb-4">
                  KOMET-RC
                </h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <span className="text-gray-400">RF: </span>
                    <span className="text-white">2.4GHz Transmitter</span>
                  </li>
                  <li>
                    <span className="text-gray-400">USB: </span>
                    <span className="text-white">Type-C (Charging)</span>
                  </li>
                  <li>
                    <span className="text-gray-400">External Jack: </span>
                    <span className="text-white">PC Sync</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Status: </span>
                    <span className="text-white">LED RGB</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Battery: </span>
                    <span className="text-white">LiPo 500mAH</span>
                  </li>
                  <li>
                    <span className="text-gray-400">Dimensions: </span>
                    <span className="text-white">1.5" x 1.0" x 1.0"</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[380px] mt-20">
              <Image
                src="/assets/Receiver_Exploded View.webp"
                alt="KOMET-RC Exploded View"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-[#E6E6E6] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-500 mb-12">
              Featured on
            </h3>
            <div className="relative h-48 max-w-6xl mx-auto">
              <Image
                src="/assets/Media_Logo.png"
                alt="Featured Media Logos"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
