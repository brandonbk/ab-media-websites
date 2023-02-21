const contactRedirects = require('./contact-redirects');

const getFileRedirect = ({ from, app }) => {
  const { config, tenantKey } = app.locals;
  const matches = /^\/images\//.exec(from);
  if (!matches) return null;

  const assetHost = config.website('assetHost');
  const host = config.website('host');
  const siteKey = host.replace(/^www\./, '').replace(/\.com$/, '');
  const [account] = tenantKey.split('_');

  const path = `imports/${account}/${siteKey}${from}`;
  const to = `https://${assetHost}/${path}`;
  return { to };
};

const getContactRedirect = ({ from }) => {
  const found = contactRedirects.find((pair) => (new RegExp(`${pair.from}`)).test(from));
  if (found) return found;
  return null;
};

module.exports = ({ from, app }) => {
  if (/^\/images\/digitalissues/.test(from)) return null;
  if (getContactRedirect({ from })) return getContactRedirect({ from });
  return getFileRedirect({ from, app });
};
