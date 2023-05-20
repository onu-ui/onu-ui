import { Teleport, Transition, defineComponent } from 'vue'
import { isEmptyChildren, mergeFirstChild, off, on } from '@onu-ui/utils'
import type { CSSProperties, Ref } from 'vue'
import { useFirstElement, useResizeObserver, useTeleport } from '../../_hooks'
import ClientOnly from '../../_components/ClientOnly.vue'
import ResizeObserver from '../../_components/ResizeObserver'
import type { TriggerType } from '../../types'
import { TriggerProps, triggerEmits } from './props'
import { triggerInjectionKey } from './context'
import { getArrowStyle, getElementScrollRect, getPopupStyle, getScrollElements, getTransformOrigin } from './utils'
import './fade.css'

const TriggerPositionStyls = {
  'top': 'o-trigger-top',
  'left': 'o-trigger-left',
  'right': 'o-trigger-right',
  'bottom': 'o-trigger-bottom',
  'top-left': 'o-trigger-top-left',
  'top-right': 'o-trigger-top-right',
  'bottom-left': 'o-trigger-bottom-left',
  'bottom-right': 'o-trigger-bottom-right',
  'left-top': 'o-trigger-left-top',
  'left-bottom': 'o-trigger-left-bottom',
  'right-top': 'o-trigger-right-top',
  'right-bottom': 'o-trigger-right-bottom',
}

export default defineComponent({
  name: 'OTrigger',
  inheritAttrs: false,
  props: TriggerProps,
  emits: triggerEmits,
  setup(props, { slots, emit, attrs }) {
    const { children, firstElement } = useFirstElement()

    const triggerMethods = computed(() =>
      ([] as Array<TriggerType>).concat(props.trigger),
    )
    // used for nesting
    const triggerChildrenRefs = new Set<Ref<HTMLElement>>()
    const triggerCtx = inject(triggerInjectionKey, undefined)

    const popupRef = ref<HTMLElement>()
    const { popupContainer, position: popupPosition } = toRefs(props)

    const popupStyle = ref<CSSProperties>({})
    const transformStyle = ref<CSSProperties>({})
    const arrowStyle = ref<CSSProperties>({})
    const popupVisible = ref(props.defaultPopupVisible)

    const computedPopVisible = computed(
      () => props.popupVisible ?? popupVisible.value,
    )

    const hidenPopup = computed(() => props.hideEmpty && isEmptyChildren(slots.content?.() as any))
    let scrollElements: HTMLElement[] | undefined

    const { teleportContainer, containerRef } = useTeleport({
      popupContainer,
      visible: computedPopVisible as Ref<boolean>,
      documentContainer: true,
    })

    // 鼠标相关变量
    const arrowRef = ref<HTMLElement>()
    const mousePosition = ref({
      top: 0,
      left: 0,
    })

    const isAnimation = ref(false)

    let delayTimer = 0
    let outsideListener = false
    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer)
        delayTimer = 0
      }
    }

    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value)
        return

      const containerRect = containerRef.value.getBoundingClientRect()
      const triggerRect = props.alignPoint
        ? {
            top: mousePosition.value.top,
            bottom: mousePosition.value.top,
            left: mousePosition.value.left,
            right: mousePosition.value.left,
            scrollTop: mousePosition.value.top,
            scrollBottom: mousePosition.value.top,
            scrollLeft: mousePosition.value.left,
            scrollRight: mousePosition.value.left,
            width: 0,
            height: 0,
          }
        : getElementScrollRect(firstElement.value, containerRect)
      const popupRect = getElementScrollRect(
        popupRef.value,
        containerRect,
      )
      const { style, position } = getPopupStyle(
        props.position,
        containerRect,
        triggerRect,
        popupRect,
        {
          offset: props.popupOffset,
          translate: props.popupTranslate,
          customStyle: props.popupStyle,
          autoFitPosition: true,
        },
      )
      if (props.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position),
        }
      }
      if (props.autoFitPopupWidth)
        style.width = `${triggerRect.width}px`

      if (popupPosition.value !== position)
        popupPosition.value = position

      popupStyle.value = style
      if (props.showArrow) {
        arrowStyle.value = getArrowStyle(
          position,
          triggerRect,
          popupRect,
          {
            customStyle: props.arrowStyle,
          },
        )
      }
    }
    const updateMousePosition = (e: MouseEvent) => {
      if (props.alignPoint) {
        const { pageX, pageY } = e
        mousePosition.value = {
          top: pageY,
          left: pageX,
        }
      }
    }

    const changeVisible = (visible: boolean, delay?: number) => {
      if (visible === computedPopVisible.value && delay === 0)
        return
      const update = () => {
        popupVisible.value = visible
        emit('update:popupVisible', visible)
        emit('popupVisibleChange', visible)
        if (visible) {
          nextTick(() => {
            updatePopupStyle()
          })
        }
      }

      if (delay) {
        cleanDelayTimer()
        if (visible !== computedPopVisible.value)
          delayTimer = window.setTimeout(update, delay)
      }
      else {
        update()
      }
    }

    //  Trigger events
    const handleClick = (e: MouseEvent) => {
      (attrs as any).onClick?.(e)
      if (props.disabled)
        return

      if (triggerMethods.value.includes('click')) {
        updateMousePosition(e)
        changeVisible(!computedPopVisible.value)
      }
      else if (
        triggerMethods.value.includes('context-menu')
        && computedPopVisible.value
      ) {
        // Make sure right - click to close the float layer
        changeVisible(false)
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      (attrs as any).onMouseenter?.(e)
      if (props.disabled || !triggerMethods.value.includes('hover'))
        return

      updateMousePosition(e)
      changeVisible(true, props.mouseEnterDelay)
    }

    const handleMouseLeave = (e: MouseEvent) => {
      (attrs as any).onMouseleave?.(e)
      if (props.disabled || !triggerMethods.value.includes('hover'))
        return

      changeVisible(false, props.mouseLeaveDelay)
    }

    const handleFocusIn = (e: FocusEvent) => {
      (attrs as any).onFocusin?.(e)
      if (props.disabled || !triggerMethods.value.includes('focus'))
        return

      changeVisible(true, props.focusDelay)
    }

    const handleFocusout = (e: FocusEvent) => {
      (attrs as any).onFocusout?.(e)
      if (props.disabled || !triggerMethods.value.includes('focus'))
        return

      changeVisible(false)
    }

    const handleContextmenu = (e: MouseEvent) => {
      (attrs as any).onContextmenu?.(e)
      if (props.disabled || !triggerMethods.value.includes('context-menu'))
        return

      updateMousePosition(e)
      changeVisible(!computedPopVisible.value)
      e.preventDefault()
    }

    const handleResize = () => {
      if (computedPopVisible.value)
        updatePopupStyle()
    }

    const handleMouseEnterWithContext = (e: MouseEvent) => {
      triggerCtx?.onMouseenter(e)
      handleMouseEnter(e)
    }

    const handleMouseLeaveWithContext = (e: MouseEvent) => {
      triggerCtx?.onMouseleave(e)
      handleMouseLeave(e)
    }

    const handleShow = () => {
      isAnimation.value = false
      if (computedPopVisible.value)
        emit('show')
    }

    const handleHide = () => {
      isAnimation.value = false
      if (!computedPopVisible.value)
        emit('hide')
    }

    const onAnimationStart = () => {
      isAnimation.value = true
    }

    const addChildRef = (ref: any) => {
      triggerChildrenRefs.add(ref)
      triggerCtx?.addChildRef(ref)
    }
    const removeChildRef = (ref: any) => {
      triggerChildrenRefs.delete(ref)
      triggerCtx?.removeChildRef(ref)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        firstElement.value?.contains(e.target as HTMLElement)
            || popupRef.value?.contains(e.target as HTMLElement)
      )
        return

      for (const item of triggerChildrenRefs) {
        if (item.value?.contains(e.target as HTMLElement))
          return
      }
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      removeOutsideListener()
      changeVisible(false)
    }

    const removeOutsideListener = () => {
      off(document.documentElement, 'mousedown', handleOutsideClick)
      outsideListener = false
    }

    const handleScroll = useThrottleFn(() => {
      if (computedPopVisible.value)
        updatePopupStyle()
    })

    const { createResizeObserver, destroyResizeObserver } = useResizeObserver(
      {
        elementRef: containerRef,
        onResize: handleResize,
      },
    )

    onMounted(() => {
      createResizeObserver()

      if (computedPopVisible.value) {
        updatePopupStyle()
        if (!outsideListener) {
          on(document.documentElement, 'mousedown', handleOutsideClick)
          outsideListener = true
        }
        if (props.updateAtScroll) {
          scrollElements = getScrollElements(firstElement.value)
          for (const item of scrollElements)
            item.addEventListener('scroll', handleScroll)
        }
      }
    })

    onUpdated(() => {
      if (computedPopVisible.value)
        updatePopupStyle()
    })

    onDeactivated(() => {
      changeVisible(false)
    })

    onBeforeUnmount(() => {
      triggerCtx?.removeChildRef(popupRef)
      destroyResizeObserver()
      if (outsideListener)
        removeOutsideListener()

      if (scrollElements) {
        for (const item of scrollElements)
          item.removeEventListener('scroll', handleScroll)

        scrollElements = undefined
      }
    })

    provide(
      triggerInjectionKey,
      reactive({
        onMouseenter: handleMouseEnterWithContext,
        onMouseleave: handleMouseLeaveWithContext,
        addChildRef,
        removeChildRef,
      }),
    )

    watch(computedPopVisible, (value) => {
      if (!value && outsideListener) {
        removeOutsideListener()
      }
      else if (value && !outsideListener) {
        on(document.documentElement, 'mousedown', handleOutsideClick)
        outsideListener = true
      }

      if (props.updateAtScroll) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value)
          for (const item of scrollElements)
            item.addEventListener('scroll', handleScroll)
        }
        else if (scrollElements) {
          for (const item of scrollElements)
            item.removeEventListener('scroll', handleScroll)

          scrollElements = undefined
        }
      }
    })

    watch(
      () => [props.autoFitPopupWidth],
      () => {
        if (computedPopVisible.value)
          updatePopupStyle()
      },
    )

    return () => {
      children.value = slots.default?.() ?? []
      mergeFirstChild(children.value as any, {
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusIn,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu,
      })
      return (
        <>
          <ResizeObserver
            onResize={() => {
              handleResize()
              emit('resize')
            }}
          >
            {children.value}
          </ResizeObserver>
          <ClientOnly>
            <Teleport to={teleportContainer.value}>
              {computedPopVisible.value && !hidenPopup.value && (
                <ResizeObserver onResize={handleResize}>
                  <div
                    ref={popupRef}
                    class="absolute"
                    style={{
                      ...popupStyle.value,
                      // TODO: nesting add
                      zIndex: 1001,
                      pointerEvents: isAnimation.value ? 'none' : 'auto',
                    }}
                    onMouseenter={handleMouseEnterWithContext}
                    onMouseleave={handleMouseLeaveWithContext}
                  >
                    <Transition
                      name={props.animationName}
                      duration={props.duration}
                      appear
                      onBeforeEnter={onAnimationStart}
                      onAfterEnter={handleShow}
                      onBeforeLeave={onAnimationStart}
                      onAfterLeave={handleHide}
                    >
                      <div
                        class="o-trigger-popup-wrapper"
                        style={transformStyle.value}
                        v-show={computedPopVisible.value}
                      >
                        <div
                          class={['o-trigger-content', props.contentClass]}
                          style={props.contentStyle}
                        >
                          {slots.content?.()}
                        </div>
                        {props.showArrow && (
                          <div
                            ref={arrowRef}
                            class={[
                              'o-trigger-arrow',
                              `${TriggerPositionStyls[popupPosition.value]}`,
                              props.arrowClass,
                            ]}
                            style={arrowStyle.value}
                          />
                        )}
                      </div>
                    </Transition>
                  </div>
                </ResizeObserver>
              )}
            </Teleport>
          </ClientOnly>
        </>
      )
    }
  },
})
