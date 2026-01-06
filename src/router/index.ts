import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import mainStore from '@/stores/mainStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/MainPage.vue'),
      children: [
        {
          path: 'about',
          component: () => import('@/pages/AboutPage.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/loginPage.vue'),
    },
  ],
})

router.beforeEach(async () => {
  const store = mainStore()
  store.updateLoading(true)
  NProgress.set(0.4)
})

router.beforeResolve(() => {
  NProgress.set(0.5)
})

router.afterEach(() => {
  const store = mainStore()
  store.updateLoadingState(100)
  NProgress.set(1.0)
  store.updateLoading(false)
})

// routes.forEach((item) => {
//   router.addRoute({
//     path: item.path,
//     name: item.name,
//     // route level code-splitting
//     // this generates a separate chunk (About.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(`../pages/login/${item.component}.vue`)
//   })
// })

export default router
