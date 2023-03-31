---
title: Affix
lang: en-US
---

# Affix <new-badge/>

Fix the element to a specific visible area.

## Basic usage

Affix is fixed at the top of the page by default.

You can set `offset` attribute to change the offset top，the default value is 0.

<demo src="../example/affix/basic.vue"></demo>

## Target Container

You can set `target` attribute to keep the affix in the container at all times. It will be hidden if out of range.

Please notice that the container avoid having scrollbar.

<demo src="../example/affix/target.vue"></demo>

## Fixed Position

The affix component provides two fixed positions: `top` and `bottom`.

You can set `position` attribute to change the fixed position, the default value is `top`.

<demo src="../example/affix/fixed.vue"></demo>

## Affix Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| offset | `number` | `0` | Offset distance.
| position | `'top' \| 'bottom'` | `'top'` | Position of affix.
| target | `string` | `''` |  Target container. (CSS selector)  |
| z-index | `number` | `100` | `z-index` of affix |


## Affix Methods
| Name | Parameters | Description | 
| --- | --- | --- |
| change | `(fixed: boolean) => void` | Triggers when fixed state changed. |
| scroll | `(value: { scrollTop: number, fixed: boolean }) => void` | Triggers when scrolling. |


## Affix Slots
| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |

## Affix Exposes
| Name | Parameters | Description | 
| --- | --- | --- |
| update | `() => void` | Update affix state manually. |
| updateRoot | `() => void` | Update rootRect info. |
