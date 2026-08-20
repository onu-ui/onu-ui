<script lang='ts' setup>
const checked = ref(false)
const disabled = ref(false)
</script>

<template>
  <OCard title="Switch Component" desc="Switch component with custom style">
    <div flex items-center gap-2 flex-wrap>
      <label switch="~ default">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot dot-red />
      </label>

      <label switch="~ xs purple">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ sm">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ md">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~ lg red">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <span switch-dot />
      </label>

      <label switch="~">
        <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
        <div switch-dot important:bg-op-50>
          <i :class="checked ? 'i-carbon-moon' : 'i-carbon-sun'" />
        </div>
      </label>
    </div>

    <template #footer>
      <button btn @click="checked = !checked">
        Toggle checked
      </button>
      <button btn @click="disabled = !disabled">
        Toggle disabled
      </button>
    </template>
  </OCard>
</template>
