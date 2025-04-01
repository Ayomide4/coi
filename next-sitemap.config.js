/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://circleofintimacy.org",
  generateRobotsTxt: true,
  robotsTxtOptions: {

    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'],
  alternateRefs: [
    {
      href: 'https://circleofintimacy.org',
      hreflang: 'en',
    },
  ],
};

export default config;
