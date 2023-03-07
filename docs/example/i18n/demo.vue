<script setup lang='ts'>
import { en, pt, zhCn } from 'onu-ui'
import { ref } from 'vue'
const locale = ref(en)
</script>

<template>
  <div fscw>
    <div flex space-x-2>
      <o-button @click="() => { locale = en }">
        en-US
      </o-button>
      <o-button @click="() => { locale = pt }">
        pt-PT
      </o-button>
      <o-button @click="() => { locale = zhCn }">
        zh-CN
      </o-button>
    </div>
    <o-config-provider :locale="locale">
      <o-empty />
    </o-config-provider>
  </div>
</template>
