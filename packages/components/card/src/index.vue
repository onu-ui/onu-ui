<script lang="ts" setup>
import OButton from '../../button/src/button.vue'
import type { ShadowType } from '../../types'
import { cardProps } from './props'

defineOptions({
  name: 'OCard',
})
const props = defineProps(cardProps)
const slots = useSlots()

// 是否展示头部区域
const needRenderHeader = computed(() => (!slots.header && (props.title || props.description || props.extra || slots.extra)) || slots.header)
const needRenderBody = computed(() => props.content || slots.default)
const needRenderActions = computed(() => slots.actions)
const onlyRenderContent = !needRenderHeader.value && !needRenderActions.value && needRenderBody.value

const bodyCls = computed(() => {
  const cls = ['o-card-body']
  if (onlyRenderContent)
    cls.push('pt-4')

  if (props.divider) {
    cls.push('pt-4')
    if (needRenderHeader.value)
      cls.push('b-t border-lightBorder text-baseText')
  }
  return cls
})

const shadowCls: Record<ShadowType, string> = {
  always: 'o-card-shadow-always',
  hover: 'o-card-hoverable',
  never: 'o-card-shadow-never',
}
</script>

<template>
  <div class="o-card" :class="[`o-card-${size}`, shadowCls[`${shadow}`], embed && 'o-card-embed']">
    <!-- cover -->
    <div v-if="cover" class="o-card-cover">
      <img :src="cover">
    </div>
    <!-- header -->
    <div class="relative" :class="[slots.header && 'o-card-header']">
      <slot name="header">
        <div v-if="needRenderHeader" class="o-card-header">
          <div class="o-card-header-wrapper">
            <h4 v-if="title" class="o-card-header-title">
              {{ title }}
            </h4>
            <p v-if="description" class="o-card-header-description">
              {{ description }}
            </p>
          </div>
        </div>
      </slot>
      <div class="o-card-header-extra">
        <slot name="extra">
          <OButton v-if="extra" type="primary" text size="xs">
            {{ extra }}
          </OButton>
        </slot>
      </div>
    </div>
    <!-- body -->
    <div
      v-if="needRenderBody"
      :class="bodyCls"
    >
      <slot name="default">
        {{ content }}
      </slot>
    </div>
    <!-- actions -->
    <div v-if="needRenderActions" class="o-card-actions">
      <slot name="actions" />
    </div>
  </div>
</template>
