const BroadstreetConfiguration = require('@ab-media/base-cms-marko-web-broadstreet/config');

const config = new BroadstreetConfiguration(7652);

module.exports = ({
  ...config,
  enable: true,
  useAltZone: 800,
  zones: {
    billboard: 99650,
    leaderboard: 99648,
    rotation: 99649,
    stickyLeaderboard: 99648,
  },
});
