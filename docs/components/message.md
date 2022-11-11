---
title: Message
lang: en-US
---

# Message <update-badge/>

`Message` component is used to give timely feedback to user's operations. It could be the result feedback of the operation, such as success, failure, error, warning, etc and more.

## Basic usage

Basic usage of message.

<demo src="../example/message/basic.vue"></demo>

## Types

Use different methods to show different type `Message`, It includes `success`, `warning`, `error` ,`info`,`primary` and `secondary`.

<demo src="../example/message/types.vue" />

## Closable

Use `closable` to show close icon and close message.

<demo src="../example/message/closable.vue"></demo>

## Custom Icon

Use `icon` to show icon before content
<demo src="../example/message/icon.vue"></demo>

## Duration 

Use `duration` to control the `message` components display time. the defaultValue is `5000 ms`

<demo src="../example/message/duration.vue"></demo>

## Use HTML string

If you want to inset `HTML` to `message`, set `parseHtml` to `true`, then `message` will be treated as an HTML String.

<demo src="../example/message/html.vue" />

## Global Methods

The global methods provided by Message can be used in the following two ways:

1. `option API`: `this.$message`

```ts
this.$message(content | options)
this.$message.primary(content | options)
this.$message.secondary(content | options)
this.$message.success(content | options)
this.$message.warning(content | options)
this.$message.error(content | options)
this.$message.info(content | options)
this.$message.close()
```

2. `composition API`: `OMessage`

```html
<script setup lang="ts">
import { OMessage } from 'onu-ui'
OMessage(content | options)
OMessage.primary(content | options)
OMessage.secondary(content | options)
OMessage.success(content | options)
OMessage.warning(content | options)
OMessage.error(content | options)
OMessage.info(content | options)
OMessage.close()
</script>
```



<demo src="../example/message/trigger.vue" />


## Message Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| content | `string` | `undefined` | Message content. |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'`| Message theme. |
| closable | `boolean` | `false` | Whether the message can be closed. |
| icon | `string` | `undefined` | Customize message icon. |
| parseHtml | `boolean` | `false` | Whether message is treated as HTML string. |
| duration | `number` | `3000` | Display duration, millisecond. If set to 0, it will not turn off automatically. |
| on-close | `function` | `undefined` | Callback function when closed with the message instance as the parameter. |
| offset | `number` | `20` | Set the distance to the top of viewport. |
| zIndex | `number` | `0` | Set the zIndex of Message. |



## Message methods 

| Name | Parameters | Description | 
| --- | --- | --- |
| close | `() => void` | Triggers when the message was closed. |

