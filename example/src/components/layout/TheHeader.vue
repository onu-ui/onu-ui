<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header h-16 fbc px-4 b="b dashed gray3">
    <div fsc gap-4>
      <img w-8 h-8 src="/logo.svg" alt="Onu Logo">
      <h1 text="dark-300 dark:light-300 op-60" font-bold>
        Playground
      </h1>
    </div>
    <div fsc gap-4>
      <o-button text o="info" target="_blank" to="https://github.com/onu-ui/onu-ui">
        <template #icon>
          <div i-carbon-logo-github text="dark-300 dark:light-300" />
        </template>
        <!-- Github -->
      </o-button>
      <o-button text o="info" @click="toggleDark()">
        <div v-if="isDark" i-carbon-moon text="light-300" />
        <div v-else i-carbon-sun />
      </o-button>
    </div>
  </header>
</template>
