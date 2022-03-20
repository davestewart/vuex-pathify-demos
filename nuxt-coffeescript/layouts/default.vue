<template lang="pug">
.default
  #app
    img(width='250', src='https://raw.githubusercontent.com/davestewart/vuex-pathify/develop/docs/assets/img/logos/logo.png')
  #menu
    nuxt-link(to='/') Home 
    nuxt-link(to='/counter') Counter
  p.info Vuex Pathify — Nuxt demo with Pug, Stylus and Coffeescript.
  nuxt
</template>
<script lang="coffee">
export default
  # props: ['']
  # components: {}
  name: 'default'
  # head: ->
  # data: ->
  # methods:
  # computed:
  # watch:
</script>
<style lang="stylus">
body
  background gray
html
body
  margin: 0
  padding: 0
  height: 100%
  min-height: 500px
body
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background: #FFF
#app
  padding-top: 40px
  padding-bottom: 40px
#menu
  margin-top: 20px
h1
h2
  padding: 0
  margin: 0
input
button
  outline: none
  border-radius: 3px
  padding: 3px 5px
  margin: 3px
input
  border: 1px solid #EEE
p.info
  position: absolute
  width: 100%
  bottom: 25px
  font-size: 0.8em
a
a:link
  color: #25afaf
  text-decoration: none
a:hover
  text-decoration: underline
</style>