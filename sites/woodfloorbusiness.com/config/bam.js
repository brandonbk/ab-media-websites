const enable = (process.env.ENABLE_BROADSTREET === 'true' || process.env.ENABLE_BROADSTREET === true) || false;

module.exports = ({
  networkId: 7652,
  enable,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['', 99652],
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99653],
        ['(max-width: 980px)', 147849],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99654],
        ['(max-width: 980px)', 147850],
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980pxpx)', 99654],
      ],
    },
    contentMobileLeaderboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980pxpx)', 147849],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 980pxpx)', 147850],
      ],
    },
  },
});
