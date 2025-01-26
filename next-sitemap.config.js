/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://rosi.co.il',
    generateRobotsTxt: true,
    exclude: [
      '/admin',
      '/admin/*', // Exclude all admin subpages
    ],
  };
  