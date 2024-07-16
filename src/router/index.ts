import { children, lazy } from 'solid-js'

export default [
  {
    path: '/',
    component: lazy(() => import('@/components/Layout/Common/Common')),
    children: [
      {
        path: '/chat',
        component: lazy(() => import('@/page/chat/chat'))
      },
      {
        path: '/notice',
        component: lazy(() => import('@/page/notice/notice'))
      }
    ]
  }
]
