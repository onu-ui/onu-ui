import { computed, getCurrentInstance, inject, provide, ref } from 'vue'
import { resolveUnref } from '@vueuse/core'
import { configProviderContextKey } from '../tokens'
import { mergeObjects } from '../shared'
import type { InstallOptions } from '../tokens'
import type { App, Ref } from 'vue'
import type { MaybeComputedRef } from '@vueuse/core'

const globalConfig = ref<InstallOptions>()

/**
 * 获取全局配置 Hooks
 * @param key
 * @param defaultValue
 */
export function useGlobalConfig<T extends keyof InstallOptions, U extends InstallOptions[T]>(key: T, defaultValue?: U): Ref<Exclude<InstallOptions[T], undefined | U>>
export function useGlobalConfig(): Ref<InstallOptions>
export function useGlobalConfig(key?: keyof InstallOptions, defaultValue = undefined) {
  const app = getCurrentInstance()
  let config = inject<Ref<InstallOptions>>(configProviderContextKey)

  if (!unref(config)) {
    config = ref(app ? app.appContext.provides[configProviderContextKey] : globalConfig.value)
    provide(configProviderContextKey, config)
  }

  if (key)
    return computed(() => config!.value?.[key] ?? defaultValue)
  else
    return config
}

/**
 * 注入配置
 * @param config
 * @param app
 * @param global
 */
export function provideGlobalConfig(config: MaybeComputedRef<InstallOptions>, app?: App, global = false) {
  const inSetup = !!getCurrentInstance()
  const sourceConfig = ref(inSetup ? useGlobalConfig() : undefined)
  const provideFn = inSetup ? provide : app?.provide

  if (!provideFn) return

  const context = computed(() => {
    const rawConfig = resolveUnref(config)
    if (!sourceConfig.value) return rawConfig

    return mergeObjects(sourceConfig.value, rawConfig)
  })

  provideFn(configProviderContextKey, context)

  if (global || !globalConfig.value)
    globalConfig.value = context.value

  return context
}
