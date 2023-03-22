import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Error from '@/components/utils/404'
import Forbidden from '@/components/utils/403'
import Goods from '@/components/Goods'
// admin/menu
import Home from '@/components/admin/Home'
import UserList  from '@/components/admin/menu/UserList'
import TypeList from '@/components/admin/menu/TypeList'
import CackList from '@/components/admin/menu/CackList'
import OrderList from '@/components/admin/menu/OrderList'
// user
import UserHome from '@/components/user/UserHome'
import UpdateInfo from '@/components/user/menu/UpdateInfo'
import Cart from '@/components/user/menu/Cart'
import Order from '@/components/user/menu/Order'
import Ment from '@/components/user/menu/Ment'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/404',
      meta: {title: "页面走丢了"},
      component: Error
    },
    {
      path: '/403',
      meta: {title: "没有权限"},
      component: Forbidden
    },
    {
      path: '/login',
      meta: {title: "登录"},
      component: Login
    },
    // 用户页面
    {
      path: '/user',
      component: UserHome,
      redirect: '/goods',
      children: [
        {
          path: '/goods',
          meta: {title: "商品列表"},
          component: Goods
        }, 
        {
          path: '/ment',
          meta: {title: "商品列表"},
          component: Ment
        }, {
          path: '/updateInfo',
          meta: {title: "个人信息"},
          component: UpdateInfo
        },
        {
          path: '/order',
          meta: {title: "我的订单"},
          component: Order
        },
        {
          path: '/cart',
          meta: {title: "购物车"},
          component: Cart
        },
      ]
    },
    // 管理员页面
    {
      path: '/home',
      component: Home,
      // 为 Home 页创建子路由，并默认跳转。
      redirect: '/index',
      children: [
        {
          path: '/index',
          meta: {title: "网站首页"},
          component: Index
        },
        {
          path: '/users',
          meta: {title: "用户管理"},
          component: UserList
        },
        {
          path: '/cacks',
          meta: {title: "商品管理"},
          component: CackList
        },
        {
          path: '/cack_type',
          meta: {title: "类型管理"},
          component: TypeList
        },
        {
          path: '/orders',
          meta: {title: "订单管理"},
          component: OrderList
        },
      ]
    }
  ]
})
