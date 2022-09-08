---
title: Card
lang: en-US
---

# Card

Integrate information in a card container.

## Basic usage

Card includes title, content and operations.

Card is made up of `header` and `content`. `header` is optional, and its content distribution depends on a named slot.

<demo src="../example/card/basic.vue"></demo>

## Simple card

The Card only contains content.

<demo src="../example/card/simple.vue"></demo>

## Only title

The Card only contains title.

<demo src="../example/card/only-title.vue"></demo>

## Bordered

The Card can set `bordered` attribute style.

<demo src="../example/card/bordered.vue"></demo>

## Shadow

You can define `hoverable` whether hover to show the card shadows

<demo src="../example/card/hoverable.vue"></demo>

## Descriptions

You can set `description` attribute to define Card's description.

<demo src="../example/card/description.vue"></demo>

## Cover and Actions

You can set `actions` Slot to define Card Action Bar , also you can set `cover` prop to show Card's cover.

<demo src="../example/card/cover-action.vue"></demo>

## Custome Actions

<demo src="../example/card/custom-actions.vue"></demo>

## comprehensive

Here is the fully defined form of the card exaples.

<demo src="../example/card/comprehensive.vue"></demo>

## Card Attributes

| Attribute   | Description                      | Type           | Accepted Values | Default |
| ----------- | -------------------------------- | -------------- | --------------- | ------- |
| title       | Card title                       | String         | —               |         |
| description | Card description                 | String         | —               |         |
| content     | Card content                     | String         | —               |         |
| cover       | Card header's cover              | String         | —               |         |
| size        | size of the card                 | String         | sm/md           | md      |
| hoverable   | Whether hover show card's shadow | Boolean        | true/false      | false   |
| bordered    | Whether show border              | Boolean        | true/false      | false   |
| header      | customer card's header           | string / VNode | —               | —       |
| extra       | customer card's header extra     | string / VNode | —               | —       |
| actions     | customer card's actions bar      | string / VNode | —               | —       |

## Card Slots

| Name   | Description                |
| ------ | -------------------------- |
| —      | customize default content  |
| header | content of the Card header |
| extra | content of the Card extra |
| actions | content of the Card actions |
