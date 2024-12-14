"use client";
import { useState, useEffect } from "react";
import { getStrapiData } from "../../services/strapi.service";
import Image from "next/image";
import Link from "next/link";

export default function Support() {
  const [supportContent, setSupportContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupportContent = async () => {
      try {
        const response = await getStrapiData("support-page", "populate=*");
        console.log("Support page response:", response);
        if (response) {
          setSupportContent(response);
        }
      } catch (error) {
        console.error("Error fetching support content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSupportContent();
  }, []);

  return (
    <main className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[40vh]">
          <Image
            src="/assets/Video_Fallback/Home_Video_Fallback.webp"
            alt="Support Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative h-[40vh] flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Support Center
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl text-center px-4">
            We're here to help you get the most out of your KOMET Camera Trigger
          </p>
        </div>
      </div>

      {/* Support Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-white text-center">
            Loading support content...
          </div>
        ) : !supportContent ? (
          <div className="text-white text-center">
            <p className="text-xl mb-4">Support content coming soon</p>
            <p className="text-gray-400">
              We're currently setting up our support resources. Please check
              back later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Start Guide */}
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="h-12 w-12 bg-[#4299ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4299ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Quick Start
              </h2>
              <p className="text-gray-300 mb-6">
                Get up and running with your KOMET Camera Trigger in minutes
              </p>
              <Link
                href="/docs/installation"
                className="text-[#4299ff] hover:text-[#3182f6] transition-colors inline-flex items-center"
              >
                View Guide
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="h-12 w-12 bg-[#4299ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4299ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Common Questions
              </h2>
              <p className="text-gray-300 mb-6">
                Find answers to frequently asked questions about KOMET
              </p>
              <Link
                href="/faq"
                className="text-[#4299ff] hover:text-[#3182f6] transition-colors inline-flex items-center"
              >
                View FAQs
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Contact Support */}
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="h-12 w-12 bg-[#4299ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4299ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Support
              </h2>
              <p className="text-gray-300 mb-6">
                Need help? Our support team is ready to assist you
              </p>
              <Link
                href="/contact"
                className="text-[#4299ff] hover:text-[#3182f6] transition-colors inline-flex items-center"
              >
                Contact Us
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Documentation */}
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="h-12 w-12 bg-[#4299ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4299ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Documentation
              </h2>
              <p className="text-gray-300 mb-6">
                Detailed guides and technical documentation
              </p>
              <Link
                href="/docs"
                className="text-[#4299ff] hover:text-[#3182f6] transition-colors inline-flex items-center"
              >
                View Docs
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Troubleshooting */}
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="h-12 w-12 bg-[#4299ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4299ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Troubleshooting
              </h2>
              <p className="text-gray-300 mb-6">
                Step-by-step guides to resolve common issues
              </p>
              <Link
                href="/docs/troubleshooting"
                className="text-[#4299ff] hover:text-[#3182f6] transition-colors inline-flex items-center"
              >
                View Guides
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Community */}
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="h-12 w-12 bg-[#4299ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#4299ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Community</h2>
              <p className="text-gray-300 mb-6">
                Join our community of KOMET users and photographers
              </p>
              <Link
                href="/community"
                className="text-[#4299ff] hover:text-[#3182f6] transition-colors inline-flex items-center"
              >
                Join Community
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
