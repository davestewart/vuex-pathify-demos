/**
 * Module example
 *
 * Namespaced module, with different property nesting
 */
import { make } from 'vuex-pathify'

const state = {

  value: 0,

  string: 'the quick brown fox jumped over the lazy dog',

  object: {
    value: 'some other value',
    a: {
      b: {
        c: 'some nested value'
      }
    }
  },
}

const getters = {

  substr (state) {
    return function (start = 0) {
      return state.string.substr(start)
    }
  }
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
