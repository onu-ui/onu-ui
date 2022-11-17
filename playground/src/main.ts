import { createApp } from 'vue'
import '@vue/repl/dist/style.css'
import 'uno.css'
import 'onu-ui/dist/style.css'
import '@unocss/reset/tailwind.css'
import OnuUI from 'onu-ui'
import App from './App.vue'

// @ts-expect-error Custom window property
window.VUE_DEVTOOLS_CONFIG = {
  defaultSelectedAppId: 'repl',
}

createApp(App).use(OnuUI).mount('#play_ground')
