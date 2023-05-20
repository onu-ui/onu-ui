import { isString } from './is'

export const isServerRendering = (() => {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
  }
  catch (e) {
    return true
  }
})()

function NOOP() {
  return undefined
}

export function querySelector(selectors: string,
  container?: Document | HTMLElement) {
  if (isServerRendering)
    return NOOP()

  return (
    (container ?? document).querySelector<HTMLElement>(selectors) ?? undefined
  )
}

export function getElement(target: string | HTMLElement | undefined,
  container?: Document | HTMLElement): HTMLElement | undefined {
  if (isString(target)) {
    const selector = target[0] === '#' ? `[id='${target.slice(1)}']` : target
    return querySelector(selector, container)
  }
  return target
}

/** for element eventListener */
export const on = (() => {
  if (isServerRendering)
    return NOOP

  return <K extends keyof HTMLElementEventMap>(
    element: HTMLElement | Window,
    event: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options: boolean | AddEventListenerOptions = false,
  ) => {
    element.addEventListener(
      event,
      handler as EventListenerOrEventListenerObject,
      options,
    )
  }
})()

export const off = (() => {
  if (isServerRendering)
    return NOOP

  return <K extends keyof HTMLElementEventMap>(
    element: HTMLElement | Window,
    type: K,
    handler: (ev: HTMLElementEventMap[K]) => void,
    options: boolean | EventListenerOptions = false,
  ) => {
    element.removeEventListener(
      type,
      handler as EventListenerOrEventListenerObject,
      options,
    )
  }
})()
