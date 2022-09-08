import * as components from '@onu-ui/components'
import theme from 'vitepress/theme'
import DemoBlock from '../components/demo-block'
import './main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    for (const name of Object.keys(components)) {
      if (name.startsWith('O'))
        // eslint-disable-next-line import/namespace
        app.component(name, components[name])
    }
    app.component('demo', DemoBlock)
  },
}
