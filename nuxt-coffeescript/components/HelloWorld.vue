<template lang="pug">
.hello-world
  h1 {{ message }}
  input(v-model='greeting', placeholder='Greeting')
  input(v-model='name', placeholder='Name')
</template>
<script lang="coffee">
import { get, sync } from "vuex-pathify"
export default
  name: 'hello-world'
  computed:
    {
      # one-way getter
      message: get('hello/message')
      # use wildcard syntax to check state has been created
      # use sync to check 2-way wiring works
      ...sync('hello/*')
    }
</script>
