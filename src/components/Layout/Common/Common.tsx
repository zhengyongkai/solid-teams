import ChatPage from '@/page/chat/chat'
import NoticePage from '@/page/notice/notice'

import LeftBar from '../LeftBar/LeftBar'
import Navbar from '../Navbar/Navbar'
import { createSignal, JSX, Match, Switch } from 'solid-js'
// import { KeepAlive } from 'solid-keep-alive'
// import userStore from '@/store/modules/user'

// type ComponentMapInf = { [key: string]: JSX.Element }

export default function Common() {
  const [sign, setSignal] = createSignal('/notice')

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div class="flex">
        <div>
          <LeftBar onClick={setSignal}></LeftBar>
        </div>
        <div class="h-[calc(100vh-60px)] w-full overflow-y-auto">
          {/* {Object.entries(componentMap).map((item) => {
            return <div class={item[0] === sign() ? 'block' : 'hidden'}>{item[1]}</div>
          })} */}
          <Switch>
            <Match when={sign() === '/notice'}>
              <NoticePage />
            </Match>
            <Match when={sign() === '/chat'}>
              <ChatPage />
            </Match>
          </Switch>
        </div>
      </div>
    </>
  )
}
