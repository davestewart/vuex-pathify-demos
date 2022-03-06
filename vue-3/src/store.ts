import { createStore } from 'vuex'
import type { GetterTree } from 'vuex'

// properties
const state = {
  greeting: 'Hello',
  name: 'World'
}

type State = typeof state

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

const mutations = {
  greeting: (state: State, value: string) => state.greeting = value,
  name: (state: State, value: string) => state.name = value,
}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
