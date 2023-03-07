<script setup lang="ts">
import { OMessage as message } from 'onu-ui'
import type { ComputedRef } from 'vue'
import type { OMessageProps } from 'onu-ui'
import playConfig from '../../playground.config'
import logo from '../assets/logo.svg'
import { getSupportVersions } from '~/utils/versions'
import type { ReplStore, VersionKey } from '~/composables/store'

const { store } = defineProps<{
  store: ReplStore
}>()

interface Version {
  text: string
  published: ComputedRef<string[]>
  active: string
}

// 黑暗模式配置
const appDark = useDark({
  selector: 'body',
  attribute: `${playConfig.compLibShort}-theme`,
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: `${playConfig.compLibShort}-theme`,
})
// 触发黑暗模式
const replDark = useDark()
const toggleAppTheme = useToggle(appDark)
const toggleReplTheme = useToggle(replDark)
const toggleTheme = () => {
  toggleAppTheme()
  toggleReplTheme()
}

// 支持版本列表（vue、组件库）
const versions = reactive<Record<VersionKey, Version>>({
  [playConfig.compLibShort]: {
    text: `${playConfig.title}`,
    published: getSupportVersions(
      `${playConfig.compLibName}`,
      playConfig.compLibMinVersion,
    ),
    active: store.versions[playConfig.compLibShort],
  },
  vue: {
    text: 'Vue',
    published: getSupportVersions('vue', playConfig.vueMinVersion),
    active: store.versions.vue,
  },
})

// 设置选择的版本（vue、组件库）
async function handleSetVersion(key: VersionKey, v: any) {
  versions[key].active = 'loading...'
  await store.setVersion(key, v, store.versions, store.compiler, store.state)
  versions[key].active = v
}

const domain = `${document.location.origin}/play/`

// 分享连接
async function copyLink() {
  const loc = document.location
  const link = `${`${domain}`}?${playConfig.compLibShort}=${
    store.versions[playConfig.compLibShort]
  }&vue=${store.versions.vue}${loc.hash}`
  await navigator.clipboard.writeText(link)

  message({
    content: 'Sharable URL has been copied to clipboard.',
    type: 'success',
  } as OMessageProps)
}
</script>

<template>
  <nav class="header-nav" border-b-cyan-500 border-b shadow>
    <a flex items-center m-2 cursor-pointer :href="domain">
      <img
        w-8
        h-8
        mr-4
        alt="logo"
        :src="logo"
        h-30px
      >
      <span text-lg font-bold dark-text-gray-100>{{ playConfig.title }}</span>
      <div ml-12px dark-text-gray-300>
        Playground
      </div>
    </a>

    <div flex items-center m-2>
      <div v-for="(v, key) of versions" :key="key" flex items-center>
        <span dark-text-gray-300 font-bold text-base>{{ v.text }} Version:</span>
        <o-popup
          position="bottom"
          :content-style="{ paddingLeft: 0, paddingRight: 0 }"
        >
          <div
            mx-12px
            px-12px
            text-lg
            cursor-pointer
            text-stone-600
            dark-text-gray-100
            flex
            items-center
          >
            <span text-base>{{ v.active }}</span>
            <o-icon name="i-carbon-chevron-down" ml-2 />
          </div>
          <template #content>
            <div h-50 class="version-content">
              <p
                v-for="(ver, index) of v.published"
                :key="index"
                cursor-pointer
                px="4"
                h-30px
                leading-loose
                text-baseText
                hover="bg-bluegray-100"
                dark="hover:bg-dark-400"
                @click="handleSetVersion(key, ver)"
              >
                {{ ver }}
              </p>
            </div>
          </template>
        </o-popup>
      </div>

      <a href="https://staging-cn.vuejs.org/" target="_blank" class="header-a">
        <o-icon h-5 w-5 mx-4 name="i-logos:vue" />
      </a>

      <a
        href="https://github.com/unocss/unocss"
        target="_blank"
        class="header-a"
      >
        <o-icon h-5 w-5 mx-4 name="i-logos:unocss" />
      </a>

      <a href="https://onu.zyob.top/" target="_blank" class="header-a">
        <img
          h-5
          w-5
          mx-4
          alt="logo"
          :src="logo"
          h-30px
        >
      </a>

      <a
        href="https://github.com/onu-ui/onu-ui"
        target="_blank"
        class="header-a"
      >
        <o-icon h-5 w-5 mx-4 o="gray" name="i-carbon-logo-github" />
      </a>

      <a class="header-a" cursor-pointer @click.prevent="toggleTheme()">
        <o-icon
          v-if="appDark"
          h-5
          w-5
          mx-4
          o="gray"
          name="i-carbon-moon"
        />
        <o-icon
          v-else
          h-5
          w-5
          mx-4
          o="gray"
          name="i-carbon-sun"
        />
      </a>

      <a class="header-a" cursor-pointer @click.prevent="copyLink">
        <o-icon h-5 w-5 mx-4 o="gray" name="i-carbon-share" />
      </a>
    </div>
  </nav>
</template>

<style scoped>
.version-content {
  overflow-y: scroll;
  width: 200px;
}
.dark .header-nav {
  --header-nav-bg: #1a1a1a;
}
.light .header-nav {
  --header-nav-bg: #1a1a1a;
}
.header-nav {
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  height: var(--nav-height);
  padding-left: 10px;
  padding-right: 10px;
  background-color: var(--header-nav-bg);
}

@media (max-width: 720px) {
  .header-nav {
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .header-a {
    display: none;
  }
}
</style>
