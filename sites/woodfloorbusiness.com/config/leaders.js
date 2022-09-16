const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;
module.exports = {
  enabled,
  title: 'Leaders in Wood Floor Business',
  calloutValue: 'Leaders in Wood Floor Business',
  alias: process.env.LEADERS_ALIAS || 'leaders/2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/leaders-2022.png?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/leaders-2022.png?auto=format,compress&h=90&dpr=2 2x',
  },
};
