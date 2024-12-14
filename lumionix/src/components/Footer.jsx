'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getStrapiData } from '@/services/strapi.service';
import { STRAPI_ENDPOINTS } from '@/lib/strapi-types';

export default function Footer() {
  const [faqs, setFaqs] = useState([]);
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getStrapiData(STRAPI_ENDPOINTS.FAQ);
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    setYear(new Date().getFullYear().toString());
    fetchFaqs();
  }, []);

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Lumionix</h3>
          <p className="text-gray-400">
            A camera trigger redefined - KOMET by Lumionix
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/komet" className="text-gray-400 hover:text-white">
                KOMET
              </Link>
            </li>
            <li>
              <Link href="/docs" className="text-gray-400 hover:text-white">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-gray-400 hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* FAQs */}
        <div>
          <h3 className="text-xl font-bold mb-4">FAQs</h3>
          <ul className="space-y-2">
            {faqs.slice(0, 5).map((faq) => (
              <li key={faq.id}>
                <Link
                  href={\`/faq#\${faq.attributes.category}\`}
                  className="text-gray-400 hover:text-white"
                >
                  {faq.attributes.question}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="text-blue-500 hover:text-blue-400">
                View all FAQs →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">Email: support@lumionix.com</li>
            <li className="text-gray-400">Follow us on social media</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {year} Lumionix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 