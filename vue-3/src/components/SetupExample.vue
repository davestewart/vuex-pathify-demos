<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
    <button @click="greet">Alert</button>
  </div>
</template>


<script lang="ts" setup>
import { get, sync, call } from 'vuex-pathify'

// get / sync single values only in setup script
const message = get('message')
const greeting = sync('greeting')
const name = sync('name')

// dispatch
const greet = call('greet')
</script>



