import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Category from './views/Category.vue'
import Pin from './views/Pin.vue'
import LoginPage from './views/LoginPage.vue'
import Product from './views/Product.vue'

// https://router.vuejs.org/zh/     路由文档

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/pin',
      name: 'pin',
      component: Pin
    },
    {
      path: '/LoginPage',
      name: 'loginpage',
      component: LoginPage
    },
    {
      //声明ID参数
      // 动态路径参数 以冒号开头
      //一个“路径参数”使用冒号 : 标记。
      //当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
      path: '/product/:id',
      name: 'product',
      component: Product
    }
  ]
})
