import { fetchFromStrapi } from "../config/strapi";

export const getStrapiData = async (contentType, params = "") => {
  try {
    const response = await fetchFromStrapi(`/${contentType}?${params}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${contentType} from Strapi:`, error);
    throw error;
  }
};

export const getStrapiSingleType = async (contentType) => {
  try {
    const response = await fetchFromStrapi(`/${contentType}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${contentType} from Strapi:`, error);
    throw error;
  }
};

export const getStrapiMedia = (media) => {
  if (!media) return null;
  if (media.data === null) return null;

  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`
    : url;
  return imageUrl;
};
