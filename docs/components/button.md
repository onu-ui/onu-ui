---
title: Button
lang: en-US
---

# Button <commn-badge>Refactor</commn-badge>

Buttons allow the user to take actions or make choices.

## Basic usage

Use `o` and `light` to define Button's style.

<demo src="../example/button/basic.vue"></demo>

## Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

<demo src="../example/button/disable.vue"></demo>

## Rounded Button

Use `rounded-full` or `rounded="full"` attribute to define a rounded Button

<demo src="../example/button/round.vue"></demo>

## Link Button

Use `to` attribute to specify the jump link.

<demo src="../example/button/link.vue"></demo>

## Text Button

Use `text` to define Button's text style. Buttons without border and background.

<demo src="../example/button/text.vue"></demo>

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

Use the `icon` slots to add icon.

<demo src="../example/button/icon.vue"></demo>

## Button Group

TODO

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

<demo src="../example/button/loading.vue"></demo>

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `xs`, `sm`,`md`,`lg`.

<demo src="../example/button/size.vue"></demo>

## Button Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Button size.  |
| light | `boolean` | `false` |  Determine whether it's a light button.  |
| text | `boolean` | `false` | Determine whether it's a text button. |
| to | `string` | `undefined` | Determine whether it's a link button. |
| rounded | `boolean` | `false` | Determine whether it's a round button. |
| loading | `boolean` | `false` | Determine whether it's loading.  |
| disabled | `boolean` | `false` | Disable the button. |
| o | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Button type. |



## Button Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
| icon | `()` | Customize icon component. |
