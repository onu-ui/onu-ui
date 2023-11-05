<script lang='ts' setup>
import { ref } from 'vue'

const disabled = ref(true)

document.body.classList.add('dark')

function toggleTheme() {
  document.body.classList.toggle('dark')
}

function toggleDisabled() {
  disabled.value = !disabled.value
}
</script>

<template>
  <div>
    <div fcc gap-10 mb-10>
      <button class="btn" @click="toggleDisabled">
        <i inline-block i-carbon:favorite-filled />
        Toggle Disabled
      </button>
      <button class="btn" @click="toggleTheme">
        Toggle Theme
      </button>
    </div>

    <div fccc gap-2 flex-wrap>
      <div fcc gap-2>
        Default:

        <button class="btn-default" :disabled="disabled">
          btn-default
        </button>
      </div>

      <div fcc gap-2>
        Size:
        <button class="btn-(~ xs default)" :disabled="disabled">
          btn btn-xs
        </button>
        <button class="btn btn-sm btn-default" :disabled="disabled">
          btn btn-sm
        </button>
        <button class="btn btn-md" :disabled="disabled">
          btn btn-md
        </button>
        <button class="btn btn-lg" :disabled="disabled">
          btn btn-lg
        </button>
      </div>

      <button class="btn btn-xs aspect-square rd-full">
        <i inline-block i-carbon:favorite-filled />
      </button>
      <button class="btn btn-ghost" :disabled="disabled">
        btn btn-ghost
      </button>
      <button class="btn btn-outline" :disabled="disabled">
        btn btn-outline
      </button>
      <button class="btn btn-dashed" :disabled="disabled">
        btn-dashed
      </button>
      <button class="btn btn-link" :disabled="disabled">
        btn btn-link
      </button>
      <button :disabled="disabled" class="btn">
        disabled
      </button>
    </div>
  </div>
</template>
