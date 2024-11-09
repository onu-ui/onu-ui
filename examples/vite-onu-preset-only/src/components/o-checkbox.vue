<script lang='ts' setup>
import { ref } from 'vue'
import OCard from './o-card.vue'

const isChecked = ref(false)
const isDisabled = ref(false)
</script>

<template>
  <OCard title="Checkbox" desc="A checkbox is a form element that allows the user to select multiple options from a range of options." show-close>
    <div class="flex gap-2 items-center">
      <label checkbox="~ xs">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark />
        </div>
      </label>
      <label checkbox="~ sm">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark />
        </div>
      </label>
      <label checkbox="~ md">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark />
        </div>
      </label>
      <label checkbox="~ lg">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark />
        </div>
      </label>
    </div>
    <div class="flex gap-2" mt-2>
      <label checkbox="~ dark dark:light">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark text-light dark:text-dark />
        </div>
      </label>

      <label checkbox="~ theme-400">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark text-light dark:text-dark />
        </div>
      </label>

      <label checkbox="~ theme-400 dark:purple">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          🤪
        </div>
      </label>

      <label checkbox="~ red">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot text-xs>
          {{ isChecked ? 'ON' : '' }}
        </div>
      </label>
    </div>

    <template #footer>
      <label for="checkedControl" flex gap-2 cursor-pointer>
        <label checkbox>
          <input id="checkedControl" v-model="isChecked" class="peer" type="checkbox">
          <div checkbox-dot>
            <i i-carbon-checkmark />
          </div>
        </label>
        <span>Checked</span>
      </label>

      <label for="disabledControl" flex gap-2 cursor-pointer>
        <label checkbox>
          <input id="disabledControl" v-model="isDisabled" class="peer" type="checkbox">
          <div checkbox-dot>
            <i i-carbon-checkmark />
          </div>
        </label>
        <span>Disabled</span>
      </label>
    </template>
  </OCard>
</template>
