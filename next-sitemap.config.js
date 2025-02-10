/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://circleofintimacy.org", // Fixed missing '/' after 'https:'
  generateRobotsTxt: true, // Generates a robots.txt file
};

export default config;
