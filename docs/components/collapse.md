---
title: Collapse
lang: en-US
---

# Collapse

## Introduce

Use Collapse to store contents.

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

| Attribute         | Description                               | Type                 | Accepted Values       | Default                  |
| ----------------- | ----------------------------------------- | ------------         | --------------------- | ------------------------ |
| arrordion             | accordion mode                     | `Boolean` |    `True`/`False`                   |      `False`                    |
| expandedNames               | contains the names of the expanded panels. |  Array<`String`/`Number`> |              |        []               | 



## CollapseItem Props
| Attribute         | Description                               | Type                 | Accepted Values       | Default                  |
| ----------------- | ----------------------------------------- | ------------         | --------------------- | ------------------------ |
| title             | Display collapse item title content                     | `string` |                       |        ''                  |
| icon               | Display icon before title text. |              |                       | ``                     |
| disabled               | Disabled this                          | `boolean`            |                       | `false`                  |
| arrow-placement          | Display arrow placement in collapse item.           | `left`/'right'            |                       | `left`                  |

## Collapse Item Slots
| Name | Description |
| ----------------- | ----------------------------------------- | 
| default | collapse item content. |
| title   | collapse item title text. |
| icon    | collapse item icon . |  


## CollapseItem events


| Event Name       | Parameters                                                                                      | Description                              |
|------------------|-------------------------------------------------------------------------------------------------|------------------------------------------|
| change           | `ExpandedNames`  | triggers when click collapse item  |
