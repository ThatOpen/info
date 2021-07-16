/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IFC.js',
  tagline: 'BIM toolkit for JavaScript.',
  url: 'https://IFCjs.github.io',
  baseUrl: '/info/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IFCjs', // Usually your GitHub org/user name.
  projectName: 'info', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['da', 'de', 'en', 'es', 'fi', 'fr', 'it', 'ja', 'nl', 'pt', 'ru', 'sv', 'zh'],
    localeConfigs: {
      da: {
        label: 'Dansk'
      },
      de: {
        label: 'Deutsch'
      },
      en: {
        label: 'English',
      },
      es: {
        label: 'Español'
      },
      fi: {
        label: 'Suomalainen'
      },
      fr: {
        label: 'Français'
      },
      it: {
        label: 'Italiano',
      },
      ja: {
        label: '日本語',
      },
      nl: {
        label: 'Nederlands'
      },
      pt: {
        label: 'Português'
      },
      ru: {
        label: 'Русский'
      },
      sv: {
        label: 'Svenska'
      },
      zh: {
        label: '中文'
      }
    }
  },
  themeConfig: {
    image: 'img/social-card.png',
    prism: {
      theme: require('./src/codeThemes/duotoneLight'),
      darkTheme: require('./src/codeThemes/nightOwl'),
    },
    navbar: {
      title: 'IFC.js',
      logo: {
        alt: 'IFC.js Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/IFCjs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/g7Uzn2KSwB',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/agviegasBIM',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/IFCjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IFC.js.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
