<script setup lang="ts">
import { OMessage } from 'onu-ui'
let handlerPre
function handleBasicClick(content:string | number) {
  handlerPre && handlerPre.close()
  handlerPre = OMessage.primary({
    content,
  })
}
function handleCloseClick(content:string | number) {
  handlerPre && handlerPre.close()
  handlerPre = OMessage.info({
    content,
    closable: true,
  })
}

function handleIconClick() {
  handlerPre && handlerPre.close()
  handlerPre = OMessage.secondary({
    content: 'icon message',
    closable: true,
    icon: 'i-carbon-asleep',
  })
}
function handleDurationClick() {
  handlerPre && handlerPre.close()
  handlerPre = OMessage.error({
    content: 'duration message',
    closable: true,
    duration: 10000,
  })
}
</script>

<template>
  <o-card title="Message">
    <div space-y-2>
      <div fsc gap-2>
        <o-button o="primary" @click="handleBasicClick('basic message')">
          show basic message
        </o-button>
        <o-button o="info" @click="handleCloseClick('closable message')">
          show closable message
        </o-button>
        <o-button o="secondary" @click="handleIconClick">
          icon content
        </o-button>
      </div>
      <div fsc gap-2>
        <o-button o="error" @click="handleDurationClick">
          duration
        </o-button>
      </div>
    </div>
  </o-card>
</template>
