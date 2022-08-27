<script lang="ts" setup>
const checkVal = ref(0)
const handleClick = () => {
  checkVal.value = 1
}
</script>

<template>
  <Card name="Checkbox">
    <div space-y-2>
      <div fsc gap-2 @click="handleClick">
        {{checkVal}}
        <o-checkbox
          indeterminate
          v-model="checkVal"
          label="checkbox"
          :true-label="1"
          :false-label="0"
        />
      </div>
    </div>
  </Card>
</template>
