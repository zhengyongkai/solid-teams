import useStore from '@/hook/useStore'
import * as i18n from '@solid-primitives/i18n'
import { createContext, createResource, createSignal, JSX } from 'solid-js'

export type Locale = 'zh-Cn' | 'zh' | 'en'

export interface LangProviderInf {
  children: JSX.Element
}

export const localeDict: { [key in Locale]: string } = {
  'zh-Cn': '中文',
  zh: '繁体中文',
  en: 'English'
}

export interface langContext {
  setLang: (lang: Locale) => void
  t: any
}

export const langContext = createContext<langContext>()

export async function fetchDictionary(locale: Locale): Promise<i18n.BaseRecordDict> {
  const dict = await import(`./i18n/${locale}/${locale}.ts`)
  return i18n.flatten(dict.default) // flatten the dictionary to make all nested keys available top-level
}

export default function LangProvider(props: LangProviderInf) {
  const context = useStore()
  console.log(context)
  const [locale, setLocale] = createSignal<Locale>(context.lang() || 'zh-Cn')
  const [dict] = createResource(locale, fetchDictionary)
  const t = i18n.translator(dict)

  function setLang(lang: Locale) {
    setLocale(lang)
    context.setLocale(lang)
    location.reload()
  }

  return (
    <langContext.Provider
      value={{
        setLang,
        t
      }}
    >
      {props.children}
    </langContext.Provider>
  )
}
