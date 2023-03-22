<script lang="ts" setup name="OCheckbox">
import { hash } from '@onu-ui/utils'
import type { Ref } from 'vue'
import { checkBoxProps } from './props'

const props = defineProps(checkBoxProps)

const emits = defineEmits(['update:modelValue', 'change'])

const mv = useVModel(props, 'modelValue', emits) as unknown as Ref<boolean>
const hashId = hash(Math.random().toString())

const checked = computed(() => mv.value === true)
const lgSize = computed(() => props.size === 'lg')

const isCustom = computed(() => props.icon !== 'i-carbon-checkmark')
</script>

<template>
  <label class="o-checkbox-base" :class="[disabled && `o-checkbox-disabled`]" :for="hashId">
    <input
      :id="hashId"
      v-model="mv"
      :disabled="disabled"
      class="peer"
      type="checkbox"
      hidden
    >
    <div
      class="o-checkbox"
      :class="`o-checkbox-${size} ${isCustom && 'o-checkbox-icon-custom'}`"
    >
      <i
        class="o-checkbox-icon"
        :class="icon"
      />
    </div>
    <slot><span v-if="label" class="o-checkbox-label" :class="[checked && 'o-checkbox-label-checked', lgSize && 'text-base']">{{ label }}</span></slot>
  </label>
</template>
