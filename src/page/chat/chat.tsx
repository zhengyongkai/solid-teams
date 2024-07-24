import ChatLeftBar from './components/ChatLeftBar'
import ChatPanel from './components/ChatPanel'

export default function chatPage() {
  return (
    <div class="flex h-full">
      <div class="w-320 max-lg:hidden ">
        <ChatLeftBar />
      </div>
      <div class="flex-1 overflow-hidden shadow-2xl">
        <ChatPanel />
      </div>
    </div>
  )
}
