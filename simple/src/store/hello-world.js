// import helper
import { make } from 'vuex-pathify'

// state
const state = {
  greeting: 'Hello',
  name: 'World',
}

// mutations - helper builds all commits
const mutations = make.mutations(state)

// check the CodeSandbox console...
console.log('mutations:', mutations)

// export store
export default {
  state,
  mutations
}
