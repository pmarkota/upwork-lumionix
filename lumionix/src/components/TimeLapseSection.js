"use client";
import Image from "next/image";

const TimeLapseSection = () => {
  return (
    <section className="bg-black text-white">
      {/* Hero Image Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-7xl font-bold text-white/20">
            Master in
            <br />
            TIMELAPSE
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 items-center -ml-24">
          {/* Left Column - iPhone Mockup */}
          <div>
            <Image
              src="/assets/iPhone_Mockup_Timelapse.webp"
              alt="KOMET Timelapse Interface"
              width={300}
              height={600}
              className="w-auto h-auto mx-auto"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            {/* Holy-Grail Section */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-2.5 w-16 bg-[#4299ff]"></div>
              <h3 className="text-2xl font-bold italic">Holy-Grail</h3>
              <p className="text-gray-400 text-sm max-w-md">
                Timelapsing is our favorite genre of photography and we paid top
                most attention to design and develop this feature. KOMET helps
                you to shoot complex day to night transitions. You can add
                keypoints to control camera settings while your timelapse is
                rolling.
              </p>
            </div>

            {/* Distance-Lapse Section */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="h-2.5 w-16 bg-[#4299ff]"></div>
              <h3 className="text-2xl font-bold italic">Distance-Lapse</h3>
              <p className="text-gray-400 text-sm max-w-md">
                As we are also utilizing smartphone's GPS so you can play with
                Drivelapse by setting timelapse intervals with "distance travel"
                instead of "time".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLapseSection;
