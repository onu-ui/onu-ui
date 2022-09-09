<template>
  <header h-16 fbc px-4 b="b dashed gray3">
    <div fsc gap-4>
      <img w-8 h-8 src="/logo.svg" alt="Onu Logo">
      <h1 text="white op-60">
        Playground
      </h1>
    </div>
    <o-button text o="info" target="_blank" rounded-full to="https://github.com/onu-ui/onu-ui">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      <!-- Github -->
    </o-button>
  </header>
</template>
