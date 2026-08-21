---
outline: deep
---

<script setup lang="ts">
import { Accordion, Button, Combobox, DataTable, DatePicker, Dialog, Popover, Tabs, Tooltip } from 'onu-ui'
</script>

# Interactive components

The preset owns visual shortcuts. Components that need state, focus management, keyboard navigation, pointer tracking, or timed lifecycles live in `onu-ui`'s Vue package.

## Disclosure and selection

`Accordion`, `Collapsible`, `Tabs`, `ToggleGroup`, `Select`, `Combobox`, `Command`, `InputOtp`, and `Slider` expose typed `v-model` contracts.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { Accordion, Combobox, Tabs } from 'onu-ui'

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
  <Accordion v-model="section" :items="sections" />
  <Tabs v-model="tab" :items="tabs" />
  <Combobox v-model="repository" :options="repositories" />
</template>
```

<div grid="~ gap-5" max-w-xl>
  <Accordion :items="[
    { value: 'behavior', label: 'Where does behavior live?', content: 'State, focus, and keyboard behavior live in the Vue package.' },
    { value: 'styles', label: 'Where do styles live?', content: 'Reusable appearance stays in the preset.' }
  ]" />
  <Tabs :items="[
    { value: 'preview', label: 'Preview', content: 'Interactive preview content.' },
    { value: 'code', label: 'Code', content: 'Typed v-model APIs keep state explicit.' }
  ]" />
</div>

## Overlays and focus

`Dialog`, `Drawer`, `Popover`, `Tooltip`, and `DropdownMenu` handle Escape, outside interaction, and focus restoration where applicable. Overlays render outside local stacking contexts when necessary.

Aliases cover the related component families:

| Component | Alias / mode |
| --- | --- |
| `Dialog` | `AlertDialog` (`persistent` prevents outside dismissal) |
| `Drawer` | `Sheet` (`side` controls the edge) |
| `Popover` | `HoverCard` (set `hover`) |
| `DropdownMenu` | `ContextMenu`, `Menubar`, `NavigationMenu` |

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { Button, Dialog, Popover } from 'onu-ui'

const dialogOpen = shallowRef(false)
</script>

<template>
  <Button @click="dialogOpen = true">Open dialog</Button>
  <Dialog v-model="dialogOpen" title="Publish component">
    Dialog content
  </Dialog>

  <Popover>
    <template #trigger="{ toggle }">
      <Button variant="outline" @click="toggle">Open popover</Button>
    </template>
    Anchored content
  </Popover>
</template>
```

<div flex="~ wrap gap-3">
  <Dialog title="Accessible dialog" description="Escape closes and focus returns to the trigger.">
    <template #trigger="{ toggle }"><Button @click="toggle">Open dialog</Button></template>
    <p text-sm>Dialog content is teleported to the document body.</p>
  </Dialog>
  <Popover>
    <template #trigger="{ toggle }"><Button variant="outline" @click="toggle">Open popover</Button></template>
    Anchored popover content.
  </Popover>
  <Tooltip content="Focus or hover"><Button variant="ghost">Tooltip</Button></Tooltip>
</div>

## Complex interaction

The Vue package also exports:

- `Calendar` and `DatePicker` for date selection.
- `Carousel` for snap scrolling with button and arrow-key navigation.
- `Resizable` for pointer and keyboard resizing.
- `ScrollArea` for a focusable native scroll region.
- `Toast` for timed, pausable notifications.
- `DataTable` for sorting, row selection, and pagination.
- `Sidebar` for controlled collapsed navigation.

```vue
<script setup lang="ts">
import { shallowRef } from 'vue'
import { DataTable, DatePicker } from 'onu-ui'

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
  <DatePicker v-model="date" />
  <DataTable v-model:selected="selected" :columns="columns" :rows="rows" selectable />
</template>
```

<div grid="~ gap-5">
  <DatePicker />
  <DataTable
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
