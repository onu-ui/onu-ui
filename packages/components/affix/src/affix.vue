<script setup lang="ts">
import { getScrollContainer } from '@onu-ui/utils'
import type { CSSProperties } from 'vue'
import { affixEmits, affixProps } from './props'

defineOptions({
  name: 'OAffix',
})

const props = defineProps(affixProps)

const emit = defineEmits(affixEmits)

const target = shallowRef<HTMLElement>()
const root = shallowRef<HTMLDivElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()
const { height: windowHeight } = useWindowSize()
const {
  height: rootHeight,
  width: rootWidth,
  top: rootTop,
  bottom: rootBottom,
  update: updateRoot,
} = useElementBounding(root, { windowScroll: false })
const targetRect = useElementBounding(target)

const fixed = ref(false)
const scrollTop = ref(0)
const transform = ref(0)

const rootStyle = computed<CSSProperties>(() => {
  return {
    height: fixed.value ? `${rootHeight.value}px` : '',
    width: fixed.value ? `${rootWidth.value}px` : '',
  }
})

const affixStyle = computed<CSSProperties>(() => {
  if (!fixed.value)
    return {}

  const offset = props.offset ? `${props.offset}px` : 0
  return {
    height: `${rootHeight.value}px`,
    width: `${rootWidth.value}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: transform.value ? `translateY(${transform.value}px)` : '',
    zIndex: props.zIndex,
  }
})

function update() {
  if (!scrollContainer.value)
    return

  const isTop = props.position === 'top'
  const isTarget = props.target
  const isFixed
          = (isTop && isTarget)
            ? (props.offset > rootTop.value && targetRect.bottom.value > 0)
            : isTop
              ? props.offset > rootTop.value
              : isTarget
                ? (windowHeight.value - props.offset < rootBottom.value && windowHeight.value > targetRect.top.value)
                : windowHeight.value - props.offset < rootBottom.value
  const difference
          = (isTop && isTarget)
            ? targetRect.bottom.value - props.offset - rootHeight.value
            : (!isTop && isTarget)
                ? windowHeight.value - targetRect.top.value - props.offset - rootHeight.value
                : 0
  scrollTop.value = scrollContainer.value instanceof Window ? document.documentElement.scrollTop : (scrollContainer.value.scrollTop || 0)
  transform.value = difference < 0 ? (isTop ? difference : -difference) : 0
  fixed.value = isFixed
}

function handleScroll() {
  updateRoot()
  emit('scroll', {
    scrollTop: scrollTop.value,
    fixed: fixed.value,
  })
}

useEventListener(scrollContainer, 'scroll', handleScroll)
watchEffect(update)

watch(fixed, val => emit('change', val))

onMounted(() => {
  const targetElement = props.target
    ? document.querySelector<HTMLElement>(props.target)
    : document.documentElement
  if (!targetElement)
    throw new Error(`[OAffix] target is not existed: ${props.target}`)
  target.value = targetElement
  scrollContainer.value = getScrollContainer(root.value!, true)
  updateRoot()
})

defineExpose({
  /** @description update affix status */
  update,
  /** @description update rootRect info */
  updateRoot,
})
</script>

<template>
  <div
    ref="root" :style="rootStyle"
  >
    <div
      :class="[
        fixed && `fixed`,
      ]"
      :style="affixStyle"
    >
      <slot />
    </div>
  </div>
</template>
