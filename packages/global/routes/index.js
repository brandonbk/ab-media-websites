const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const feed = require('./feed');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const omedaNewsletters = require('./omeda-newsletters');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const renderBlock = require('./render-block');

module.exports = (app) => {
  // Feed
  feed(app);

  // IdentityX (user routing and app context)
  identityX(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // HTML Sitemap
  htmlSitemap(app);
};
