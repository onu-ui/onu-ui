import theme from 'vitepress/theme'
import DemoBlock from '../components/demo-block'
import './main.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('demo', DemoBlock)
  },
}
