import { createSignal } from 'solid-js'

export interface userInf {
  avatar: string
  username: string
}

export default function userStore() {
  const [user, setUser] = createSignal<userInf>({
    avatar: '',
    username: ''
  })

  async function setUserData(payload: userInf) {
    setUser(payload)
  }

  return {
    user,
    setUserData
  }
}
