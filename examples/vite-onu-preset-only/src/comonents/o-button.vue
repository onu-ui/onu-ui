<script lang='ts' setup>
import { ref } from 'vue'

import { useDark } from '@vueuse/core'

const disabled = ref(false)

const isDark = useDark()
function toggleDark() {
  isDark.value = !isDark.value
}

function toggleDisabled() {
  disabled.value = !disabled.value
}
</script>

<template>
  <div>
    <div flex items-center justify-center gap-10 mb-10>
      <!--
      <div w-5 h-5 bg-primary-50 />
      <div w-5 h-5 bg-primary-100 />
      <div w-5 h-5 bg-primary-200 />
      <div w-5 h-5 bg-primary-300 />
      <div w-5 h-5 bg-primary-400 />
      <div w-5 h-5 bg-primary-500 />
      <div w-5 h-5 bg-primary-600 />
      <div w-5 h-5 bg-primary-700 />
      <div w-5 h-5 bg-primary-800 />
      <div w-5 h-5 bg-primary-900 />
      <div w-5 h-5 bg-primary-950 />
       -->
    </div>
    <div flex items-center justify-center gap-10 mb-10>
      <button class="btn" @click="toggleDisabled()">
        <i inline-block i-carbon:favorite-filled />
        Toggle Disabled
      </button>
      <button class="btn" @click="toggleDark()">
        Toggle Theme
      </button>
    </div>

    <div fccc gap-2 flex-wrap>
      <div flex items-center justify-center gap-2>
        Default:

        <button class="btn-default" :disabled="disabled">
          btn-default
        </button>
      </div>

      <div flex items-center justify-center gap-2>
        Size:
        <button btn="size-xs default" :disabled="disabled">
          btn btn-xs
        </button>
        <button class="btn-sm btn-default" :disabled="disabled">
          btn btn-sm
        </button>
        <button class="btn btn-md" :disabled="disabled">
          btn btn-md
        </button>
        <button class="btn btn-lg" :disabled="disabled">
          btn btn-lg
        </button>
        <div btn>
          btn
        </div>
      </div>

      <div flex items-center justify-center gap-2>
        <button class="btn">
          icon <i inline-block i-carbon:favorite-filled />
        </button>
        <button class="btn btn-soft" :disabled="disabled">
          btn btn-soft
        </button>
        <button class="btn btn-outline" :disabled="disabled">
          btn btn-outline
        </button>
        <button class="btn btn-solid" :disabled="disabled">
          btn-solid
        </button>
        <button class="btn btn-solid-cover" :disabled="disabled">
          btn-solid-cover
        </button>
        <button class="btn btn-dashed" :disabled="disabled">
          btn-dashed
        </button>
        <button class="btn btn-dashed-cover" :disabled="disabled">
          btn-dashed-cover
        </button>
        <button class="btn btn-link" :disabled="disabled">
          btn btn-link
        </button>
        <button class="btn btn-ghost" :disabled="disabled">
          btn btn-ghost
        </button>
        <button class="btn btn-ghost-light" :disabled="disabled">
          btn btn-ghost-light
        </button>
        <button :disabled="disabled" class="btn">
          disabled
        </button>
      </div>
    </div>
  </div>
</template>
