const { get, getAsArray } = require('@parameter1/base-cms-object-path');
const contentGatingHandler = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-gating');
const olyticsCookie = require('@parameter1/base-cms-marko-web-omeda/olytics/customer-cookie');

module.exports = (app, options) => (req, res, next) => {
  // Check for presence of oly_enc_id being passed in or being set within cookies
  // Bypass gating of content if this is present.
  const { oly_enc_id: id } = req.query;
  const incomingEncId = olyticsCookie.clean(id);
  const hasReqCookie = Boolean(get(req, 'cookies.oly_enc_id'));
  const hasOlyEncId = Boolean(incomingEncId || hasReqCookie);
  // Apply site level and org level content gating rules
  const contentTypesToGateByDefault = getAsArray(options, 'siteConfig.contentTypesToGateByDefault');
  const contentGating = ({ content }) => {
    // This will bypass all content gating if a oly_enc_id cookie is set!
    if (hasOlyEncId) return false;
    // Ensure content exists or return false
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
