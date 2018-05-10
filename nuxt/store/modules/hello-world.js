import { make } from 'vuex-pathify'

function state () {
  return {
    greeting: 'Hello',
    name: 'World',
  }
}

const getters = {
  message (state) {
    return `${state.greeting} ${state.name}`
  }
}

const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
