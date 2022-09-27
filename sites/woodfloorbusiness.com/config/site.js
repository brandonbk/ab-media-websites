const digitalEdition = require('./digital-edition');
const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const magazine = require('./magazine');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');
const omeda = require('./omeda');
const identityX = require('./identity-x');
const omedaIdentityX = require('./omeda-identity-x');
const leaders = require('./leaders');
const bam = require('./bam');

module.exports = {
  navigation,
  bam,
  gam,
  leaders,
  nativeX,
  magazine,
  // temp fix till we update base-cms package
  // Dep Upgrades after https://github.com/parameter1/base-cms/pull/364
  publicationIds: [
    '61560280da016482233042ea',
  ],
  newsletter,
  omeda,
  identityX,
  omedaIdentityX,
  digitalEdition,
  search,
  subscribe,
  company: 'AB Media Inc',
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'woodfloorbusiness.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=45&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'AB Media Logo',
      href: 'https://www.abmedia.biz',
      src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/abmedia-red-white.png?h=40&auto=format,compress',
      srcset: [
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/abmedia-red-white.png?h=40&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  premiumPartners: {
    shuffle: false,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/WoodFloorBusiness', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/woodfloorbusiness/', target: '_blank' },
    { provider: 'tiktok', href: 'https://www.tiktok.com/@woodfloorbusiness', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/wfbiz/_created/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/wood-floor-business/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/WoodFloorBusiness', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/WFBusinessMag', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-WT2JX6S',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  gcse: {
    id: 'e441918cb25949a69',
  },
  layout: 'default',
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'sales@woodfloorbusiness.com',
    sendFrom: 'WoodFloorBusiness.com <noreply@parameter1.com>',
    logo: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70&bg=FFFFFF&pad=5',
    bgColor: '#FFFFFF',
  },
};
