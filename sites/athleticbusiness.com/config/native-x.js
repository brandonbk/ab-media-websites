const configureNativeX = require('@ab-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: 'NOT_SET' },
  ]);

module.exports = config;
