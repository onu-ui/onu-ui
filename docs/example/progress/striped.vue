<template>
  <div flex flex-col gap-2 class="w-1/2">
    <o-progress :percentage="80" stroke-width="lg" color="primary" bg-color="primary" striped />
    <o-progress :percentage="40" stroke-width="lg" color="secondary" bg-color="secondary" striped />
    <o-progress :percentage="30" stroke-width="lg" color="success" bg-color="success" striped />
    <o-progress :percentage="30" stroke-width="lg" color="warning" bg-color="warning" striped striped-flow :duration="5" />
  </div>
</template>
