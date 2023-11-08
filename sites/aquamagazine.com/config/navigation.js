const subscribe = require('./subscribe');

const topics = {
  primary: [
    { href: '/retail', label: 'Retail' },
    { href: '/service', label: 'Service' },
    { href: '/builder', label: 'Builder' },
    { href: '/products', label: 'Products' },
    { href: '/news', label: 'News' },
    { href: '/homeowners-diy', label: 'Homeowners/DIY' },
  ],
  expanded: [],
  secondary: [],
};

const resources = [
  { href: '/directory', label: 'Buyer\'s Guide' },
  { href: '/magazine', label: 'Magazine' },
  { href: 'https://www.aquamag.live', label: 'Leadership Retreat', target: '_blank' },
  { href: 'https://www.aquaspringtraining.com/', label: 'Midwest: Spring Training', target: '_blank' },
  { href: '/news/pool-hot-tub-alliance-news', label: 'PHTA News' },
  { href: 'https://library.aquamagazine.com/', label: 'Content Library', target: '_blank' },
  { href: '/webinars', label: 'Webinars' },
  { href: '/events', label: 'Events' },
];

const utilities = [
  { href: 'https://info.aquamagazine.com', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  subscribe,
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    subscribe,
    ...resources,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
  resources: [...resources],
};

module.exports = {
  primary: {
    items: [],
  },
  secondary: {
    items: [
      ...topics.primary,
    ],
  },
  tertiary: {
    items: [],
  },
  user: {
    items: [],
  },
  aquaLiveDropdown: {
    items: [
      { href: 'https://www.aquamag.live/', label: 'Leadership Retreat', target: '_blank' },
      { href: 'https://www.aquaspringtraining.com/', label: 'Midwest: Spring Training', target: '_blank' },
    ],
  },
  desktopMenu,
  mobileMenu,
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      subscribe,
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
    ],
  },
};
