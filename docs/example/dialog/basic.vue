<script lang="ts" setup>
const visible = ref(false)

const handleOk = () => {
  visible.value = false
}
</script>

<template>
  <OButton @click="visible = true">
    Open Basic Dialog
  </OButton>
  <ODialog v-model:visible="visible" title="Basic usage" @ok="handleOk">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!
  </ODialog>
</template>
