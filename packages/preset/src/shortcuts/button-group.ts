export const buttonGroup: Record<string, string> = {
  'btn-group': `
        flex items-center justify-center gap-0
        [&>.btn]:(rounded-0 bg-[rgb(var(--color-gray-300))])
        dark:[&>.btn]:(bg-[rgb(var(--color-gray-700))])
        first:[&>.btn]:(rounded-l-md) last:[&>.btn]:(rounded-r-md)
        [&>.btn-active]:bg-[rgb(var(--color-primary-DEFAULT))]!
    `,
}
