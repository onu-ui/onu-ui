<script lang='ts' setup>
import { ref } from 'vue'

const disabled = ref(false)

function toggleDisabled() {
  disabled.value = !disabled.value
}

const index = ref(0)
</script>

<template>
  <div>
    <div flex items-center justify-center gap-10 mb-10>
      <button class="btn" @click="toggleDisabled()">
        <i inline-block i-carbon:favorite-filled />
        Toggle Disabled
      </button>
    </div>

    <div gap-2 flex-wrap>
      <div flex items-center justify-center gap-2>
        Default:

        <button class="btn-default" :disabled="disabled">
          btn-default
        </button>
      </div>

      <div flex items-center justify-center gap-2>
        Size:
        <button btn="size-xs default" :disabled="disabled">
          btn-xs
        </button>
        <button class="btn-sm btn-default" :disabled="disabled">
          btn-sm
        </button>
        <button class="btn btn-md" :disabled="disabled">
          btn-md
        </button>
        <button class="btn btn-lg" :disabled="disabled">
          btn-lg
        </button>
        <div btn>
          btn
        </div>
      </div>

      <div flex items-center justify-center gap-2>
        <button class="btn" animate-pulse>
          loading <i inline-block i-ri-loader-2-fill animate-spin />
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

      <div flex items-center justify-center gap-2 my-2>
        <div class="btn-group">
          <button v-for="i in 4" :key="i" class="btn btn-solid-cover" :class="index === i - 1 ? 'btn-group-active' : ''" @click="index = i - 1">
            Button
          </button>
        </div>

        <div class="btn-group-v">
          <button v-for="i in 4" :key="i" class="btn btn-solid-cover" :class="index === i - 1 ? 'btn-group-active' : ''" @click="index = i - 1">
            Button
          </button>
        </div>
      </div>
      <div flex items-center justify-center gap-2>
        <button btn btn-red hover:btn-red-600>
          Red
        </button>
        <button btn="~ yellow hover:yellow-600">
          Yellow
        </button>
        <button btn o-blue hover:o-blue-600>
          Blue
        </button>
      </div>
    </div>
  </div>
</template>
