const BroadstreetConfiguration = require('@ab-media/base-cms-marko-web-broadstreet/config');

const config = new BroadstreetConfiguration(7652);

module.exports = ({
  ...config,
  enable: true,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99650],
        ['(min-width: 750px) and (max-width: 980px)', 99655], // aquaId
        ['(min-width: 300px) and (max-width: 750px)', 99655], // aquaId
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99648],
        ['(min-width: 750px) and (max-width: 980px)', 99656], // aquaId
        ['(min-width: 300px) and (max-width: 750px)', 99656], // aquaId
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99649],
        ['(min-width: 750px) and (max-width: 980px)', 99657], // aquaId
        ['(min-width: 300px) and (max-width: 750px)', 99657], // aquaId
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 750px)', 99649],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 750px)', 99657], // aquaId
      ],
    },
  },
});
