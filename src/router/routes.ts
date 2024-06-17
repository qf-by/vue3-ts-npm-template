export const constantRoute = [
  {
    // 首页
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    // 404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
    },
  },
  {
    // 任意路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
    },
  },
]
