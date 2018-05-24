import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cai from '@/components/cai'
import to from '@/components/to'
import create from '@/components/create'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },{
      path: '/cai',
      component: cai
    },
    {
      path: '/to',
      component: to
    },{
      path: '/create',
      component: create
    },
  ]
})
