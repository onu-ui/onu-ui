<script lang="ts" setup name="O-Card">
import OButton from '../../button/src/index.vue'
import type { INode, SizeType } from '../../types'

interface ICardProps {
  /** 卡片标题 */
  title?: string
  /** 描述 */
  description?: string
  /** 内容 */
  content?: string | INode;
  /** 封面 */
  cover?: string;
  /** 卡片大小，支持 md，sm */
  size?: Exclude<SizeType, 'xs' | 'lg'>;
  /** 悬浮阴影 */
  hoverable?: boolean;
  /** 边框 */
  bordered?: boolean;
  /** 头部内容区 */
  header?: string | INode;
   /** 卡片右上角操作区 */
  extra?: string | INode;
  /** 底部操作区 */
  actions?: string | INode;
}

const props = withDefaults(defineProps<ICardProps>(), {
  // eslint-disable-next-line vue/require-valid-default-prop
  size: 'md',
})

const slots = useSlots()

// 是否展示头部区域
const needRenderHeader = computed(() => !slots.header && (props.title || props.description || props.extra || slots.extra))
const needRenderBody = computed(() => props.content || slots.default)
const needRenderActions = computed(() => slots.actions)

const bodyCls = computed(() => {
  const cls = ['o-card-body']
  if (props.bordered) {
    cls.push('pt-4')
    if (needRenderHeader.value)
      cls.push('b-t b-context:50')
  }
  return cls
})
</script>

<template>
  <div class="o-card" :class="[`o-card-${size}`, bordered && 'o-card-bordered', hoverable && 'o-card-hoverable']">
    <!-- cover -->
    <div v-if="cover" class="o-card-cover">
      <img :src="cover">
    </div>
    <!-- header -->
    <div :class="[slots.header && 'o-card-header']">
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
          <div class="o-card-header-extra">
            <slot name="extra">
              <o-button v-if="extra" o="primary" text size="xs">
                {{ extra }}
              </o-button>
            </slot>
          </div>
        </div>
      </slot>
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
