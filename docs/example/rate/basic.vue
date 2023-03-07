<script lang="ts" setup>
import { ref } from 'vue'

const val = ref(2)
const valMax = ref(6)
</script>

<template>
  <div fscw gap-6>
    <div>
      <p text-baseText>
        Rate: {{ val }}
      </p>
      <ORate v-model="val" />
    </div>
    <div>
      <p text-baseText>
        Rate: {{ valMax }}
      </p>
      <ORate v-model="valMax" :max="10" />
    </div>
  </div>
</template>
