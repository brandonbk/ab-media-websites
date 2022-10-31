const onlyVisible = (process.env.BAM_ONLY_VISIBLE && (process.env.BAM_ONLY_VISIBLE === true || process.env.BAM_ONLY_VISIBLE === 'true'))
  ? { mobileScaling: 2.0, renderMarginPercent: 200 }
  : false;

module.exports = ({
  networkId: 7652,
  onlyVisible,
  zones: {
    billboard: {
      zoneIdSizeMapping: [
        ['', 99650],
      ],
    },
    leaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99648],
        ['(max-width: 980px)', 147846],
      ],
    },
    rotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99649],
        ['(max-width: 980px)', 147422],
      ],
    },
    // for use in content pages when positions move
    desktopBillboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99650],
      ],
    },
    mobileBillboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 99650],
      ],
    },
    desktopLeaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99648],
      ],
    },
    desktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99649],
      ],
    },
    mobileLeaderboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147846],
      ],
    },
    mobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147422],
      ],
    },
  },
});
