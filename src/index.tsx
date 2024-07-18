/* @refresh reload */
import { render, Suspense } from 'solid-js/web'
import { Router } from '@solidjs/router'
import route from '@/router'
import { StoreProvider } from './store'

import '@unocss/reset/tailwind.css'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './index.css'

import StartPage from './page/start/start'

const root = document.getElementById('root')

render(
  () => (
    <Suspense fallback={<StartPage></StartPage>}>
      <StoreProvider>
        <Router>{route}</Router>
      </StoreProvider>
    </Suspense>
  ),
  root!
)
