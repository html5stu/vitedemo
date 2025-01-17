export default {
  base: '/vitedemo/',
  themeConfig: {
    siteTitle: 'DLX UI',
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/button' },
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
          ],
        },
      ],
      '/components/': [
        {
          items: [
            { text: '按钮', link: '/components/button/' },
            { text: '标签', link: '/components/tag/' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/chen_pengchao/dlx-ui' },
    ],
  },
}
