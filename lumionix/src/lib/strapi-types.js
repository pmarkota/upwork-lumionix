/**
 * @typedef {Object} DocumentationPage
 * @property {string} title
 * @property {string} slug
 * @property {number} order
 * @property {string} category
 * @property {boolean} published
 * @property {string} content
 */

/**
 * @typedef {Object} FAQ
 * @property {string} question
 * @property {string} answer
 * @property {string} category
 * @property {number} order
 */

/**
 * @typedef {Object} Product
 * @property {string} name
 * @property {string} description
 * @property {number} price
 * @property {string} features
 * @property {Object} specifications
 * @property {Array<Object>} images
 */

/**
 * @typedef {Object} SupportArticle
 * @property {string} title
 * @property {string} content
 * @property {string} category
 * @property {number} order
 */

export const STRAPI_ENDPOINTS = {
  DOCUMENTATION: "documentation-pageges",
  FAQ: "faqs",
  PRODUCT: "products",
  SUPPORT: "support-articles",
};
