const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ab-media/package-theme-monorail/graphql/fragments/dynamic-page');
const page = require('@ab-media/package-global/templates/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
