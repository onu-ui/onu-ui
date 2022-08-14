<template>
  <header mb4 h-16 fbc px-4 b="b dashed gray3">
    <div fsc gap-4>
      <img w-8 h-8 src="/logo.svg" alt="">
      <h1 text="primary white">Playground</h1>
    </div>
    <o-button text o="primary" to="https://github.com/onu-ui/onu-ui">
      <template #icon>
        <div i-carbon-logo-github></div>
      </template>
      Github
    </o-button>
  </header>
  <main class="w-65% ma space-y-8">
    <slot />
  </main>
</template>
