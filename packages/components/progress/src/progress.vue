<script setup lang="ts" name="OProgress">
import { isFunction, isString } from '@onu-ui/utils'
import type { CSSProperties } from 'vue'
import type { ProgressColor } from './progress'
import { SIZE_MAP, STATUS_COLOR_MAP, STATUS_MAP, TYPE_MAP, progressProps } from './progress'

const props = defineProps(progressProps)

const stripedStyle = {
  backgroundImage: 'linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1) 75%, transparent 75%, transparent)',
  backgroundSize: '1.25rem 1.25rem',
}

const strokeWidth = computed(() => {
  return SIZE_MAP[props.strokeWidth] || props.strokeWidth as number
})
const isLine = computed(() => props.type === TYPE_MAP.line)
const barStyle = computed<CSSProperties>(() => Object.assign(props.striped ? stripedStyle : {}, {
  width: `${props.percentage}%`,
  animationDuration: `${props.duration}s`,
  background: getCurrentColor(props.percentage),
  transition: 'width 0.6s ease',
}))

const relativeStrokeWidth = computed(() =>
  ((strokeWidth.value / props.width) * 100).toFixed(1),
)

const radius = computed(() => {
  if ([TYPE_MAP.circle, TYPE_MAP.dashboard].includes(props.type)) {
    return Number.parseInt(
      `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
      10,
    )
  }
  return 0
})

const trackPath = computed(() => {
  const r = radius.value
  const isDashboard = props.type === TYPE_MAP.dashboard
  return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
          `
})

const perimeter = computed(() => 2 * Math.PI * radius.value)

const rate = computed(() => (props.type === TYPE_MAP.dashboard ? 0.75 : 1))

const strokeDashoffset = computed(() => {
  const offset = (-1 * perimeter.value * (1 - rate.value)) / 2
  return `${offset}px`
})

const trailPathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
}))

const circlePathStyle = computed<CSSProperties>(() => ({
  strokeDasharray: `${
    perimeter.value * rate.value * (props.percentage / 100)
  }px, ${perimeter.value}px`,
  strokeDashoffset: strokeDashoffset.value,
  transition:
    'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s',
}))

const stroke = computed(() => {
  let ret: string
  if (props.color)
    ret = getCurrentColor(props.percentage)

  else
    ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default

  return ret
})

const bgStroke = computed(() => {
  let ret: string
  if (props.bgColor)
    ret = getBgColor(props.percentage)

  else
    ret = 'var(--onu-colors-background-gray-light)'

  return ret
})

const statusIcon = computed(() => {
  if (props.status === STATUS_MAP.warning)
    return 'i-carbon-warning-filled'

  if (props.type === TYPE_MAP.line)
    return props.status === STATUS_MAP.success ? 'i-carbon-checkmark-outline' : 'i-carbon-close-outline'

  else
    return props.status === STATUS_MAP.success ? 'i-carbon-checkmark' : 'i-carbon-close'
})

const progressTextSize = computed(() => {
  return props.type === TYPE_MAP.line
    ? 12 + strokeWidth.value * 0.4
    : props.width * 0.111111 + 2
})

const content = computed(() => props.format(props.percentage))

function getCurrentColor(percentage: number) {
  const { color } = props
  if (isFunction(color)) {
    return color(percentage)
  }
  else if (isString(color)) {
    return color
  }
  else {
    const colors = getColors(color)
    for (const color of colors) {
      if (color.percentage > percentage)
        return color.color
    }

    return colors[colors.length - 1]?.color
  }
}

function getBgColor(percentage: number) {
  const { bgColor } = props
  if (isFunction(bgColor)) {
    return bgColor(percentage)
  }
  else if (isString(bgColor)) {
    return bgColor
  }
  else {
    const bgColors = getColors(bgColor)
    for (const bgColor of bgColors) {
      if (bgColor.percentage > percentage)
        return bgColor.color
    }

    return bgColors[bgColors.length - 1]?.color
  }
}

function getColors(color: ProgressColor[]) {
  const span = 100 / color.length
  const seriesColors = color.map((seriesColor, index) => {
    if (isString(seriesColor)) {
      return {
        color: seriesColor,
        percentage: (index + 1) * span,
      }
    }
    return seriesColor
  })
  return seriesColors.sort((a, b) => a.percentage - b.percentage)
}
</script>

<template>
  <div
    class="o-progress-base"
    :class="[isLine && `w-full`]"
    role="progressbar" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100"
  >
    <div
      v-if="isLine"
      class="o-progress-bar"
      :class="[
        !showText && `pr-0 mr-0 block`,
        textInside && `pr-0 mr-0`,
      ]"
    >
      <div
        class="o-progress-bar-outer"
        :class="[`bg-${bgStroke}Light`]" :style="{ height: `${strokeWidth}px`, backgroundColor: bgStroke }"
      >
        <div
          class="o-progress-bar-inner"
          :class="[
            indeterminate && `o-progress-indeterminate`,
            striped && stripedFlow && `animate-stripedFlowing`,
            color ? `bg-${stroke}Base` : `bg-${status || 'primary'}Base`]"
          :style="barStyle"
        >
          <div v-if="(showText || $slots.default) && textInside" class="o-progress-bar-inner-text">
            <slot :percentage="percentage">
              <span>{{ content }}</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="inline-block" :style="{ height: `${width}px`, width: `${width}px` }">
      <svg viewBox="0 0 100 100">
        <path
          :d="trackPath" fill="none"
          :stroke="bgStroke"
          :stroke-width="relativeStrokeWidth"
          :style="trailPathStyle"
        />
        <path
          :d="trackPath" :stroke="stroke" fill="none" :opacity="percentage ? 100 : 0"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        />
      </svg>
    </div>
    <div
      v-if="(showText || $slots.default) && !textInside"
      class="o-progress-text"
      :class="[
        !showText && `hidden`,
        isLine && `ml-5px`,
        [TYPE_MAP.circle, TYPE_MAP.dashboard].includes(type) && `o-progress-bar-rounded`,
        notTextColor ? `text-baseText` : `text-${stroke}Base text-baseText`,
      ]"
      :style="{ fontSize: `${progressTextSize}px`, color: !notTextColor ? stroke : '' }"
    >
      <slot :percentage="percentage">
        <span v-if="!status">{{ content }}</span>
        <o-icon
          v-else
          class="align-middle"
          :class="[type === TYPE_MAP.line ? `block` : `inline-block`]"
          :name="statusIcon"
        />
      </slot>
    </div>
  </div>
</template>
