const baseConfig = {
  hiddenInputs: [
    { name: 'omedasite', value: 'aqua_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered twice a week to their inbox with AQUA Today.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/aqua-signup-half.png',
  },
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/aqua-signup-full.png',
  },
  signupBannerLarge: {
    ...defaults,
    name: 'Newsletter for Pool and Spa Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/aqua-signup-full.png',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter for Pool and Spa Professionals',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupBannerStatic: {
    ...baseConfig,
    name: 'Newsletter for Pool and Spa Professionals',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
};
