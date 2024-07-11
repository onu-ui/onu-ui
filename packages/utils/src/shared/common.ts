import { isArray, isObject } from './is'

export function hash(str: string) {
  let i
  let l
  let hval = 0x811C9DC5

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i)
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24)
  }
  return (`00000${(hval >>> 0).toString(36)}`).slice(-6)
}

/**
 *
 *  Generate random number in range [0, 1000]
 */
export const generateId = (): number => Math.floor(Math.random() * 10000)

/**
 * Merge object from  T & U
 */
export function mergeObjects<T extends Record<string, any>, U extends Record<string, any>>(sourceObj: T, targetObj: U) {
  const keys = [...new Set([...(Object.keys(sourceObj)), ...(Object.keys(targetObj))])]
  const newObj: Record<string, any> = {}

  keys.forEach((key) => {
    newObj[key] = targetObj[key] ?? sourceObj[key]
  })

  return newObj
}

export function deepGet(target: any, path: string | string[], defaultValue: any) {
  if (!Array.isArray(path) && typeof path !== 'string')
    throw new TypeError('path must be string or array')
  if (target === null)
    return defaultValue

  let pathArray = path
  if (typeof path === 'string') {
    path = path.replace(/\[(\w*)\]/g, '.$1')
    path = path.startsWith('.') ? path.slice(1) : path

    pathArray = path.split('.')
  }

  let index = 0
  let levelPath: string
  while (target !== null && index < pathArray.length) {
    levelPath = pathArray[index++]
    target = target[levelPath]
  }

  return index === pathArray.length ? target : defaultValue
}

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }

export function deepMerge<T>(original: T, patch: DeepPartial<T>): T {
  const o = original as any
  const p = patch as any

  if (isArray(o) && isArray(p))
    return [...o, ...p] as any

  if (isArray(o))
    return [...o] as any

  const output = { ...o }
  if (isObject(o) && isObject(p)) {
    Object.keys(p).forEach((key) => {
      if (isObject(p[key])) {
        if (!(key in o))
          Object.assign(output, { [key]: p[key] })
        else
          output[key] = deepMerge(o[key], p[key])
      }
      else {
        Object.assign(output, { [key]: p[key] })
      }
    })
  }
  return output
}
