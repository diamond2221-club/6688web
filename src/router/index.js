import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index,
    hidden: false,
    meta: {
      documentTitle: "188HG导航站-188皇冠-线路登陆",
      title: "导航首页",
      vue: true
    }
  },
  {
    path: '/detection',
    name: 'detection',
    // route level code-splitting
    // this generates a separate chunk (detection.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detection" */ '../views/Detection.vue'),
    hidden: false,
    meta: {
      documentTitle: "线路检测-188HG导航站-188皇冠-线路登陆",
      title: "线路检测",
      vue: true
    }
  },
  {
    path: '/verify',
    name: 'verify',
    // route level code-splitting
    // this generates a separate chunk (verify.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "verify" */ '../views/Verify.vue'),
    hidden: false,
    meta: {
      documentTitle: "域名认证-188HG导航站-188皇冠-线路登陆",
      title: "域名认证",
      vue: true
    }
  },
  {
    path: "*",
    redirect: "/index",
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
router.afterEach((to, from) => {
  // document.title = to.meta.documentTitle || '188HG导航站-188皇冠-线路登陆'
})

export default router
