import { useEffect, useState } from "react";
import { getStrapiData } from "@/services/strapi.service";
import { STRAPI_ENDPOINTS } from "@/lib/strapi-types";
import ReactMarkdown from "react-markdown";

export default function DocumentationPage() {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const data = await getStrapiData(STRAPI_ENDPOINTS.DOCUMENTATION);
        // Sort by order
        const sortedDocs = data.sort(
          (a, b) => a.attributes.order - b.attributes.order
        );
        setDocs(sortedDocs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  if (loading) return <div>Loading documentation...</div>;
  if (error) return <div>Error loading documentation: {error}</div>;
  if (!docs.length) return <div>No documentation available</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {docs.map(
        (doc) =>
          doc.attributes.published && (
            <article key={doc.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                {doc.attributes.title}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <ReactMarkdown>{doc.attributes.content}</ReactMarkdown>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                Category: {doc.attributes.category}
              </div>
            </article>
          )
      )}
    </div>
  );
}
