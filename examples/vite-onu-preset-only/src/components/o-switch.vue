<script lang='ts' setup>
import { ref } from 'vue'

const checked = ref(false)
const disabled = ref(false)
</script>

<template>
  <div>
    <div class="space-y-2 mt-4">
      <div class="text-center flex gap-2">
        <button btn @click="checked = !checked">
          Toggle checked
        </button>
        <button btn @click="disabled = !disabled">
          Toggle disabled
        </button>
      </div>

      <div flex items-center gap-2>
        <label switch="~ default">
          <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
          <span switch-dot dot-red />
        </label>

        <label switch="~ xs purple" bg-amber>
          <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
          <span switch-dot />
        </label>

        <label switch="~ sm">
          <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
          <span switch-dot />
        </label>

        <label switch="~ md">
          <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
          <span switch-dot />
        </label>

        <label switch="~ lg">
          <input v-model="checked" class="peer" type="checkbox" :disabled="disabled">
          <span switch-dot />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

input:disabled + .slider {
  background-color: #e6e6e6;
  cursor: not-allowed;
}

input:disabled + .slider:before {
  background-color: #bfbfbf;
}

</style>
