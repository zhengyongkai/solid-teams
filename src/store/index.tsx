import { Accessor, createContext, JSX } from 'solid-js'
import userStore, { setUserDataInf, userInf } from './modules/user'

export interface StoreProviderInf {
  children: JSX.Element
}

export interface ProviderInf {
  user: Accessor<userInf>
  setUserData: setUserDataInf
}

export const storeContext = createContext<any>()

export function StoreProvider(props: StoreProviderInf) {
  const user = userStore()

  return (
    <storeContext.Provider
      value={{
        user: user.user,
        setUserData: user.setUserData
      }}
    >
      {props.children}
    </storeContext.Provider>
  )
}
