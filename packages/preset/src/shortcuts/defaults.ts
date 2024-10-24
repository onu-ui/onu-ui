import type { CustomShortcut } from '../types'

const maskImages = {
  squircle: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAwJyBoZWlnaHQ9JzIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMTAwIDBDMjAgMCAwIDIwIDAgMTAwczIwIDEwMCAxMDAgMTAwIDEwMC0yMCAxMDAtMTAwUzE4MCAwIDEwMCAwWicvPjwvc3ZnPg==`,
  hexagon: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTgyJyBoZWlnaHQ9JzIwMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNLjMgNjUuNDg2YzAtOS4xOTYgNi42ODctMjAuMDYzIDE0LjIxMS0yNS4wNzhsNjEuODYtMzUuOTQ2YzguMzYtNS4wMTYgMjAuODk5LTUuMDE2IDI5LjI1OCAwbDYxLjg2IDM1Ljk0NmM4LjM2IDUuMDE1IDE0LjIxMSAxNS44ODIgMTQuMjExIDI1LjA3OHY3MS4wNTVjMCA5LjE5Ni02LjY4NyAyMC4wNjMtMTQuMjExIDI1LjA3OWwtNjEuODYgMzUuOTQ1Yy04LjM2IDQuMTgtMjAuODk5IDQuMTgtMjkuMjU4IDBMMTQuNTEgMTYxLjYyQzYuMTUxIDE1Ny40NC4zIDE0NS43MzcuMyAxMzYuNTRWNjUuNDg2WicgZmlsbD0nYmxhY2snIGZpbGwtcnVsZT0nbm9uemVybycvPjwvc3ZnPg==`,
  triangle: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTc0JyBoZWlnaHQ9JzE0OScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTg3IDE0OC40NzYtODYuNjAzLjE4NUw0My44NiA3NC40MjMgODcgMGw0My4xNCA3NC40MjMgNDMuNDYzIDc0LjIzOHonIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPg==`,
}

export const defaults: CustomShortcut[] = [
  [/^o-transition(?:-(\d+))?$/, ([, d]) => `transition-all duration-${d || 200}`],
  ['o-theme-text', 'text-[hsl(var(--onu-color-text))] dark:text-[hsl(var(--onu-color-text))]'],

  // mask
  [/^mask-(\w+)$/, ([, k]) => {
    if (k in maskImages) {
      return ['mask', {
        '-webkit-mask-image': `url(${maskImages[k as keyof typeof maskImages]})`,
        'mask-image': `url(${maskImages[k as keyof typeof maskImages]})`,
      }]
    }
  }, { autocomplete: `mask-(${Object.keys(maskImages).join('|')})` }],
]
