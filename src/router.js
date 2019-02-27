import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/index.vue'
import Item from './views/Item'
import Score from './views/score'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/item',
      name: 'Item',
      component: Item,
      // 如果不是从首页进入，则跳转首页
      beforeEnter(to, from, next) {      
        if (from.name !== 'Home') {
          next({
            path: '/'
          })
        } else {
          next()
        }
      }
    }, {
      path: '/score',
      name: "Score",
      component: Score,
      // 如果不是从答题进入，则跳转首页
      beforeEnter(to, from, next) {
        if (from.name !== 'Item') {
          next({
            path: '/'
          })
        } else {
          next()
        }
      }
    }
  ]
})

export default router