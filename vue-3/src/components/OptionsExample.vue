<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
    <button @click="greet">Alert</button>
  </div>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.getters.message
    },

    greeting: {
      get () { return this.$store.state.greeting },
      set (value) { this.$store.state.greeting = value },
    },

    name: {
      get () { return this.$store.state.name },
      set (value) { this.$store.state.name = value },
    },
  },

  methods: {
    greet () {
      this.$store.dispatch('greet')
    }
  }
}
</script>
