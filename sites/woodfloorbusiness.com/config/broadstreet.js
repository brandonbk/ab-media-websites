const enable = (process.env.ENABLE_BROADSTREET === 'true' || process.env.ENABLE_BROADSTREET === true) || false;
module.exports = ({
  networkId: 7652,
  enable,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99652],
        ['(min-width: 750px) and (max-width: 980px)', 99650], // athId
        ['(min-width: 300px) and (max-width: 750px)', 99650], // athId
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99653],
        ['(min-width: 750px) and (max-width: 980px)', 99648], // athId
        ['(min-width: 300px) and (max-width: 750px)', 99648],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99654],
        ['(min-width: 750px) and (max-width: 980px)', 99649], // athId
        ['(min-width: 300px) and (max-width: 750px)', 99649], // athId
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 750px)', 99654],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 750px)', 99649], // athId
      ],
    },
  },
});
