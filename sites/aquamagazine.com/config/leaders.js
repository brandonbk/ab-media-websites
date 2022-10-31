const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;
module.exports = {
  enabled,
  title: 'Leaders in Aqua',
  calloutValue: 'Leaders in Aqua',
  alias: process.env.LEADERS_ALIAS || 'leaders/2022',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/Leaders_Header_Aqua.jpeg?auto=format,compress&h=90',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/Leaders_Header_Aqua.jpeg?auto=format,compress&h=90&dpr=2 2x',
  },
};
