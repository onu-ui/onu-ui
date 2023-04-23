<script lang="ts" setup>
import type { OButtonProps } from 'onu-ui'
const visible = ref(false)

const dialogStyle = { background: '#efefef' }
const bodyStyle = { color: '#333' }
const cancelProps = { light: true }
const type: OButtonProps['type'] = 'secondary'
const okProps = { type }
const handleOk = () => {
  visible.value = false
}
</script>

<template>
  <OButton @click="visible = true">
    Open Customized Dialog
  </OButton>
  <ODialog v-model:visible="visible" :dialog-style="dialogStyle" :body-style="bodyStyle" :show-close="false" :show-mask="false" :cancel-props="cancelProps" :ok-props="okProps" cancel-text="no" ok-text="ok" @ok="handleOk">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!
  </ODialog>
</template>
