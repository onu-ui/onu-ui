<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
function handleToClickBasic(theme: string, icon: string) {
  message[theme]({
    content: `This is ${theme} message`,
    closable: true,
    icon,
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button type="primary" @click="handleToClickBasic('primary', 'i-carbon:logo-twitter')">
        <o-icon name="i-carbon:logo-twitter" class="!text-white text-2xl" />
      </o-button>
      <o-button type="error" @click="handleToClickBasic('error', 'i-carbon:logo-youtube')">
        <o-icon name="i-carbon:logo-youtube" class="!text-white text-2xl" />
      </o-button>
      <o-button type="success" @click="handleToClickBasic('success', 'i-carbon:logo-python')">
        <o-icon name="i-carbon:logo-python" class="!text-white text-2xl" />
      </o-button>
      <o-button type="info" @click="handleToClickBasic('info', 'i-carbon-bee')">
        <o-icon name="i-carbon-bee" class="!text-white text-2xl" />
      </o-button>
    </div>
  </div>
</template>
