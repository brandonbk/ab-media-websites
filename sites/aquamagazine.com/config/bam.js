const enable = (process.env.ENABLE_BROADSTREET === 'true' || process.env.ENABLE_BROADSTREET === true) || false;

module.exports = ({
  networkId: 7652,
  enable,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['', 99655],
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99656],
        ['(max-width: 980px)', 147848],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99657],
        ['(max-width: 980px)', 147847],
      ],
    },
    contentMobileLeaderboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147848],
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 750px)', 99657],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 750px)', 147847],
      ],
    },
  },
});
