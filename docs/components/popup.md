---
title: Popup
lang: en-US
---

# Popup

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


## Popup Attributes

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|popup-visible **(v-model)**|Whether the popover is visible|`boolean`|`-`|
|default-popup-visible|Whether the popover is visible by default (uncontrolled mode)|`boolean`|`false`|
|title|Title|`string`|`-`|
|content|Content|`string`|`-`|
|trigger|Trigger method|`'hover' \| 'click' \| 'focus' \| 'contextMenu'`|`'hover'`|
|position|Pop-up position|`'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right' \| 'left' \| 'left-top' \| 'left-bottom' \| 'right' \| 'right-top' \| 'right-bottom'`|`'top'`|
|content-class|The class name of the popup content|`ClassName`|`-`|
|content-style|The style of the popup content|`CSSProperties`|`-`|
|arrow-class|The class name of the popup arrow|`ClassName`|`-`|
|arrow-style|The style of the popup arrow|`CSSProperties`|`-`|
|popup-container|Mount container for popup box|`string \| HTMLElement  \| undefined`|`-`|

## Popup Events

|Event Name|Description|Parameters|
|---|---|---|
|popup-visible-change|Triggered when the text bubble display status changes|visible: `boolean`|

## Popup Slots

|Slot Name|Description|Parameters|
|---|---|---|
|title|Title|-|
|content|Content|-|
