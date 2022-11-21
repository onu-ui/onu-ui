<template>
  <div class="o-empty-base">
    <div class="o-empty-img">
      <img v-if="image" :src="image" :style="imageStyle">
      <slot v-else name="image">
        <img src="./empty.svg">
      </slot>
    </div>
    <div mt-6>
      <slot v-if="$slots.description" name="description" />
      <p v-else>
        {{ description || t('locales.empty.emptyText') }}
      </p>
    </div>
    <div v-if="$slots.default" class="o-empty-footer" mt-6>
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts' name="OEmpty">
import { useLocale } from '@onu-ui/utils'
import { CSSProperties } from 'vue'
import { emptyProps } from './props'

const props = defineProps(emptyProps)

const { t } = useLocale()
const imageStyle = computed<CSSProperties>(() => ({
  width: props.imgSize || '',
}))
</script>
