export const cardShortcuts: Record<string, string> = {
  // card
  'o-card-bg': 'bg-gradient-linear backdrop-blur-lg',
  'o-card-base': 'o-card-bg o-transition list-none relative rounded-md c-context w-full of-hidden',
  'o-card': 'o-card-base h-fit dark:b-darkBd dark:border',
  'o-card-md': 'rounded-md shadow-cardMD text-sm',
  'o-card-sm': 'rounded-sm shadow-cardSM text-xs',
  'o-card-cover': 'children-w-full children-aspect-video',
  'o-card-header': 'fb px-4 py-2.5',
  'o-card-header-wrapper': 'flex flex-col flex-1 gap-1.5',
  'o-card-header-title': 'text-base dark:c-darkTitle',
  'o-card-header-description': 'text-xs c-context:60 dark:c-darkSubText break-all !m-0',
  'o-card-header-extra': '',
  'o-card-body': 'p-4 pt-1.5 leading-normal text-sm dark:c-darkText',
  'o-card-actions': 'p-4 pt-2',
  'o-card-bordered': 'border border-light-700 dark:b-darkBd important-shadow-none',
  'o-card-hoverable': 'hover-translate-y--1 hover-important-shadow-cardMD',
  'o-card-shadow-always': '!shadow-cardMD',
}
