import { make } from 'vuex-pathify'

const state = {
  greeting: 'Hello',
  name: 'World'
}

const mutations = make.mutations(state)

console.log('mutations:', mutations)

export default {
  state,
  mutations
}
