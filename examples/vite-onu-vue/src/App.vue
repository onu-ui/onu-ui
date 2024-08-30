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
    <OButton variant="dashed" class="btn-teal" rounded size="lg" @click="toggleDark()">
      Toggle Dark
    </OButton>

    <OButton variant="link" to="https://google.com" target="_blank">
      Google
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
