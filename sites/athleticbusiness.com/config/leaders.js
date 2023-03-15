const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;
module.exports = {
  enabled,
  title: 'Browse the Industry\'s Top Companies',
  calloutPrefix: 'Browse the',
  calloutValue: 'Industry\'s Top Companies',
  listedInFind: process.env.LEADERS_LISTED_IN_FULLNAME_FIND || 'Leaders > 2022 > ',
  listedInReplace: process.env.LEADERS_LISTED_IN_FULLNAME_REPLACE || '',
  alias: process.env.LEADERS_ALIAS || 'leaders/2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/AB_Leaders_Banner.jpeg?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/AB_Leaders_Banner.jpeg?auto=format,compress&h=90&dpr=2 2x',
  },
};
