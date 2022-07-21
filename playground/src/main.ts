import { createApp } from 'vue'
import Onu from 'onu-ui'
import App from './App.vue'
import 'uno.css'
import 'onu-ui/dist/style.css'

createApp(App).use(Onu as any).mount('#app')
