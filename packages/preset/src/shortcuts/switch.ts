export const switchShortcuts: Record<string, string> = {
  // switch
  'o-switch-base': 'b-(~ $o-switch-bc) bg-$o-switch-dot',
  'o-switch-base-active': 'checked-(b-context bg-$o-switch-dot-active)',
  'o-switch-shadow': 'shadow-switch checked-shadow-switchActive',
  'o-switch': 'o-switch-base o-switch-base-active o-switch-shadow appearance-none cursor-pointer flex-shrink-0 o-transition duration-300 rounded-full',
  'o-switch-disabled': 'o-disabled',
}
