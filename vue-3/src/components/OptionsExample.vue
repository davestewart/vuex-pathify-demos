<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
    <button @click="greet">Alert</button>
  </div>
</template>

<script>
import { get, sync, call } from 'vuex-pathify'

export default {
  computed: {
    message: get('options/message', false),

    ...sync('options', [
      'greeting',
      'name'
    ], false),
  },

  methods: {
    greet: call('options/greet'),
  }
}
</script>
