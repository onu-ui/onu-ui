---
outline: deep
---

# Interactive components

The preset owns visual shortcuts. Components that need state, focus management, keyboard navigation, pointer tracking, or timed lifecycles live in `onu-ui`'s Vue package.

## Disclosure and selection

`OAccordion`, `OCollapsible`, `OTabs`, `OToggleGroup`, `OSelect`, `OCombobox`, `OCommand`, `OInputOtp`, and `OSlider` expose typed `v-model` contracts.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { OAccordion, OCombobox, OTabs } from 'onu-ui'

const section = shallowRef('behavior')
const tab = shallowRef('preview')
const repository = shallowRef('onu')

const sections = [
  { value: 'behavior', label: 'Behavior', content: 'Vue owns state and keyboard behavior.' },
  { value: 'styles', label: 'Styles', content: 'The preset owns reusable appearance.' },
]
const tabs = [
  { value: 'preview', label: 'Preview', content: 'Preview content' },
  { value: 'code', label: 'Code', content: 'Code content' },
]
const repositories = [
  { value: 'onu', label: 'onu-ui/onu-ui' },
  { value: 'vue', label: 'vuejs/core' },
]
</script>

<template>
  <OAccordion v-model="section" :items="sections" />
  <OTabs v-model="tab" :items="tabs" />
  <OCombobox v-model="repository" :options="repositories" />
</template>
```

<div grid="~ gap-5" max-w-xl>
  <OAccordion :items="[
    { value: 'behavior', label: 'Where does behavior live?', content: 'State, focus, and keyboard behavior live in the Vue package.' },
    { value: 'styles', label: 'Where do styles live?', content: 'Reusable appearance stays in the preset.' }
  ]" />
  <OTabs :items="[
    { value: 'preview', label: 'Preview', content: 'Interactive preview content.' },
    { value: 'code', label: 'Code', content: 'Typed v-model APIs keep state explicit.' }
  ]" />
</div>

## Overlays and focus

`ODialog`, `ODrawer`, `OPopover`, `OTooltip`, and `ODropdownMenu` handle Escape, outside interaction, and focus restoration where applicable. Overlays render outside local stacking contexts when necessary.

Aliases cover the related component families:

| Component | Alias / mode |
| --- | --- |
| `ODialog` | `OAlertDialog` (`persistent` prevents outside dismissal) |
| `ODrawer` | `OSheet` (`side` controls the edge) |
| `OPopover` | `OHoverCard` (set `hover`) |
| `ODropdownMenu` | `OContextMenu`, `OMenubar`, `ONavigationMenu` |

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { OButton, ODialog, OPopover } from 'onu-ui'

const dialogOpen = shallowRef(false)
</script>

<template>
  <OButton @click="dialogOpen = true">Open dialog</OButton>
  <ODialog v-model="dialogOpen" title="Publish component">
    Dialog content
  </ODialog>

  <OPopover>
    <template #trigger="{ toggle }">
      <OButton variant="outline" @click="toggle">Open popover</OButton>
    </template>
    Anchored content
  </OPopover>
</template>
```

<div flex="~ wrap gap-3">
  <ODialog title="Accessible dialog" description="Escape closes and focus returns to the trigger.">
    <template #trigger="{ toggle }"><OButton @click="toggle">Open dialog</OButton></template>
    <p text-sm>Dialog content is teleported to the document body.</p>
  </ODialog>
  <OPopover>
    <template #trigger="{ toggle }"><OButton variant="outline" @click="toggle">Open popover</OButton></template>
    Anchored popover content.
  </OPopover>
  <OTooltip content="Focus or hover"><OButton variant="ghost">Tooltip</OButton></OTooltip>
</div>

## Complex interaction

The Vue package also exports:

- `OCalendar` and `ODatePicker` for date selection.
- `OCarousel` for snap scrolling with button and arrow-key navigation.
- `OResizable` for pointer and keyboard resizing.
- `OScrollArea` for a focusable native scroll region.
- `OToast` for timed, pausable notifications.
- `ODataTable` for sorting, row selection, and pagination.
- `OSidebar` for controlled collapsed navigation.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { ODataTable, ODatePicker } from 'onu-ui'

const date = shallowRef('')
const selected = shallowRef<Array<string | number>>([])
const columns = [
  { key: 'name', label: 'Project', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]
const rows = [
  { id: 1, name: 'Onu UI', status: 'Active' },
  { id: 2, name: 'Docs', status: 'Draft' },
]
</script>

<template>
  <ODatePicker v-model="date" />
  <ODataTable v-model:selected="selected" :columns="columns" :rows="rows" selectable />
</template>
```

<div grid="~ gap-5">
  <ODatePicker />
  <ODataTable
    :columns="[
      { key: 'name', label: 'Project', sortable: true },
      { key: 'status', label: 'Status', sortable: true },
      { key: 'stars', label: 'Stars', sortable: true, align: 'right' }
    ]"
    :rows="[
      { id: 1, name: 'Onu UI', status: 'Active', stars: 1200 },
      { id: 2, name: 'Preset', status: 'Stable', stars: 860 }
    ]"
    selectable
  />
</div>

## Accessibility notes

- Tabs use roving focus and arrow keys.
- Select, combobox, command, menus, carousel, and resizable panels expose keyboard controls.
- Dialog and drawer trap focus, close with Escape, and restore focus to the previous element.
- Native controls remain native where they already provide the best behavior (`range` and scrolling).
