import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'

// properties
const state = {
  greeting: 'Hello',
  name: 'World'
}

const getters = {
  message (state) {
    return `${state.greeting} ${state.name} !`
  }
}

const actions = {
  greet ({ getters }) {
    alert(getters.message)
  }
}

const mutations = make.mutations(state)

// store
Vue.use(Vuex)
export default new Vuex.Store({

  // use the plugin
  plugins: [
    pathify.plugin
  ],

  // properties
  state,
  getters,
  actions,
  mutations,
})
