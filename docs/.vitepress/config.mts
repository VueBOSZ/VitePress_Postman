import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "postman",
  description: "postman_guide",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Add Http Request', link: '/add_req' },
      { text: 'Code Generation', link: '/copy_code' },
      { text: 'OpenApi Support', link: '/openAPI' }
    ],

    sidebar: [
      {
        text: 'Features',
        items: [
          { text: 'Add Http Request', link: '/add_req' },
          { text: 'Code Generation', link: '/copy_code' },
          { text: 'OpenApi Support', link: '/openAPI' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VueBOSZ/VitePress_Postman.git' }
    ]
  }
})
