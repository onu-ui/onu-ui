<script lang="ts" setup name="O-Card">
import type { INode, ISize } from '../../common'

interface ICardProps {
  /** 卡片操作区 */
  actions?: string | INode;
  /** 卡片标题 */
  title?: string
  /** 卡片大小，支持 md，sm */
  size?: Exclude<ISize, 'xs' | 'lg'>;
  /** 副标题 */
  subtitle?: string
  /** 悬浮阴影 */
  hoverShadow?: boolean;
  /** 阴影 */
  shadow?: boolean;
  /** 边框 */
  bordered?: boolean;
  /** 内容 */
  content?: string | INode;
  /** 描述 */
  description?: string
  /** 头部内容区 */
  header?: string | INode;
  /** 底部内容区 */
  footer?: string | INode;
  /** 头部和内容区是否展示分割线 */
  headerBordered?: boolean;
}

const props = withDefaults(defineProps<ICardProps>(), {
  // eslint-disable-next-line vue/require-valid-default-prop
  size: 'md',
  bordered: true,
})

const slots = useSlots()
const defaultCardPrefix = 'o-card'
enum CardPrefixMap {
  defaultHeaderClassPrefix = 'o-card-header',
  headerBorderedCls = 'o-card-header-bordered',
  headerTitleCls = 'o-card-header-title',
  headerSubTitleCls = 'o-card-header-subtitle',
  headerDescriptionCls = 'o-card-header-description',
  headerWrapperCls = 'o-card-header-wrapper',
  actionCls = 'o-card-actions',
  bodyCls = 'o-card-body',
  footerCls = 'o-card-footer',
  footerWrapperCls = 'o-card-footer-wrapper',
  borderCls = 'o-card-bordered',
  shadowCls = 'o-card-shadow',
  shadowHoverCls = 'o-card-shadow-hover'
}

const baseCardCls = computed(() => {
  const defaultClass = [defaultCardPrefix]
  if (props.size) defaultClass.push(`${defaultCardPrefix}-${props.size}`)
  if (props.bordered) defaultClass.push(`${CardPrefixMap.borderCls}`)
  if (props.shadow) defaultClass.push(`${CardPrefixMap.shadowCls}`)
  if (props.hoverShadow)
    defaultClass.push(`${CardPrefixMap.shadowHoverCls}`)

  return defaultClass
})

const headerCls = computed(() => {
  const defaultClass = [CardPrefixMap.defaultHeaderClassPrefix as string]
  return props.headerBordered
    ? defaultClass.concat(`${CardPrefixMap.headerBorderedCls}`)
    : defaultClass
})

const showTitle = computed(() => props.title)
const showHeader = computed(() => slots.header)
const showSubtitle = computed(() => props.subtitle)
const showDescription = computed(
  () => props.description,
)
const showActions = computed(() => props.actions || slots.actions)
const showFooter = computed(() => slots.footer)
const showContent = computed(() => props.content || slots.default)

// 是否展示头部区域
const needRenderHeader = computed(
  () =>
    !showHeader || (showTitle.value
      || showSubtitle.value
      || showDescription.value
      || showActions.value),

)
</script>

<template>
  <div :class="baseCardCls">
    <div v-if="showHeader" :class="headerCls">
      <slot name="header" />
    </div>
    <div v-if="needRenderHeader" :class="headerCls">
      <div :class="CardPrefixMap.headerWrapperCls">
        <div>
          <span v-if="showTitle" :class="CardPrefixMap.headerTitleCls">{{ title }}</span>
          <span v-if="showSubtitle" :class="CardPrefixMap.headerSubTitleCls">{{ subtitle
          }}</span>
          <p v-if="showDescription" :class="CardPrefixMap.headerDescriptionCls">
            {{ description }}
          </p>
        </div>
      </div>
      <div v-if="showActions" :class="CardPrefixMap.actionCls">
        <slot name="actions" />
      </div>
    </div>
    <div
      v-if="showContent"
      :class="[CardPrefixMap.bodyCls, showHeader || needRenderHeader ? 'pt0' : '', headerBordered ? '!pt' : '']"
    >
      <slot v-if="!content" name="default" />
      {{ content }}
    </div>
    <div v-if="showFooter" :class="[CardPrefixMap.footerCls]">
      <div :class="CardPrefixMap.footerWrapperCls">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
