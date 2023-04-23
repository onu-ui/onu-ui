<script lang="ts" setup>
const basicVisible = ref(false)
const customStyleVisible = ref(false)
const customStructVisible = ref(false)
const asyncVisible = ref(false)
const okLoading = ref(false)
const time = async timestamp => new Promise((resolve) => {
  setTimeout(resolve, timestamp)
})
const onOk = async () => {
  okLoading.value = true
  await time(1000)
  okLoading.value = false
  asyncVisible.value = false
}
</script>

<template>
  <div space-x-2>
    <OButton @click="basicVisible = true">
      basic
    </OButton>
    <OButton @click="customStyleVisible = true">
      customStyle
    </OButton>
    <OButton @click="customStructVisible = true">
      customStruct
    </OButton>
    <OButton @click="asyncVisible = true">
      async
    </OButton>
  </div>

  <ODialog v-model:visible="basicVisible" title="basic" @ok="basicVisible = false">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!
  </ODialog>

  <ODialog v-model:visible="customStyleVisible" :dialog-style="{ background: '#efefef' }" :body-style="{ color: '#333' }" body-class="customBodyClass" dialog-class="customDialogClass" :show-close="false" destroy-on-close :append-to-body="false" :show-mask="false" :width="700" top="15vh" :cancel-props="{ light: true }" :ok-props="{ type: 'secondary' }" cancel-text="no" ok-text="ok" @ok="customStyleVisible = false">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!
  </ODialog>
  <ODialog v-model:visible="customStructVisible" :mask-style="{ backdropFilter: 'saturate(120%) blur(5px)' }" :show-close="false" :mask-closable="false" title="customFooter" @ok="customStructVisible = false">
    <template #title>
      <div text-center>
        center title
      </div>
    </template>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!

    <template #footer>
      <div>
        <o-button w-full type="warning" icon="i-carbon-checkmark-outline" @click="customStructVisible = false">
          Confirm
        </o-button>
      </div>
    </template>
  </ODialog>

  <ODialog v-model:visible="asyncVisible" hide-cancel :ok-loading="okLoading" title="async" @ok="onOk">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quibusdam dolorem officia voluptatem similique dolorum distinctio accusamus, aspernatur dolores, repellat porro non enim ab itaque expedita ut. Tempore, repudiandae ullam!
  </ODialog>
</template>
