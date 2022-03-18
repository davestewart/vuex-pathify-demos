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
  setup () {
    // get / sync single values
    const message = get('composition/message')

    // sync multiple values
    const values = sync('composition', [
      'greeting',
      'name'
    ])

    // dispatch
    const greet = call('composition/greet')

    return {
      message,
      ...values,
      greet,
    }
  }
}
</script>
