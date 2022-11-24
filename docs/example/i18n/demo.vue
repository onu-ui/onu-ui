<template>
  <div fscw>
    <div flex space-x-2>
      <o-button o-success @click="() => { locale = en }">
        en-US
      </o-button>
      <o-button o-error @click="() => { locale = zhCn }">
        zh-CN
      </o-button>
    </div>
    <o-config-provider :locale="locale">
      <o-empty />
    </o-config-provider>
  </div>
</template>

<script setup lang='ts'>
import { en, zhCn } from 'onu-ui'

const locale = ref(en)
</script>
