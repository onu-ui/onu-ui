import { mc } from 'magic-color'

export function spliteSpace(str: string) {
  return str.trim().replace(/\n/g, ' ').replace(/\s+/g, ' ')
}

export function spliteObject(obj: Record<string, string>) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, spliteSpace(v)]))
}

export function resolveTheme(color: string) {
  const theme: Record<string, string> = mc.theme(color, {
    type: 'hsl',
    // render: meta => [`--onu-color-${meta[0]}`, meta[1].replace(/hsl\((.*)\)/, '$1')],
  })
  const themeMetas = Object.fromEntries(Object.entries(theme).map(([k, v]) => [`--onu-color-${k}`, v.replace(/hsl\((.*)\)/, '$1')]))

  const css = `
:root {
color-scheme: light dark;
${Object.entries(themeMetas).map(([key, value]) => `${key}: ${value};`).join('\n  ')}
--onu-color-DEFAULT: var(--onu-color-500);
--onu-color-text: var(--onu-color-100);
}

.dark {
--onu-color-DEFAULT: var(--onu-color-600);
--onu-color-text: var(--onu-color-950);
}
  `.trim()

  return {
    css,
    theme,
    meta: themeMetas,
  }
}
