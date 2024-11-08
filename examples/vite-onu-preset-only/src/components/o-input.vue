<script lang='ts' setup>
import { ref } from 'vue'
import OCard from './o-card.vue'

const value = ref('')
const disabled = ref(false)
</script>

<template>
  <OCard title="Input Component" desc="Input component with custom style">
    <div flex="~ col gap-2">
      <div flex gap-2>
        <input v-model="value" type="text" :disabled="disabled" class="input-default" placeholder="input-default...">
        <input input="~ red" :disabled="disabled" placeholder="input...">
        <input input :disabled="disabled" value="i'm disabled" placeholder="input...">
      </div>
      <div flex items-center gap-2 flex-wrap>
        <input v-model="value" type="text" :disabled="disabled" class="input input-xs" placeholder="input-xs...">
        <input v-model="value" type="text" :disabled="disabled" class="input input-sm" placeholder="input-sm...">
        <input v-model="value" type="text" :disabled="disabled" class="input input-md" placeholder="input-md...">
        <input v-model="value" type="text" :disabled="disabled" class="input input-lg" placeholder="input-lg...">
      </div>
      <div flex items-center gap-2>
        <label class="input input-bordered flex items-center gap-2 focus-within:text-purple">
          <input :disabled="disabled" value="Search Disabled" type="text" class="grow" placeholder="Search">
          <i inline-block i-carbon-search />
        </label>
        <label class="input input-dashed flex items-center gap-2">
          <i text-theme-DEFAULT inline-block i-carbon:email />
          <input type="text" class="grow" :disabled="disabled" placeholder="Email">
        </label>
      </div>
    </div>

    <template #footer>
      <button btn @click="disabled = !disabled">
        Toggle disabled
      </button>
    </template>
  </OCard>
</template>
