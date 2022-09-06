<script lang='ts' setup name="demo-block">
import { demoProps } from './index'
const props = defineProps(demoProps)

const { copy, copied, text } = useClipboard({ source: props.code })
const [value, toogle] = useToggle(props.expand)
</script>

<template>
  <ClientOnly>
    <span text-md>1212</span>
    <article v-bind="$attrs" class="vitepress-demo">
      <div class="demo-slot vp-raw">
        <slot />
      </div>

      <div v-show="title || desc" class="demo-title-desc">
        <span class="demo-title">{{ title }}</span>
        <span class="demo-desc">{{ desc }}</span>
      </div>

      <div class="demo-actions">
        <div class="demo-platforms">
          <!-- <SfcPlayground :content="decodedCode" :import-map="importMap" /> -->
        </div>
        <div class="demo-buttons">
          <div class="demo-actions-copy">
            <span v-show="copied" class="demo-actions-tip">Copied</span>
            <div class="c-context text-md i-carbon-favorite-filled" />
            <div class="c-context text-md i-carbon-favorite-filled" />
            <!-- <copySvg v-show="!copied" title="Copy" @click="copy" /> -->
          </div>
          <!-- <codeSvg class="demo-actions-expand" title="展开" @click="toogle" /> -->
        </div>
      </div>
      <div v-show="value" :class="`language-${lang} extra-class`" v-html="text" />
    </article>
  </ClientOnly>
</template>
