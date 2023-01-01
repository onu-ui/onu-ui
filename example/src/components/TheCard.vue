<script lang="ts" setup>
const cover = 'https://images.unsplash.com/photo-1660554042520-db71c7fea8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt iusto, veritatis modi perferendis similique maiores cumque ipsam doloremque natus assumenda, obcaecati id voluptatibus, eum et rerum aut vero suscipit.'
const description = 'This a description'
</script>

<template>
  <OCard title="Card">
    <div grid="~ gap-4 cols-1 md:cols-2 xl:cols-3">
      <o-card title="Base Title" extra="More" />
      <o-card title="Has Description" :description="description" />
      <o-card>
        <template #header>
          <div fsc gap-2>
            Custom Header
            <o-icon name="i-fluent-emoji-astonished-face" />
          </div>
          <o-icon cursor-pointer name="i-carbon-close" />
        </template>
      </o-card>
      <o-card :content="content" />
      <o-card title="Bordered" bordered hoverable>
        {{ content }}
      </o-card>

      <o-card title="Custom Actions" :content="content">
        <template #actions>
          <div fbc un-children="flex items-center gap-2">
            <div>
              <O-Avatar size="xs" :src="cover" />
              <span>User</span>
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
      <o-card :cover="cover" :description="description" title="Title & Content" :content="content">
        <template #extra>
          <o-button size="xs" text o-white>
            <template #icon>
              <o-icon name="i-carbon-share" />
            </template>
          </o-button>
        </template>
        <template #actions>
          <div fbc un-children="flex items-center gap-2">
            <div>
              <O-Avatar size="xs" :src="cover" />
              <span>User</span>
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
      <o-card
        bordered
        hoverable
        :cover="cover"
        extra="More"
        :description="description"
        title="Title & Content"
        :content="content"
      >
        <template #actions>
          <div fbc un-children="flex items-center gap-2">
            <div>
              <O-Avatar size="xs" :src="cover" />
              <span>User</span>
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
    </div>
  </OCard>
</template>
