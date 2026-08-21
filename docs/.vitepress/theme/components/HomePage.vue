<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { teamMembers } from '../data/contributors'

const features = [
  { number: '01', icon: 'i-carbon-code', title: 'Pure atomic css', details: 'No need to introduce additional css files' },
  { number: '02', icon: 'i-carbon-flash', title: 'Simple and efficient', details: 'Render UI with the least amount of code' },
  { number: '03', icon: 'i-carbon-assembly-cluster', title: 'Expand Easily', details: 'Atomic css allows you to freely combine the styles you want' },
  { number: '04', icon: 'i-carbon-color-palette', title: 'Dynamic theme', details: 'Generated with Magicolor that conform to human visual perception', link: 'https://github.com/zyyv/magic-color', linkLabel: 'Magicolor' },
  { number: '05', icon: 'i-carbon-contrast', title: 'Toggle theme', details: 'Automatically adapts to dark / light mode' },
  { number: '06', icon: 'i-carbon-pen-fountain', title: 'UI Design', details: 'Neat & beautiful crafted UI components', link: '/components/overview', linkLabel: 'Getting Started' },
  { number: '07', icon: 'i-carbon-filter-edit', title: 'On demand', details: 'Provide resolver to automatically import only used components' },
  { number: '08', icon: 'i-carbon-types', title: 'Typescript Support', details: 'Support TypeScript & type checked & type inference' },
  { number: '09', icon: 'i-carbon-cube', title: 'Iconify Icons', details: 'Use any icon from the library you love', link: 'https://unocss.dev/presets/icons', linkLabel: 'Learn more' },
]
</script>

<template>
  <main class="home-page">
    <section class="hero" aria-labelledby="home-title">
      <div class="hero__content">
        <div class="hero__eyebrow">
          <span class="hero__mark" aria-hidden="true" />
          Vue components, powered by UnoCSS
        </div>
        <h1 id="home-title" class="hero__title">
          Opinionated and<br><span>lightweight UI library.</span>
        </h1>
        <p class="hero__tagline">
          UnoCSS · Pure Shortcutify · On demand
        </p>
        <div class="hero__actions">
          <a class="hero__primary" href="/guide/getting-started">
            Getting Started <i class="i-carbon-arrow-up-right" aria-hidden="true" />
          </a>
          <a class="hero__link" href="/components/overview">View Components</a>
          <a class="hero__link" href="https://onu.zyob.top/play/" target="_blank" rel="noreferrer">Playground (TODO)</a>
        </div>
      </div>

      <div class="hero__workbench" aria-label="Onu UI code example">
        <div class="workbench__bar">
          <span>button.vue</span>
          <span class="workbench__status">ready</span>
        </div>
        <div class="workbench__body">
          <div><span class="code-muted">&lt;</span><span class="code-violet">button</span></div>
          <div class="workbench__line--indent">
            <span class="code-blue">class</span><span class="code-muted">=</span><span class="code-green">&quot;btn btn-violet&quot;</span>
          </div>
          <div class="workbench__line--indent">
            <span class="code-blue">size</span><span class="code-muted">=</span><span class="code-green">&quot;sm&quot;</span>
          </div>
          <div><span class="code-muted">&gt;</span>Build interface<span class="code-muted">&lt;/</span><span class="code-violet">button</span><span class="code-muted">&gt;</span></div>
        </div>
        <div class="workbench__preview">
          <span class="workbench__label">PREVIEW</span>
          <button type="button">
            Build interface <i class="i-carbon-arrow-right" />
          </button>
        </div>
      </div>
    </section>

    <section class="feature-section" aria-labelledby="features-title">
      <div class="section-heading">
        <p>Built for composability</p>
        <h2 id="features-title">
          A small system that stays out of your way.
        </h2>
      </div>
      <ol class="feature-list">
        <li v-for="feature in features" :key="feature.title" class="feature-item">
          <span class="feature-item__number">{{ feature.number }}</span>
          <i :class="feature.icon" class="feature-item__icon" aria-hidden="true" />
          <div class="feature-item__copy">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.details }}</p>
          </div>
          <a v-if="feature.link" :href="feature.link" :target="feature.link.startsWith('http') ? '_blank' : undefined" rel="noreferrer">
            {{ feature.linkLabel }} <i class="i-carbon-arrow-up-right" aria-hidden="true" />
          </a>
        </li>
      </ol>
    </section>

    <section class="team-section" aria-labelledby="team-title">
      <div class="section-heading">
        <p>Open source, by people</p>
        <h2 id="team-title">
          Meet The Team
        </h2>
      </div>
      <VPTeamMembers size="small" :members="teamMembers" />
    </section>
  </main>
</template>

<style scoped>
.home-page {
  --home-border: color-mix(in srgb, var(--vp-c-text-1) 13%, transparent);
  width: min(100% - 40px, 1240px);
  margin: 0 auto;
  padding: 64px 0 96px;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
  align-items: center;
  gap: clamp(48px, 8vw, 112px);
  min-height: 610px;
  border-bottom: 1px solid var(--home-border);
}

.hero__eyebrow,
.section-heading p,
.workbench__label {
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
}

.hero__mark {
  width: 8px;
  height: 8px;
  background: var(--vp-c-brand-1);
  transform: rotate(45deg);
}

.hero__title {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(48px, 6vw, 78px);
  font-weight: 650;
  letter-spacing: -0.055em;
  line-height: 0.98;
}

.hero__title span { color: var(--vp-c-text-2); }

.hero__tagline {
  margin: 28px 0 0;
  color: var(--vp-c-text-2);
  font-size: 17px;
  line-height: 1.7;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 22px;
  margin-top: 38px;
}

.hero__actions a {
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color 180ms ease, background-color 180ms ease, transform 180ms ease;
}

.hero__primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: var(--onu-docs-radius);
  background: var(--vp-c-brand-1);
  color: white !important;
}

.hero__primary:hover { background: var(--vp-c-brand-2); transform: translateY(-2px); }
.hero__link { color: var(--vp-c-text-2); }
.hero__link:hover { color: var(--vp-c-text-1); }

.hero__workbench {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--home-border);
  border-radius: calc(var(--onu-docs-radius) + 8px);
  background: var(--vp-c-bg-soft);
  box-shadow: 24px 28px 0 color-mix(in srgb, var(--vp-c-brand-1) 7%, transparent);
}

.hero__workbench::before {
  position: absolute;
  top: -42px;
  right: -38px;
  width: 148px;
  height: 148px;
  border: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 28%, transparent);
  border-radius: 50%;
  content: '';
}

.workbench__bar,
.workbench__preview { display: flex; align-items: center; justify-content: space-between; }

.workbench__bar {
  min-height: 48px;
  padding: 0 18px;
  border-bottom: 1px solid var(--home-border);
  color: var(--vp-c-text-2);
  font-family: var(--vp-font-family-mono);
  font-size: 12px;
}

.workbench__status { color: var(--vp-c-brand-1); }
.workbench__status::before { display: inline-block; width: 6px; height: 6px; margin-right: 7px; border-radius: 50%; background: currentColor; content: ''; }

.workbench__body {
  min-height: 230px;
  padding: 44px 38px;
  background-image: linear-gradient(var(--home-border) 1px, transparent 1px), linear-gradient(90deg, var(--home-border) 1px, transparent 1px);
  background-size: 28px 28px;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 2;
}

.workbench__line--indent { padding-left: 22px; }
.code-muted { color: var(--vp-c-text-3); }
.code-violet { color: var(--vp-c-brand-1); }
.code-blue { color: #4f8fe8; }
.code-green { color: #38a177; }

.workbench__preview { gap: 20px; min-height: 96px; padding: 22px 24px; border-top: 1px solid var(--home-border); }
.workbench__preview button { display: inline-flex; align-items: center; gap: 9px; min-height: 38px; padding: 0 14px; border: 0; border-radius: var(--onu-docs-radius); background: var(--vp-c-brand-1); color: white; font: inherit; font-size: 13px; font-weight: 600; }

.feature-section,
.team-section { padding-top: 104px; }

.section-heading { display: grid; grid-template-columns: minmax(180px, 0.32fr) minmax(0, 0.68fr); gap: 36px; align-items: baseline; margin-bottom: 48px; }
.section-heading p,
.section-heading h2 { margin: 0; }
.section-heading h2 { max-width: 720px; color: var(--vp-c-text-1); font-size: clamp(32px, 4vw, 52px); font-weight: 620; letter-spacing: -0.04em; line-height: 1.08; text-wrap: balance; }

.feature-list { margin: 0; padding: 0; border-top: 1px solid var(--home-border); list-style: none; }
.feature-item { display: grid; grid-template-columns: 48px 34px minmax(0, 1fr) auto; align-items: center; gap: 18px; min-height: 112px; border-bottom: 1px solid var(--home-border); transition: background-color 180ms ease, padding 180ms ease; }
.feature-item:hover { padding: 0 18px; background: var(--vp-c-bg-soft); }
.feature-item__number { color: var(--vp-c-text-3); font-family: var(--vp-font-family-mono); font-size: 11px; }
.feature-item__icon { color: var(--vp-c-brand-1); font-size: 22px; }
.feature-item__copy h3,
.feature-item__copy p { margin: 0; }
.feature-item__copy h3 { color: var(--vp-c-text-1); font-size: 17px; font-weight: 600; }
.feature-item__copy p { margin-top: 5px; color: var(--vp-c-text-2); font-size: 14px; }
.feature-item > a { display: inline-flex; align-items: center; gap: 7px; color: var(--vp-c-text-2); font-size: 13px; font-weight: 600; text-decoration: none; }
.feature-item > a:hover { color: var(--vp-c-brand-1); }
.team-section :deep(.VPTeamMembers) { padding: 0; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; min-height: 0; padding: 72px 0 88px; }
  .hero__workbench { max-width: 620px; }
}

@media (max-width: 640px) {
  .home-page { width: min(100% - 32px, 1240px); padding-top: 32px; }
  .hero { gap: 48px; padding-top: 48px; }
  .hero__title { font-size: clamp(42px, 13vw, 58px); }
  .hero__actions { align-items: flex-start; flex-direction: column; }
  .workbench__body { min-height: 200px; padding: 34px 20px; font-size: 12px; }
  .workbench__preview { align-items: flex-start; flex-direction: column; }
  .feature-section, .team-section { padding-top: 80px; }
  .section-heading { grid-template-columns: 1fr; gap: 14px; }
  .feature-item { grid-template-columns: 32px 26px minmax(0, 1fr); padding: 20px 0; }
  .feature-item:hover { padding: 20px 10px; }
  .feature-item > a { grid-column: 3; justify-self: start; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__actions a,
  .feature-item { transition: none; }
}
</style>
