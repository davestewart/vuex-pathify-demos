import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App, { msg: 'Yay! It worked.' })
  .use(store)
  .mount('#app')
