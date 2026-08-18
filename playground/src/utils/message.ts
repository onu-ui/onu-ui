export interface MessageOptions {
  content: string
  type?: 'error' | 'info' | 'success' | 'warning'
}

export function message({ content, type = 'info' }: MessageOptions) {
  const log = type === 'error'
    ? console.error
    : type === 'warning'
      ? console.warn
      : console.info

  log(`[${type}] ${content}`)
  return () => {}
}
