import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Fiverr',
    url: `https://www.fiverr.com/dvlopermohsin`,
    icon: 'fiverr',
  },
  {
    label: 'LinkedIn',
    url: `hhttps://www.linkedin.com/in/mohsin-ali-soomro/`,
    icon: 'linkedin',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
