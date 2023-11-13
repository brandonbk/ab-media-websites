// Our version of layzyload
const BAM_LAZYLOAD_ENABLED = (process.env.BAM_LAZYLOAD_ENABLED && (process.env.BAM_LAZYLOAD_ENABLED === true || process.env.BAM_LAZYLOAD_ENABLED === 'true'));
// Their version of lazyload...
// In order to enable our version of lazyload must be disabled.
const BAM_ONLY_VISIBLE = (process.env.BAM_ONLY_VISIBLE && (process.env.BAM_ONLY_VISIBLE === true || process.env.BAM_ONLY_VISIBLE === 'true'));
const onlyVisible = (!BAM_LAZYLOAD_ENABLED && BAM_ONLY_VISIBLE)
  ? { mobileScaling: 2.0, renderMarginPercent: 200 }
  : false;

module.exports = ({
  networkId: 7652,
  onlyVisible,
  lazyload: {
    enabled: BAM_LAZYLOAD_ENABLED,
    offset: '10%',
  },
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
    rotaction300: {
      zoneIdSizeMapping: [
        ['', 147850],
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
        ['(min-width: 980px)', 147850],
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
