export const semanticColorNames = [
  'background',
  'foreground',
  'card',
  'card-foreground',
  'popover',
  'popover-foreground',
  'primary',
  'primary-foreground',
  'secondary',
  'secondary-foreground',
  'muted',
  'muted-foreground',
  'accent',
  'accent-foreground',
  'destructive',
  'destructive-foreground',
  'border',
  'input',
  'ring',
] as const

export type SemanticColorName = typeof semanticColorNames[number]

export function semanticColor(name: SemanticColorName) {
  const variable = name === 'border' ? 'border-default' : name
  return `oklch(var(--onu-color-${variable}))`
}
