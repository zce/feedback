import Vue from 'vue'

export default {
  '/': {
    component: Vue.component('dashboard', require('../views/dashboard')),
    name: 'dashboard'
  },
  '/demo': {
    component: Vue.component('demo', require('../views/demo')),
    name: 'demo'
  },
  '/vuex': {
    component: Vue.component('vuex', require('../views/vuex')),
    name: 'vuex'
  },
  '/start': {
    component: Vue.component('start', require('../views/start')),
    name: 'start'
  },
  '/watch/:item': {
    component: Vue.component('watch', require('../views/watch')),
    name: 'watch'
  },
  '/preview/:item': {
    component: Vue.component('preview', require('../views/preview')),
    name: 'preview'
  }
}
