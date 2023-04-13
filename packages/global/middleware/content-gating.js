const { get, getAsArray } = require('@parameter1/base-cms-object-path');
const contentGatingHandler = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-gating');

module.exports = (app, options) => (req, res, next) => {
  const hasCookie = Boolean(get(req, 'cookies.oly_enc_id'));
  // Apply site level and org level content gating rules
  const contentTypesToGateByDefault = getAsArray(options, 'siteConfig.contentTypesToGateByDefault');
  const contentGating = ({ content }) => {
    if (hasCookie) return false;
    // ensure content exists or return false
    if (!content) return false;
    // Force gating by reg base on site's for contentGatingByType by content type
    if (contentTypesToGateByDefault.includes(content.type)) {
      return true;
    }
    return get(content, 'userRegistration.isCurrentlyRequired', false);
  };
  // Set Content Gating Handler to out.global
  contentGatingHandler(app, true, contentGating);
  next();
};
