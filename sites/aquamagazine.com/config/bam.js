const onlyVisible = (process.env.BAM_ONLY_VISIBLE && (process.env.BAM_ONLY_VISIBLE === true || process.env.BAM_ONLY_VISIBLE === 'true'))
  ? { mobileScaling: 2.0, renderMarginPercent: 200 }
  : false;

module.exports = ({
  networkId: 7652,
  onlyVisible,
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
    // for use in content pages when positions move
    desktopBillboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99655],
      ],
    },
    mobileBillboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 99655],
      ],
    },
    desktopLeaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99656],
      ],
    },
    desktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99657],
      ],
    },
    mobileLeaderboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147848],
      ],
    },
    mobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147847],
      ],
    },
  },
});
