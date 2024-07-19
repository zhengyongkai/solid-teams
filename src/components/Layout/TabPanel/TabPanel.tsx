import { createSignal, JSX, Match, Switch } from 'solid-js'
import ChatPage from '@/page/chat/chat'
import NoticePage from '@/page/notice/notice'

import LeftBar from '../LeftBar/LeftBar'

interface TabPanelPropsInf {
  children: JSX.Element
}

export default function TabPanel(props: TabPanelPropsInf) {
  const [sign, setSignal] = createSignal('/notice')
  return (
    <>
      <div>
        <LeftBar onClick={setSignal}></LeftBar>
      </div>
      <div class="h-[calc(100vh-60px)] w-full overflow-y-auto">
        {/* {Object.entries(componentMap).map((item) => {
            return <div class={item[0] === sign() ? 'block' : 'hidden'}>{item[1]}</div>
          })} */}
        {props.children}
      </div>
    </>
  )
}
