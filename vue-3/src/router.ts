import type { ComponentOptions } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

function route (path: string, component: string | ComponentOptions): RouteRecordRaw {
  return {
    path,
    component: typeof component === 'string'
      ? () => import('./components/' + component + '.vue')
      : component
  }
}

export default createRouter({
  history: createWebHistory(),
  routes: [
    // pathify
    route('/', 'OptionsExample'),
    route('/setup', 'SetupExample'),
    route('/composition', 'CompositionExample'),

    // 404
    route('/:route(.*)', '404')
  ]
})
