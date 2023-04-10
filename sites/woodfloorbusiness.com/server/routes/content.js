const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');
const companyQueryFragmentFn = require('@ab-media/package-global/graphql/fragment-factories/content-company');
const contentQueryFragmentFn = require('@ab-media/package-global/graphql/fragment-factories/content-page');
const { newsletterState, formatContentResponse } = require('@ab-media/package-global/middleware/newsletter-state');

const withContent = require('@ab-media/package-global/middleware/with-content');
const queryFragment = require('@ab-media/package-global/graphql/fragments/content-page');
const contact = require('@ab-media/package-global/templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

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
    },
  ];
  const contentMeterEnable = site.get('contentMeter.enable');
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (contentMeterEnable) {
      app.get(route.regex, newsletterState({ setCookie: false }), contentMetering(), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    } else {
      app.get(route.regex, newsletterState({ setCookie: false }), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    }
  });
};
