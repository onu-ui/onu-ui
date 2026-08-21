<script lang='ts' setup>
const isChecked = ref(false)
const isDisabled = ref(false)
</script>

<template>
  <OCard
    title="Checkbox"
    desc="A checkbox is a form element that allows the user to select multiple options from a range of options."
    show-close
  >
    <div class="flex gap-2">
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
          <i i-carbon-checkmark />
        </div>
      </label>

      <label checkbox="~ ">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          <i i-carbon-checkmark />
        </div>
      </label>

      <label checkbox="~  dark:purple">
        <input v-model="isChecked" class="peer" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot>
          🤪
        </div>
      </label>

      <label checkbox="~ red dark:yellow">
        <input v-model="isChecked" class="peer" :checked="isChecked" type="checkbox" :disabled="isDisabled">
        <div checkbox-dot text-xs>
          {{ isChecked ? 'ON' : '' }}
        </div>
      </label>
    </div>

    <template #footer>
      <label for="checkedControl" flex items-center gap-2 cursor-pointer select-none>
        <label switch>
          <input id="checkedControl" v-model="isChecked" class="peer" type="checkbox">
          <span switch-dot />
        </label>
        <span>Checked</span>
      </label>

      <label for="disabledControl" flex items-center gap-2 cursor-pointer select-none>
        <label switch="~ yellow">
          <input id="disabledControl" v-model="isDisabled" class="peer" type="checkbox">
          <span switch-dot />
        </label>
        <span>Disabled</span>
      </label>

      <label for="themeControl" flex items-center gap-2 cursor-pointer select-none>
        <label switch="~ ">
          <input id="themeControl" class="peer" type="checkbox" :checked="isDark" @change="toggleDark()">
          <span switch-dot />
        </label>
        <span>Toggle Dark</span>
      </label>
    </template>
  </OCard>
</template>
