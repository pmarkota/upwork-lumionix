"use client";

export default function ProductReview() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold italic text-white mb-3">
            Integrated, Smart, Versatile
          </h2>
          <p className="text-xl text-gray-400">See it in Action!</p>
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto px-8">
          {/* Video Section */}
          <div className="aspect-video w-full relative rounded-xl overflow-hidden bg-black mb-12">
            <iframe
              src="https://www.youtube.com/embed/ibKMjZb9dro?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=http://localhost:3000&widgetid=1"
              title="KOMET Product Video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text Section */}
          <div className="space-y-8 text-center max-w-3xl">
            <p className="text-white text-base">
              KOMET is an extraordinary photography tool, jam-packed with
              awesome features to enhance your creativity. It mounts straight
              into your camera's hot shoe and utilizes USB and Trigger port to
              unleash various possibilities. Easily access all intuitive
              features from its on-board touchscreen app or the mobile app.
              Either photography is your full time job or you just bought your
              very first camera, KOMET takes your storytelling above and beyond.
            </p>
            <p className="text-gray-400 text-base">
              KOMET works with a wide range of Canon, Nikon and few popular Sony
              Alpha series camera's. Supported camera list will be published
              soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
