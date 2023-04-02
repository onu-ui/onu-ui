<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="50" stroke-width="lg" color="primary" bg-color="primary" />
    <o-progress :percentage="30" stroke-width="lg" color="secondary" bg-color="secondary" />
    <o-progress :percentage="60" stroke-width="lg" color="success" bg-color="success" />
    <o-progress :percentage="80" stroke-width="lg" color="warning" bg-color="warning" />
    <o-progress :percentage="20" stroke-width="lg" color="error" bg-color="error" />
    <o-progress :percentage="60" stroke-width="lg" color="info" bg-color="info" />
  </div>
</template>
