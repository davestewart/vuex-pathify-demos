import pathify from 'vuex-pathify'

console.log('STORE FILE LOADED!')

export const plugins = [ pathify.plugin ];
export const state = () => ({});

export const actions = {
  nuxtServerInit() {
    console.log('NUXT_SERVER_INIT!')
  }
}