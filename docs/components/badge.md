---
title: Badge
lang: en-US
---

# Badge <update-badge/>

Badges are used to inform the user of the status of specific data.

## Basic usage
`Badge` uses the `error` theme by default. You only need to set the `value` attribute to display the corresponding badge.

<demo src="../example/badge/basic.vue"></demo>

## Custom color
The `o` variant handles contextual colors.

`Badge` can also be used as a dot. You can set `dot` attribute to display a dot. Dots have the highest priority.

<demo src="../example/badge/customColor.vue"></demo>

## Values
`Badge` can display a number or a string. If the value is greater than 99, it will be displayed as 99+.
Otherwise, you can set the `max` attribute to change the maximum value.

<demo src="../example/badge/values.vue"></demo>

If the value is 0, it will not be displayed. You can set `showZero` attribute to display 0.

<demo src="../example/badge/showZero.vue"></demo>

## Badge Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | `string` \| `number`  | `undefined` | Display badge content. |
| max | `number` | `99` | Greater than `${max}`, display `${max}+`. |
| dot | `boolean` | `false` | Only a dot style. |
| showZero | `boolean` | `false` | Whether to display the number 0. |


## Badge Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Badge's content. |


