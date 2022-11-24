---
title: Avatar
lang: en-US
---

# Avatar

Avatars are used to show a thumbnail representation of an individual or business in the interface.

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


## Avatar Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `md` | Avatar size. |
| mode | `'bg' \| 'img'` | `'bg'` | Avatar mode. |
| src | `string` | `undefined` | The source of the image for an image avatar. |



## Avatar Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content |


## Avatar Group Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `md` | Avatar Group size. |
