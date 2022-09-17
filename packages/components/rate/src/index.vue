<script lang="ts" setup name="O-Rate">
import { computed } from 'vue'
import OIcon from '../../icon/src/index.vue'
import { rateProps } from './props'

const props = defineProps(rateProps)
const emits = defineEmits(['update:modelValue', 'change'])

const curVal = ref(props.modelValue)
const isAtLeftHalf = ref(false)
const setCurValue = (item:number, e:MouseEvent) => {
  if (props.readonly) return
  if (props.allowHalf) {
    const target = e.target as HTMLElement
    isAtLeftHalf.value = e.offsetX * 2 <= target.clientWidth
  }
  curVal.value = isAtLeftHalf.value ? item - 0.5 : item
}

const resetCurValue = () => {
  if (props.readonly) return
  curVal.value = props.modelValue
}

watch(() => props.modelValue, () => {
  resetCurValue()
},
{ immediate: true })

const selectVal = () => {
  if (props.readonly) return
  emits('update:modelValue', curVal.value)
  emits('change', curVal.value)
}

const showFilledIcon = computed(() => {
  return function(val, item) {
    return !(Math.round(val) < item)
  }
})

const showHalfIcon = computed(() => {
  return function(val, item) {
    return (Math.round(val) === item) && val < item
  }
})
</script>

<template>
  <div class="o-rate">
    <span
      v-for="(item, key) in max"
      :key="key"
      @mousemove="setCurValue(item, $event)"
      @mouseleave="resetCurValue"
      @click="selectVal"
    >
      <o-icon
        v-show="showFilledIcon(curVal, item)"
        :class="showHalfIcon(curVal, item) ? 'o-rate-half' : ''"
        name="o-rate-icon i-carbon-star-filled"
        :o="color"
      />
      <o-icon v-show="!showFilledIcon(curVal, item)" name="o-rate-icon i-carbon-star" :o="voidColor" />
    </span>
    <span class="o-rate-text">{{ text }}</span>
  </div>
</template>
