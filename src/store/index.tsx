import { Accessor, createContext, JSX, Setter } from 'solid-js'
import useUserStore, { setUserDataInf, userInf } from './modules/user'
import useCommonStore from './modules/common'
import { Locale } from '@/locale'

export interface StoreProviderInf {
  children: JSX.Element
}

export interface ProviderInf {
  lang: Accessor<Locale>
  user: Accessor<userInf>
  setLocale: (_lang: Locale) => void
  setUserData: setUserDataInf
}

export const storeContext = createContext<ProviderInf>()

export function StoreProvider(props: StoreProviderInf) {
  const user = useUserStore()
  const common = useCommonStore()

  return (
    <storeContext.Provider
      value={{
        lang: common.lang,
        setLocale: common.setLocale,
        user: user.user,
        setUserData: user.setUserData
      }}
    >
      {props.children}
    </storeContext.Provider>
  )
}
