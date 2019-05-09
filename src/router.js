import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 如果使用了懒加载，则头部不用import
// import City from './views/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "City" */ './views/City.vue')
    }
  ]
})
