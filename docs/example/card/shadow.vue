<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt iusto, veritatis modi perferendis similique maiores cumque ipsam doloremque natus assumenda, obcaecati id voluptatibus, eum et rerum aut vero suscipit.'
</script>

<template>
  <div f-c-c space-y-5>
    <o-card title="Always" divider shadow="always">
      {{ content }}
    </o-card>
    <o-card title="Hover" divider shadow="hover">
      {{ content }}
    </o-card>
    <o-card title="Never" divider shadow="never">
      {{ content }}
    </o-card>
  </div>
</template>
