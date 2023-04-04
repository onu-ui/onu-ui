---
title: Rate
lang: en-US
---

# Rate <update-badge/>

Rate is a set of radio buttons that allow the user to rate something.

## Basic usage
`Rate` uses a five-point scale by default, though you can set `max` to set the maximum score. Then you can confirm the rating by clicking on the stars.

<demo src="../example/rate/basic.vue"></demo>

## Custom color
You can set the color of the rating icon via `color` and also via `void-color` for unselected rating icons.

<demo src="../example/rate/customColor.vue"></demo>

## Half star
Half-stars can also be achieved by adding an `allow-half` attribute when rating.
<demo src="../example/rate/halfStar.vue"></demo>


## Rate Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue / v-model | `number` | `0` | Binding value. |
| max | `number` | `5`  | Max rating score. |
| readonly | `boolean` | `false` | Whether Rate is read-only. |
| allow-half | `boolean` | `false` | Whether picking half start is allowed. |
| color | `string` | `warning` | Selected icon color. |
| void-color | `string` | `undefined` | Unselected icon color. |
| text | `string` | `undefined` | Text displayed at the end of the star.  |


## Rate Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| change | `(value: number) => void` | Triggers when rate value is changed. |



