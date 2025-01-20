import DefaultTheme from 'vitepress/theme'
import elementPlus from 'element-plus'
import dlxui from 'dlx-ui'
import 'dlx-ui/lib/style.css'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(dlxui)
  },
}
