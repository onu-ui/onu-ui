<script setup lang="ts">
import { version } from '../../package.json'
</script>

<template>
  <header mb4 h-16 fbc px-4 b="b dashed gray3">
    <div fsc gap-4>
      <img w-8 h-8 src="/logo.svg" alt="Onu Logo">
      <h1 text="white op-60">
        Playground
        <sub bottom-0>v{{ version }}</sub>
      </h1>
    </div>
    <o-button text o="info" rounded-full to="https://github.com/onu-ui/onu-ui">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      <!-- Github -->
    </o-button>
  </header>
  <main class="w-65% ma space-y-8">
    <slot />
  </main>
</template>
