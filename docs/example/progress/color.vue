<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="50" stroke-width="lg" color="primary" />
    <o-progress :percentage="30" stroke-width="lg" color="secondary" />
    <o-progress :percentage="60" stroke-width="lg" color="success" />
    <o-progress :percentage="80" stroke-width="lg" color="warning" />
    <o-progress :percentage="20" stroke-width="lg" color="error" />
    <o-progress :percentage="60" stroke-width="lg" color="info" />
    <o-progress :percentage="40" stroke-width="lg" color="linear-gradient(to right, #0c02ba, #00ff95)" />
  </div>
</template>
