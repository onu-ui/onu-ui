<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="70" stroke-width="xs" />
    <o-progress :percentage="70" stroke-width="sm" />
    <o-progress :percentage="70" stroke-width="md" />
    <o-progress :percentage="70" stroke-width="lg" />
    <o-progress :percentage="70" :stroke-width="20" />
    <o-progress :percentage="70" :stroke-width="30" :text-inside="true" />
  </div>
</template>
