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
  const useLinkInjectedBody = site.get('useLinkInjectedBody');
  const routesList = [
    { // contact
      regex: '/*?contact/:id(\\d{8})*',
      template: contact,
      queryFragment,
    },
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment: companyQueryFragmentFn({
        leadersAlias: site.get('leaders.alias'),
        useLinkInjectedBody,
      }),
    },
    { // product
      regex: '/*?media-gallery/:id(\\d{8})*',
      template: mediaGallery,
      queryFragment: contentQueryFragmentFn({
        leadersAlias: site.get('leaders.alias'),
        useLinkInjectedBody,
      }),
    },
    { // whitepaper
      regex: '/*?whitepaper/:id(\\d{8})*',
      template: whitepaper,
      queryFragment: contentQueryFragmentFn({
        leadersAlias: site.get('leaders.alias'),
        useLinkInjectedBody,
      }),
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: content,
      queryFragment: contentQueryFragmentFn({
        leadersAlias: site.get('leaders.alias'),
        useLinkInjectedBody,
      }),
    },
  ];
  const cmConfig = site.getAsObject('contentMeter');
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (cmConfig.enabled) {
      app.get(
        route.regex,
        newsletterState({ setCookie: false }),
        contentMetering(cmConfig),
        withContent({
          template: route.template,
          queryFragment: route.queryFragment,
          formatResponse: formatContentResponse,
        }),
      );
    } else {
      app.get(route.regex, newsletterState({ setCookie: false }), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    }
  });
};
