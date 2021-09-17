const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

module.exports = ({
  accountId = '22579668215',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LEADERBOARD', {
      size: [
        [1060, 596],
        [736, 414],
        [428, 241],
        [265, 149],
      ],
      sizeMapping: [
        { viewport: [1070, 0], size: [[970, 250], [1060, 596]] },
        { viewport: [980, 0], size: [[970, 250], [736, 414]] },
        { viewport: [750, 0], size: [[300, 100], [736, 414]] },
        { viewport: [300, 0], size: [[300, 100], [428, 241], [265, 149]] },
      ],
    })
    .setTemplate('RAIL', {
      size: [300, 250],
    })
    .setTemplate('ROTATION', {
      size: [[970, 250], [970, 90], [728, 90]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
        { viewport: [750, 0], size: [[728, 90], [300, 250]] },
        { viewport: [300, 0], size: [[300, 50], [300, 100], [300, 250]] },
      ],
    })
    .setTemplate('INLINE-CONTENT-MOBILE', {
      size: [[970, 250], [970, 90], [728, 90]],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [300, 0], size: [[300, 50], [300, 100], [300, 250]] },
      ],
    })
    .setTemplate('INLINE-CONTENT-DESKTOP', {
      size: [[970, 250], [970, 90], [728, 90]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90]] },
        { viewport: [750, 0], size: [[728, 90], [300, 250]] },
        { viewport: [0, 0], size: [] },
      ],
    });

  return config;
};
