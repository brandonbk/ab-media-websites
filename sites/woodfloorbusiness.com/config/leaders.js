const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;
module.exports = {
  enabled,
  title: 'Leaders in Wood Floor Business',
  calloutValue: 'Leaders in Wood Floor Business',
  listedInFind: process.envLEADERS_LISTED_IN_FULLNAME_FIND || 'Leaders > 2022 > ',
  listedInReplace: process.envLEADERS_LISTED_IN_FULLNAME_REPLACE || '',
  alias: process.env.LEADERS_ALIAS || 'leaders/2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-leaders.jpg?auto=format,compress&h=180',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-leaders.jpg?auto=format,compress&h=180&dpr=2 2x',
  },
};
