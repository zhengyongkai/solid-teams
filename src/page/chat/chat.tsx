import ChatLeftBar from './components/ChatLeftBar';
import ChatPanel from './components/ChatPanel';

export default function chatPage() {
  return (
    <div class="flex h-full">
      <div class="w-320 max-lg:hidden shadow-2xl">
        <ChatLeftBar />
      </div>
      <div class="flex-1 overflow-hidden">
        <ChatPanel />
      </div>
    </div>
  );
}
