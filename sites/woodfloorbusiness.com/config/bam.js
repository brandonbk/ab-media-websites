const onlyVisible = (process.env.BAM_ONLY_VISIBLE && (process.env.BAM_ONLY_VISIBLE === true || process.env.BAM_ONLY_VISIBLE === 'true'))
  ? { mobileScaling: 2.0, renderMarginPercent: 200 }
  : false;

module.exports = ({
  networkId: 7652,
  onlyVisible,
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
    // for use in content pages when positions move
    desktopBillboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99652],
      ],
    },
    mobileBillboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 99652],
      ],
    },
    desktopLeaderboard: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99653],
      ],
    },
    desktopRotation: {
      zoneIdSizeMapping: [
        ['(min-width: 980px)', 99654],
      ],
    },
    mobileLeaderboard: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147849],
      ],
    },
    mobileRotation: {
      zoneIdSizeMapping: [
        ['(max-width: 980px)', 147850],
      ],
    },
  },
});
