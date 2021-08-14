const topics = {
  primary: [
    { href: '/retail', label: 'Retail' },
    { href: '/service', label: 'Service' },
    { href: '/builder', label: 'Builder' },
    { href: '/products', label: 'Products' },
    { href: '/homeowners-diy', label: 'Homeowners/DIY' },
  ],
  expanded: [
  ],
  secondary: [
    // { href: '/path', label: 'Path' },
  ],
};

const utilities = [
  { href: 'https://info.aquamagazine.com', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land', label: 'Subscribe', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land', label: 'Subscribe', target: '_blank' },
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};

module.exports = {
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: topics.primary,
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/about', label: 'About' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land', label: 'Subscribe', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
      // { href: '/path', label: 'Path' },
    ],
  },
};
