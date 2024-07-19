import { createResource, createSignal, useContext } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { fetchDictionary, langContext, Locale } from '@/locale'
import useStore from './useStore'

export default function useLang() {
  const context = useContext(langContext)!!

  function t(module: string, type: string) {
    const getLang = i18n.scopedTranslator(context.t, module)
    return getLang(type)
  }

  return {
    ...context,
    t
  }
}
