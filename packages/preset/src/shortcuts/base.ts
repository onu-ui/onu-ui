export const baseShortcuts: Record<string, string> = {
  // general
  // 'o-bg-base': 'bg-white dark:bg-[#222]',
  'o-border-base': 'border-gray-400/50',
  'o-border-300': 'border-gray-400/40',
  'o-border-200': 'border-gray-400/25',
  'o-transition': 'transition-all duration-200',
  'o-focus-base': 'ring-2 ring-context/50',
  'o-active-base': 'ring-3 ring-context/10',
  'o-borderless': '!border-none !shadow-none',
  'o-solid': 'bg-context border-context c-white',
  'o-transparent': 'bg-light-100 dark:bg-darkBg c-darkContext dark:c-lightContext',
  'o-light': `!shadow-transparent bg-context:12 hover-bg-context active-bg-context:64
                   !border-context !hover-border-context !active-border-context:64
                   !c-context !hover-c-white !active-c-white`,
  'o-text': `!shadow-transparent !bg-transparent !hover-bg-context:32 !active-bg-context:12
                   !border-transparent
                   !c-context`,
}
