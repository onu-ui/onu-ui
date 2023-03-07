<script setup lang='ts' name="OEmpty">
import { useLocale } from '@onu-ui/utils'
import type { CSSProperties } from 'vue'
import { emptyProps } from './props'

const props = defineProps(emptyProps)

const { t } = useLocale()
const imageStyle = computed<CSSProperties>(() => ({
  width: `${props.imgSize}px` || '',
}))
</script>

<template>
  <div class="o-empty-base">
    <div class="o-empty-img">
      <img v-if="image" w-40 :src="image" :style="imageStyle">
      <slot v-else name="image">
        <img w-40 src="./empty.svg">
      </slot>
    </div>
    <div mt-4 o-description>
      <slot v-if="$slots.description" name="description" />
      <p v-else>
        {{ description || t('locales.empty.emptyText') }}
      </p>
    </div>
    <div v-if="$slots.default" class="o-empty-footer" mt-2>
      <slot />
    </div>
  </div>
</template>
