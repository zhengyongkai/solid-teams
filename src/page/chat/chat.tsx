import { ProviderInf, storeContext } from '@/store'
import { useContext } from 'solid-js'
import ChatLeftBar from './components/ChatLeftBar'
import ChatPanel from './components/ChatPanel'

export default function chatPage() {
  return (
    <div class="flex h-full">
      <div class="w-320">
        <ChatLeftBar />
      </div>
      <div class="flex-1">
        <ChatPanel />
      </div>
    </div>
  )
}
