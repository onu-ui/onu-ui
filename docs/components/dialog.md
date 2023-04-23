---
title: Dialog
lang: en-US
---

# Dialog

Dialog are used to open a floating layer on the current page to inform users

## Basic usage

Basic usage of dialog.

<demo src="../example/dialog/basic.vue"></demo>

## Customized dialog

Customized a modal dialog.

<demo src="../example/dialog/customized.vue"></demo>

## Slots usage

You could set `title` to `null` if you need hide they.

<demo src="../example/dialog/slots.vue"></demo>

## Async close

Asynchronously close a modal dialog

<demo src="../example/dialog/async.vue"></demo>




## Dialog Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| visible (v-model) | `boolean` | `undefined` | Whether the modal is visible. |
| width | `string` \| `number` | `520` | Whether the message can be closed. |
| show-mask | `boolean` | `true` | Whether to show the mask. |
| title | `string` | `undefined` | Title of dialog. |
| show-footer | `boolean` | `true` | Whether to show the footer. |
| destroy-on-close | `boolean` | `false` | Whether to uninstall the node when close. |
| mask-closable | `boolean` | `true` | Whether to close the modal when click the mask. |
| hide-cancel | `boolean` | `false` | Whether to hide the cancel button. |
| show-close | `boolean` | `true` | Whether to show the close button. |
| ok-text | `string` | `confirm` | The content of the confirm button. |
| cancel-text | `string` | `cancel` | The content of the cancel button. |
| ok-loading | `boolean` | `false` | Whether the confirm button is in the loading state. |
| ok-button-props | `OButtonProps` | `undefined` | Props of confirm button. |
| cancel-button-props | `OButtonProps` | `undefined` | Props of cancel button. |
| append-to-body | `boolean` | `true` | Whether insert the dialog to the list of children of a body element. |
| mask-style | `CSSProperties` | `undefined` | Mask style. |
| dialog-style | `CSSProperties` | `undefined` | Dialog style. |
| dialog-class | `string \| any[]` | `undefined` | Dialog class. |
| body-style | `CSSProperties` | `undefined` | Body style. |
| body-class | `string \| any[]` | `undefined` | Body class. |
| esc-to-close | `boolean` | `true` | Whether Press the ESC key to close the dialog. |
| mask-animation-name | `string` | `undefined` | Mask animation name. |
| dialog-animation-name | `string` | `undefined` | Dialog animation name. |
| z-index | `number` | `1000` | Modal zIndex. |



## Dialog Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
| title | `()` | Customize header content. |
| footer | `()` | Customize footer content. |
