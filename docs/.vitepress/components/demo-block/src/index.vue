<script lang='ts' setup name="demo-block">
import { demoProps } from './index'

const props = defineProps(demoProps)

const decodedHighlightedCode = computed(() =>
  decodeURIComponent(props.highlightedCode),
)

const { copy, copied } = useClipboard({ source: decodeURIComponent(props.code) })
const [value, toggle] = useToggle()
const handletoGithub = () => { window.open(props.github, '_blank') }
const handleToCodeSandBox = () => { window.open(props.codeSandBox, '_blank') }
</script>

<template>
  <ClientOnly>
    <div v-bind="$attrs" class="mt-6">
      <div class="o-demo_wrapper vp-raw bg">
        <slot />
      </div>
      <div class="relative">
        <div class="o-demo_actions">
          <button class="o-demo_action_item" group @click="handleToCodeSandBox">
            <div class="o-demo_action_icon i-carbon:chemistry" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              Open on CodeSandBox
            </div>
          </button>
          <button class="o-demo_action_item" group @click="handletoGithub">
            <div class="o-demo_action_icon i-carbon-logo-github" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              Edit on GitHub
            </div>
          </button>
          <button class="o-demo_action_item" group @click="copy()">
            <div class="o-demo_action_icon i-carbon:copy" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ copied ? 'copied' : 'copy' }}
            </div>
          </button>
          <button class="o-demo_action_item" group @click="toggle()">
            <div class="o-demo_action_icon i-carbon:fit-to-width" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ value ? 'hidden code' : 'show code' }}
            </div>
          </button>
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
