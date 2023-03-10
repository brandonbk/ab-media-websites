const companyQueryFragmentFn = require('@ab-media/package-global/graphql/fragment-factories/content-company');
const contentQueryFragmentFn = require('@ab-media/package-global/graphql/fragment-factories/content-page');
const contentMeter = require('@ab-media/package-global/middleware/content-meter');

const withContent = require('@ab-media/package-global/middleware/with-content');
const queryFragment = require('@ab-media/package-global/graphql/fragments/content-page');
const contact = require('@ab-media/package-global/templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');
const projectsGraphQLClient = require('../middleware/projects-graphql-client');

module.exports = (app) => {
  const { site } = app.locals;
  const routesList = [
    { // contact
      regex: '/*?contact/:id(\\d{8})*',
      template: contact,
      queryFragment,
    },
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment: companyQueryFragmentFn(site.get('leaders.alias')),
      useProjectsGraphQLClientL: true,
    },
    { // product
      regex: '/*?media-gallery/:id(\\d{8})*',
      template: mediaGallery,
      queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
    },
    { // whitepaper
      regex: '/*?whitepaper/:id(\\d{8})*',
      template: whitepaper,
      queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: content,
      queryFragment: contentQueryFragmentFn(site.get('leaders.alias')),
      withContentMeter: true,
    },
  ];
  const contentMeterEnable = site.get('contentMeter.enable');
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (route.withContentMeter && contentMeterEnable) {
      if ( route.useProjectsGraphQLClient) {
        app.get(route.regex, contentMeter(), projectsGraphQLClient(), withContent({
          template: route.template,
          queryFragment: route.queryFragment,
        }));
      } else {
        app.get(route.regex, contentMeter(), withContent({
          template: route.template,
          queryFragment: route.queryFragment,
        }));
      }
    } else if (route.useProjectsGraphQLClient) {
      app.get(route.regex, projectsGraphQLClient(), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
      }));
    } else {
      app.get(route.regex, withContent({
        template: route.template,
        queryFragment: route.queryFragment,
      }));
    }
  });
};
