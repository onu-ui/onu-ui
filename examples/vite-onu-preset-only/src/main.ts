import { createApp } from 'vue'

// @ts-expect-error *.vue
import App from './App.vue'
import 'uno.css'

createApp(App).mount('#app')
