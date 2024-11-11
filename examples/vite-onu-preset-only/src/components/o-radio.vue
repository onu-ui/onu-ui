<script lang='ts' setup>
const model = ref('foo')
const model2 = ref('v1')

const size = ['radio-xs', 'radio-sm', 'radio-md', 'radio-lg']

const valueList = ['foo', 'bar', 'baz', 'qux']
const valueList2 = ['v1', 'v2', 'v3', 'v4']

function handleChange(e: Event) {
  model.value = (e.target as HTMLInputElement).value
}
function handleChange2(e: Event) {
  model2.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <OCard title="Radio Component" desc="Radio component with custom style">
    <div flex="~ col gap-2">
      <div flex="~ gap-2">
        <label v-for="(v, idx) in valueList" :key="v" radio="~ theme-400" :class="size[idx]" :for="v">
          <input
            :id="v"
            :value="v" name="custom" type="radio" :checked="model === v"
            class="peer"
            @change="handleChange"
          >
          <span class="radio-dot" />
        </label>
      </div>

      <div flex="~ gap-2 items-center">
        <label v-for="(v, idx) in valueList2" :key="v" radio="~ square purple dark:yellow" :class="size[idx]" :for="v">
          <input
            :id="v"
            :value="v" name="custom2" type="radio" :checked="model === v"
            class="peer"
            @change="handleChange2"
          >
          <span class="radio-dot" />
        </label>
      </div>
    </div>
  </OCard>
</template>
