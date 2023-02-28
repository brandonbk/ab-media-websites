const subscribe = require('./subscribe');

const topics = {
  primary: [
    { href: '/facilities', label: 'Facilities' },
    { href: '/operations', label: 'Operations' },
    { href: '/leadership', label: 'Leadership' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [
    { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
    // { href: '/operations', label: 'Operations' },
  ],
};

const projectGalleries = [
  { href: '/project-galleries/architectural-showcase', label: 'Architectural Showcase' },
  { href: '/project-galleries/facilities-of-merit', label: 'Facilities of Merit' },
  { href: '/project-galleries/aquatic-design-portfolio', label: 'Aquatic Design Portfolio' },
];

const resources = [
  ...projectGalleries,
  { href: '/directory', label: 'Buyer\'s Guide' },
  { href: '/magazine', label: 'Magazine' },
];

const utilities = [
  { href: 'https://www.athleticbusiness.info', label: 'Advertise', target: '_blank' },
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
  promos: [
    {
      title: 'AB Magazine',
      callToAction: 'Subscribe',
      image: {
        src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-cover-09-21.jpg?auto=format%2Ccompress&fit=crop&h=78&q=70&w=85&crop=top',
        srcset: [
          'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-cover-09-21.jpg?auto=format%2Ccompress&fit=crop&h=78&q=70&dpr=2&w=85&crop=top',
        ],
      },
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: [
      ...topics.primary,
      { href: '/directory', label: 'Buyer\'s Guide' },
      { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
      { href: '/project-galleries/architectural-showcase', label: 'Showcase' },
    ],
  },
  tertiary: {
    items: [],
  },
  user: {
    items: [],
  },
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
      // { href: '/path', label: 'Path' },
    ],
  },
};
