---
title: Avatar
lang: en-US
---

# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

## Basic Usage

Use `src` prop to set avatar's image source.

Use `rounded` and `size` prop to set avatar's shape and size.

<demo src="../example/avatar/basic.vue"></demo>

## Types

It supports images, Icons, or characters.

The avatar default mode is `bg` ,but if set `src` ,it will automatically change mode to `img`.

<demo src="../example/avatar/type.vue"></demo>

## Avatar Group

Use `<o-avatar-group>` to define avatars.

<demo src="../example/avatar/avatar-group.vue"></demo>

## Fallback

TODO

## Fit Container

TODO


## Avatar Attributes

| Name      | Description                                               | Type                                                       | Default     | Required |
| --------- | --------------------------------------------------------- | ---------------------------------------------------------- | ----------- | -------- |
| `size`    | avatar size.                                              | `xs` / `sm` / `md` / `lg`       | `md` | No       |
| `mode`   | avatar mode.                                             |  `bg` / `img` | `bg`       |No
| `src`     | the source of the image for an image avatar.              | `string`                                                   | —           | No       |


## Avatar Slots

| Name      | Description               |
| --------- | ------------------------- |
| `default` | customize avatar content. |


## Avatar Group Attributes

| Name      | Description                                               | Type                                                       | Default     | Required |
| --------- | --------------------------------------------------------- | ---------------------------------------------------------- | ----------- | -------- |
| `size`    | avatar size.                                              | `xs` / `sm` / `md` / `lg`       | `md` | No       |
