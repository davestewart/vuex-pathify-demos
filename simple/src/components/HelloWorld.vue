<template>
  <div>
    <h1>{{ greeting }} {{ name }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'

const component = {
  computed: {
    ...sync('*')
  }
}

console.log('computed:', component.computed)

export default component
</script>
