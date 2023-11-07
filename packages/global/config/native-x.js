const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

module.exports = ({
  uri = process.env.NATIVEX_SERVE_URI || 'https://delivery.mindfulcms.com/abmedia/default/compat/native-website',
  enabled = true,
} = {}) => new NativeXConfiguration(uri, { enabled, tenantKey: 'abmedia' });
