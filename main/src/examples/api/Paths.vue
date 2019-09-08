<template>

  <article>

    <div class="content">
      <h2 class="title is-2">API: Path syntax</h2>
      <blockquote>
        <p>A unified path syntax provides expressive property and sub-property access to any store or module</p>
        <edit-code src="examples/api/Paths.vue"/>
        <edit-code src="examples/api/vuex/root.js" label="Edit root store"/>
        <edit-code src="examples/api/vuex/module.js" label="Edit module store"/>
        <edit-code src="examples/api/vuex/wildcards.js" label="Edit wildcards store"/>
        <view-docs src="api/paths"/>
      </blockquote>
    </div>


    <div class="content">
      <p>Root property:</p>
      <pre>{{ prop }}</pre>

      <p>Module property:</p>
      <pre>{{ module }}</pre>

      <p>Sub-property:</p>
      <pre>{{ subProp }}</pre>

      <p>Deeply-nested property:</p>
      <pre>{{ deepProp }}</pre>

      <p>Property wildcards:</p>
      <pre>{{ { a, b, c, a2, b2, c2 } }}</pre>

      <p>Sub-property wildcards:</p>
      <pre>{{ { x, y, z } }}</pre>

      <p>Dynamic properties:</p>
      <ui-select label="Property" v-model="name" :options="options" class="inline" />
      <ui-input label="Index" v-model="index" type="number" min="0" max="2" class="inline" />
      <ui-input label="Value" v-model="dynamicProp" class="inline" />
      <pre>{{ dynamic }}</pre>
    </div>

  </article>

</template>

<script>
  import { get, sync } from 'vuex-pathify'

  export default {
    data () {
      // values for dynamic properties
      return {
        options: ['foo', 'bar', 'baz'],
        name: 'foo',
        index: 0,
      }
    },

    computed: {
      // root value
      prop        : get('value'),

      // module values
      module      : get('module/string'),
      subProp     : get('module/object@value'),
      deepProp    : get('module/object@a.b.c'),

      // wildcards
      ...get('wildcards/*'), // get all properties (including getters)
      ...get('wildcards/object@*'), // get all sub-properties

      // dynamic properties
      dynamic     :get('dynamic'),
      dynamicProp :sync('dynamic/:name@items[:index].value'), // use [:index] or .:index
    }
  }

</script>
