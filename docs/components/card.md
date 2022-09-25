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

You can define `hoverable` whether hover to show the card shadows, define `always-shadow` whether always to show the card shadows.

<demo src="../example/card/hoverable.vue"></demo>
<demo src="../example/card/shadow.vue"></demo>
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

## Card Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | `undefined` | Card title. |
| description | `string` | `undefined` | Card description. |
| content | `string` | `undefined` | Card content. |
| cover | `string` | `undefined` | Card header's cover. |
| size | `'sm' \| 'md' ` | `'md'` | Size of the card. |
| hoverable | `boolean` | `false` | Whether hover show card's shadow. |
| always-shadow | `boolean` | `false` | Whether always show card's shadow |
| bordered | `boolean` | `false` | Whether show Card border. |
| header | `string` \| `VNode` | `undefined` | Customer card's header. |
| extra | `string` \| `VNode` | `undefined` | Customer card's header extra. |
| actions | `string` \| `VNode` | `undefined` | Customer card's actions bar. |

## Card Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
| header | `()` | Customize content of the Card header. |
| extra | `()` | Customize content of the Card extra. |
| actions | `()` | Customize content of the Card actions. |
