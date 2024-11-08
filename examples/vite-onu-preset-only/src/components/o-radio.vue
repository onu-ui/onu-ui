<script lang='ts' setup>
import { ref } from 'vue'
import OCard from './o-card.vue'

const model = ref('foo')

const valueList = ['foo', 'bar', 'baz', 'qux', 'quux']

function handleChange(e: Event) {
  model.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <OCard title="Radio Component" desc="Radio component with custom style">
    <div flex="~ col gap-2">
      <div flex="~ gap-2">
        <label v-for="v in valueList" :key="v" radio="~ xs theme-500" :for="v">
          <input
            :id="v" :value="v" name="custom" type="radio" :checked="model === v"
            class="peer"
            @change="handleChange"
          >
          <span class="radio-dot" />
        </label>
      </div>
      <div flex="~ gap-2">
        <label v-for="v in valueList" :key="v" radio="~ sm theme-500" :for="v">
          <input
            :id="v" :value="v" name="custom" type="radio" :checked="model === v"
            class="peer"
            @change="handleChange"
          >
          <span class="radio-dot" />
        </label>
      </div>
      <div flex="~ gap-2">
        <label v-for="v in valueList" :key="v" radio="~ md theme-800" :for="v">
          <input
            :id="v" :value="v" name="custom" type="radio" :checked="model === v"
            class="peer"
            @change="handleChange"
          >
          <span class="radio-dot" />
        </label>
      </div>
      <div flex="~ gap-2">
        <label v-for="v in valueList" :key="v" radio="~ lg square teal" :for="v">
          <input
            :id="v"
            :value="v" name="custom" type="radio" :checked="model === v"
            class="peer"
            @change="handleChange"
          >
          <span class="radio-dot" />
        </label>
      </div>
    </div>
  </OCard>
</template>
