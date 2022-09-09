---
title: Tag
lang: en-US
---

# Tag

Used for marking and selection.

## Basic usage

Use the `o` attribute to define Tag's type. In addition, the `bgColor` attribute can be used to set the background color of the Tag.

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

## Tag Attributes

| Attribute           | Description                          | Type    | Accepted Values             | Default |
| ------------------- | ------------------------------------ | ------- | --------------------------- | ------- |
| o                | component type                       | string  | primary / secondary / success / warning / error / info | —       |
| closable            | whether Tag can be removed           | boolean | —                           | false   |
| bgColor               | background color of the Tag          | string  | —                           | —       |
| size                | tag size                             | string  |  xs / sm / md / lg      | md |
| light              | light theme                      | boolean  | true / false        | light   |
| rounded               | whether Tag is rounded               | boolean | —                           | false   |

## Tag Events

| Event Name | Description                  | Parameters |
| ---------- | ---------------------------- | ---------- |
| click      | triggers when Tag is clicked | —          |
| close      | triggers when Tag is removed | —          |

## Tag Slots

| Name | Description               |
| ---- | ------------------------- |
| —    | customize default content |
