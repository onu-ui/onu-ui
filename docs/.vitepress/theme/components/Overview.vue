<script setup lang="ts">
const groups = [
  {
    name: 'Foundation',
    description: 'Core building blocks for structure and actions.',
    items: [
      { name: 'Button', description: 'Trigger actions with clear hierarchy.', icon: 'i-carbon-cursor-1', href: '/components/button' },
      { name: 'CSS primitives', description: 'Compose interface styles with atomic rules.', icon: 'i-carbon-code', href: '/components/css-primitives' },
      { name: 'Badge', description: 'Add compact status and metadata.', icon: 'i-carbon-tag', href: '/components/badge' },
      { name: 'Kbd', description: 'Display keyboard input and shortcuts.', icon: 'i-carbon-keyboard', href: '/components/kbd' },
      { name: 'Separator', description: 'Create quiet visual divisions.', icon: 'i-carbon-subtract', href: '/components/separator' },
    ],
  },
  {
    name: 'Form',
    description: 'Accessible controls for collecting user input.',
    items: [
      { name: 'Input', description: 'Capture text and structured values.', icon: 'i-carbon-text-short-paragraph', href: '/components/input' },
      { name: 'Checkbox', description: 'Select one or multiple options.', icon: 'i-carbon-checkbox-checked', href: '/components/checkbox' },
      { name: 'Switch', description: 'Toggle an immediate setting.', icon: 'i-carbon-toggle-filled', href: '/components/switch' },
      { name: 'Radio', description: 'Choose a single option from a set.', icon: 'i-carbon-radio-button-checked', href: '/components/radio' },
    ],
  },
  {
    name: 'Display',
    description: 'Present content, progress, and system feedback.',
    items: [
      { name: 'Avatar', description: 'Represent a person or identity.', icon: 'i-carbon-user-avatar', href: '/components/avatar' },
      { name: 'Card', description: 'Group related content and actions.', icon: 'i-carbon-container-software', href: '/components/card' },
      { name: 'Empty', description: 'Guide users when no data exists.', icon: 'i-carbon-inbox', href: '/components/empty' },
      { name: 'Skeleton', description: 'Preview content while it loads.', icon: 'i-carbon-row', href: '/components/skeleton' },
      { name: 'Alert', description: 'Surface important contextual messages.', icon: 'i-carbon-warning-alt', href: '/components/alert' },
      { name: 'Spinner', description: 'Indicate an active operation.', icon: 'i-carbon-progress-bar-round', href: '/components/spinner' },
    ],
  },
  {
    name: 'Interaction',
    description: 'Patterns for richer interface behaviour.',
    items: [
      { name: 'Interactive components', description: 'Explore composed interaction patterns.', icon: 'i-carbon-touch-1', href: '/components/interactive' },
    ],
  },
]

const componentCount = groups.reduce((total, group) => total + group.items.length, 0)
</script>

<template>
  <div class="overview">
    <header class="overview__header">
      <p>Component library</p>
      <h2>Everything you need to compose an interface.</h2>
      <span>Browse {{ componentCount }} documented components and primitives.</span>
    </header>

    <section v-for="group in groups" :key="group.name" class="overview-group" :aria-labelledby="`group-${group.name}`">
      <div class="overview-group__heading">
        <div>
          <h3 :id="`group-${group.name}`">
            {{ group.name }}
          </h3>
          <p>{{ group.description }}</p>
        </div>
        <span>{{ String(group.items.length).padStart(2, '0') }}</span>
      </div>

      <ul class="component-list">
        <li v-for="item in group.items" :key="item.name">
          <a :href="item.href">
            <span class="component-list__icon"><i :class="item.icon" aria-hidden="true" /></span>
            <span class="component-list__copy">
              <strong>{{ item.name }}</strong>
              <small>{{ item.description }}</small>
            </span>
            <i class="i-carbon-arrow-up-right component-list__arrow" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.overview {
  --overview-border: color-mix(in srgb, var(--vp-c-text-1) 13%, transparent);
  padding-bottom: 56px;
}

.overview__header {
  max-width: 760px;
  padding: 12px 0 64px;
}

.overview__header p {
  margin: 0 0 16px;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.overview__header h2 {
  margin: 0;
  border: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 630;
  letter-spacing: -0.045em;
  line-height: 1.08;
  text-wrap: balance;
}

.overview__header span {
  display: block;
  margin-top: 20px;
  color: var(--vp-c-text-2);
  font-size: 15px;
}

.overview-group {
  display: grid;
  grid-template-columns: minmax(180px, 0.3fr) minmax(0, 0.7fr);
  gap: clamp(28px, 6vw, 80px);
  padding: 52px 0 58px;
  border-top: 1px solid var(--overview-border);
}

.overview-group__heading {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.overview-group__heading h3,
.overview-group__heading p { margin: 0; }
.overview-group__heading h3 { color: var(--vp-c-text-1); font-size: 18px; font-weight: 620; }
.overview-group__heading p { max-width: 210px; margin-top: 8px; color: var(--vp-c-text-2); font-size: 13px; line-height: 1.55; }
.overview-group__heading > span { color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); font-size: 11px; }

.component-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; margin: 0 !important; padding: 1px !important; background: var(--overview-border); list-style: none !important; }
.component-list li { margin: 0; background: var(--vp-c-bg); }
.component-list a { display: grid; grid-template-columns: 42px minmax(0, 1fr) 18px; align-items: center; gap: 14px; min-height: 104px; padding: 18px; color: inherit; text-decoration: none; transition: background-color 180ms ease; }
.component-list a:hover { background: var(--vp-c-bg-soft); }
.component-list__icon { display: grid; width: 42px; height: 42px; place-items: center; border-radius: var(--onu-docs-radius); background: color-mix(in srgb, var(--vp-c-brand-1) 10%, transparent); color: var(--vp-c-brand-1); font-size: 19px; }
.component-list__copy { display: flex; min-width: 0; flex-direction: column; gap: 5px; }
.component-list__copy strong { color: var(--vp-c-text-1); font-size: 14px; font-weight: 620; }
.component-list__copy small { overflow: hidden; color: var(--vp-c-text-2); font-size: 12px; line-height: 1.45; text-overflow: ellipsis; white-space: nowrap; }
.component-list__arrow { color: var(--vp-c-text-3); font-size: 16px; transition: color 180ms ease, transform 180ms ease; }
.component-list a:hover .component-list__arrow { color: var(--vp-c-brand-1); transform: translate(2px, -2px); }

@media (max-width: 760px) {
  .overview__header { padding-bottom: 48px; }
  .overview-group { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
  .overview-group__heading p { max-width: 360px; }
}

@media (max-width: 520px) {
  .component-list { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .component-list a,
  .component-list__arrow { transition: none; }
}
</style>
