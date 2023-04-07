<script lang="ts" setup>
import { promiseTimeout } from '@vueuse/core'
const visible = ref(false)
const okLoading = ref(false)

const handleOk = async () => {
  okLoading.value = true
  await promiseTimeout(1000)
  okLoading.value = false
  visible.value = false
}
</script>

<template>
  <OButton @click="visible = true">
    Open Asynchronously Dialog
  </OButton>
  <ODialog v-model:visible="visible" body-class="customBodyClass" dialog-class="customDialogClass" :ok-loading="okLoading" title="Asynchronously Dialog" @ok="handleOk">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!
  </ODialog>
</template>
