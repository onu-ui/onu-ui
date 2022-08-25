import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import './style/main.css'
import 'onu-ui/dist/style.css'
import 'uno.css'
import type { GlobModule } from './types'

const app = createApp(App)
Object.values(import.meta.glob<GlobModule>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.(app))
app.mount('#app')
