import Vue from 'vue'

// console.log(require('../views/dashboard').name)
export default {
  '/': {
    component: Vue.component('dashboard', require('../views/dashboard')),
    name: 'dashboard'
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
  },
  '/update': {
    component: Vue.component('update', require('../views/update')),
    name: 'update'
  }
}
