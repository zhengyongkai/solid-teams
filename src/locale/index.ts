import * as i18n from '@solid-primitives/i18n'

export type Locale = 'cn' | 'zn' | 'en'

export async function fetchDictionary(locale: Locale): Promise<i18n.BaseRecordDict> {
  const dict = await import(`./i18n/${locale}.ts`)
  return i18n.flatten(dict.default) // flatten the dictionary to make all nested keys available top-level
}
