<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
function handleToClickBasic(theme:string, icon:string) {
  message[theme]({
    content: 'this is basic content',
    closable: true,
    icon,
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button o="primary" @click="handleToClickBasic('primary', 'i-carbon-ai-status')">
        <o-icon name="i-carbon-ai-status" class="!text-white text-2xl" />
      </o-button>
      <o-button o="secondary" @click="handleToClickBasic('secondary', 'i-carbon-asleep')">
        <o-icon name="i-carbon-asleep" class="!text-white text-2xl" />
      </o-button>
      <o-button o="info" @click="handleToClickBasic('info', 'i-carbon-bee')">
        <o-icon name="i-carbon-bee" class="!text-white text-2xl" />
      </o-button>
    </div>
  </div>
</template>
