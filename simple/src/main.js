import Vue from 'vue'
import store from './store'
import App from './App'

// objects
window.store = store
window.app = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


// debug
console.log('computed:', App.computed)
console.log('mutations:', store._mutations)
