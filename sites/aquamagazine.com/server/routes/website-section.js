const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const leadersFragment = require('@ab-media/package-global/graphql/fragments/leaders-section');
const webinars = require('@ab-media/package-global/templates/website-section/webinars');
const leaders = require('../templates/website-section/leaders');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(leaders)', withWebsiteSection({
    template: leaders,
    queryFragment: leadersFragment,
  }));
  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(webinars)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
