import { createSignal } from 'solid-js'

export interface userInf {
  avatar: string
  username: string
}

export type setUserDataInf = (payload: userInf) => void

export default function useUserStore() {
  const [user, setUser] = createSignal<userInf>({
    avatar: '3123',
    username: '4234'
  })

  const setUserData: setUserDataInf = async (payload: userInf) => {
    setUser(payload)
  }

  return {
    user,
    setUserData
  }
}
