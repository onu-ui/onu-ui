import { compare } from 'compare-versions'
import type { MaybeRef } from '@vueuse/core'
import type { Ref, ShallowRef } from 'vue'
import { unref } from 'vue'
import playConfig from '../../playground.config'
import { genVueLink } from '~/utils/dependency'
import type { VersionKey, Versions } from '~/composables/store'
import { IS_DEV } from '~/constants'
// 发送请求到 npm 查询 vue、组件库版本
export const getVersions = (pkg: MaybeRef<string>) => {
  const url = computed(() => `${playConfig.versionUrl}${unref(pkg)}`)
  return useFetch(url, {
    initialData: [],
    afterFetch: ctx => ((ctx.data = ctx.data.versions), ctx),
    refetch: true,
  }).json<string[]>().data as Ref<string[]>
}

// 过滤支持的最小 vue、组件库版本
export const getSupportVersions = (pkg: string, minVersion: string) => {
  const versions = getVersions(pkg)
  const IS_VUE = pkg === 'vue'
  return computed(() => {
    const canUserVersions = versions.value.filter(version =>
      compare(version, minVersion, '>='),
    )
    if (canUserVersions.length > 0) {
      canUserVersions.unshift('latest')
      IS_DEV && !IS_VUE && canUserVersions.unshift(`@${__COMMIT__}`)
    }

    return canUserVersions
  })
}

// 设置 vue 版本
export async function setVueVersion(
  version: string,
  compiler: ShallowRef<typeof import('vue/compiler-sfc') | undefined>,
  state: { vueRuntimeURL: string },
  versions: Versions,
) {
  // 获取 vue 依赖配置
  const { compilerSfc, runtimeDom } = genVueLink(version)
  // 根据配置请求相关的编译模块，并传递给 vue-repl
  compiler.value = await import(/* @vite-ignore */ compilerSfc)
  state.vueRuntimeURL = runtimeDom
  versions.vue = version

  // eslint-disable-next-line no-console
  console.info(`[@vue/repl] Now using Vue version: ${version}`)
}

// 设置 vue 或 组件库版本
export async function setVersion(
  key: VersionKey,
  version: string,
  versions: Versions,
  compiler: ShallowRef<typeof import('vue/compiler-sfc') | undefined>,
  state: { vueRuntimeURL: string },
) {
  switch (key) {
    case playConfig.compLibShort:
      versions[playConfig.compLibShort] = version
      break
    case 'vue':
      await setVueVersion(version, compiler, state, versions)
      break
  }
}
