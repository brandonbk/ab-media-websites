const digitalEdition = require('./digital-edition');
const navigation = require('./navigation');
const gam = require('./gam');
const contentMeter = require('./content-meter');
const nativeX = require('./native-x');
const magazine = require('./magazine');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');
const omeda = require('./omeda');
const identityX = require('./identity-x');
const identityXOptInHooks = require('./identity-x-opt-in-hooks');
const omedaIdentityX = require('./omeda-identity-x');

const leaders = require('./leaders');

module.exports = {
  useLinkInjectedBody: process.env.USE_LINK_INJECTED_BODY || false,
  navigation,
  gam,
  contentMeter,
  leaders,
  nativeX,
  magazine,
  contentTypesToGateByDefault: [
    'article',
  ],
  // temp fix till we update base-cms package
  // Dep Upgrades after https://github.com/parameter1/base-cms/pull/364
  publicationIds: [
    '615602b1da01648223320698',
  ],
  newsletter,
  omeda,
  identityX,
  identityXOptInHooks,
  omedaIdentityX,
  digitalEdition,
  search,
  company: 'AB Media Inc',
  subscribe,
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'athleticbusiness.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=45&auto=format,compress&q=70&dpr=2 2x',
      ],
      width: '179',
      height: '35',
    },
    footer: {
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=60&auto=format,compress&q=70&dpr=2 2x',
      ],
      width: '179',
      height: '35',
    },
    corporate: {
      alt: 'AB Media Logo',
      href: 'https://www.abmedia.biz',
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/abmedia-red-white.png?h=40&auto=format,compress',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/abmedia-red-white.png?h=40&auto=format,compress&dpr=2 2x',
      ],
      width: '120',
      height: '40',
    },
  },
  premiumPartners: {
    shuffle: true,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/athleticbusiness', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/athleticbiz/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/athletic-business/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/AthleticBusinessMag', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/Athleticbiz', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-KKMNMDK',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  gcse: {
    id: '29e97f02d3b680a4b',
  },
  layout: 'default',
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'sales@athleticbusiness.com',
    sendFrom: 'AthleticBusiness.com <noreply@parameter1.com>',
    logo: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=60&auto=format,compress&q=70&bg=FFFFFF&pad=5',
    bgColor: '#FFFFFF',
  },
};
