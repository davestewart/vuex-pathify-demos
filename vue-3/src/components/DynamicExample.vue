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
import { makeModule } from '../store'
import { useStore } from 'vuex'
import { onUnmounted } from 'vue'

export default {
  setup () {
    // dynamic store
    const name = 'temp'
    const store = useStore()
    store.registerModule(name, makeModule('Dynamic Store'))
    onUnmounted(() => store.unregisterModule(name))

    // wiring
    const message = get('temp/message')
    const values = sync('temp', [
      'greeting',
      'name'
    ])
    const greet = call('temp/greet')

    return {
      message,
      ...values,
      greet,
    }
  }
}
</script>
