module.exports = (schedules = [], rootAlias = 'directory') => {
  const sections = schedules
    .filter((schedule) => schedule.section.alias.startsWith(rootAlias) && schedule.section.alias !== rootAlias)
    .map((schedule) => schedule.section)
    .sort((a, b) => a.name.localeCompare(b.name));
  return sections;
};
