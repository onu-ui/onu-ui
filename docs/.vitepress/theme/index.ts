import theme from 'vitepress/theme'
import DemoBlock from '../components/demo-block'
import 'uno.css'
import './main.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('demo', DemoBlock)
  },
}
