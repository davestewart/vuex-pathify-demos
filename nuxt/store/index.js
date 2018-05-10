import Vuex from 'vuex'
import pathify from 'vuex-pathify'

import hello from './modules/hello-world'
import counter from './modules/counter'

console.log('STORE FILE LOADED!')

const createStore = () => {

  console.log('CREATE STORE!')

  return new Vuex.Store({

    plugins: [ pathify.plugin ],

    modules: {
      hello,
      counter,
    },

    actions: {
      nuxtServerInit(context, value) {
        console.log('NUXT_SERVER_INIT!')
      }
    }

  })
}

export default createStore
