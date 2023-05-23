const baseConfig = {
  hiddenInputs: [
    { name: 'omedasite', value: 'wfb_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/wfb-signup-half.png',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/wfb-signup-full.png',
  },
  signupBannerLarge: {
    ...defaults,
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
    imagePath: 'files/base/abmedia/all/image/static/newsletter-signup/wfb-signup-full.png',
  },
  signupFooter: {
    ...baseConfig,
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupBannerStatic: {
    ...baseConfig,
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
};
