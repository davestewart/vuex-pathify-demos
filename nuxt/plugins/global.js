import Vue from 'vue'

// Can't load counter here as store not set up yet...
// import Counter from '../components/Counter'

import Navigation from '../components/Navigation'

console.log('PLUGINS LOADED!')

// Vue.component('counter', Counter)
Vue.component('navigation', Navigation)

