<script lang='ts' setup name="O-Alert">
import OIcon from '../../icon/src/index.vue'
import { alertEmits, alertProps } from './props'

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)
const slots = useSlots()

const visible = ref(true)

const handleClose = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}

const showIcon = computed(() => props.icon || slots.icon)
const showTitle = computed(() => props.title || slots.title)
</script>

<template>
  <div v-show="visible" :o="o" class="o-alert-base" :class="[light && 'o-alert-light']">
    <!-- icon -->
    <div v-if="showIcon" class="o-alert-icon">
      <slot name="icon">
        <o-icon :name="icon" class="!c-white text-6" />
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
            <o-icon v-if="!closeText" name="i-carbon-close" class="!c-white text-4" />
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
