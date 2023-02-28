const { isArray } = Array;

module.exports = ({ site }) => {
  const idxConfig = site.get('identityX');

  const defaultTargets = [
    'navigation.user.items',
  ];
  const targets = site.getAsArray('idxNavItems.navigationTargets').length ? site.getAsArray('idxNavItems.navigationTargets') : defaultTargets;
  const navConfig = [
    {
      href: idxConfig.getEndpointFor('login'),
      label: 'Sign In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('profile'),
      label: 'Modify Profile',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('logout'),
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
  ];
  targets.forEach((target) => {
    const nav = site.get(target);
    if (isArray(nav)) nav.unshift(...navConfig);
  });
};
