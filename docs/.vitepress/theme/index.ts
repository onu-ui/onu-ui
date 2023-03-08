import OnuUI, { OMessage, en } from 'onu-ui'
import theme from 'vitepress/theme'
import { h } from 'vue'
import DemoBlock from '../components/demo-block'
import Overview from '../components/overview'
import WarnBadge from '../components/WarnBadge'
import CommnBadge from '../components/CommnBadge'
import UpdateBadge from '../components/UpdateBadge'
import NewBadge from '../components/NewBadge'
import TeamMember from '../components/TeamMember'
import './main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.use(OnuUI, { locale: en })
    app.component('Demo', DemoBlock)
    app.component('Overview', Overview)
    app.component('WarnBadge', WarnBadge)
    app.component('CommnBadge', CommnBadge)
    app.component('UpdateBadge', UpdateBadge)
    app.component('NewBadge', NewBadge)
    app.component('TeamMember', TeamMember)

    app.config.globalProperties.$message = OMessage
  },
  Layout() {
    return h(theme.Layout, null, {
      'home-features-after': () => h(TeamMember),
    })
  },
}
