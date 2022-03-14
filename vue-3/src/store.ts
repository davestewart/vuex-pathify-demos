import { createStore } from 'vuex'
import type { GetterTree } from 'vuex'
import Pathify, { make } from 'vuex-pathify'

// properties
export class State {
  greeting = 'Hello'
  name = 'World'
}

const state = () => new State()

const getters: GetterTree<State, unknown> = {
  message (state: State) {
    return `${state.greeting} ${state.name} !`
  }
}

const actions = {
  greet ({ getters }: { getters: GetterTree<State, unknown>}) {
    alert(getters.message)
  }
}

const mutations = make.mutations(state)

Pathify.options.mapping = 'simple'

export default createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: [
    Pathify.plugin
  ]
})
