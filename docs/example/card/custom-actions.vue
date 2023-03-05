<script setup lang='ts'>
const cover = 'https://images.unsplash.com/photo-1660554042520-db71c7fea8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt iusto, veritatis modi perferendis similique maiores cumque ipsam doloremque natus assumenda, obcaecati id voluptatibus, eum et rerum aut vero suscipit.'
</script>

<template>
  <o-card title="Custom Actions" :content="content">
    <template #actions>
      <div fbc un-children="flex items-center gap-2">
        <div>
          <O-Avatar size="xs" :src="cover" />
          <span class="dark:c-darkText">User</span>
        </div>
        <div gap-4>
          <div o-primary>
            <o-icon cursor-pointer name="i-carbon-star" />
          </div>
          <div o-info>
            <o-icon cursor-pointer name="i-carbon-share" />
          </div>
          <div o-warning>
            <o-icon cursor-pointer name="i-carbon-face-wink-filled" />
          </div>
        </div>
      </div>
    </template>
  </o-card>
</template>
