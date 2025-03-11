import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import { createApp } from 'vue'
import App from './App.vue'

const vuetify = createVuetify({components})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
