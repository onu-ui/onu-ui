---
title: Button
lang: en-US
---

# Button <update-badge/>

Buttons allow the user to take actions or make choices.

## Basic usage

Use `type` and `light` to define Button's style.

<demo src="../example/button/basic.vue"></demo>

## Disabled Button

The `disabled` attribute determines if the button is disabled.

Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

<demo src="../example/button/disable.vue"></demo>

## Rounded Button

Use `rounded-full` shortcut of unocss or `rounded` attribute to define a rounded Button.

<demo src="../example/button/round.vue"></demo>

## Dashed Button

Use `dashed` attribute to define a dashed style Button

<demo src="../example/button/dashed.vue"></demo>

## Link Button

Use `to` attribute to specify the jump link.

<demo src="../example/button/link.vue"></demo>

## Text Button

Use `text` to define Button's text style. Buttons without border and background.

<demo src="../example/button/text.vue"></demo>


## Shadow Button

Use `shadow` to show Button's shadow.

<demo src="../example/button/shadow.vue"></demo>

## Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

Use the `icon` slots or `icon` property to add icon.

<demo src="../example/button/icon.vue"></demo>

## Button Group

Displayed as a button group, can be used to group a series of similar operations.

Use tag `<o-button-group>` to group your buttons.

<demo src="../example/button/group.vue"></demo>

## Loading Button

Click the button to load data, then the button displays a loading state.

Set `loading` attribute to `true` to display loading state.

<demo src="../example/button/loading.vue"></demo>

## Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

Use attribute `size` to set additional sizes with `xs`, `sm`,`md`,`lg`.

<demo src="../example/button/size.vue"></demo>

## Button API

### Button Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Button type. |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Button size.  |
| light | `boolean` | `false` |  Determine whether it's a light button.  |
| dashed | `boolean` | `false` |  Determine whether it's a dashed button.  |
| shadow | `boolean` | `false` |  Show button's shadow.  |
| text | `boolean` | `false` | Determine whether it's a text button. |
| to | `string` | `undefined` | Determine whether it's a link button. |
| rounded | `boolean` | `false` | Determine whether it's a round button. |
| loading | `boolean` | `false` | Determine whether it's loading.  |
| icon | `string` | `undefined` | Icon's name.  |
| disabled | `boolean` | `false` | Disable the button. |


### Button Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
| icon | `()` | Customize icon component. |

## Button Group API

### Button Group Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `''` | Control the size of buttons in this button-group. |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `''` | Control the size of buttons in this button-group.  |
| spacer | `boolean` | `false` |  The dividing line between groups of buttons.  |

### Button Group Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `Button` | Customize button group content. |
