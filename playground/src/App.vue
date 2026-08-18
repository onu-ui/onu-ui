<script setup lang="ts">
import { Repl } from '@vue/repl'
import playConfig from '../playground.config'
import Header from '~/components/Header.vue'
import { useStore } from '~/composables/store'
import type { ReplStore, UserOptions, Versions } from '~/composables/store'
import { generate } from '~/utils/uno/uno'
import { handleKeydown } from '~/utils/format'
import { message } from '~/utils/message'
import { IS_DEV } from '~/constants'

const loading = ref(true)
// sfc 配置，他将在在 vue-repl 中用于 compiler-sfc
const sfcOptions: any = {
  script: {
    reactivityTransform: true,
  },
}
const initialUserOptions: UserOptions = {}
const params = new URLSearchParams(location.search)
// 初始版本对象，包括 vue、组件库
const initialVersions: Versions = {
  [playConfig.compLibShort]: (IS_DEV ? `@${__COMMIT__}` : params.get(playConfig.compLibShort)) || 'latest',
  vue: params.get('vue') || 'latest',
}

// 主要业务都在 store 里
// 包括各个依赖请求、依赖的相关参数变化监听、版本初始化等
const store = useStore({
  serializedState: location.hash.slice(1), // 序列化 url 中的参数
  userOptions: initialUserOptions,
  versions: initialVersions, // 版本对象
}) as ReplStore

// 初始化，设置版本、编译文件后修改 state 传给 vue-repl
store.init().then(() => {
  loading.value = false
  message({
    content: 'please wait patiently',
    type: 'info',
  })
})

// 将默认的虚拟文件信息添加到url上,
// 实现只输入域名能够重定向到有文件信息参数的效果
watchEffect(() => {
  history.replaceState({}, '', `#${store.serialize()}`)
})

// 接受 div后用unocss编译再发送回去，实现图标显示
window.addEventListener(
  'message',
  (event) => {
    if (typeof event.data === 'string') {
      generate(event.data, (css) => {
        const frame = document.querySelectorAll('iframe')
        if (frame.length > 0)
          frame[0].contentWindow?.postMessage(css, '*')
      })
    }
  },
  false,
)
</script>

<template>
  <div class="comp-lib-play">
    <Header :store="store" />
    <!-- store as any because store.compiler is shallowRef -->
    <Repl
      v-if="!loading"
      :store="store as any"
      auto-resize
      :sfc-options="sfcOptions"
      :clear-console="false"
      :show-import-map="store.userOptions.value.showHidden || false"
      @keydown="(event) => handleKeydown(event, store)"
    />
    <div
      v-if="loading"
      class="loading-wrapper"
      flex
      items-center
      justify-centre
      flex-col
    >
      <o-icon w-6 h-6 name="i-carbon-circle-dash" />
      <p text-lg>
        loading the playground...... 🤣
      </p>
    </div>
  </div>
</template>

<style>
body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  --base: #444;
  --nav-height: 52px;
  --color-file-active: #06b6d4;
}

.comp-lib-play .file.active,
.comp-lib-play button.active {
  color: var(--color-file-active);
  border-bottom: 3px solid var(--color-file-active);
  cursor: text;
}

.vue-repl {
  height: calc(100vh - var(--nav-height) - 1px);
}

/*loading*/
.loading-wrapper {
  width: 100%;
  min-height: calc(100vh - var(--nav-height) - 1px);
}

.loading-wrapper > .i-carbon-circle-dash {
  width: 3rem;
  height: 3rem;
  animation: loadingCircle 1s infinite linear;
}
@keyframes loadingCircle {
  to {
    transform: rotate(360deg);
  }
}
</style>
