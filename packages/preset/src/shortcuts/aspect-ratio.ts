import type { CustomShortcut } from '../types'

export const aspectRatios: CustomShortcut[] = [
  ['aspect-frame', 'relative overflow-hidden [&>*]:(absolute inset-0 size-full object-cover)'],
  ['aspect-frame-square', 'aspect-frame aspect-square'],
  ['aspect-frame-video', 'aspect-frame aspect-video'],
  [/^aspect-frame-(\d+)x(\d+)$/, ([, width, height]) => `aspect-frame aspect-[${width}/${height}]`],
]
