/* @refresh reload */
import { render, Suspense } from 'solid-js/web';
import { Router } from '@solidjs/router';
import route from '@/router';

import '@unocss/reset/tailwind.css';
import '@/assets/css/common.scss';
import '@/assets/css/theme.scss';
import '@/assets/css/daisyui.scss';

import 'virtual:svg-icons-register';
import 'virtual:uno.css';

import { StoreProvider } from './store';
import StartPage from './page/start/start';
import LangProvider from './locale';

const root = document.getElementById('root');

render(
  () => (
    <Suspense fallback={<StartPage></StartPage>}>
      <StoreProvider>
        <LangProvider>
          <Router>{route}</Router>
        </LangProvider>
      </StoreProvider>
    </Suspense>
  ),
  root!
);
