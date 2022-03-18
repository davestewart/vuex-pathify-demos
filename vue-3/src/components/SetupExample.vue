<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
    <button @click="greet">Alert</button>
  </div>
</template>

<script setup>
import { get, sync, call } from 'vuex-pathify'

// get single value
const message = get('setup/message')

// sync multiple values
const { name, greeting } = sync('setup/*')

// dispatch
const greet = call('setup/greet')
</script>



