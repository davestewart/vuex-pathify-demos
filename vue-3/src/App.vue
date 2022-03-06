<template>
  <div>

    <div id="app">
      <img width="600" src="https://github.com/davestewart/vuex-pathify/raw/master/docs/assets/img/readme/splash-github.png">
      <div>
        <h1>{{ message }}</h1>
        <input v-model="greeting" placeholder="Greeting">
        <input v-model="name" placeholder="Name">
        <button @click="greet">Alert</button>
      </div>
    </div>

    <p class="info">
      <a href="https://codesandbox.io/s/github/davestewart/vuex-pathify/tree/master/demo" target="_blank">feature demo</a> |
      <a href="https://davestewart.github.io/vuex-pathify" target="_blank">documentation</a> |
      <a href="https://github.com/davestewart/vuex-pathify" target="_blank">github</a>
    </p>

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

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 500px;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #FFF;
}

#app {
  padding-top: 40px;
}

input {
  border: 1px solid #EEE;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 3px;
}

button {
  padding: 3px 5px;
}

p.info {
  position: absolute;
  width: 100%;
  bottom: 25px;
  font-size: 0.8em;
}

a, a:link {
  color: #25afaf;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
