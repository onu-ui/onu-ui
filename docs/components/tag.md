---
title: Tag
lang: en-US
---

# Tag <update-badge/>

Tags are used to inform the user of the status of specific data.

## Basic usage

Use the `type` attribute to define Tag's type. In addition, the `bgColor` attribute can be used to set the background color of the Tag.

<demo src="../example/tag/basic.vue"></demo>


## Removable Tag

`closable` attribute can be used to define a removable tag. It accepts a `Boolean`. By default the removal of Tag has a fading animation. If you don't want to use it, you can set the `disable-transitions` attribute, which accepts a `Boolean`, to `true`. `close` event triggers when Tag is removed.

<demo src="../example/tag/closable.vue"></demo>

## Edit Dynamically

You can use the `close` event to add and remove tag dynamically.

TODO

## Sizes

Besides default size, Tag component provides three additional sizes for you to choose among different scenarios.


Use attribute `size` to set additional sizes with `xs`, `sm`,`md`,`lg`.

<demo src="../example/tag/size.vue"></demo>

## Theme

Tag provide three different themes: `dark`、`light`

Using `light` to change, default is `dark`

<demo src="../example/tag/light.vue"></demo>

## Rounded

Tag can also be rounded like button.

<demo src="../example/tag/rounded.vue"></demo>

## Checkable tag

TODO

## Tag Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Tag size.  |
| light | `boolean` | `false` |  Determine whether it's a light tag.  |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Tag type. |
| closable | `boolean` | `false` | Whether Tag can be removed. |
| bgColor | `string` | `undefined` | Background color of the tag. |
| rounded | `boolean` | `false`  | Whether tag is rounded. |


## Tag Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |

## Tag Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| click | `() => void` | Triggers when Tag is clicked. |
| close | `() => void` | Triggers when Tag is removed. |


