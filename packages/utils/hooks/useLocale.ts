import { computed, isRef, ref, unref } from 'vue'
import type { Ref } from 'vue'
import { deepGet } from '../shared'
import { en } from '../locale'
import type { language } from '../locale'
import type { MaybeRef } from '../types'
import { useGlobalConfig } from './useGlobalConfig'

export type OnuTranslatorOption = Record<string, string | number>
export type OnuTranslator = (path: string, option?: OnuTranslatorOption) => string
export interface OnuLocaleContext {
  locale: Ref<language>
  lang: Ref<string>
  t: OnuTranslator
}

export function translate(path: string, option: OnuTranslatorOption | undefined, locale: language) {
  return (deepGet(locale, path, path) as string).replace(/\{(\w+)\}/g, (_, key) => `${option?.[key] ?? `{${key}}`}`)
}

export const buildTranslator = (locale: MaybeRef<language>): OnuTranslator => (path, option) => translate(path, option, unref(locale))

export function buildLocaleContext(locale: MaybeRef<language>): OnuLocaleContext {
  const lang = computed(() => unref(locale).name)
  const RefLocale = isRef(locale) ? locale : ref(locale)

  return {
    locale: RefLocale,
    lang,
    t: buildTranslator(locale),
  }
}

export function useLocale() {
  const locale = useGlobalConfig('locale')
  return buildLocaleContext(computed(() => locale.value || en))
}
