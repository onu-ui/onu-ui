
<script lang="ts" setup name="O-Checkbox">
import { hash } from '@onu-ui/utils'
import { checkBoxProps } from './checkbox'

const props = defineProps(checkBoxProps)

const emits = defineEmits(['update:modelValue', 'change'])

const mv = useVModel(props, 'modelValue', emits)
const hashId = hash(Math.random().toString())
</script>

<template>
  <label class="o-checkbox-base" :class="[disabled && `o-checkbox-disabled`, size === 'lg' ? 'gap-2' : 'gap-1']" :for="hashId">
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
      :class="`o-checkbox-${size}`"
    >
      <i
        class="o-checkbox-icon"
        :class="icon"
      />
    </div>
    <slot><span v-if="label" whitespace-nowrap>{{ label }}</span></slot>
  </label>
</template>
