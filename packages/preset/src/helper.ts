import { mc } from 'magic-color'

export function resolveTheme(color: string) {
  const theme = mc.theme(color, {
    type: 'hsl',
    // render: meta => [`--onu-color-${meta[0]}`, meta[1].replace(/hsl\((.*)\)/, '$1')],
  })
  const themeMetas = Object.fromEntries(Object.entries(theme).map(([k, v]) => [`--onu-color-${k}`, v.replace(/hsl\((.*)\)/, '$1')]))

  const css = `
:root {
  ${Object.entries(themeMetas).map(([key, value]) => `${key}: ${value};`).join('\n  ')}
  --onu-color-DEFAULT: var(--onu-color-500);
  --onu-color-text: var(--onu-color-100);
  --onu-color-text-invert: var(--onu-color-950);
  --onu-radius: 0.5rem;
}

.dark {
  --onu-color-DEFAULT: var(--onu-color-600);
  --onu-color-text: var(--onu-color-950);
  --onu-color-text-invert: var(--onu-color-100);
}

::selection {
  color: hsl(var(--onu-color-DEFAULT) / 0.99) !important;
  background-color: hsl(var(--onu-color-text) / 0.99) !important;
}
  `.trim()

  return {
    css,
    theme,
    meta: themeMetas,
    cssMinify: css.replace(/\n\s*/g, '').replace(/\s*([{}:!])\s*/g, '$1'),
  }
}
