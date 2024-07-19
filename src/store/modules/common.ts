import { Locale } from '@/locale'
import { getStorage, setStorage } from '@/utils/stroage'
import { createSignal } from 'solid-js'

export default function useCommonStore() {
  const [lang, setLanguage] = createSignal<Locale>((getStorage('language') as Locale) || 'cn')

  function setLocale(lang: Locale) {
    setStorage('language', lang)
    setLanguage(lang)
  }
  return {
    lang,
    setLocale
  }
}
