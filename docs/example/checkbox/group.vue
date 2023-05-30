<script setup lang='ts'>
const checked = ref([3, 9])
</script>

<template>
  <div fscw gap-2>
    <o-checkbox-group v-model="checked" :min="2" :max="3">
      <o-checkbox :label="3">
        Option A
      </o-checkbox>
      <o-checkbox :label="6" disabled>
        Option B
      </o-checkbox>
      <o-checkbox :label="9">
        Option C
      </o-checkbox>
      <o-checkbox :label="12">
        Option D
      </o-checkbox>
      <o-checkbox :label="15">
        Option E
      </o-checkbox>
    </o-checkbox-group>
  </div>
</template>

<style scope>
</style>
