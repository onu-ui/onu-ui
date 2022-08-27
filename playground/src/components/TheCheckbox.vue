<script lang="ts" setup>

const checkVal = ref('string-true')
const handleChange = ()=>{
  console.log(checkVal.value)
}
</script>

<template>
  <Card name="Checkbox">
    <div space-y-2>
      <div fsc gap-2>
        {{checkVal}}
        <o-checkbox
            true-label="string-true" false-label="string-false"
          @change="handleChange"
          v-model="checkVal"
          label="checkbox"
        />

      </div>
    </div>
  </Card>
</template>
