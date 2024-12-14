"use client";
import { useState, useEffect } from "react";
import { getStrapiData } from "../../services/strapi.service";
import Image from "next/image";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await getStrapiData("faqs", "populate=*");
        console.log("FAQ response:", response);
        if (response && response.length > 0) {
          // Sort FAQs by Order field
          const sortedFaqs = response.sort((a, b) => a.Order - b.Order);
          setFaqs(sortedFaqs);

          // Extract unique categories
          const uniqueCategories = [
            ...new Set(sortedFaqs.map((faq) => faq.Category)),
          ];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.Category === selectedCategory);

  return (
    <main className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[40vh]">
          <Image
            src="/assets/Video_Fallback/Home_Video_Fallback.webp"
            alt="FAQ Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative h-[40vh] flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl text-center px-4">
            Find answers to common questions about KOMET Camera Trigger
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-white text-center">Loading FAQs...</div>
        ) : faqs.length === 0 ? (
          <div className="text-white text-center">
            <p className="text-xl mb-4">No FAQs available yet</p>
            <p className="text-gray-400">
              We're currently working on adding helpful information here. Check
              back soon!
            </p>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === "all"
                      ? "bg-[#4299ff] text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  All Questions
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-[#4299ff] text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {/* FAQ List */}
            <div className="space-y-6">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
                >
                  <h3 className="text-xl text-white font-semibold mb-3">
                    {faq.Question}
                  </h3>
                  <div
                    className="text-gray-300 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: faq.Answer }}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
