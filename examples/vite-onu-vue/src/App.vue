<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
function toggleDark() {
  isDark.value = !isDark.value
}

</script>

<template>
  <div wrapper gap-2>
    Onu Vue Example
    <OButton variant="dashed" class="btn-red" @click="toggleDark()">
      Toggle Dark
    </OButton>
  </div>
</template>

<style>
:root{
  background-color: #ffffff;
  color: #222222;
}

.dark {
  background-color: #1a1817;
  color: #ffffff;
}
</style>
