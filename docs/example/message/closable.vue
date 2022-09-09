<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
function handleToClickBasic(theme:string) {
  message[theme]({
    content: 'this is basic content',
    closable: true,
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button o="primary" @click="handleToClickBasic('primary')">
        close icon
      </o-button>
      <o-button o="secondary" @click="handleToClickBasic('secondary')">
        close icon
      </o-button>
      <o-button o="info" @click="handleToClickBasic('info')">
        close icon
      </o-button>
    </div>
    <div fscw gap-2>
      <o-button o="error" @click="handleToClickBasic('error')">
        close icon
      </o-button>
      <o-button o="success" @click="handleToClickBasic('success')">
        close icon
      </o-button>
      <o-button o="warning" @click="handleToClickBasic('warning')">
        close icon
      </o-button>
    </div>
  </div>
</template>
