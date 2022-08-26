import { computed, defineComponent } from 'vue'
import { renderINode } from '../hooks/renderINode'
import props from './props'

export default defineComponent({
  name: 'OCard',
  props,
  setup(props, { slots }) {
    const defaultCardPrefix = 'o-card'
    const defaultHeaderClassPrefix = `${defaultCardPrefix}-header`
    const headerTitleCls = `${defaultHeaderClassPrefix}__title`
    const headerSubTitleCls = `${defaultHeaderClassPrefix}-subtitle`
    const headerDescriptionCls = `${defaultHeaderClassPrefix}-description`
    const headerWrapperCls = `${defaultHeaderClassPrefix}-wrapper`
    const actionCls = `${defaultCardPrefix}-actions`
    const bodyCls = `${defaultCardPrefix}-body`
    const footerCls = `${defaultCardPrefix}-footer`
    const footerWrapperCls = `${footerCls}-wrapper`

    const renderINodeJSX = renderINode()
    const baseCardCls = computed(() => {
      const defaultClass = [defaultCardPrefix]
      if (props.size) defaultClass.push(`${defaultCardPrefix}-${props.size}`)
      if (props.bordered) defaultClass.push(`${defaultCardPrefix}-bordered`)
      if (props.shadow) defaultClass.push(`${defaultCardPrefix}-shadow`)
      if (props.hoverShadow)
        defaultClass.push(`${defaultCardPrefix}-shadow-hover`)

      return defaultClass
    })

    const headerCls = computed(() => {
      const defaultClass = [defaultHeaderClassPrefix]
      return props.headerBordered
        ? defaultClass.concat(`${defaultHeaderClassPrefix}-bordered`)
        : defaultClass
    })

    const showTitle = computed(() => props.title || slots.title)
    const showHeader = computed(() => props.header || slots.header)
    const showSubtitle = computed(() => props.subtitle || slots.subtitle)
    const showDescription = computed(
      () => props.description || slots.description,
    )
    const showActions = computed(() => props.actions || slots.actions)
    const showFooter = computed(() => props.footer || slots.footer)
    const showContent = computed(() => props.content || slots.content)

    const renderHeader = () => {
      if (showHeader.value)
        return <div class={headerCls.value}>{renderINodeJSX('header')}</div>
      return (
        <div class={headerCls.value}>
          <div class={headerWrapperCls}>
            <div>
              {showTitle.value && (
                <span class={headerTitleCls}>{renderINodeJSX('title')}</span>
              )}
              {showSubtitle.value && (
                <span class={headerSubTitleCls}>
                  {renderINodeJSX('subtitle')}
                </span>
              )}
              {showDescription.value && (
                <p class={headerDescriptionCls}>
                  {renderINodeJSX('description')}
                </p>
              )}
            </div>
          </div>
          {showActions.value && (
            <div class={actionCls}>{renderINodeJSX('actions')}</div>
          )}
        </div>
      )
    }

    // 是否展示头部区域
    const needRenderHeader = computed(
      () =>
        showHeader.value
        || showTitle.value
        || showSubtitle.value
        || showDescription.value
        || showActions.value,
    )

    // 是否展示底部区域
    const needRenderFooter = computed(
      () => showFooter.value || showActions.value,
    )

    // eslint-disable-next-line react/display-name
    return () => {
      return (
        <div class={baseCardCls.value}>
          {needRenderHeader.value ? renderHeader() : null}
          {showContent.value && (
            <div class={bodyCls}>{ renderINodeJSX('content')}</div>
          )}
          {needRenderFooter.value && (
            <div class={footerCls}>
              <div class={footerWrapperCls}>{renderINodeJSX('footer')}</div>
              {showActions.value && (
                <div class={actionCls}>{renderINodeJSX('actions')}</div>
              )}
            </div>
          )}
        </div>
      )
    }
  },
})
