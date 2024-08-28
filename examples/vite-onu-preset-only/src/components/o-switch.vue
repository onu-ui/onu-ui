<script lang='ts' setup>
import { ref } from 'vue'

const checked = ref(false)
const disabled = ref(false)
</script>

<template>
  <div>
    <div space-y-2 mt-4>
      <div text-center>
        <button btn @click="checked = !checked">
          Toggle checked
        </button>
        <button btn @click="disabled = !disabled">
          Toggle disabled
        </button>
      </div>

      <div flex items-center justify-center gap-2>
        <input type="checkbox" class="switch switch-xs dark:[tglbg::#1a1817]">
        <input type="checkbox" class="switch switch-sm dark:[tglbg::#1a1817]">
        <input type="checkbox" class="switch switch-md dark:[tglbg::#1a1817]">
        <input type="checkbox" class="switch switch-lg dark:[tglbg::#1a1817]">
      </div>
      <div flex items-center justify-center gap-2>
        <input type="checkbox" class="switch dark:[tglbg::#1a1817]">
        <input type="checkbox" o-red class="switch dark:[tglbg::#1a1817]">
        <input type="checkbox" o-blue class="switch dark:[tglbg::#1a1817]">
        <input type="checkbox" class="o-theme-900 dark:o-theme-100 switch dark:[tglbg::#1a1817]">
        <input type="checkbox" o-red class="switch text-op-100! [tglbg::blue-200] dark:[tglbg::teal-800]">
      </div>
      <div flex items-center justify-center gap-2>
        disabled: {{ disabled }}
        <input type="checkbox" :disabled :checked class="switch dark:[tglbg::#1a1817]">
        <input type="checkbox" :disabled :checked class="switch dark:[tglbg::#1a1817]">
      </div>
    </div>
  </div>
</template>
