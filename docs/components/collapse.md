---
title: Collapse
lang: en-US
---

# Collapse

Collapse is used for showing and hiding content.

## Basic usage

You can expand multiple panels

<demo src="../example/collapse/basic.vue"></demo>

## Accordion

In accordion mode, only one panel can be expanded at once
Activate accordion mode using the accordion attribute.

<demo src="../example/collapse/accordion.vue"></demo>

## ExpandedNames

Privide the `Array` , which contains the names of the expanded panels. 
The expanded panel will be expanded when the component is mounted. 

<demo src="../example/collapse/expandedNames.vue"></demo>


## Custom title
Besides using the title attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.
<demo src="../example/collapse/customTitle.vue"></demo>

## Arrow placement
Arrow placement on item.
<demo src="../example/collapse/arrow.vue"></demo>

## Collapse Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| arrordion | `boolean` | `false` | Accordion mode. |
| expandedNames | `Array<string \| number>` | `[]` | Contains the names of the expanded panels. |


## CollapseItem Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | `string` | `undefined` | Display collapse item title. |
| icon | `string` | `undefined` | Display icon before title. |
| disabled | `boolean` | `false`  | Disabled collapseItem. |
| arrow-placement | `'left' \| 'right'` | `left` | Display arrow placement in collapse item. |


## CollapseItem Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Collapse item content. |
| title | `()` | Collapse item title text. |
| icon | `()` | Collapse item icon. |


## CollapseItem Methods

| Name | Parameters | Description | 
| --- | --- | --- |
| change | `(value: CollapseActiveName) => typeof isNumber(value) \|\| isString(value) \|\| isArray(value)` | Triggers when click collapse item. |
