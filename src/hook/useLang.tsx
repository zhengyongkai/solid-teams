import { useContext } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { langContext } from '@/locale'

export default function useLang() {
  const context = useContext(langContext)!!

  function t(module: string, type: string, dict?: unknown) {
    const getLang = i18n.scopedTranslator(context.t, module)
    return getLang(type, dict)
  }

  return {
    ...context,
    t
  }
}
