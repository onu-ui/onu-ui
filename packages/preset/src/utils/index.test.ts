import { expect, it } from 'vitest'
import { buttonShortcuts } from '../shortcuts/button'
import { generateThemeCSS } from '../preflights/root'
import { spliteSpace } from './index'

it('spliteSpace', () => {
  const btn = buttonShortcuts.btn
  expect(spliteSpace(btn))
    .toMatchInlineSnapshot('"btn-default o-[rgb(var(--color-primary-DEFAULT))] text-white dark-text-black bg-context ring-0"')
})

it('generate theme css', () => {
  const theme = generateThemeCSS('168,85,247')

  expect(theme).toMatchInlineSnapshot(`
    {
      "100": "#F6EEFE",
      "200": "#E9D5FD",
      "300": "#DCBBFC",
      "400": "#C288F9",
      "50": "#FBF7FF",
      "500": "#A855F7",
      "600": "#974DDE",
      "700": "#653394",
      "800": "#4C266F",
      "900": "#321A4A",
      "950": "#221131",
    }
  `)
})
