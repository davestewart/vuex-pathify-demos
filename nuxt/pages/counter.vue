<template>
  <div>
    <counter/>
  </div>
</template>

<script>
  import Counter from '../components/Counter'

  export default {
    components: {
      Counter
    },

    head () {
      return {
        title: 'Vuex Pathify - Nuxt Demo / Counter Example',
      }
    },

    // fetch(context) is called by the server-side and nuxt before instantiating the component
    fetch ({ store }) {
      store.commit('counter/INCREMENT')
    },
  }
</script>