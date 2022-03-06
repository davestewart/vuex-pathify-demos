<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
    <button @click="greet">Alert</button>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from'vuex'

export default {
  setup () {
    const store = useStore()

    const message = computed(() => store.getters.message)

    const greeting = computed({
      get: (): string => store.state.greeting,
      set: (value: string) => store.state.greeting = value
    })

    const name = computed({
      get: (): string => store.state.name,
      set: (value: string) => store.state.name = value
    })

    const greet = () => store.dispatch('greet')

    return {
      message,
      greeting,
      name,
      greet,
    }
  }
}

</script>
