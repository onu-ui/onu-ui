<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
function handleToClickBasic(theme: string, time: number) {
  message[theme]({
    content: 'this is basic content',
    closable: true,
    duration: time,
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button type="primary" @click="handleToClickBasic('primary', 3000)">
        show 3.0 s
      </o-button>
      <o-button type="secondary" @click="handleToClickBasic('secondary', 4000)">
        show 4.0 s
      </o-button>
      <o-button type="info" @click="handleToClickBasic('info', 5000)">
        show 5.0 s
      </o-button>
    </div>
    <div fscw gap-2>
      <o-button type="error" @click="handleToClickBasic('error', 6000)">
        show 6.0 s
      </o-button>
      <o-button type="success" @click="handleToClickBasic('success', 7000)">
        show 7.0 s
      </o-button>
      <o-button type="warning" @click="handleToClickBasic('warning', 8000)">
        show 8.0 s
      </o-button>
    </div>
  </div>
</template>
