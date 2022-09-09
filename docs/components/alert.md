---
title: Alert
lang: en-US
---

# Alert

Displays important alert messages.

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



## Alert Attributes

| Name          | Description                       | Type                                          | Default   | Required |
| ------------- | --------------------------------- | --------------------------------------------- | --------- | -------- |
| `title`       | alert title.                      | `string`                                      | —         | No       |
| `description`       | alert message.                      | `string`                                      | —         | No       |
| `o`        | alert type.                       | `primary` / `secondary` / `success` / `warning` / `error` / `info` | `primary`                  | `string`                                      | —         | No       |
| `closable`    | whether closable or not.          | `boolean`                                     | `true`    | No       |
| `center`      | whether to center the text.       | `boolean`                                     | `false`   | No       |
| `close-text`  | customized close button text.     | `string`                                      | —         | No       |
| `icon`   | whether a type icon is displayed. | `boolean`                                     | `false`   | No       |
| `light`      | theme style.                      | `boolean`                           | `false` | No       |

##  Alert Events

| Name    | Description                   | Type                        |
| ------- | ----------------------------- | --------------------------- |
| `close` | trigger when alert is closed. | `(evt: MouseEvent) => void` |

##  Alert Slots

| Name      | Description                       |
| --------- | --------------------------------- |
| `default` | content of the alert description. |
| `title`   | content of the alert title.       |
| `icon`    | icon of the alert content.        |
| `close`    | close area of the alert header.        |
