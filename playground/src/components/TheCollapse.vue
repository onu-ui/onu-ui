<script setup lang="ts">
function handleToClickHeader(activeNames: (string | number)[]) {
  // console.log(activeNames)
}
const expandedNames = ref(['1', '2'])
</script>

<template>
  <o-card title="Collapse" o="white">
    <div space-y-2>
      <o-collapse v-model:expanded-names="expandedNames" @change="handleToClickHeader">
        <o-collapse-item name="1" title="basic">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione rerum nisi quidem explicabo!
            Cumque odit explicabo aliquid reprehenderit a deserunt.
          </div>
        </o-collapse-item>
        <o-collapse-item name="2" arrow-placement="right" title="right arrow">
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
        <o-collapse-item disabled name="3" arrow-placement="right" title="disabled">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione rerum nisi quidem explicabo!
            Cumque odit explicabo aliquid reprehenderit a deserunt.
          </div>
        </o-collapse-item>
      </o-collapse>
    </div>
    <div space-y-2>
      <o-collapse accordion>
        <o-collapse-item name="1" title="accordion" arrow-placement="right">
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
        <o-collapse-item icon="i-carbon-logo-github" name="2" arrow-placement="right" title="accordion">
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
      </o-collapse>
    </div>
  </o-card>
</template>
