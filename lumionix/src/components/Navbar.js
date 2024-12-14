"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full z-50">
      {/* Desktop gradient background */}
      <div
        className={`absolute inset-0 transition-colors duration-300 md:block hidden
        ${
          isScrolled
            ? "bg-black"
            : "bg-gradient-to-t from-transparent to-black/30"
        }`}
      />
      {/* Mobile solid background */}
      <div
        className={`absolute inset-x-0 top-0 transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "h-[320px]" : "h-16"} ${
          isScrolled ? "bg-black" : "bg-black/80"
        }`}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/LUMIONIX_Logo_Thin_Lite.png"
                alt="Lumionix Logo"
                width={150}
                height={40}
                priority
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-light transition-colors ${
                  isActive("/")
                    ? "text-[#4299ff]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Home
              </Link>
              <Link
                href="/komet"
                className={`px-3 py-2 text-sm font-light transition-colors ${
                  isActive("/komet")
                    ? "text-[#4299ff]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                KOMET
              </Link>
              <Link
                href="/faq"
                className={`px-3 py-2 text-sm font-light transition-colors ${
                  isActive("/faq")
                    ? "text-[#4299ff]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/support"
                className={`px-3 py-2 text-sm font-light transition-colors ${
                  isActive("/support")
                    ? "text-[#4299ff]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Support
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-light transition-colors ${
                  isActive("/contact")
                    ? "text-[#4299ff]"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden relative z-10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`block px-3 py-2 text-sm font-light transition-colors ${
              isActive("/")
                ? "text-[#4299ff]"
                : "text-white hover:text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/komet"
            className={`block px-3 py-2 text-sm font-light transition-colors ${
              isActive("/komet")
                ? "text-[#4299ff]"
                : "text-white hover:text-gray-300"
            }`}
          >
            KOMET
          </Link>
          <Link
            href="/faq"
            className={`block px-3 py-2 text-sm font-light transition-colors ${
              isActive("/faq")
                ? "text-[#4299ff]"
                : "text-white hover:text-gray-300"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/support"
            className={`block px-3 py-2 text-sm font-light transition-colors ${
              isActive("/support")
                ? "text-[#4299ff]"
                : "text-white hover:text-gray-300"
            }`}
          >
            Support
          </Link>
          <Link
            href="/contact"
            className={`block px-3 py-2 text-sm font-light transition-colors ${
              isActive("/contact")
                ? "text-[#4299ff]"
                : "text-white hover:text-gray-300"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
