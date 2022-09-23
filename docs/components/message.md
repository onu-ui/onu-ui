---
title: Message
lang: en-US
---

# Message

Commonly used `Message`.
We will provide some themes color like `success`, `warning`, `error` ,`info`,`primary` and `secondary` for you.

## Basic usage

if you want get theme , you can use `message.[option]` or provide `type` to options ; Use `content` to define Message's content.

<demo src="../example/message/basic.vue"></demo>

## Closable

Use `closable` to show close icon and close message

<demo src="../example/message/closable.vue"></demo>

## Icon

Use `icon` to show icon before content
<demo src="../example/message/icon.vue"></demo>

## Duration 

Use `duration` to control the `message` components display time. the defaultValue is `5000 ms`

<demo src="../example/message/duration.vue"></demo>



## Message Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'`| Message theme. |
| content | `string` | `undefined` | Message content. |
| closable | `boolean` | `false` | Whether the message can be closed. |
| icon | `string` | `undefined` | Customize message icon. |



## Message methods 

| Name | Parameters | Description | 
| --- | --- | --- |
| close | `() => void` | Triggers when the message was closed. |

