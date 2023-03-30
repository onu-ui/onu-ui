<template>
  <div fscw gap-2>
    <o-affix>
      <o-button shadow dashed type="primary">
        Offset top 0px
      </o-button>
    </o-affix>
    <o-affix :offset="120">
      <o-button shadow dashed type="secondary">
        Offset top 120px
      </o-button>
    </o-affix>
  </div>
</template>
