<script setup lang="ts" name="OCollapse">
// TODO test
import { provide, ref, watch } from 'vue'
import type {
  CollapseActiveName,
  CollapseContext,
} from './props'
import {
  collapseContextKey,
  collapseEmits,
  collapseProps,
} from './props'

const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)
const activeNames = ref(props.expandedNames)

function setActiveNames(_activeNames: CollapseActiveName) {
  activeNames.value = _activeNames
  const value = props.accordion ? [activeNames.value[0]] : activeNames.value

  emit('update:expanded-names', value)
  emit('change', value)
}
function toggleItem(value: string | number): void {
  const { accordion } = props
  if (accordion) {
    setActiveNames(activeNames.value && (activeNames.value[0] === value ? [] : [value]))
  }
  else {
    const _activeNames = [...activeNames.value]
    const index = _activeNames.indexOf(value)

    if (index > -1)
      _activeNames.splice(index, 1)
    else
      _activeNames.push(value)

    setActiveNames(_activeNames)
  }
}

watch(
  () => props.expandedNames,
  () => (activeNames.value = props.expandedNames),
  { deep: true },
)
provide<CollapseContext>(collapseContextKey, {
  activeNames,
  toggleItem,
})

defineExpose({
  activeNames,
  setActiveNames,
})
</script>

<template>
  <div o-collapse-base>
    <slot />
  </div>
</template>
