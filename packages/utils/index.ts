export * from './vue/install'
export const isBool = (val: unknown) => typeof val === 'boolean'
export const isString = (val: unknown): val is string =>
// eslint-disable-next-line eqeqeq
  typeof val == 'string' && val.constructor == String
export const isNumber = (val: unknown): val is number => typeof val === 'number'
