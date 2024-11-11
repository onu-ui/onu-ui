<template>
  <OCard title="Badge Component" desc="Badge component with custom style">
    <div flex="~ col gap-2">
      <div flex items-center justify-center gap-2>
        <span badge="default">99+</span>
        <span badge="default outline">99+</span>
        <span badge="~">99+</span>
        <span badge="~ outline">99+</span>
      </div>
      <div flex items-center justify-center gap-2>
        <span class="badge badge-lg">99+</span>
        <span class="badge">99+</span>
        <span class="badge badge-sm">99+</span>
        <span class="badge badge-xs">99+</span>
      </div>
      <div flex items-center justify-center gap-2>
        <div class="badge badge-lg" />
        <div class="badge badge-md" />
        <div class="badge badge-sm" />
        <div class="badge badge-xs" />
      </div>
      <div flex items-center justify-center gap-2>
        <div relative>
          <i i-carbon-notification text-2xl />
          <div badge="~ pos-tl dot purple xs" />
        </div>
        <div relative>
          <i i-carbon-notification text-2xl />
          <div badge="~ pos-tr dot purple xs" />
        </div>
        <div relative>
          <i i-carbon-notification text-2xl />
          <div badge="~ pos-bl dot purple xs" />
        </div>
        <div relative>
          <i i-carbon-notification text-2xl />
          <div badge="~ pos-br dot purple xs" />
        </div>
      </div>
      <div mt-2 flex items-center justify-center gap-2>
        <button class="btn" mr-4>
          Unread Messages
          <div class="badge badge-pos-tl badge-xs badge-yellow">
            99+
          </div>
          <div class="badge badge-pos-tr badge-xs badge-orange">
            99+
          </div>
          <div class="badge badge-pos-bl badge-xs badge-green">
            99+
          </div>
          <div class="badge badge-pos-br badge-xs badge-blue">
            99+
          </div>
        </button>
      </div>
    </div>
  </OCard>
</template>
