<template lang="pug">
.counter-page
  Counter


</template>
<script lang="coffee">


import Counter from '~/components/Counter'

export default
  components: { Counter }
  name: 'counter-page'
  head: ->
    title: 'Vuex Pathify — Nuxt Demo / Counter Example'
  # fetch(context) is called by the server-side and nuxt before instantiating the component
  fetch: ({ store }) ->
    store.commit('counter/INCREMENT')


</script>
