"use client";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div>
            <Link href="/">
              <Image
                src="/assets/LUMIONIX_Logo_Thin_Dark.png"
                alt="Lumionix"
                width={150}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-gray-800 uppercase text-base font-montserrat font-bold mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 text-sm font-montserrat"
              >
                Home
              </Link>
              <Link
                href="/komet"
                className="text-gray-500 hover:text-gray-700 text-sm font-montserrat"
              >
                KOMET
              </Link>
              <Link
                href="/faq"
                className="text-gray-500 hover:text-gray-700 text-sm font-montserrat"
              >
                FAQ
              </Link>
              <Link
                href="/support"
                className="text-gray-500 hover:text-gray-700 text-sm font-montserrat"
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-700 text-sm font-montserrat"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-gray-800 uppercase text-base font-montserrat font-bold mb-4">
              Newsletter
            </h3>
            <p className="text-gray-500 text-sm font-montserrat mb-4">
              Get our exclusive offers and tips.
            </p>
            <div className="flex items-stretch">
              <input
                type="email"
                placeholder="Your email address ..."
                className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-full outline-none font-montserrat placeholder:text-gray-400 bg-white focus:border-gray-300"
              />
              <button className="w-12 h-12 -ml-12 text-gray-800 hover:text-gray-600 transition-colors relative z-10 flex items-center justify-center">
                <BsArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Follow Section */}
          <div>
            <h3 className="text-gray-800 uppercase text-base font-montserrat font-bold mb-4">
              Follow
            </h3>
            <p className="text-gray-500 text-sm font-montserrat mb-4">
              Join our community of creatives.
              <br />
              #ShootWithLumionix
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/Button_Facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/Button_Instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/Button_Twitter_X.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/Button_YouTube.png"
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-[#4299ff] w-full mb-8 opacity-20"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-500 font-montserrat text-sm">
            © 2024 Lumionix | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
