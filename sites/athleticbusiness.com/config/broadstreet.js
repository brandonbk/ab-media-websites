const BroadstreetConfiguration = require('@ab-media/base-cms-marko-web-broadstreet/config');

const config = new BroadstreetConfiguration(7652);

module.exports = ({
  ...config,
  enable: true,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99650],
        ['(min-width: 750px) and (max-width: 980px)', 99655],
        ['(min-width: 300px) and (max-width: 750px)', 99655],
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99648],
        ['(min-width: 750px) and (max-width: 980px)', 99656],
        ['(min-width: 300px) and (max-width: 750px)', 99656],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99649],
        ['(min-width: 750px) and (max-width: 980px)', 99657],
        ['(min-width: 300px) and (max-width: 750px)', 99657],
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 750px)', 99649],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['', 99657],
      ],
    },
  },
});
