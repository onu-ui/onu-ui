# Empty <new-badge/>

Used to display the status of empty data.

## Basic usage 

<demo src="../example/empty/basic.vue" />


## Custom Description, Image

Use `description` prop to set empty description. Use `image` prop to set image URL.

<demo src="../example/empty/image.vue" />

## Custom Image Size

Use `image-size` prop to control image size.

<demo src="../example/empty/imgSize.vue" />

## Slot Custom Footer

Use the default `slot` to insert content at the bottom.

<demo src="../example/empty/slot.vue" />


## Empty Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| description | `string` | `No data` | Empty description. |
| image | `number` | `undefined` | Empty image URL. |
| image-size | `string` | `undefined` | Customized Empty image width. |

## Empty Slots

| Name | Parameters | Description | 
| --- | --- | --- |
| default | `()` | Custom bottom content. |
| image | `()` | Custom image. |
| description | `()` | Custom description. |

