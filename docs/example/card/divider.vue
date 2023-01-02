<script setup lang='ts'>
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt iusto, veritatis modi perferendis similique maiores cumque ipsam doloremque natus assumenda, obcaecati id voluptatibus, eum et rerum aut vero suscipit.'
</script>

<template>
  <div f-c-c space-y-5>
    <o-card title="Divider with shadow" divider>
      {{ content }}
    </o-card>
    <o-card title="Divider without shadow" divider shadow="never">
      {{ content }}
    </o-card>
  </div>
</template>
