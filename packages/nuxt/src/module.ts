import { addComponent, defineNuxtModule } from '@nuxt/kit'

const COMPONENT_LIST = [
  'OAffix',
  'OAlert',
  'OAvatar',
  'OAvatarGroup',
  'OBacktop',
  'OBadge',
  'OButton',
  'OButtonGroup',
  'OCard',
  'OCheckbox',
  'OCollapse',
  'OCollapseItem',
  'OConfigProvider',
  'OEmpty',
  'OIcon',
  'OLink',
  'OMessage',
  'OPopup',
  'OProgress',
  'ORadio',
  'ORadioGroup',
  'ORate',
  'OSwitch',
  'OTag',
  'OText',
  'OToolTip',
  'OTrigger',
]

export default defineNuxtModule({
  meta: {
    name: '@onu/nuxt',
    configKey: 'onu',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  async setup() {
    COMPONENT_LIST.forEach((name) => {
      addComponent({
        name,
        export: name,
        filePath: 'onu-ui',
      })
    })
  },
})
