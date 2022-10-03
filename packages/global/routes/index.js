const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const omedaNewsletters = require('@parameter1/base-cms-marko-web-omeda/routes/omeda-newsletters');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const searchTemplate = require('../templates/search');
const digitalEdition = require('./digital-edition');
const feed = require('./feed');
const nativeX = require('./native-x');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const magazine = require('./magazine');

module.exports = (app, siteConfig) => {
  // Digital Edition
  digitalEdition(app, siteConfig);

  // Feed
  feed(app);

  // Magazine Routes
  magazine(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app, siteConfig);

  // Remote component/block loader
  renderBlock(app);

  // Search routes
  // search(app, siteConfig);
  app.get('/search', (_, res) => { res.marko(searchTemplate); });

  // HTML Sitemap
  htmlSitemap(app);
};
