export const shortcutButton: Record<string, string> = {
  'o-button-base': 'fcc gap-1 inline-flex cursor-pointer rounded !outline-none c-context o-solid border',
  'o-button-hover': 'hover-border-context:64 hover-text-white hover-bg-context:64',
  'o-button-active': 'active-border-context:32 active-text-white active-bg-context:32',
  'o-button-light': 'o-light',
  'o-button-text': 'o-text',
  'o-button-size-xs': 'px-0.6em py-0.18em',
  'o-button-size-sm': 'px-0.8em py-0.22em',
  'o-button-size-md': 'px-1em py-0.25em',
  'o-button-size-lg': 'px-1.1em py-0.3em',
  'o-button-size-xl': 'px-1.2em py-0.4em',
}

export const buttonDynamic = [
  [/^o-button-(.*)$/, ([, s]: string[]) => {
    if (['xs', 'sm', 'md', 'lg', 'xl'].includes(s))
      return `o-button-size-${s} text-${s}`
  }],
]
