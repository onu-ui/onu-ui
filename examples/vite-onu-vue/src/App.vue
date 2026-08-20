<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { OButton } from 'onu-ui'
import DisplayExamples from './components/DisplayExamples.vue'
import FormExamples from './components/FormExamples.vue'
import FoundationExamples from './components/FoundationExamples.vue'
import InteractiveExamples from './components/InteractiveExamples.vue'
import WorkspaceExample from './components/WorkspaceExample.vue'

const isDark = useDark()

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground o-transition">
    <header class="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div class="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
        <div>
          <p class="text-sm font-semibold">
            Onu UI · Vue
          </p>
          <p class="text-xs text-muted-foreground">
            按需导入的组件库示例
          </p>
        </div>
        <OButton variant="ghost" size="sm" :aria-pressed="isDark" @click="toggleDark">
          {{ isDark ? '切换浅色' : '切换深色' }}
        </OButton>
      </div>
    </header>

    <main class="mx-auto max-w-6xl grid gap-6 px-5 py-8 lg:grid-cols-2">
      <DisplayExamples />
      <FormExamples />
      <FoundationExamples class="lg:col-span-2" />
      <InteractiveExamples />
      <WorkspaceExample class="lg:col-span-2" />
    </main>
  </div>
</template>
