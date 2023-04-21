---
title: Progress
lang: en-US
---

# Progress <new-badge/>

The Progress component allows you to view the progress of any activity.

## Basic usage

You can control the current `percentage` of progress.

<demo src="../example/progress/basic.vue"></demo>

## StrokeWidth

You can set the height of the progress bar using the `stroke-width` property.

You can also use the `text-inside` property to embed text inside the progress bar.

<demo src="../example/progress/stroke-width.vue"></demo>

## Status

The progress bar has three states, each with a different default style.

<demo src="../example/progress/status.vue"></demo>

## Indeterminate

You can have a Progress bar with indeterminate value with the `indeterminate` property.

You cam control the animation duration by `duration`.

<demo src="../example/progress/indeterminate.vue"></demo>

## Color

You can change the color of the Progress with the property `color`, it accepts color string, function, or array.

<demo src="../example/progress/color.vue"></demo>

You have much more customization.

<demo src="../example/progress/custom-color.vue"></demo>

## BgColor

You can change the background of the Progress with the `bg-color` property.

<demo src="../example/progress/bg-color.vue"></demo>

## Striped

You can add `striped` prop to Progress to apply a stripe over the progress bar's background color.

You can use `striped-flow` to get the stripes to flow, with `duration` to control the animation duration.

<demo src="../example/progress/striped.vue"></demo>

## Circular Progress

You can specify `type` property to `circle` to use circular progress bar, and use `width` property to change the size of circle.

<demo src="../example/progress/circle.vue"></demo>

## Dashboard Progress

You also can specify `type` property to `dashboard` to use dashboard progress bar.

<demo src="../example/progress/dashboard.vue"></demo>

## Customized content

Use default slot to add customized content.

<demo src="../example/progress/customize.vue"></demo>


## Progress Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| percentage | `number` | `0` | Percentage, required. |
| type | `'line' \| 'circle' \| 'dashboard'` | `'line'` | The type of progress bar.  |
| stroke-width | `'xs' \| 'sm' \| 'md' \| 'lg' \| number` | `'sm'` |  The width of progress bar.  |
| text-inside | `boolean` | `false` | Whether to place the percentage inside progress bar, only works when `type` is 'line'. |
| status | `'success' \| 'error' \| 'warning'` | `''` | The current status of progress bar. |
| indeterminate | `boolean` | `false` | Set indeterminate progress. |
| duration | `number` | `3` | Control the animation duration of indeterminate progress or striped flow progress. |
| color | `string \| function \| array` | `''` | Progress bar color. Overrides `status` prop. |
| bg-color | `string \| function \| array` | `''` | Progress bar Background color. |
| striped | `boolean` | `false` | Stripe over the progress bar's color. |
| striped-flow | `boolean` | `false` | Get the stripes to flow. |
| not-text-color | `boolean` | `false` | Do not synchronize the text color with the progress bar color. |
| width | `number` | `126` | The canvas width of circle progress bar. |
| show-text | `boolean` | `true` | Whether to show percentage. |
| stroke-linecap | `'butt' \| 'round' \| 'square'` | `'round'` | Circle/Dashboard type shape at the end path. |
| format | `(percentage: number) => string` | `(percentage: number): string => percentage + '%'` | Custom text format. |

## Progress Slots
| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customized content, parameter is `{ percentage }` |
