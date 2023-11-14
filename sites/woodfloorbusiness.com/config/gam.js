const configureGAM = require('@ab-media/package-global/config/gam');

const config = configureGAM({ basePath: 'wfb' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'billboard', templateName: 'BILLBOARD', path: 'leaderboard' },
    { name: 'billboard-desktop', templateName: 'BILLBOARD-DESKTOP', path: 'leaderboard' },
    { name: 'billboard-mobile', templateName: 'BILLBOARD-MOBILE', path: 'leaderboard' },
    { name: 'rail', templateName: 'ROTATION-300', path: 'rotation' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'rotation-desktop', templateName: 'ROTATION-DESKTOP', path: 'rotation' },
    { name: 'rotation-300', templateName: 'ROTATION-300', path: 'rotation' },
    { name: 'inline-leaderboard-mobile', templateName: 'INLINE-LEADERBOARD-MOBILE', path: 'leaderboard' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
  ]);

const aliases = [
  'wood-flooring',
  'installation',
  'sanding',
  'finishing',
  'business',
];

aliases.forEach((alias) => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${alias}-leaderboard` },
  { name: 'billboard', templateName: 'BILLBOARD', path: `${alias}-leaderboard` },
  { name: 'billboard-desktop', templateName: 'BILLBOARD-DESKTOP', path: `${alias}-leaderboard` },
  { name: 'billboard-mobile', templateName: 'BILLBOARD-MOBILE', path: `${alias}-leaderboard` },
  { name: 'rail', templateName: 'ROTATION-300', path: `${alias}-rotation` },
  { name: 'rotation', templateName: 'ROTATION', path: `${alias}-rotation` },
  { name: 'rotation-desktop', templateName: 'ROTATION-DESKTOP', path: `${alias}-rotation` },
  { name: 'rotation-300', templateName: 'ROTATION-300', path: `${alias}-rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${alias}-rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${alias}-rotation` },
]));

module.exports = config;
