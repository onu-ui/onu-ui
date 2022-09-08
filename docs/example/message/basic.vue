<script lang="ts" setup>
import { OMessage as message } from 'onu-ui'
let handlerPre
function handleToClickBasic(theme:string) {
  handlerPre && handlerPre.close()
  handlerPre = message[theme]({
    content: 'this is basic content',
  })
}
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-button o="primary" @click="handleToClickBasic('primary')">
        basic show content
      </o-button>
      <o-button o="secondary" @click="handleToClickBasic('secondary')">
        basic show content
      </o-button>
      <o-button o="info" @click="handleToClickBasic('info')">
        basic show content
      </o-button>
    </div>
    <div fscw gap-2>
      <o-button o="error" @click="handleToClickBasic('error')">
        basic show content
      </o-button>
      <o-button o="success" @click="handleToClickBasic('success')">
        basic show content
      </o-button>
      <o-button o="warning" @click="handleToClickBasic('warning')">
        basic show content
      </o-button>
    </div>
  </div>
</template>
