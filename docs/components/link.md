---
title: Link
lang: en-US
---

# Link <new-badge/>

Text hyperlink.

## Basic usage

Basic text link.

<demo src="../example/link/basic.vue"></demo>

## Disabled Link

Disabled state of link.

<demo src="../example/link/disabled.vue"></demo>

## Underline Link

Underline of link

<demo src="../example/link/underline.vue"></demo>

## Icon Link

Link with icon.

<demo src="../example/link/icon.vue"></demo>

## Link Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` | Link type. |
| underline | `boolean` | `true` | Whether the component has underline.  |
| disabled | `boolean` | `false` |  Whether the component is disabled.  |
| href | `string` | `undefined` | Same as native hyperlink's href. |
| icon | `string` | `undefined` | Icon's name. |

## Link Slots
| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
| icon | `()` | Customize icon content. |
