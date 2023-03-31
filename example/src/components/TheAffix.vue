<script setup lang='ts'>

</script>

<template>
  <OCard title="Affix">
    <div space-y-2>
      <div fsc gap-2>
        <o-affix>
          <o-button shadow dashed type="primary">
            Offset top 0px
          </o-button>
        </o-affix>
        <o-affix :offset="40">
          <o-button shadow dashed type="secondary">
            Offset top 40px
          </o-button>
        </o-affix>
      </div>
      <div fsc gap-2>
        <div class="affix-container text-center w-full h-400px rounded-4px bg-blue-300">
          <o-affix target=".affix-container" :offset="80">
            <o-button shadow dashed type="primary">
              Target container
            </o-button>
          </o-affix>
        </div>
      </div>
      <div fsc gap-2>
        <o-affix position="bottom" :offset="20">
          <o-button shadow dashed type="success">
            Offset bottom 20px
          </o-button>
        </o-affix>
      </div>
    </div>
  </OCard>
</template>
