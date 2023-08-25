<script setup lang="ts">
import { OButton, OCard, OMessage } from 'onu-ui'

function handleToClickTheme(type: string) {
  OMessage[`${type}`]({
    content: type,
  })
}

function handleBasicClick(content: string) {
  OMessage.primary({
    content,
  })
}
function handleCloseClick(content: string) {
  OMessage.info({
    content,
    closable: true,
  })
}

function handleIconClick() {
  OMessage.secondary({
    content: 'icon message',
    closable: true,
    icon: 'i-carbon-asleep',
  })
}
function handleDurationClick() {
  OMessage.error({
    content: 'duration message',
    closable: true,
    duration: 30000,
  })
}

function handleHTML() {
  OMessage({
    parseHtml: true,
    content: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>

<template>
  <OCard title="Message">
    <div space-y-2>
      <div fsc gap-2 flex-wrap>
        <OButton o="primary" @click="handleToClickTheme('primary')">
          primary message
        </OButton>
        <OButton o="secondary" @click="handleToClickTheme('secondary')">
          secondary message
        </OButton>
        <OButton o="info" @click="handleToClickTheme('info')">
          info message
        </OButton>
        <OButton o="success" @click="handleToClickTheme('success')">
          success message
        </OButton>
        <OButton o="warning" @click="handleToClickTheme('warning')">
          warning message
        </OButton>
        <OButton o="error" @click="handleToClickTheme('error')">
          error message
        </OButton>
      </div>
      <div fsc gap-2 flex-wrap>
        <OButton o="primary" @click="handleBasicClick('basic message')">
          show basic message
        </OButton>
        <OButton o="info" @click="handleCloseClick('closable message')">
          show closable message
        </OButton>
        <OButton o="secondary" @click="handleIconClick">
          icon content
        </OButton>
        <OButton o="error" @click="handleDurationClick">
          duration
        </OButton>
        <OButton o="error" @click="handleHTML">
          HTML
        </OButton>
      </div>
    </div>
  </OCard>
</template>
