import { createStore } from 'vuex'
import type { GetterTree } from 'vuex'
import Pathify, { make } from 'vuex-pathify'

export class State {
  greeting = 'Hello'
  name = ''
  constructor (name: string) {
    this.name = name
  }
}

function makeModule (name: string) {
  const state = () => new State(name)

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

  return {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
}

Pathify.options.mapping = 'simple'

export default createStore({
  plugins: [
    Pathify.plugin
  ],
  modules: {
    options: makeModule('Options API'),
    composition: makeModule('Composition API'),
    setup: makeModule('Setup Script'),
  },
})
