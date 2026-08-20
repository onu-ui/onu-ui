<script setup lang="ts">
import type { DataTableColumn } from './types'
import { computed, shallowRef } from 'vue'

defineOptions({ name: 'ODataTable' })

const props = withDefaults(defineProps<{
  columns: DataTableColumn[]
  rows: Record<string, unknown>[]
  rowKey?: string
  pageSize?: number
  selectable?: boolean
  emptyText?: string
}>(), {
  rowKey: 'id',
  pageSize: 10,
  selectable: false,
  emptyText: 'No results.',
})

const selected = defineModel<Array<string | number>>('selected', { default: () => [] })
const page = defineModel<number>('page', { default: 1 })
const sortKey = shallowRef('')
const sortDirection = shallowRef<'asc' | 'desc'>('asc')
const sortedRows = computed(() => {
  if (!sortKey.value)
    return props.rows
  return [...props.rows].sort((a, b) => {
    const left = String(a[sortKey.value] ?? '')
    const right = String(b[sortKey.value] ?? '')
    return left.localeCompare(right, undefined, { numeric: true }) * (sortDirection.value === 'asc' ? 1 : -1)
  })
})
const pageCount = computed(() => Math.max(1, Math.ceil(sortedRows.value.length / props.pageSize)))
const visibleRows = computed(() => sortedRows.value.slice((page.value - 1) * props.pageSize, page.value * props.pageSize))

function keyOf(row: Record<string, unknown>, index: number) {
  return (row[props.rowKey] as string | number | undefined) ?? index
}

function sort(column: DataTableColumn) {
  if (!column.sortable)
    return
  if (sortKey.value === column.key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  }
  else {
    sortKey.value = column.key
    sortDirection.value = 'asc'
  }
  page.value = 1
}

function toggleRow(key: string | number) {
  selected.value = selected.value.includes(key) ? selected.value.filter(value => value !== key) : [...selected.value, key]
}
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-border">
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead class="bg-muted/60">
          <tr>
            <th v-if="selectable" class="w-10 px-3 py-3">
              <span class="sr-only">Select</span>
            </th>
            <th v-for="column in columns" :key="column.key" class="px-4 py-3 font-medium" :class="`text-${column.align ?? 'left'}`" scope="col">
              <button v-if="column.sortable" class="inline-flex items-center gap-1" type="button" @click="sort(column)">
                {{ column.label }} <span aria-hidden="true">{{ sortKey === column.key ? (sortDirection === 'asc' ? '↑' : '↓') : '↕' }}</span>
              </button>
              <template v-else>
                {{ column.label }}
              </template>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          <tr v-for="(row, index) in visibleRows" :key="keyOf(row, index)" class="hover:bg-muted/35">
            <td v-if="selectable" class="px-3 py-3 text-center">
              <input type="checkbox" :checked="selected.includes(keyOf(row, index))" :aria-label="`Select row ${index + 1}`" @change="toggleRow(keyOf(row, index))">
            </td>
            <td v-for="column in columns" :key="column.key" class="px-4 py-3" :class="`text-${column.align ?? 'left'}`">
              <slot :name="`cell-${column.key}`" :row="row" :value="row[column.key]">
                {{ row[column.key] }}
              </slot>
            </td>
          </tr>
          <tr v-if="!visibleRows.length">
            <td :colspan="columns.length + (selectable ? 1 : 0)" class="px-4 py-10 text-center text-muted-foreground">
              {{ emptyText }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <footer v-if="pageCount > 1" class="flex items-center justify-between border-t border-border px-4 py-3 text-sm">
      <span>Page {{ page }} of {{ pageCount }}</span>
      <div class="flex gap-2">
        <button class="btn btn-outline btn-sm" type="button" :disabled="page <= 1" @click="page--">
          Previous
        </button>
        <button class="btn btn-outline btn-sm" type="button" :disabled="page >= pageCount" @click="page++">
          Next
        </button>
      </div>
    </footer>
  </div>
</template>
