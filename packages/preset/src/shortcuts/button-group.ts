export const buttonGroup: Record<string, string> = {
  'btn-group': `
        flex items-center justify-center gap-0
        [&>.btn]:(rounded-0 bg-[hsl(var(--color-gray-300))])
        dark:[&>.btn]:(bg-[hsl(var(--color-gray-700))])
        first:[&>.btn]:(rounded-l-md) last:[&>.btn]:(rounded-r-md)
        [&>.btn-group-active]:(bg-[hsl(var(--onu-color-500))] o-theme-color-text)!
    `,
  // 'btn': 'not-last:border-r-0',
}
