<script lang='ts' setup name="demo-block">
import { demoProps } from './index'

const props = defineProps(demoProps)

const { copy, copied } = useClipboard({ source: props.code })
const [value, toggle] = useToggle()

const decodedHighlightedCode = computed(() =>
  decodeURIComponent(props.code),
)
</script>

<template>
  <ClientOnly>
    <div v-bind="$attrs" class="mt-6">
      <div class="o-demo_wrapper">
        <slot />
      </div>
      <div class="relative">
        <div class="o-demo_actions">
          <button class="o-demo_action_item" group>
            <div class="o-demo_action_icon i-carbon:chemistry" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              open on CodeSandBox
            </div>
          </button>
          <button class="o-demo_action_item" group>
            <div class="o-demo_action_icon i-carbon-logo-github" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              edit on GitHub
            </div>
          </button>
          <button class="o-demo_action_item" group>
            <div class="o-demo_action_icon i-carbon:copy" @click="copy()" />
            <div class="o-demo_tooltip" group-hover:opacity-100>
              {{ copied ? 'copied' : 'copy' }}
            </div>
          </button>
          <button class="o-demo_action_item" group>
            <div class="o-demo_action_icon i-carbon:fit-to-width" @click="toggle()" />
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
