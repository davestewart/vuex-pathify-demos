import type { ComponentOptions } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

function route (path: string, component: string | ComponentOptions): RouteRecordRaw {
  return {
    path,
    component: typeof component === 'string'
      ? () => import('./components/' + component + 'Example.vue')
      : component
  }
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    route('/', 'Options'),
    route('/setup', 'Setup'),
    route('/composition', 'Composition'),
  ]
})
