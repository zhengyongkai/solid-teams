import { ProviderInf, storeContext } from '@/store'
import { useContext } from 'solid-js'

export default function chatPage() {
  const { user, setUserData } = useContext<ProviderInf>(storeContext)
  return (
    <div class="flex">
      <div class="w-320">{user().avatar}</div>
      <div class="flex-1">dasd</div>
    </div>
  )
}
