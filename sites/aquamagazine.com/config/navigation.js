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
  { href: 'https://www.aquamag.live', label: 'AQUA Live', target: '_blank' },
  { href: '/news/pool-hot-tub-alliance-news', label: 'PHTA News' },
  { href: 'https://library.aquamagazine.com/', label: 'Content Library', target: '_blank' },
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
      { href: 'https://www.aquamag.live', label: 'AQUA Live', target: '_blank' },
    ],
  },
  tertiary: {
    items: [],
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
