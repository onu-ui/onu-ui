<template>
  <OCard title="Badge Component" desc="Badge component with custom style">
    <div flex="~ col gap-2">
      <div flex items-center justify-center gap-2 flex-wrap>
        <span badge="default">99+</span>
        <span badge="default outline">99+</span>
        <span badge="~">99+</span>
        <span badge="~ outline">99+</span>
      </div>
      <div flex items-center justify-center gap-2 flex-wrap>
        <span class="badge">Default</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-destructive">Destructive</span>
        <span class="badge badge-outline">Outline</span>
        <span class="badge badge-ghost">Ghost</span>
        <span class="badge badge-[#886886]">Custom</span>
        <a class="badge badge-link" href="#badge-link">Link</a>
      </div>
      <div flex items-center justify-center gap-2 flex-wrap>
        <span class="badge badge-secondary">
          <i data-icon="inline-start" i-carbon-checkmark-filled aria-hidden="true" />
          Verified
        </span>
        <span class="badge badge-outline">
          Generating
          <span data-icon="inline-end" class="spinner spinner-sm" role="status" aria-label="Generating" />
        </span>
        <a id="badge-link" class="badge badge-outline" href="https://github.com/onu-ui/onu-ui" target="_blank" rel="noreferrer">
          Open repository
          <i data-icon="inline-end" i-carbon-arrow-up-right aria-hidden="true" />
        </a>
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
      <div flex items-center justify-center gap-2 flex-wrap>
        <span class="badge badge-lg">99+</span>
        <span class="badge">99+</span>
      </div>
      <div flex items-center justify-center gap-2 flex-wrap>
        <span class="badge badge-red">Red</span>
        <span class="badge badge-emerald-600">Emerald</span>
        <span class="badge badge-[#886886]">#886886</span>
      </div>
      <div mt-2 flex items-center justify-center gap-2 flex-wrap>
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
