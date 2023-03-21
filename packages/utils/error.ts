class OnuError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'OnuError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new OnuError(`[${scope}] ${m}`)
}
