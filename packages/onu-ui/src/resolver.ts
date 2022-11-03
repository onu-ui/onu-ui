import type { ComponentResolver } from 'unplugin-vue-components'

export function OnuResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^O[A-Z]/))
        return { name: name.slice(1).toLowerCase(), from: 'onu-ui/components' }
    },
  }
}
