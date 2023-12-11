// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Dev's Nest`,
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://thedevsnest.com',
  url: 'http://localhost',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MartaOrtegaSoto', // Usually your GitHub org/user name.
  projectName: 'the-devs-nest', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        indexBlog: false,
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: "/",
        searchBarShortcutHint: false,
      })
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: 'the dev\'s nest',
        logo: {
          alt: 'Devsnest Logo',
// DevNestLogo.png         DevNestLogoCircle.png   DevNestLogoFull.png
          src: 'img/DevNestLogo.png',
        },
        items: [
          // {
          //sidebarId: 'tutorialSidebar',
          //  type: 'docSidebar',
          //  position: 'left',
          //  label: 'Tutorial',
          //},
          // {to: '/blog', label: 'Blog', position: 'left'},
         // {
         //   href: 'https://github.com/facebook/docusaurus',
         //   label: 'GitHub',
         //   position: 'right',
         // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          //{
          //  title: 'Community',
          //  items: [
          //    {
          //      label: 'Stack Overflow',
          //      href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //    },
          //    {
          //      label: 'Discord',
          //      href: 'https://discordapp.com/invite/docusaurus',
          //    },
          //    {
          //      label: 'Twitter',
          //      href: 'https://twitter.com/docusaurus',
          //    },
          //  ],
          //},
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/facebook/docusaurus',
//              },
//            ],
//          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Dev's Nest, Inc. Built with Docusaurus.`,
      },
      prism: {
  //dracula, duotoneDark, duotoneLight, github, jettwaveDark, jettwaveLight, nightOwl,
  //nightOwlLight, oceanicNext, okaidia, oneDark, oneLight, palenight, shadesOfPurple,
  //synthwave84, ultramin, vsDark, vsLight,
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.oceanicNext,
        additionalLanguages: ['java', 'properties', 'bash']
      },
      colorMode: {
        defaultMode: 'dark',
      },
    }),
};

export default config;
