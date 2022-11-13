import { createApp } from 'vue'
import '@vue/repl/dist/style.css'
import 'uno.css'
import 'onu-ui/dist/style.css'

import onuUI from 'onu-ui'
import App from './App.vue'

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl',
}

const app = createApp(App).use(onuUI)
app.mount('#play_ground')
