const subscribe = require('./subscribe');

const topics = {
  primary: [
    { href: '/installation', label: 'Installation' },
    { href: '/sanding', label: 'Sanding' },
    { href: '/finishing', label: 'Finishing' },
    { href: '/business', label: 'Business' },
  ],
  expanded: [],
  secondary: [],
};

const resources = [
  { href: '/directory', label: 'Resource Book' },
  { href: '/magazine', label: 'Magazine' },
  { href: '/news', label: 'News' },
  { href: '/webinars', label: 'WFB Live Demos' },
];

const utilities = [
  { href: 'https://info.woodfloorbusiness.com', label: 'Advertise', target: '_blank' },
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
        src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb/wfb-08-2021.png?auto=format%2Ccompress&fit=crop&h=78&q=70&w=85&crop=top',
        srcset: [
          'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb/wfb-08-2021.png?auto=format%2Ccompress&fit=crop&h=78&q=70&dpr=2&w=85&crop=top',
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
      { href: '/magazine', label: 'Magazine' },
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
    ],
  },
};
