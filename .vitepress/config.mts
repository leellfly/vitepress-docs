import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-docs/",
  title: "Leellfly's Home",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '关于', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'IT',
        items: [
          { text: 'FE', link: '/markdown-examples' },
          { text: 'Python', link: '/api-examples' },
          { text: 'AI', link: '/api-examples' }
        ]
      },
      {
        text: 'Life',
        items: [
          { text: 'Books', link: '/markdown-examples' },
          { text: 'Movies', link: '/api-examples' },
          { text: 'Musics', link: '/api-examples' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leellfly' }
    ],

    footer:{
      copyright:'版权所有 © 2024 leellfly'
    }
  }
})
