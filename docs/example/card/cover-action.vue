<script setup lang='ts'>
const cover1 = 'https://placeimg.com/400/225/arch'
const cover2 = 'https://raw.githubusercontent.com/imageList/imglist/master/img/20221104095918.png'
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt iusto, veritatis modi perferendis similique maiores cumque ipsam doloremque natus assumenda, obcaecati id voluptatibus, eum et rerum aut vero suscipit.'
const description = 'This a description'
</script>

<template>
  <div fscw space-x-0 md:space-x-4>
    <o-card :cover="cover1" :description="description" title="Title & Content" :content="content" w-96>
      <template #actions>
        <o-button type="primary">
          TRY NOW!
        </o-button>
      </template>
    </o-card>
    <o-card :cover="cover2" :description="description" title="Title & Content" :content="content" w-96>
      <template #extra>
        <o-button size="xs" text>
          <template #icon>
            <o-icon name="i-carbon-share" />
          </template>
        </o-button>
      </template>
      <template #actions>
        <div fbc un-children="flex items-center gap-2">
          <div>
            <O-Avatar size="xs" :src="cover2" />
            <span class="dark:c-darkText">Breaking App</span>
          </div>
          <div>
            <o-button type="secondary">
              GET APP
            </o-button>
          </div>
        </div>
      </template>
    </o-card>
  </div>
</template>
