---
title: Backtop
lang: en-US
---

# Backtop <new-badge/>

A Button to back to top.

## Basic usage

Scroll down to see the bottom-right button.

<demo src="../example/backtop/basic.vue"></demo>

## Customizations

Customize the button style, this display area is 40px * 40px.

<demo src="../example/backtop/custom.vue"></demo>

## Backtop Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| target | `string` | `undefined` | The target to trigger scroll.
| delta | `number` | `200` | The button will not show until the scroll height reaches this value
| right | `number` | `40` |  Right distance.  |
| bottom | `number` | `40` | Bottom distance. |


## Backtop Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| click | `(evt: MouseEvent) => void` | Triggers when click. |


## Backtop Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
