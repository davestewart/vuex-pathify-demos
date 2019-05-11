import { make } from 'vuex-pathify'


export state = ->
  greeting: 'Hello'
  name: 'World'

export getters =
  message: (state) -> "#{state.greeting} #{state.name}"

export mutations = make.mutations(state)

export default
  {
    namespaced: true
    state
    getters
    mutations
  }
