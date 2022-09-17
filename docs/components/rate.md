---
title: Rate
lang: en-US
---

# Rate

## Introduce

Rate component is often used for rating in forms.

## Basic usage
`Rate` uses a five-point scale by default, you can also set `max` to set the maximum score.
Then confirm the rating by clicking on the stars.

<demo src="../example/rate/basic.vue"></demo>

## Custom color
You can set the color of the rating icon via `color`, and also via `void-color` for unselected rating icons.

<demo src="../example/rate/customColor.vue"></demo>

## Half star
Half-stars can also be achieved by adding an `allow-half` attribute when rating.
<demo src="../example/rate/halfStar.vue"></demo>


## Props

| Attribute  | Description                            | Type       | Accepted Values | Default   |
|------------|----------------------------------------|------------|-----------------|-----------|
| modelValue | binding value                          | `number`   |                 | `0`       |
| max        | max rating score                       | `number`   |                 | `5`       |
| readonly   | whether Rate is read-only              | `boolean`  |                 | `false`   |
| allow-half | whether picking half start is allowed  | `boolean`  |                 | `false`   |
| color      | selected icon color                    | `string`   |                 | `warning` |
| void-color | unselected icon color                  | `string`   |                 | `-`       |
| show-text  | text displayed at the end of the star  | `string`   |                 | `-`       |

## Event

| Name   | Parameters            | Description                          |
|--------|-----------------------|--------------------------------------|
| change | value after changing  | Triggers when rate value is changed  |


