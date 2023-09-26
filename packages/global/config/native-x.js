const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

module.exports = ({
  uri = 'https://delivery.mindfulcms.dev/abmedia/default/compat/native-website',
  enabled = false,
} = {}) => new NativeXConfiguration(uri, { enabled });
