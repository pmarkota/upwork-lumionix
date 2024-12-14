"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import { IoAdd } from "react-icons/io5";
import ProductReview from "../../components/ProductReview";
import FreezeSection from "../../components/FreezeSection";
import HighSpeedSection from "../../components/HighSpeedSection";
import WirelessFlashSection from "../../components/WirelessFlashSection";
import FlashReceiverDetails from "../../components/FlashReceiverDetails";
import TimeLapseSection from "../../components/TimeLapseSection";
import NDFilterSection from "../../components/NDFilterSection";
import RemoteControlSection from "../../components/RemoteControlSection";
import GalleryShareSection from "../../components/GalleryShareSection";
import FileManagerSection from "../../components/FileManagerSection";
import TechSpecsSection from "../../components/TechSpecsSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import { getStrapiData, getStrapiMedia } from "../../services/strapi.service";

export default function Komet() {
  const [selectedBundle, setSelectedBundle] = useState("Essential");
  const [selectedCables, setSelectedCables] = useState([
    "Canon EOS R5 | Type-C to Type-C",
  ]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getStrapiData("products", "populate=*");
        console.log("Full Strapi response:", response);
        if (response && response.length > 0) {
          const productData = response[0];
          console.log("Product data:", productData);
          setProduct(productData);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdownIndex !== null &&
        dropdownRefs.current[openDropdownIndex] &&
        !dropdownRefs.current[openDropdownIndex].contains(event.target)
      ) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownIndex]);

  const bundles = ["Basic", "Essential", "Ultimate", "Solo"];
  const cables = [
    "Canon EOS R5 | Type-C to Type-C",
    "Canon EOS R5 | Type-C to Mini-B (8 Pin)",
    // Add more cable options as needed
  ];

  const boxContents = [
    "1 x KOMET-TR Camera Trigger",
    "2 x KOMET-RC Flash Receiver",
    "1 x USB Camera Cable",
    "1 x USB Charging Cable",
    "1 x USB Wall Charger",
  ];

  const formatCableText = (cable) => {
    const [camera, connection] = cable.split(" | ");
    const [type1, , type2, ...rest] = connection.split(" ");
    return (
      <div className="flex items-center gap-1">
        <span className="font-bold text-black">{camera}</span>
        <span className="text-gray-400 font-semibold">|</span>
        <span className="font-bold text-gray-400">{type1}</span>
        <span className="text-gray-400 font-semibold">to</span>
        <span className="font-bold text-gray-400">{type2}</span>
        {rest.length > 0 && (
          <span className="text-gray-400 font-semibold">{rest.join(" ")}</span>
        )}
      </div>
    );
  };

  const addNewCable = () => {
    setSelectedCables([...selectedCables, cables[0]]);
  };

  const removeCable = (index) => {
    const newCables = selectedCables.filter((_, i) => i !== index);
    setSelectedCables(newCables);
    setOpenDropdownIndex(null);
  };

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-16 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black pt-16 text-white flex items-center justify-center">
        No product data available
      </div>
    );
  }

  console.log("Rendered product:", product);
  console.log("Product images:", product.Images);

  return (
    <main className="min-h-screen bg-black pt-16">
      <div className="relative bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/Video_Fallback/Home_Video_Fallback.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-white/5 rounded-lg relative overflow-hidden">
                {product.Images?.[0] ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.Images[0].url}`}
                    alt={product.Name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <p className="text-red-500 text-2xl">
                    No product image available
                  </p>
                )}
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.Images?.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-white/5 rounded-lg overflow-hidden relative"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`}
                      alt={`${product.Name} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="text-white">
              <h1 className="text-3xl font-bold mb-2">{product.Name}</h1>
              <p className="text-gray-400 mb-4">{product.Description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#4299ff] text-3xl font-bold">
                    ${product.Price}
                  </span>
                  <span className="text-gray-500 text-3xl line-through">
                    ${Math.round(product.Price * 1.2)}
                  </span>
                </div>
                <p className="text-gray-400">You save 20%</p>
              </div>

              {/* Bundle Options */}
              <div className="mb-6">
                <p className="text-gray-400 font-semibold mb-2">
                  Bundle options:
                </p>
                <div className="flex flex-wrap gap-2">
                  {bundles.map((bundle) => (
                    <button
                      key={bundle}
                      onClick={() => setSelectedBundle(bundle)}
                      className={
                        selectedBundle === bundle
                          ? "px-4 py-1.5 rounded-full bg-[#4299ff] border-[#4299ff] text-white"
                          : "px-4 py-1.5 rounded-full bg-white text-black hover:bg-gray-100"
                      }
                    >
                      {bundle}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cable Variant */}
              <div className="mb-6">
                <p className="text-gray-400 font-semibold mb-2">
                  Cable Variant:
                </p>
                <div className="space-y-2">
                  {selectedCables.map((cable, index) => (
                    <div
                      key={index}
                      className="relative"
                      ref={(el) => (dropdownRefs.current[index] = el)}
                    >
                      <div
                        onClick={() => toggleDropdown(index)}
                        className="w-full px-4 py-2 bg-white rounded-lg text-left flex justify-between items-center group cursor-pointer"
                      >
                        {formatCableText(cable)}
                        <div className="flex items-center gap-2">
                          {selectedCables.length > 1 && (
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                removeCable(index);
                              }}
                              className="text-gray-400 hover:text-gray-600 cursor-pointer"
                            >
                              ×
                            </div>
                          )}
                          <svg
                            className={
                              "w-5 h-5 text-gray-400 transition-transform " +
                              (openDropdownIndex === index ? "rotate-180" : "")
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                      {openDropdownIndex === index && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                          {cables.map((option) => (
                            <div
                              key={option}
                              onClick={() => {
                                const newCables = [...selectedCables];
                                newCables[index] = option;
                                setSelectedCables(newCables);
                                setOpenDropdownIndex(null);
                              }}
                              className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg cursor-pointer"
                            >
                              {formatCableText(option)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addNewCable}
                    className="flex items-center gap-2 text-[#4299ff] hover:text-[#3182f6] transition-colors"
                  >
                    <IoAdd size={20} />
                    <span>Add another cable</span>
                  </button>
                </div>
              </div>

              {/* What's in the box */}
              <div className="mb-6">
                <p className="text-gray-400 font-semibold mb-2">
                  What's in the box?
                </p>
                <ul className="space-y-1">
                  {boxContents.map((item, index) => (
                    <li key={index} className="text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-[#4299ff] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#3182f6] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Review Section */}
      <ProductReview />

      {/* Freeze Section */}
      <FreezeSection />

      {/* High Speed Section */}
      <HighSpeedSection />

      {/* Wireless Flash Section */}
      <WirelessFlashSection />

      {/* Flash Receiver Details Section */}
      <FlashReceiverDetails />

      {/* Time Lapse Section */}
      <TimeLapseSection />
      <RemoteControlSection />
      <NDFilterSection />
      <GalleryShareSection />
      <FileManagerSection />
      <TechSpecsSection />
      <TestimonialsSection />

      <Footer />
    </main>
  );
}
