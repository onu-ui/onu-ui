<script setup lang="ts">
import { ref } from 'vue'
const expandedNames = ref(['1'])
</script>

<template>
  <o-card title="Collapse">
    <div space-y-2>
      <o-collapse v-model:expanded-names="expandedNames">
        <o-collapse-item name="1" title="title1">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione rerum nisi quidem explicabo!
            Cumque odit explicabo aliquid reprehenderit a deserunt.
          </div>
        </o-collapse-item>
        <o-collapse-item name="2" title="title2">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione rerum nisi quidem explicabo!
            Cumque odit explicabo aliquid reprehenderit a deserunt.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora architecto nemo, ducimus totam unde minus voluptatem,
            hic tenetur fugit natus saepe veritatis? Ipsa est blanditiis perspiciatis rerum hic voluptatem a!
          </div>
        </o-collapse-item>
        <o-collapse-item name="3" title="title3">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione rerum nisi quidem explicabo!
            Cumque odit explicabo aliquid reprehenderit a deserunt.
          </div>
        </o-collapse-item>
      </o-collapse>
    </div>
  </o-card>
</template>
