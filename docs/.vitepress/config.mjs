import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  vite: { plugins: [SearchPlugin()] },
  title: "Moustafa Shaaban",
  description: "My Personal website built using VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Resume', link: '/resume' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Home', link: '/' },
          { text: 'Resume', link: '/resume' },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Projects',
        collapsed: true,
        items: [
          { text: 'Django Projects', link: '/projects/django' },
          { text: 'VueJS Projects', link: '/projects/vuejs' },
          { text: 'GIS Projects', link: '/projects/gis' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/moustafashaaban' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/moustafashaaban' },
      // { icon: 'hashnode', link: 'https://hashnode.com/@moustafashaaban' },
      // { icon: 'medium', link: 'https://medium.com/@moustafashaaban' },
      { icon: 'twitter', link: 'https://twitter.com/_moustafashaban' },
    ]
  }
})
