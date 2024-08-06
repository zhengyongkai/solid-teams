import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import FriendPanel, { ChatItems } from './FriendPanel'
import { ChatItemDataInf } from '../types/chat'
import { For, createSignal } from 'solid-js'

export default function ChatLeftBar() {
  // const

  const [chatItem, setChatItems] = createSignal<ChatItemDataInf[]>([
    {
      id: 1,
      name: '郑永楷',
      date: '13:50'
    },
    {
      id: 2,
      name: '天津君',
      date: '13:50'
    },
    {
      id: 3,
      name: '张娟',
      date: '13:50'
    }
  ])

  const [active, setActive] = createSignal(1)

  function onChange(e: ChatItemDataInf) {
    setActive(e.id)
  }

  return (
    <div class="bg-cdb7 flex flex-col h-full ">
      <div class="h-61 flex items-center px-16 border-b-1 border-cnss flex-shrink-0">
        <div class="font-700 text-18 flex-1">聊天</div>
        <div class="flex ">
          <div class="mr-8">
            <SvgIcon name="setting" isButton size={20} />
          </div>
          <div>
            <SvgIcon name="edit" isButton size={20} />
          </div>
        </div>
      </div>
      <div class="h-screen flex-1">
        <FriendPanel title="已固定" defaultOpen={false}>
          <For each={chatItem()}>
            {(item, index) => <div data-index={index()}>{<ChatItems data={item}></ChatItems>}</div>}
          </For>
        </FriendPanel>
        <FriendPanel title="最近" defaultOpen={true}>
          <For each={chatItem()}>
            {(item, index) => (
              <div data-index={index()}>
                {
                  <ChatItems
                    onChange={onChange}
                    data={item}
                    active={active() === item.id}
                  ></ChatItems>
                }
              </div>
            )}
          </For>
        </FriendPanel>
      </div>
    </div>
  )
}
