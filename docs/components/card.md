---
title: Card
lang: en-US
---

# Card

Integrate information in a card container.

## Basic usage

Card includes title, content and operations.

:::demo Card is made up of `header` and `body`. `header` is optional, and its content distribution depends on a named slot.

card/basic

:::

## Simple card

The header part can be omitted.

:::demo

card/simple

:::

## With images

Display richer content by adding some configs.

:::demo The `body-style` attribute defines CSS style of custom `body`. This example also uses `el-col` for layout.

card/with-images

:::

## Shadow

You can define when to show the card shadows

:::demo The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.

card/shadow

:::

## Attributes

| Attribute  | Description                                                   | Type   | Accepted Values        | Default               |
| ---------- | ------------------------------------------------------------- | ------ | ---------------------- | --------------------- |
| header     | title of the card. Also accepts a DOM passed by `slot#header` | string | —                      | —                     |
| body-style | CSS style of body                                             | object | —                      | `{ padding: '20px' }` |
| shadow     | when to show card shadows                                     | string | always / hover / never | always                |

## Slots

| Name   | Description                |
| ------ | -------------------------- |
| —      | customize default content  |
| header | content of the Card header |
