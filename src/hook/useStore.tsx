import { storeContext } from '@/store'
import { useContext } from 'solid-js'

export default function useStore() {
  const context = useContext(storeContext)!!

  return {
    ...context
  }
}
