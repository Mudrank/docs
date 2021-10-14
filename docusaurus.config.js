

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'Dish',
  tagline: 'Crons. Taken care of. Magically.',
  url: 'https://dishhq.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://dishhq.xyz/svg.svg',
  organizationName: 'dishhq', 
  projectName: 'docs', 

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          path: 'posts',
          routeBasePath: 'posts'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /* @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `Hey! Welcome to the docs, the page is not ready yet - head over to our <a target="_blank" rel="noopener noreferrer" href="https://dishhq.xyz">main website</a> to signup to the waitlist!`,
      },
      navbar: {
        title: 'Dish',
        logo: {
          alt: 'Dish Logo',
          src: 'https://dishhq.xyz/svg.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/posts', label: 'Changelog', position: 'left'},
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      gtag: {
        trackingID: 'G-LB5974PVH1',
        anonymizeIP: true, 
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Elsewhere',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/usedishhq',
              },
              {
                label: 'Discord',
                href: 'https://dsc.gg/usedishhq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dish Team. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
