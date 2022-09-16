import { ShapeFlags } from './enums'
import type { Component, ComponentPublicInstance, Slots, VNode, VNodeTypes } from 'vue'

export const toTypeString = (v: any) => Object.prototype.toString.call(v)
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'
export const isPlainObject = (val: unknown): val is object =>
  toTypeString(val) === '[object Object]'
export const isArray = Array.isArray
export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === '[object Map]'
export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === '[object Set]'
export const isDate = (val: unknown): val is Date => val instanceof Date
export const isRegExp = (val: unknown): val is RegExp => val instanceof RegExp
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export const isPromise = <T = any>(val: unknown): val is Promise<T> => isObject(val) && isFunction(val.then) && isFunction(val.catch)
export const isValue = (val: any): val is boolean => val !== undefined && val !== null
export const isComponentInstance = (val: any): val is ComponentPublicInstance => val?.$ !== undefined
export const isComponent = (vn: VNode, type?: VNodeTypes): type is Component => Boolean(vn && vn.shapeFlag && ShapeFlags.COMPONENT)
export const isElement = (vn: VNode) => Boolean(vn && vn.shapeFlag && ShapeFlags.ELEMENT)
export const isText = (vn: VNode, children: VNode['children']): children is string => Boolean(vn && vn.shapeFlag && ShapeFlags.TEXT_CHILDREN)
export const isSlotsChildren = (vn: VNode, children: VNode['children']): children is Slots => Boolean(vn && vn.shapeFlag & ShapeFlags.SLOTS_CHILDREN)
export const isArrayChildren = (vn: VNode, children: VNode['children']): children is VNode[] => Boolean(vn && vn.shapeFlag && ShapeFlags.ARRAY_CHILDREN)
