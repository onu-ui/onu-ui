<script setup lang="ts" name="OButtonGroup">
import type { VNode } from 'vue'
import { computed, h, onMounted, reactive, useSlots } from 'vue'

import { buttonGroupProps } from './button-group'
import { buttonGroupContextKey } from './constants'

import OButton from './button.vue'

const props = defineProps(buttonGroupProps)
const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

const state = reactive({
  buttonsState: [] as boolean[],
  isFirstLoad: true,
})

const selectedValue = computed({
  get(): number | string | number[] | string[] | undefined {
    return props.modelValue
  },
  set(val: number | string | number[] | string[] | undefined) {
    emit('update:modelValue', val)
  },
})

provide(
  buttonGroupContextKey,
  reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type'),
  }),
)

const fillState = (amountOfButtons: number) => {
  for (let index = 0; index < amountOfButtons; index++) {
    if (!props.modelValue) {
      state.buttonsState.push(false)
    }
    else {
      index === +props?.modelValue
        ? state.buttonsState.push(true)
        : state.buttonsState.push(false)
    }
  }
}

const setSelectedValue = (value: string | number) => {
  if (
    typeof selectedValue.value === 'string'
    || typeof selectedValue.value === 'number'
    || typeof selectedValue.value === 'undefined'
  ) {
    selectedValue.value = value
  }
  else {
    const localSelectedValue = [...selectedValue.value]

    if (localSelectedValue.includes(value))
      localSelectedValue.splice(localSelectedValue.indexOf(value), 1)

    else
      localSelectedValue.push(value)

    selectedValue.value = localSelectedValue as string[]
  }
}

const activateButton = (index: number) => {
  if (props.multiple) {
    state.buttonsState.splice(index, 1, !state.buttonsState[index])
    return
  }

  state.buttonsState.forEach((_, stateIndex) => {
    state.buttonsState.splice(stateIndex, 1, false)
  })
  state.buttonsState.splice(index, 1, true)
}

const genButton = (slotButton: VNode, index: number): VNode => {
  return h(
    OButton,
    {
      onClick: (e, value) => {
        e.preventDefault()

        setSelectedValue(value || index)

        activateButton(index)
      },
      active: state.buttonsState[index],
      value: slotButton?.props?.value ?? index,
      class: {
        'hover:bg-accent-darken-1': true,
        'active:bg-accent-darken-2': true,
      },
    },
    slotButton.children as string,
  )
}

const genContent = () => {
  if (slots.default && !slots.default())
    return []

  return slots.default && slots.default().map((slotButton, index) => {
    return genButton(slotButton, index)
  })
}

onMounted(() => {
  slots && fillState((slots.default && slots.default()?.length) ?? 0)

  if (props.multiple)
    selectedValue.value = []
})

const render = () => {
  return h('div', { class: ['o-button-group o-button-group-clearfix inline-block align-middle o-button-group-children', { spacer: !!props.spacer }] }, genContent())
}
</script>

<template>
  <render />
</template>

<style scope>
.o-button-group > .o-button-base + .o-button-base {
  margin-left: 0;
}
.o-button-group > .o-button-base:first-child:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.o-button-group > .o-button-base:last-child:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.o-button-group > .o-button-base:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.o-button-group > .o-button-base:not(:last-child) {
  /* margin-right: -1px; */
  border-right: none;
}
.o-button-group.spacer > .o-button-base:not(:first-child) {
  border-left-color: white;
}
.o-button-group > .o-button-base:hover, .o-button-group > .o-button-base:focus, .o-button-group > .o-button-base:active {
  z-index: 1;
}
</style>
