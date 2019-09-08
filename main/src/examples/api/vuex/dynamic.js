/**
 * Dynamic example
 *
 * Top level properties, with different property nesting
 */
import { make } from 'vuex-pathify'

let itemCount = 0

class Property {
  constructor (name, ) {
    this.name = name
    this.items = []
    this.init()
  }

  init () {
    for (let i = 0; i < 3; i++) {
      this.items.push({
        path: `dynamic/${this.name}@items[${i}]`,
        value: `Dynamic Item ${++itemCount}`,
      })
    }
  }
}

const state = {
  foo: new Property('foo'),

  bar: new Property('bar'),

  baz: new Property('baz'),
}

const mutations = {
  ...make.mutations(state),
}

export default {
  namespaced: true,
  state,
  mutations,
}
