import pathify from 'vuex-pathify'


import hello from './modules/hello-world'
import counter from './modules/counter'


console.log('STORE FILE LOADED!')


export plugins = [ pathify.plugin ]
export modules =
  {
    counter
    hello
  }
export actions =
  nuxtServerInit: (context, value) ->
    console.log('NUXT_SERVER_INIT!')

