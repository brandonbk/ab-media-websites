/**
 * Adds temporary redirects for forum pages.
 */
module.exports = (app) => {
  const to = '/page/forum';
  [
    '/forum',
    '/floormasters*',
    '/component/com_kunena/*',
    '/viewforum.php',
  ].forEach((url) => app.get(url, (_, res) => res.redirect(302, to)));
};
