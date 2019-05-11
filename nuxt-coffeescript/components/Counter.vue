<template lang="pug">
.counter
  h1 Counter: {{ value }}
  div
    button(@click='increment') Increment
    button(@click='random') Randomize
    button(@click='addTen') addTen
</template>
<script lang="coffee">
import { get } from 'vuex-pathify'
export default
  name: 'counter'
  computed:
    {
      # wildcards can be problematic as state needs to exist before creating
      ...get('counter/*')
    }
  methods:
    random: ->
      # use automatically-created commits
      @$store.set('counter/value', Math.floor(Math.random() * 100))
    addTen: ->
      @$store.set('counter/INCTEN!')
      # @$store.set('counter/value', @value += 100 )
    increment: ->
      # use manually-created commits (note the trailing "!" )
      @$store.set('counter/INCREMENT!')
</script>
<style lang="stylus" scoped>
button
  margin: 2px
</style>