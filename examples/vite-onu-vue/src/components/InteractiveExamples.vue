<script setup lang="ts">
import {
  OAccordion,
  OButton,
  OCalendar,
  OCard,
  OCarousel,
  OCollapsible,
  OCombobox,
  OCommand,
  ODataTable,
  ODatePicker,
  ODialog,
  ODrawer,
  ODropdownMenu,
  OInputOtp,
  OPopover,
  OResizable,
  OScrollArea,
  OSelect,
  OSidebar,
  OSlider,
  OTabs,
  OToast,
  OToggleGroup,
  OTooltip,
} from 'onu-ui'
import { shallowRef } from 'vue'

const accordion = shallowRef('architecture')
const collapsed = shallowRef(false)
const tab = shallowRef('preview')
const alignment = shallowRef<string | string[]>('left')
const framework = shallowRef<string | number>('vue')
const repository = shallowRef('onu')
const otp = shallowRef('')
const volume = shallowRef(45)
const dialogOpen = shallowRef(false)
const drawerOpen = shallowRef(false)
const date = shallowRef('')
const slide = shallowRef(0)
const split = shallowRef(45)
const toastOpen = shallowRef(false)
const selectedRows = shallowRef<Array<string | number>>([])
const sidebarCollapsed = shallowRef(false)
const lastAction = shallowRef('Nothing selected')

const accordionItems = [
  { value: 'architecture', label: 'Where does behavior live?', content: 'State, focus, and keyboard behavior live in the Vue package.' },
  { value: 'styles', label: 'Where do styles live?', content: 'Reusable visual tokens and shortcuts stay in the preset.' },
]
const tabs = [
  { value: 'preview', label: 'Preview', content: 'Interactive preview content.' },
  { value: 'code', label: 'Code', content: 'Typed v-model APIs keep state explicit.' },
]
const alignments = ['left', 'center', 'right'].map(value => ({ value, label: value[0].toUpperCase() + value.slice(1) }))
const frameworks = [
  { value: 'vue', label: 'Vue' },
  { value: 'react', label: 'React' },
  { value: 'solid', label: 'Solid', disabled: true },
]
const repositories = [
  { value: 'onu', label: 'onu-ui/onu-ui' },
  { value: 'unocss', label: 'unocss/unocss' },
  { value: 'vue', label: 'vuejs/core' },
]
const commands = [
  { value: 'new-file', label: 'Create new file', group: 'File' },
  { value: 'search', label: 'Search workspace', group: 'Workspace' },
  { value: 'settings', label: 'Open settings', group: 'App' },
]
const menuItems = [
  { value: 'profile', label: 'Profile' },
  { value: 'settings', label: 'Settings' },
  { value: 'delete', label: 'Delete project', destructive: true },
]
const slides = ['Fast primitives', 'Typed contracts', 'Accessible behavior']
const columns = [
  { key: 'name', label: 'Project', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'stars', label: 'Stars', sortable: true, align: 'right' as const },
]
const rows = [
  { id: 1, name: 'Onu UI', status: 'Active', stars: 1200 },
  { id: 2, name: 'Preset', status: 'Stable', stars: 860 },
  { id: 3, name: 'Docs', status: 'Draft', stars: 420 },
]
</script>

<template>
  <OCard class="lg:col-span-2" title="交互组件" description="由 Vue 管理状态、键盘、焦点与浮层生命周期。">
    <div class="grid gap-8 xl:grid-cols-2">
      <section class="space-y-4">
        <h3 class="font-semibold">
          展开与选择
        </h3>
        <OAccordion v-model="accordion" :items="accordionItems" />
        <OCollapsible v-model="collapsed" label="Show implementation note">
          <p class="rounded-md bg-muted p-3 text-sm">
            Collapsible content keeps its state through v-model.
          </p>
        </OCollapsible>
        <OTabs v-model="tab" :items="tabs" />
        <OToggleGroup v-model="alignment" :items="alignments" aria-label="Text alignment" />
        <div class="flex flex-wrap gap-3">
          <OSelect v-model="framework" :options="frameworks" />
          <OCombobox v-model="repository" :options="repositories" />
        </div>
        <OCommand :items="commands" @select="lastAction = $event.label" />
        <p class="text-xs text-muted-foreground">
          {{ lastAction }}
        </p>
        <OInputOtp v-model="otp" :length="6" />
        <label class="block text-sm">Volume: {{ volume }}<OSlider v-model="volume" class="mt-2" /></label>
      </section>

      <section class="space-y-4">
        <h3 class="font-semibold">
          浮层与反馈
        </h3>
        <div class="flex flex-wrap gap-3">
          <OButton @click="dialogOpen = true">
            Open dialog
          </OButton>
          <OButton variant="outline" @click="drawerOpen = true">
            Open drawer
          </OButton>
          <OPopover>
            <template #trigger="{ toggle }">
              <OButton variant="outline" @click="toggle">
                Popover
              </OButton>
            </template>
            Lightweight anchored content.
          </OPopover>
          <OTooltip content="Keyboard and pointer friendly">
            <OButton variant="ghost">
              Tooltip
            </OButton>
          </OTooltip>
          <ODropdownMenu :items="menuItems" @select="lastAction = $event.label" />
        </div>
        <ODialog v-model="dialogOpen" title="Publish component" description="Review the public API before publishing.">
          <p class="text-sm">
            Dialog traps focus, closes on Escape, and restores focus.
          </p>
          <template #footer="{ close }">
            <OButton variant="outline" @click="close">
              Cancel
            </OButton><OButton @click="close">
              Publish
            </OButton>
          </template>
        </ODialog>
        <ODrawer v-model="drawerOpen" title="Project settings">
          <p class="text-sm">
            Drawer content can be placed on any edge.
          </p>
        </ODrawer>
        <OButton variant="outline" @click="toastOpen = true">
          Show toast
        </OButton>
        <OToast v-model="toastOpen" title="Saved" description="Your changes have been saved." variant="success" />

        <h3 class="pt-3 font-semibold">
          复杂交互
        </h3>
        <div class="flex flex-wrap gap-4">
          <ODatePicker v-model="date" />
          <OCalendar v-model="date" />
        </div>
        <OCarousel v-model="slide" :items="slides">
          <template #default="{ item }">
            <div class="grid h-36 place-items-center bg-muted text-lg font-semibold">
              {{ item }}
            </div>
          </template>
        </OCarousel>
        <OResizable v-model="split" class="h-44">
          <template #first>
            <div class="p-4 text-sm">
              Resizable first panel
            </div>
          </template>
          <template #second>
            <div class="p-4 text-sm">
              Resizable second panel
            </div>
          </template>
        </OResizable>
        <OScrollArea class="h-28 border border-border p-3">
          <p v-for="index in 8" :key="index" class="py-1 text-sm">
            Scrollable row {{ index }}
          </p>
        </OScrollArea>
      </section>
    </div>

    <div class="mt-8 space-y-6">
      <ODataTable v-model:selected="selectedRows" :columns="columns" :rows="rows" selectable />
      <div class="h-64 overflow-hidden rounded-lg border border-border">
        <OSidebar v-model="sidebarCollapsed" :full-height="false">
          <template #header>
            <strong>Workspace</strong>
          </template>
          <template #default="{ collapsed: isCollapsed }">
            <p class="rounded-md bg-muted p-2 text-sm">
              {{ isCollapsed ? '⌂' : 'Overview' }}
            </p>
          </template>
        </OSidebar>
      </div>
    </div>
  </OCard>
</template>
