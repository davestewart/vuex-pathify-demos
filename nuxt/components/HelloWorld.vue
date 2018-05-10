<template>
  <div class="component hello-world">
    <h1>{{ message }}</h1>
    <input v-model="greeting" placeholder="Greeting">
    <input v-model="name" placeholder="Name">
  </div>
</template>

<script>
  import { get, sync } from "vuex-pathify";

  const component = {
    computed: {
      // one-way getter
      message: get('hello/message'),

      // use wildcard syntax to check state has been created
      // use sync to check 2-way wiring works
      ...sync('hello/*')
    }
  };

  export default component;
</script>
