---
title: Text
lang: en-US
---

# Text <new-badge/>

Used for text.

## Basic usage

Use the `type` attribute to define the `Text` type.

<demo src="../example/text/basic.vue"></demo>

## Gradient

Use the `gradient` attribute to render a gradient `Text`.

<demo src="../example/text/gradient.vue"></demo>

## Size

Use the `size` attribute to set additional sizes with `xs`, `sm`, `md`(default) or `lg`.

<demo src="../example/text/size.vue"></demo>

## Ellipsis

Pass the `truncated` prop to render an ellipsis when the text exceeds the width of the viewport or the max-width set.

<demo src="../example/text/ellipsis.vue"></demo>

## Override

Use attribute `tag` or `font` to override element.

<demo src="../example/text/override.vue"></demo>

## Mixed

<demo src="../example/text/mixed.vue"></demo>

## Text Props
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `''` | Text type. |
| size | `'xs' \| 'sm' \| 'md' \| 'lg'` | `''` | Text size.  |
| truncated | `boolean` | `false` |  Render ellipsis.  |
| tag | `string` | `'span'` | Custom element tag. |
| font | `'normal' \| 'block' \| 'bold' \| 'italic' \| 'sub' \| 'sup' \| 'under' \| 'del' \| 'mark'` | `''` | alias for tag. |
| gradient | `string` | `''` | Render the gradient text, use css `linear-gradient`. |

## Text Slots
| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Customize default content. |
