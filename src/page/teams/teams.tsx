import TeamsLeftBar from './components/TeamsLeftBar'
import TeamsPanel from './components/TeamsPanel'

export default function chatPage() {
  return (
    <div class="flex h-full">
      <div class="w-320 max-lg:hidden">
        <TeamsLeftBar></TeamsLeftBar>
      </div>
      <div class="flex-1">
        <TeamsPanel></TeamsPanel>
      </div>
    </div>
  )
}
