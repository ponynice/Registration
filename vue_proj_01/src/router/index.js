import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Origin from '../components/Original.vue'
import Test from '../components/Department/test.vue'
import Apply from '../components/Department/apply.vue'
import Statistics from '../components/Department/statistics.vue'
import Imformation from '../components/Department/imformation.vue'
import Super from '../components/Super.vue'
import SuperApply from '../components/SuperDepartment/superapply.vue'
import SuperTest from '../components/SuperDepartment/supertest.vue'
import SuperStatistics from '../components/SuperDepartment/superstatistics.vue'
import SuperImformation from '../components/SuperDepartment/superimformation.vue'
import SuperManage from '../components/SuperDepartment/supermanage.vue'
import Query from '../components/Examine/querytime.vue'
import Content from '../components/Examine/content.vue'
import Link from '../components/Examine/link.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/content',
      name: 'Content ',
      component: Content
    },
    {
      path: '/link',
      name: 'Link',
      component: Link,
      children: [
        {
          path: '/welcome',
          component: Welcome
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: Welcome
        }
      ]
    },
    {
      path: '/original',
      name: 'Origin',
      component: Origin,
      redirect: '/1',
      children: [
        {
          path: '/1',
          component: Imformation
        },
        {
          path: '/2',
          component: Test
        },
        {
          path: '/3',
          component: Apply
        },
        {
          path: '/4',
          component: Statistics
        }
      ]
    },
    {
      path: '/super',
      name: 'Super',
      component: Super,
      redirect: '/one',
      children: [
        {
          path: '/one',
          component: SuperImformation
        },
        {
          path: '/two',
          component: SuperTest
        },
        {
          path: '/three',
          component: SuperApply
        },
        {
          path: '/four',
          component: SuperStatistics
        },
        {
          path: '/five',
          component: SuperManage
        }
      ]
    },
    {
      path: '/querytime',
      name: 'Query',
      component: Query
    }
  ]
})
