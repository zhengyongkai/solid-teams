import SvgIcon from '@/components/Common/SvgIcon/SvgIcon'
import FriendPanel, { ChatItems } from './FriendPanel'

export default function ChatLeftBar() {
  return (
    <div class="bg-cdb7 flex flex-col h-full">
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
          <ChatItems></ChatItems>
        </FriendPanel>
        <FriendPanel title="最近" defaultOpen={true}>
          <ChatItems></ChatItems>
          <ChatItems active={true}></ChatItems>

          <ChatItems></ChatItems>
          <ChatItems></ChatItems>
          <ChatItems></ChatItems>
        </FriendPanel>
      </div>
    </div>
  )
}
