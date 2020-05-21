import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// 如果使用了懒加载，则头部不用import
// import City from './views/City.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "City" */ "./views/City.vue")
    },
    {
      // 使用了“：”设置动态路由，前面的detail是固定的，后面的id是可变的
      path: "/detail/:id",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "Details" */ "./views/Details.vue")
    }
  ],
  // 每次做路由切换时，都让x 和 y 轴的位置重置为0
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
