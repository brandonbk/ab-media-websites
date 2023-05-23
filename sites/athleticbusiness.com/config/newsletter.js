const baseConfig = {
  hiddenInputs: [
    { name: 'omedasite', value: 'ab_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered daily to their inbox with AB Today.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/ab-signup-half.png',
  },
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/ab-signup-full.png',
  },
  signupBannerLarge: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/ab-signup-full.png',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Sign Up for AB Today!',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered daily to their inbox with AB Today.',
  },
  signupBannerStatic: {
    ...baseConfig,
    name: 'Sign Up for AB Today!',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered daily to their inbox with AB Today.',
  },
};
