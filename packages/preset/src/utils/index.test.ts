import { expect, it } from 'vitest'
import { buttonShortcuts } from '../shortcuts/button'
import { spliteSpace } from './index'

it('spliteSpace', () => {
  const btn = buttonShortcuts.btn
  expect(spliteSpace(btn))
    .toMatchInlineSnapshot('"btn-default o-[rgb(var(--color-primary-DEFAULT))] text-white dark-text-black bg-context ring-0"')
})
