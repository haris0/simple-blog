import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import List from '@/pages/ListPost'
import Detail from '@/pages/DetailPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/list/:page',
      name: 'List',
      component: List
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
