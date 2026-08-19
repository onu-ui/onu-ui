import { mc } from 'magic-color'
import { createOklchTheme } from './utils'

export function resolveTheme(color: string) {
  const theme = createOklchTheme(color)
  const themeMetas = Object.fromEntries(Object.entries(theme).map(([k, v]) => [`--onu-color-${k}`, v.replace(/oklch\((.*)\)/, '$1')]))
  const semanticMetas: Record<string, string> = {
    '--onu-color-primary-foreground-light': `var(--onu-color-${resolveForegroundStep(theme[500], theme)})`,
    '--onu-color-primary-foreground-dark': `var(--onu-color-${resolveForegroundStep(theme[600], theme)})`,
    '--onu-color-secondary-light': 'var(--onu-color-100)',
    '--onu-color-secondary-dark': 'var(--onu-color-950)',
    '--onu-color-muted-light': 'var(--onu-color-50)',
    '--onu-color-muted-dark': 'var(--onu-color-950)',
    '--onu-color-accent-light': 'var(--onu-color-100)',
    '--onu-color-accent-dark': 'var(--onu-color-950)',
    '--onu-color-border-light': 'var(--onu-color-200)',
    '--onu-color-border-dark': 'var(--onu-color-50) / 12%',
    '--onu-color-input-light': 'var(--onu-color-200)',
    '--onu-color-input-dark': 'var(--onu-color-50) / 16%',
  }

  const css = `
:root {
  ${Object.entries(themeMetas).map(([key, value]) => `${key}: ${value};`).join('\n  ')}
  --onu-color-DEFAULT: var(--onu-color-500);
  --onu-color-text: var(--onu-color-100);
  --onu-color-text-invert: var(--onu-color-950);
  --onu-color-background: 100% 0 0;
  --onu-color-foreground: 14.5% 0 0;
  --onu-color-card: 100% 0 0;
  --onu-color-card-foreground: 14.5% 0 0;
  --onu-color-popover: 100% 0 0;
  --onu-color-popover-foreground: 14.5% 0 0;
  --onu-color-primary: var(--onu-color-500);
  ${Object.entries(semanticMetas).map(([key, value]) => `${key}: ${value};`).join('\n  ')}
  --onu-color-primary-foreground: var(--onu-color-primary-foreground-light);
  --onu-color-context: var(--onu-color-primary);
  --onu-color-secondary: var(--onu-color-secondary-light);
  --onu-color-secondary-foreground: 20.5% 0 0;
  --onu-color-muted: var(--onu-color-muted-light);
  --onu-color-muted-foreground: 55.6% 0 0;
  --onu-color-accent: var(--onu-color-accent-light);
  --onu-color-accent-foreground: 20.5% 0 0;
  --onu-color-destructive: 57.7% 0.245 27.325;
  --onu-color-destructive-foreground: 98.5% 0 0;
  --onu-color-border-default: var(--onu-color-border-light);
  --onu-color-input: var(--onu-color-input-light);
  --onu-color-ring: var(--onu-color-500);
  --onu-radius: 0.5rem;
}

.dark {
  --onu-color-DEFAULT: var(--onu-color-600);
  --onu-color-text: var(--onu-color-950);
  --onu-color-text-invert: var(--onu-color-100);
  --onu-color-background: 14.5% 0 0;
  --onu-color-foreground: 98.5% 0 0;
  --onu-color-card: 20.5% 0 0;
  --onu-color-card-foreground: 98.5% 0 0;
  --onu-color-popover: 20.5% 0 0;
  --onu-color-popover-foreground: 98.5% 0 0;
  --onu-color-primary: var(--onu-color-600);
  --onu-color-primary-foreground: var(--onu-color-primary-foreground-dark);
  --onu-color-secondary: var(--onu-color-secondary-dark);
  --onu-color-secondary-foreground: 98.5% 0 0;
  --onu-color-muted: var(--onu-color-muted-dark);
  --onu-color-muted-foreground: 70.8% 0 0;
  --onu-color-accent: var(--onu-color-accent-dark);
  --onu-color-accent-foreground: 98.5% 0 0;
  --onu-color-destructive: 70.4% 0.191 22.216;
  --onu-color-destructive-foreground: 98.5% 0 0;
  --onu-color-border-default: var(--onu-color-border-dark);
  --onu-color-input: var(--onu-color-input-dark);
  --onu-color-ring: var(--onu-color-600);
}

::selection {
  color: oklch(var(--onu-color-DEFAULT) / 0.99) !important;
  background-color: oklch(var(--onu-color-text) / 0.99) !important;
}
  `.trim()

  return {
    css,
    theme,
    meta: {
      ...themeMetas,
      ...semanticMetas,
    },
    cssMinify: css.replace(/\n\s*/g, '').replace(/\s*([{}:!])\s*/g, '$1'),
  }
}

function resolveForegroundStep(background: string, theme: ReturnType<typeof createOklchTheme>) {
  const lightContrast = contrastRatio(background, theme[50])
  const darkContrast = contrastRatio(background, theme[950])
  return lightContrast >= darkContrast ? 50 : 950
}

function contrastRatio(a: string, b: string) {
  const lightnessA = relativeLuminance(a)
  const lightnessB = relativeLuminance(b)
  const lighter = Math.max(lightnessA, lightnessB)
  const darker = Math.min(lightnessA, lightnessB)
  return (lighter + 0.05) / (darker + 0.05)
}

function relativeLuminance(color: string) {
  const [red, green, blue] = mc(color).rgb(false)
  const channels = [red, green, blue].map((value) => {
    const channel = value / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}
