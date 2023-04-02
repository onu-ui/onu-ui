<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="100" status="success" />
    <o-progress :percentage="100" status="warning" />
    <o-progress :percentage="50" status="error" />
  </div>
</template>
