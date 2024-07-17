/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import route from '@/router'
import { KeepAliveProvider } from 'solid-keep-alive'

import '@unocss/reset/tailwind.css'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './index.css'

const root = document.getElementById('root')

render(
  () => (
    <Router>
      <KeepAliveProvider>{route}</KeepAliveProvider>
    </Router>
  ),
  root!
)
