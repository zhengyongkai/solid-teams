import { createMemo, createResource, createSignal } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { fetchDictionary, Locale } from '@/locale'

export default function useLang() {
  const [locale, setLocale] = createSignal<Locale>('cn')
  const [dict] = createResource(locale, fetchDictionary)
  const t = i18n.translator(dict)

  return {
    locale,
    setLocale,
    t
  }
}
