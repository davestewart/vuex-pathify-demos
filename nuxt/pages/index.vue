<template>
  <div>
    <hello-world/>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    components: {
      HelloWorld
    },

    head () {
      return {
        title: 'Vuex Pathify - Nuxt Demo / Hello World Example',
      }
    },

  }
</script>
