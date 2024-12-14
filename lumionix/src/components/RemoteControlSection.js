"use client";
import Image from "next/image";

const RemoteControlSection = () => {
  return (
    <section className="relative h-[50vh] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/App_Control.webp"
          alt="KOMET App Control"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-start pt-20 justify-end">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="md:ml-auto md:w-1/2 pr-8">
            <h2 className="text-white text-5xl font-bold leading-tight">
              Way more than
              <br />a remote
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteControlSection;
