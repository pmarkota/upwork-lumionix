export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const fetchFromStrapi = async (path, options = {}) => {
  try {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    const response = await fetch(`${STRAPI_URL}/api${path}`, mergedOptions);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw error;
  }
};
