// libraries
import Vue from 'vue'
import Vuex from 'vuex'

// import custom config
import pathify from './pathify'

// import store data
import data from './hello-world'

// use the store
Vue.use(Vuex)

// export store
export default new Vuex.Store({

  // use the plugin
  plugins: [
    pathify.plugin
  ],

  // mix in store data
  ...data,

})
