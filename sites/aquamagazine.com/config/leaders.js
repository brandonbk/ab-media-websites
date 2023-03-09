const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;
module.exports = {
  enabled,
  title: 'Leaders in Aqua',
  calloutValue: 'Leaders in Pool & Spa',
  listedInFind: process.envLEADERS_LISTED_IN_FULLNAME_FIND || 'Leaders > 2022 > ',
  listedInReplace: process.envLEADERS_LISTED_IN_FULLNAME_REPLACE || '',
  alias: process.env.LEADERS_ALIAS || 'leaders/2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/Leader_Header_V4.png?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/Leader_Header_V4.png?auto=format,compress&h=90&dpr=2 2x',
  },
};
