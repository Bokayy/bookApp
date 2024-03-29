import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import './style/style.css'
import App from './App.vue'

Vue.use(VueCompositionAPI)

const app = createApp({
  render: () => h(App)
})

app.mount('#app')
