<script lang="ts" setup>
const visible = ref(false)

const maskStyle = { backdropFilter: 'saturate(120%) blur(5px)' }

const handleOk = () => {
  visible.value = false
}
</script>

<template>
  <OButton @click="visible = true">
    Open Customized Dialog
  </OButton>
  <ODialog v-model:visible="visible" :width="700" top="15vh" :mask-style="maskStyle" :show-close="false" title="Customized">
    <template #title>
      <div text-center>
        center title
      </div>
    </template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!

    <template #footer>
      <div w-full>
        <o-button w-full type="warning" icon="i-carbon-checkmark-outline" @click="handleOk">
          Confirm
        </o-button>
      </div>
    </template>
  </ODialog>
</template>
