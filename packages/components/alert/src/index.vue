<script lang='ts' setup>
import OIcon from '../../icon/src/index.vue'
import { alertEmits, alertProps } from './props'

defineOptions({
  name: 'OAlert',
})
const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = defineSlots<{
  default(props: unknown): any
  icon(props: unknown): any
  title(props: unknown): any
}>()

const visible = ref(true)

function handleClose(evt: MouseEvent) {
  visible.value = false
  emit('close', evt)
}

const showIcon = computed(() => props.icon || slots.icon)
const showTitle = computed(() => props.title || slots.title)
</script>

<template>
  <div v-show="visible" class="o-alert-base" :class="[light && 'o-alert-light', type && `o-${type}`]">
    <!-- icon -->
    <div v-if="showIcon" class="o-alert-icon">
      <slot name="icon">
        <OIcon :name="icon" class="!c-white text-6" />
      </slot>
    </div>
    <!-- content -->
    <div class="o-alert-content" :class="center && 'items-center'">
      <div class="o-alert-header">
        <div v-if="showTitle" class="o-alert-title">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div v-if="closable" class="o-alert-close" @click="handleClose">
          <slot name="close">
            <OIcon v-if="!closeText" name="i-carbon-close" class="!c-white text-4" />
            <span class="text-xs">{{ closeText }}</span>
          </slot>
        </div>
      </div>
      <div class="o-alert-description" :class="showTitle ? 'mt-1' : ''">
        <slot>
          {{ description }}
        </slot>
      </div>
    </div>
  </div>
</template>
