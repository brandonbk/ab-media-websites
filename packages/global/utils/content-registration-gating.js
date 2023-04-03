const { get, getAsArray } = require('@parameter1/base-cms-object-path');

/**
 * conditionally enforce gating by registration by type
 */
module.exports = (({ content, siteConfig }) => {
  const contentTypesToGateByDefault = getAsArray(siteConfig, 'contentTypesToGateByDefault');
  // Force gating by reg base on site's for contentGatingByType by content type
  // @TODO make site config based.
  if (contentTypesToGateByDefault.includes(content.type)) {
    return true;
  }
  return get(content, 'userRegistration.isCurrentlyRequired', false);
});
