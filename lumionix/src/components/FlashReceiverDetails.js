"use client";
import Image from "next/image";

const FlashReceiverDetails = () => {
  return (
    <section className="bg-[#f8f9fa] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Text */}
          <div className="flex flex-col items-center pl-20">
            {/* Mockup Image */}
            <div className="mb-6 max-w-md">
              <Image
                src="/assets/Touchscreen_Mockup_Flash.webp"
                alt="KOMET Flash Interface"
                width={500}
                height={250}
                className="w-full h-auto"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex flex-col items-center gap-2">
                <div className="h-2 w-16 bg-[#4299ff]"></div>
                <h3 className="text-3xl font-extrabold italic text-black">
                  Flash Receiver
                </h3>
              </div>
              <p className="text-gray-600 text-sm max-w-lg">
                Light is always crucial for photography. Especially in-door,
                it's often necessary to use an external flash. KOMET offers an
                add-on "Receiver" module to control and trigger flash. KOMET
                Receiver is a small device that mounts on your flash shoe, which
                allows you to control Power and Zoom remotely.
              </p>
            </div>
          </div>

          {/* Right Column - Receiver Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/Receiver.webp"
              alt="KOMET Receiver"
              width={700}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashReceiverDetails;
