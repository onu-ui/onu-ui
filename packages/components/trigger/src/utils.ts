import { isArray } from '@onu-ui/utils'
import type { CSSProperties } from 'vue'
import type { Placement } from '../../types'

function getViewPortSize() {
  return {
    width: document.documentElement.clientWidth || window.innerWidth,
    height: document.documentElement.clientHeight || window.innerHeight,
  }
}

export interface ElementRect {
  top: number
  bottom: number
  left: number
  right: number
  width: number
  height: number
}

export type TriggerPopupTranslate = [number, number] | { [key in Placement]?: [number, number] }

interface ScrollRect {
  top: number
  bottom: number
  left: number
  right: number
  scrollTop: number
  scrollBottom: number
  scrollLeft: number
  scrollRight: number
  width: number
  height: number
}

export function getElementScrollRect(element: HTMLElement,
  containerRect: DOMRect) {
  const rect = element.getBoundingClientRect()

  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: element.offsetWidth ?? element.clientWidth,
    height: element.offsetHeight ?? element.clientHeight,
  }
}

type BasePosition = 'top' | 'left' | 'bottom' | 'right'

interface PositionOffset {
  left: number
  top: number
}

function getBoundaryPosition(position: Placement): BasePosition {
  switch (position) {
    case 'top':
    case 'top-left':
    case 'top-right':
      return 'top'
    case 'bottom':
    case 'bottom-left':
    case 'bottom-right':
      return 'bottom'
    case 'left':
    case 'left-top':
    case 'left-bottom':
      return 'left'
    case 'right':
    case 'right-top':
    case 'right-bottom':
      return 'right'
    default:
      return 'top'
  }
}

function changePosition(position: Placement,
  direction: BasePosition): Placement {
  switch (direction) {
    case 'top':
      switch (position) {
        case 'bottom':
          return 'top'
        case 'bottom-left':
          return 'top-left'
        case 'bottom-right':
          return 'top-right'
        default:
          return position
      }
    case 'bottom':
      switch (position) {
        case 'top':
          return 'bottom'
        case 'top-left':
          return 'bottom-left'
        case 'top-right':
          return 'bottom-right'
        default:
          return position
      }
    case 'left':
      switch (position) {
        case 'right':
          return 'left'
        case 'right-top':
          return 'left-top'
        case 'right-bottom':
          return 'left-bottom'
        default:
          return position
      }
    case 'right':
      switch (position) {
        case 'left':
          return 'right'
        case 'left-top':
          return 'right-top'
        case 'left-bottom':
          return 'right-bottom'
        default:
          return position
      }
    default:
      return position
  }
}

function getPopupOffset(position: Placement,
  triggerRect: ScrollRect,
  popupRect: ScrollRect,
  {
    offset = 0,
    translate = [0, 0],
  }: {
    offset?: number
    translate?: TriggerPopupTranslate
  } = {}): PositionOffset {
  const _translate = (isArray(translate) ? translate : translate[position]) ?? [
    0, 0,
  ]

  switch (position) {
    case 'top':
      return {
        left:
          triggerRect.scrollLeft
          + Math.round(triggerRect.width / 2)
          - Math.round(popupRect.width / 2)
          + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1],
      }
    case 'top-left':
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1],
      }
    case 'top-right':
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1],
      }
    case 'bottom':
      return {
        left:
          triggerRect.scrollLeft
          + Math.round(triggerRect.width / 2)
          - Math.round(popupRect.width / 2)
          + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1],
      }
    case 'bottom-left':
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1],
      }
    case 'bottom-right':
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1],
      }
    case 'left':
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top:
          triggerRect.scrollTop
          + Math.round(triggerRect.height / 2)
          - Math.round(popupRect.height / 2)
          + _translate[1],
      }
    case 'left-top':
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1],
      }
    case 'left-bottom':
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1],
      }
    case 'right':
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top:
          triggerRect.scrollTop
          + Math.round(triggerRect.height / 2)
          - Math.round(popupRect.height / 2)
          + _translate[1],
      }
    case 'right-top':
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1],
      }
    case 'right-bottom':
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1],
      }
    default:
      return {
        left: 0,
        top: 0,
      }
  }
}

function getFitPosition(position: Placement,
  popupPosition: PositionOffset,
  {
    containerRect,
    triggerRect,
    popupRect,
    offset,
    translate,
  }: {
    containerRect: DOMRect
    triggerRect: ScrollRect
    popupRect: ScrollRect
    offset: number
    translate: TriggerPopupTranslate
  }) {
  const direction = getBoundaryPosition(position)
  const viewPortSize = getViewPortSize()

  // Boundary value of pop-up box and window
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    bottom:
      viewPortSize.height
      - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    right:
      viewPortSize.width
      - (containerRect.left + popupPosition.left + popupRect.width),
  }

  let finalPosition = position
  if (direction === 'top' && viewPortBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      // Adjust the pop-up box to snap to the top of the window
      popupPosition.top = -containerRect.top
    }
    else {
      const fitPosition = getPopupOffset('bottom', triggerRect, popupRect, {
        offset,
        translate,
      })
      if (
        viewPortSize.height
          - (containerRect.top + fitPosition.top + popupRect.height)
        > 0
      ) {
        finalPosition = changePosition(position, 'bottom')
        popupPosition.top = fitPosition.top
      }
    }
  }
  if (direction === 'bottom' && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - triggerRect.bottom > popupRect.height) {
      // Adjust the pop-up box to snap to the bottom of the window
      // prettier-ignore
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height)
    }
    else {
      const fitPosition = getPopupOffset('top', triggerRect, popupRect, {
        offset,
        translate,
      })
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, 'top')
        popupPosition.top = fitPosition.top
      }
    }
  }
  if (direction === 'left' && viewPortBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      // Adjust the pop-up box to snap to the left side of the window
      popupPosition.left = -containerRect.left
    }
    else {
      const fitPosition = getPopupOffset('right', triggerRect, popupRect, {
        offset,
        translate,
      })
      if (
        viewPortSize.width
          - (containerRect.left + fitPosition.left + popupRect.width)
        > 0
      ) {
        finalPosition = changePosition(position, 'right')
        popupPosition.left = fitPosition.left
      }
    }
  }
  if (direction === 'right' && viewPortBoundary.right < 0) {
    if (viewPortSize.width - triggerRect.right > popupRect.width) {
      // Adjust the pop-up box to snap to the right side of the window
      popupPosition.left
        = -containerRect.left + (viewPortSize.width - popupRect.width)
    }
    else {
      const fitPosition = getPopupOffset('left', triggerRect, popupRect, {
        offset,
        translate,
      })
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, 'left')
        popupPosition.left = fitPosition.left
      }
    }
  }

  if (direction === 'top' || direction === 'bottom') {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left
    }
    else if (viewPortBoundary.right < 0) {
      popupPosition.left
        = -containerRect.left + (viewPortSize.width - popupRect.width)
    }
  }
  if (direction === 'left' || direction === 'right') {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top
    }
    else if (viewPortBoundary.bottom < 0) {
      popupPosition.top
        = -containerRect.top + (viewPortSize.height - popupRect.height)
    }
  }

  return {
    popupPosition,
    position: finalPosition,
  }
}

export function getTransformOrigin(position: Placement) {
  let originX = '0'
  if (['top', 'bottom'].includes(position))
    originX = '50%'
  else if (['left', 'left-top', 'left-bottom', 'top-right', 'bottom-right'].includes(position))
    originX = '100%'

  let originY = '0'
  if (['left', 'right'].includes(position))
    originY = '50%'
  else if (['top', 'top-left', 'top-right', 'left-top', 'right-top'].includes(position))
    originY = '100%'

  return `${originX} ${originY}`
}

export function getPopupStyle(position: Placement,
  containerRect: DOMRect,
  triggerRect: ScrollRect,
  popupRect: ScrollRect,
  {
    offset = 0,
    translate = [0, 0],
    customStyle = {},
    autoFitPosition = false,
  }: {
    offset?: number
    translate?: TriggerPopupTranslate
    customStyle?: CSSProperties
    autoFitPosition?: boolean
  } = {}): { style: CSSProperties; position: Placement } {
  let finalPosition = position
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate,
  })
  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      popupRect,
      triggerRect,
      offset,
      translate,
    })
    popupPosition = result.popupPosition
    finalPosition = result.position
  }

  const style = {
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`,
    ...customStyle,
  }

  return {
    style,
    position: finalPosition,
  }
}

export function getArrowStyle(position: Placement,
  triggerRect: ScrollRect,
  popupRect: ScrollRect,
  {
    customStyle = {},
  }: {
    customStyle?: CSSProperties
  }): CSSProperties {
  if (['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'].includes(position)) {
    let offsetLeft = Math.abs(
      triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft,
    )

    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width)
        offsetLeft = popupRect.width / 2
      else
        offsetLeft = popupRect.width - 8
    }

    if (['top', 'top-left', 'top-right'].includes(position)) {
      return {
        left: `${offsetLeft}px`,
        bottom: '0',
        transform: 'translate(-50%,50%) rotate(45deg)',
        ...customStyle,
      }
    }
    return {
      left: `${offsetLeft}px`,
      top: '0',
      transform: 'translate(-50%,-50%) rotate(45deg)',
      ...customStyle,
    }
  }
  let offsetTop = Math.abs(
    triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop,
  )

  if (offsetTop > popupRect.height - 8) {
    if (triggerRect.height > popupRect.height)
      offsetTop = popupRect.height / 2
    else
      offsetTop = popupRect.height - 8
  }

  if (['left', 'left-top', 'left-bottom'].includes(position)) {
    return {
      top: `${offsetTop}px`,
      right: '0',
      transform: 'translate(50%,-50%) rotate(45deg)',
      ...customStyle,
    }
  }
  return {
    top: `${offsetTop}px`,
    left: '0',
    transform: 'translate(-50%,-50%) rotate(45deg)',
    ...customStyle,
  }
}

export function isScrollElement(element: HTMLElement) {
  return (
    element.scrollHeight > element.offsetHeight
    || element.scrollWidth > element.offsetWidth
  )
}

export function getScrollElements(container: HTMLElement | undefined) {
  const scrollElements: HTMLElement[] = []
  let element: HTMLElement | undefined = container
  while (element && element !== document.documentElement) {
    if (isScrollElement(element))
      scrollElements.push(element)

    element = element.parentElement ?? undefined
  }
  return scrollElements
}
