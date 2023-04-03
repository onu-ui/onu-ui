---
title: Card
lang: en-US
---

# Card <update-badge/>

Cards are used to group and display content in a way that is easily readable.

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

## Divider

The Card can set `divider` attribute style.

<demo src="../example/card/divider.vue"></demo>

## Shadow

You can define when to show the card `shadows`.

The `shadow` attribute determines when the card shadows are displayed. It can be `always`, `hover` or `never`.

<demo src="../example/card/shadow.vue"></demo>

## Descriptions

You can set `description` attribute to define Card's description.

<demo src="../example/card/description.vue"></demo>

## Cover and Actions

You can set `actions` Slot to define Card Action Bar , also you can set `cover` prop to show Card's cover.

<demo src="../example/card/cover-action.vue"></demo>

## Embed style card

You can set `embed` attribute to define Card's embed style.

In light mode, sometimes you may need to make background a bit darker to distinguish card from white background.

<demo src="../example/card/embed.vue" />

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
| shadow | `'always' \| 'hover'` | `never` | When to show card's shadow |
| divider | `boolean` | `false` | Whether show Card divider. |
| embed | `boolean` | `false` | Whether show embed style card. |
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
