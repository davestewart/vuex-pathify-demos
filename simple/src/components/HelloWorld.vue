<template>
  <div>
    <h1>{{ greeting }} {{ name }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
  </div>
</template>

<script>
// import helper
import { sync } from 'vuex-pathify'

// component definition
const component = {
  computed: {
    // sync helper, uses wildcard to sync ALL state + getters on root
    ...sync('*')
  }
}

// check the CodeSandbox console...
console.log('computed:', component.computed)

// export component
export default component
</script>
