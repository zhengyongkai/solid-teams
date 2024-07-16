/* @refresh reload */
import { render } from 'solid-js/web'
import { HopeProvider } from '@hope-ui/solid'
import { Router } from '@solidjs/router'
import route from '@/router'

import 'virtual:svg-icons-register'
import 'virtual:uno.css'
import './index.css'

const root = document.getElementById('root')

render(
  () => (
    <HopeProvider>
      <Router>{route}</Router>
    </HopeProvider>
  ),
  root!
)
