import { useEffect, useState } from 'react';
import { getStrapiData } from '@/services/strapi.service';
import { STRAPI_ENDPOINTS } from '@/lib/strapi-types';
import ReactMarkdown from 'react-markdown';

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getStrapiData(STRAPI_ENDPOINTS.FAQ);
        // Sort by order and group by category
        const sortedFaqs = data.sort((a, b) => a.attributes.order - b.attributes.order);
        setFaqs(sortedFaqs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) return <div>Loading FAQs...</div>;
  if (error) return <div>Error loading FAQs: {error}</div>;
  if (!faqs.length) return <div>No FAQs available</div>;

  // Get unique categories
  const categories = ['all', ...new Set(faqs.map(faq => faq.attributes.category))];

  // Filter FAQs by category
  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.attributes.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Category Filter */}
      <div className="mb-8 flex gap-4 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={\`px-4 py-2 rounded-full \${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        {filteredFaqs.map((faq) => (
          <div key={faq.id} className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold mb-2">
              {faq.attributes.question}
            </h3>
            <div className="prose dark:prose-invert">
              <ReactMarkdown>{faq.attributes.answer}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 