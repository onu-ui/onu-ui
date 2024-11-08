<script lang='ts' setup>
import { ref } from 'vue'
import OCard from './o-card.vue'

const disabled = ref(false)

function toggleDisabled() {
  disabled.value = !disabled.value
}
</script>

<template>
  <OCard title="Button Component" desc="Button component with custom style">
    <div flex="~ col gap-4">
      <button class="btn-default" :disabled="disabled">
        btn-default
      </button>

      <OCard title="Button Size">
        <div flex="~ gap-2 items-center">
          <button btn="default size-xs" :disabled="disabled">
            btn-xs
          </button>
          <button class="btn-sm btn-default" :disabled="disabled">
            btn-sm
          </button>
          <button class="btn-md btn-default" :disabled="disabled">
            btn-md
          </button>
          <button class="btn-lg btn-default" :disabled="disabled">
            btn-lg
          </button>
        </div>
        <div flex="~ gap-2 items-center" mt-2>
          <button btn="~ size-xs" :disabled="disabled">
            btn-xs
          </button>
          <button class="btn btn-sm" :disabled="disabled">
            btn-sm
          </button>
          <button class="btn btn-md" :disabled="disabled">
            btn-md
          </button>
          <button class="btn btn-lg" :disabled="disabled">
            btn-lg
          </button>
        </div>
      </OCard>

      <OCard title="Button Styles">
        <div flex="~ gap-4 items-center wrap">
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
        </div>

        <template #footer>
          <button btn @click="toggleDisabled()">
            Toggle Disabled
          </button>
        </template>
      </OCard>

      <OCard title="Button Colors">
        <div flex="~ gap-2">
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
      </OCard>
    </div>
  </OCard>
</template>
