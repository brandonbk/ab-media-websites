const BroadstreetConfiguration = require('@ab-media/base-cms-marko-web-broadstreet/config');

const config = new BroadstreetConfiguration(7652);

module.exports = ({
  ...config,
  enable: true,
  useAltZone: 800,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99655],
        ['(min-width: 750px) and (max-width: 980px)', 99650], // athId
        ['(min-width: 300px) and (max-width: 750px)', 99650], // athId
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99656],
        ['(min-width: 750px) and (max-width: 980px)', 99648], // athId
        ['(min-width: 300px) and (max-width: 750px)', 99648],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99657],
        ['(min-width: 750px) and (max-width: 980px)', 99649], // athId
        ['(min-width: 300px) and (max-width: 750px)', 99649], // athId
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 750px)', 99657],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 750px)', 99649], // athId
      ],
    },
  },
});
