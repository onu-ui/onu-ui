---
title: Alert
lang: en-US
---

# Alert <update-badge/>

Alert informs users about important events.

## Basic Usage

The most basic Alert using concise text prompts, including prompts for 6 situations: `primary`,`secondary`,`warning`,`error`,`info`.

<demo src="../example/alert/basic.vue"></demo>

## Theme

Alert provide Light Theme Alert. demo Set `light` to change theme.

<demo src="../example/alert/light.vue"></demo>

## Customizable Close Button

Customize the close button as texts or other symbols.

demo Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. `closable` attribute decides if the component can be closed or not. It accepts `boolean`, and the default is `true`. You can set `close-text` attribute to replace the default cross symbol as the close button. Be careful that `close-text` must be a string. `close` event fires when the component is closed.

<demo src="../example/alert/custom-close.vue"></demo>

## With Title and Description

Description includes a message with more detailed information.

demo Besides the required `title` attribute, you can add a `description` attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.

<demo src="../example/alert/title.vue"></demo>

## With Icon

Displaying an icon improves readability.

demo Setting the `icon` attribute displays an icon that corresponds with the current Alert type.

Icon can be found from [Icones](https://icones.js.org/)

<demo src="../example/alert/icon.vue"></demo>

## Centered Text

Use the `center` attribute to center the text.

<demo src="../example/alert/center.vue"></demo>

## Alert Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'primary'` | Alert type. |
| title | `string` | `undefined` | Alert title. |
| description | `string` | `undefined` | Alert message. |
| closable | `boolean` | `false` | Whether the alert can be closed. |
| center | `boolean` | `false` | Whether to center the text. |
| close-text | `string` | `''` | Customized close button text. |
| icon | `string` | `undefined` | Customized alert icon. |
| light | `boolean` | `false` |  Determine whether it's a light alert.  |

##  Alert Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Content of the alert description. |
| title | `()` | Content of the alert title. |
| icon | `()` | Icon of the alert content. |
| close | `()` | Close area of the alert header. |


##  Alert Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| close | `(evt: MouseEvent) => void` | Trigger when alert is closed. |


