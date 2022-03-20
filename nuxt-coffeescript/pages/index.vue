<template lang="pug">
.index-page
  HelloWorld


</template>
<script lang="coffee">


import HelloWorld from '~/components/HelloWorld'

export default
  components: { HelloWorld }
  name: 'index-page'
  head: ->
    title: 'Vuex Pathify — Nuxt Demo / Hello World Example'


</script>
