"use client";
import Image from "next/image";

const GalleryShareSection = () => {
  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-black">
        <div className="absolute inset-0">
          <Image
            src="/assets/Gallery-Share.webp"
            alt="Gallery and Share"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-4 w-full h-full">
            <div className="flex justify-end pt-20">
              <h2 className="text-white text-6xl font-bold leading-tight">
                Share your story,
                <br />
                anytime, anywhere
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#f8f9fa] relative">
        {/* Phones Image - Absolute positioned to peek into hero section */}
        <div className="absolute right-0 -top-16 w-1/2 flex justify-center">
          <div className="w-[385px] translate-y-[-35px]">
            <Image
              src="/assets/iPhone_Mockup_Gallery-Share.webp"
              alt="KOMET Gallery Interface"
              width={400}
              height={640}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-20 pl-16">
              {/* Gallery and Share */}
              <div className="w-[600px]">
                <div className="flex flex-col space-y-3">
                  <div className="h-2.5 w-16 bg-[#4299ff]"></div>
                  <h3 className="text-2xl font-extrabold italic text-black">
                    Gallery and Share
                  </h3>
                  <p className="text-gray-600 text-sm">
                    It's always hard to wait to get home to share your photos.
                    KOMET gives full access to your camera storage. Review your
                    photos in full resolution and share to your favorite social,
                    right where you are.
                  </p>
                </div>
              </div>

              {/* Geotagging */}
              <div className="w-[600px] ml-auto">
                <div className="flex flex-col space-y-3">
                  <div className="h-2.5 w-16 bg-[#4299ff] ml-auto"></div>
                  <h3 className="text-2xl font-extrabold italic text-black text-right">
                    Geotagging
                  </h3>
                  <p className="text-gray-600 text-sm text-right">
                    No need for any additional expensive GPS receiver. KOMET
                    supports direct geotagging of the photos using your phone's
                    GPS and allow you to organize photos based on their
                    locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Empty to maintain grid layout */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryShareSection;
