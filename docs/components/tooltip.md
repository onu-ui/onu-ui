---
title: ToolTip
lang: en-US
---

# ToolTip <new-badge/>

Tooltip can be used to show a message when hovering over an element.


## Basic

Move the mouse in or click to pop up bubbles, which can operate on the elements on the floating layer, and carry complex content and operations.

<demo src="../example/tooltip/basic.vue"></demo>

## Theme

Tooltip has two built-in themes: `Dark` and `Light`.

Set `type` to modify theme, the default is `Dark`.

<demo src="../example/tooltip/type.vue"></demo>


## Trigger

By setting `trigger`, you can specify different trigger methods.

They are: `hover` | `click` | `focus` | `context-menu`.

<demo src="../example/tooltip/trigger.vue"></demo>


## Position

`Tooltip` supports 12 different positions. They are: `top` `left` `right` `bottom` `top-left` `top-right` `bottom-left` `bottom-right` `left-top` `left-bottom` `right-top` `right-bottom`.

<demo src="../example/tooltip/position.vue"></demo>

## Custom Background Color

Customize the background color through the `background-color` property.

<demo src="../example/tooltip/bg.vue"></demo>



## Tooltip Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| popup-visible / v-model | `boolean` | `undefined` | Whether the ToolTip is visible. |
| default-popup-visible | `boolean` | `false` | Whether the ToolTip is visible by default (`uncontrolled mode`). |
| content | `string`|`undefined`| Content. |
| type | `'Dark' \| 'Light'` | `'Dark'` | ToolTip type. |
| trigger | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`|`'hover'` | `'hover'` | Trigger method. |
| position | `'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right' \| 'left' \| 'left-top' \| 'left-bottom' \| 'right' \| 'right-top' \| 'right-bottom'`|`'top'` | ToolTip position. |
| background-color | `string` | `undefined` | The backgroundColor of the ToolTip content. |
| content-class | `string` | `undefined` | The class name of the ToolTip content. |
| content-style | `CSSProperties` | `undefined` | The style of the ToolTip content. |
| arrow-class | `string` | `undefined` | The class name of the ToolTip arrow. |
| arrow-style | `CSSProperties` | `undefined` | The style of the ToolTip arrow. |
| popup-container | `string \| HTMLElement  \| undefined` | `undefined` | Mount container for ToolTip box. |
| update-at-scroll | `boolean `| `false`  | Whether to update the position of the popup when the container is scrolled. |


## Tooltip Slots


| Name | Parameters | Description | 
| --- | --- | --- |
| content | `()` | Custom ToolTip content. |

## Tooltip Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| popup-visible-change | `(visible: boolean) => void` | Triggered when the text bubble display status changes. |


