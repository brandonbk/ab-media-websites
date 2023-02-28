const startServer = require('@ab-media/package-global/start-server');

const pkg = require('./package.json');
const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

const { log } = console;

module.exports = startServer({
  rootDir: __dirname,
  website: pkg.website,
  coreConfig,
  siteConfig,
  routes,
}).then(() => log('Website started!')).catch((e) => setImmediate(() => { throw e; }));
