<template>
  <div class="component counter">
    <h1>Counter: {{ value }}</h1>
    <div>
      <button @click="increment">Increment</button>
      <button @click="random">Randomize</button>
    </div>
  </div>
</template>

<script>
  import { get } from 'vuex-pathify'

  console.log('COMPONENT LOADED!')

  export default {
    fetch() { },

    computed: {
      // wildcards can be problematic as state needs to exist before creating
      ...get('counter/*')
    },

    methods: {
      random () {
        // use automatically-created commits
        this.$store.set('counter/value', Math.floor(Math.random() * 100))
      },

      increment () {
        // use manually-created commits (note the trailing "!" )
        this.$store.set('counter/INCREMENT!')
      }
    }
  }


</script>

<style lang="scss" scoped>
  button {
    margin: 2px;
  }
</style>
