// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DeltaDefi Documentation',
  tagline: 'Understanding the decentralized financial option protocol',
  url: 'https://deltadefi.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DeltaDeFi Docs',
        logo: {
          alt: 'DeltaDeFi Logo',
          src: 'img/deltadefi.png',
        },
        items: [
          {
            label: 'Guide',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Whitepaper',
            to: '/docs/category/whitepaper',
            position: 'left',
          },
          {
            label: 'Security',
            to: '/docs/category/security-and-audits',
            position: 'left',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            label: 'GitHub',
            href: 'https://github.com/SIDANWhatever/DeltaDefi_Docs',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/intro',
              },
              {
                label: 'Whitepaper',
                to: '/docs/category/whitepaper',
              },
              {
                label: 'Security',
                to: '/docs/category/security-and-audits',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/28VFwF49uS',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/deltadefi',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'DeltaDeFi',
                to: 'https://deltadefi.io',
              },
              {
                label: 'SIDAN Studio',
                to: 'https://sidan.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SIDANWhatever/DeltaDefi_Docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DeltaDeFi`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
