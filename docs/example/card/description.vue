<script setup lang="ts">
const description = 'This a description'
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt iusto, veritatis modi perferendis similique maiores cumque ipsam doloremque natus assumenda, obcaecati id voluptatibus, eum et rerum aut vero suscipit.'
</script>

<template>
  <o-card title="Has Description" :description="description">
    {{ content }}
  </o-card>
</template>
