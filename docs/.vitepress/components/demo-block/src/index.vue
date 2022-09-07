<script lang='ts' setup name="demo-block">
import { demoProps } from './index'

const props = defineProps(demoProps)

const decodedHighlightedCode = computed(() =>
  decodeURIComponent(props.highlightedCode),
)

const { copy, copied } = useClipboard({ source: decodeURIComponent(props.code) })
const [value, toggle] = useToggle()
</script>

<template>
  <ClientOnly>
    <div v-bind="$attrs" class="mt-6">
      <div class="o-demo_wrapper vp-raw bg">
        <slot />
      </div>
      <div class="relative">
        <div class="o-demo_actions">
          <a class="o-demo_action_item" group :href="codeSandBox" target="_blank">
            <div class="o-demo_action_icon i-carbon:chemistry" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              Open on CodeSandBox
            </div>
          </a>
          <a class="o-demo_action_item" group :href="github" target="_blank">
            <div class="o-demo_action_icon i-carbon-logo-github" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              Edit on GitHub
            </div>
          </a>
          <a class="o-demo_action_item" group @click="copy()">
            <div class="o-demo_action_icon i-carbon:copy" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ copied ? 'copied' : 'copy' }}
            </div>
          </a>
          <a class="o-demo_action_item" group @click="toggle()">
            <div class="o-demo_action_icon i-carbon:fit-to-width" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ value ? 'hidden code' : 'show code' }}
            </div>
          </a>
        </div>
        <div v-show="value" :class="`language-${lang} extra-class`" v-html="decodedHighlightedCode" />
      </div>
    </div>
  </ClientOnly>
</template>

<!-- <style scoped>
.bg {
      /* background-color: #1c1f24; */
      background: conic-gradient(from 192deg at 46.5% 42.58%, #FA8792 -54.94deg, #561BBE 28.29deg,
          #70E6FB 157.82deg, #FBF8B3 220.83deg, #FA8792 305.06deg, #561BBE 388.29deg);
    }
</style> -->
