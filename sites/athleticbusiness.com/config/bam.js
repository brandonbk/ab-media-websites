const enable = (process.env.ENABLE_BROADSTREET === 'true' || process.env.ENABLE_BROADSTREET === true) || false;

module.exports = ({
  networkId: 7652,
  enable,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['', 99650],
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99648],
        ['(min-width: 750px) and (max-width: 980px)', 147846],
        ['(min-width: 300px) and (max-width: 750px)', 147846],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99649],
        ['(max-width: 980px)', 147422],
      ],
    },
    contentDesktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99649],
      ],
    },
    contentMobileLeaderboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147846],
      ],
    },
    contentMobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147422], // aquaId
      ],
    },
  },
});
