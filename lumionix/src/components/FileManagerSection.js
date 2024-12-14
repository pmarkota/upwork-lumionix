"use client";
import Image from "next/image";

const FileManagerSection = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="/assets/File.webp"
            alt="File Manager"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0">
          <div className="max-w-6xl mx-auto px-8 w-full h-full">
            <div className="flex justify-end pt-20">
              <div className="w-1/2 flex justify-center">
                <h2 className="text-white text-6xl font-bold leading-tight text-center">
                  Backup your
                  <br />
                  photos
                  <br />
                  <span className="italic">On-The-Go</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#f8f9fa] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-[600px]">
                <div className="flex flex-col items-center space-y-3">
                  <div className="h-2.5 w-16 bg-[#4299ff]"></div>
                  <h3 className="text-2xl font-extrabold italic text-black text-center">
                    File Manager
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    No worries about backing up photos if your laptop is not at
                    hand or broken. Just insert your camera's memory card to SD
                    card slot and your portable Hard-Drive to USB-C port then
                    instantly backup. Our mobile app also features basic file
                    management, so you can organize your content On-The-Go. And
                    yes, all without a laptop.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Placeholder Image */}
            <div className="flex items-center justify-center">
              <div className="aspect-video w-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FileManagerSection;
