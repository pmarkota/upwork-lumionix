/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: <span>Lumionix Documentation</span>,
  project: {
    link: "https://github.com/yourusername/lumionix",
  },
  docsRepositoryBase: "https://github.com/yourusername/lumionix",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Lumionix",
    };
  },
  primaryHue: {
    dark: 204,
    light: 212,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
    toggleButton: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  toc: {
    float: true,
    title: "On This Page",
  },
  editLink: {
    text: "Edit this page",
  },
  feedback: {
    content: "Question? Give us feedback →",
  },
  footer: {
    text: `${new Date().getFullYear()} © Lumionix. All rights reserved.`,
  },
};

export default config;
