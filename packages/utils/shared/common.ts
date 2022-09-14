export function hash(str: string) {
  let i; let l
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
