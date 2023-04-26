const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const {
  set,
  get,
  getAsObject,
} = require('@parameter1/base-cms-object-path');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const stripOlyticsParam = require('@parameter1/base-cms-marko-web-omeda-identity-x/middleware/strip-olytics-param');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');
const i18n = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/i18n');
const newsletterState = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/newsletter-state');

const contentGating = require('./middleware/content-gating');
const companySearchHandler = require('./company-search');
const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const billboardState = require('./middleware/billboard-state');
const oembedHandler = require('./oembed-handler');
const idxRouteTemplates = require('./templates/user');
const redirectHandler = require('./redirect-handler');
const idxNavItems = require('./config/identity-x-nav');

const routes = (siteRoutes, siteConfig) => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Handle request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  const googleNewsInput = {
    days: 7,
    includeContentTypes: ['News'],
    excludeLabels: ['Sponsored'],
  };
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    sitemapsHeaders: {
      'x-google-news-input': JSON.stringify(googleNewsInput),
    },
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Use paginated middleware
      app.use(paginated());

      app.use(contentGating(app, options));

      // i18n
      i18n(app, options.i18n);

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Use newsletterState middleware
      app.use(newsletterState());

      // Use billboardState middleware
      app.use(billboardState());

      // Setup IdentityX + Omeda
      const omedaIdentityXConfig = getAsObject(options, 'siteConfig.omedaIdentityX');
      omedaIdentityX(app, { ...omedaIdentityXConfig, idxRouteTemplates });
      idxNavItems({ site: app.locals.site });

      const bamConfig = get(options, 'siteConfig.bam');
      set(app.locals, 'BAM', bamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      app.use(stripOlyticsParam());
    },
    onAsyncBlockError: (e) => newrelic.noticeError(e),

    redirectHandler,

    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
