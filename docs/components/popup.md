---
title: Popup
lang: en-US
---

# Popup <update-badge/>

When the mouse hovers, focus, or click on a component, a bubble-like card floating layer will pop up. You can manipulate the elements on the card.


## Basic

Move the mouse in or click to pop up bubbles, which can operate on the elements on the floating layer, and carry complex content and operations.

<demo src="../example/popup/basic.vue"></demo>

## Trigger

By setting `trigger`, you can specify different trigger methods.

They are: `hover` | `click` | `focus` | `context-menu`.

<demo src="../example/popup/trigger.vue"></demo>


## Position

`Popup` supports 12 different positions. They are: `top` `left` `right` `bottom` `top-left` `top-right` `bottom-left` `bottom-right` `left-top` `left-bottom` `right-top` `right-bottom`.

<demo src="../example/popup/position.vue"></demo>


## Popup Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| popup-visible / v-model | `boolean` | `undefined` | Whether the popover is visible. |
| default-popup-visible | `boolean` | `false` | Whether the popover is visible by default (`uncontrolled mode`). |
| title | `string` | `undefined` | Title. |
| content | `string`|`undefined`| Content. |
| trigger | `'hover' \| 'click' \| 'focus' \| 'contextMenu'`|`'hover'` | `'hover'` | Trigger method. |
| position | `'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right' \| 'left' \| 'left-top' \| 'left-bottom' \| 'right' \| 'right-top' \| 'right-bottom'`|`'top'` | Popup position. |
| content-class | `string` | `undefined` | The class name of the popup content. |
| content-style | `CSSProperties` | `undefined` | The style of the popup content. |
| arrow-class | `string` | `undefined` | The class name of the popup arrow. |
| arrow-style | `CSSProperties` | `undefined` | The style of the popup arrow. |
| popup-container | `string \| HTMLElement  \| undefined` | `undefined` | Mount container for popup box. |
| update-at-scroll | `boolean `| `false`  | Whether to update the position of the popup when the container is scrolled. |



## Popup Slots


| Name | Parameters | Description | 
| --- | --- | --- |
| title | `()` | Custom popup title. |
| content | `()` | Custom popup content. |
## Popup Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| popup-visible-change | `(visible: boolean) => void` | Triggered when the text bubble display status changes. |


