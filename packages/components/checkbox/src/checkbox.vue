<script lang="ts" setup name="OCheckbox">
import { hash } from '@onu-ui/utils'
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './use-checkbox'

const props = defineProps(checkboxProps)
const emits = defineEmits(checkboxEmits)

const { checked, size, toggle } = useCheckbox(props, emits)

const hashId = hash(Math.random().toString())

const lgSize = computed(() => size.value === 'lg')

const isCustom = computed(() => props.icon !== 'i-carbon-checkmark')
</script>

<template>
  <label class="o-checkbox-base" :class="[disabled && `o-checkbox-disabled`]" :for="hashId">
    <input
      :id="hashId"
      v-model="checked"
      :disabled="disabled"
      class="peer"
      type="checkbox"
      hidden
    >
    <div
      class="o-checkbox text-white"
      :class="`o-checkbox-${size} ${isCustom && 'o-checkbox-icon-custom'}`"
      @click="toggle"
    >
      <i
        class="o-checkbox-icon"
        :class="icon"
      />
    </div>
    <slot><span v-if="label" class="o-checkbox-label" :class="[checked && 'o-checkbox-label-checked', lgSize && 'text-base']">{{ label }}</span></slot>
  </label>
</template>
