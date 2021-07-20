const configureIdentityX = require('@ab-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  appId: '5f77a19d8eebee8244ee53fc',
  requiredServerFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle',
    'countryCode',
    'regionCode',
    'postalCode',
  ],
});
