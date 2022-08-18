<template>
  <div
    :o="innerState ? 'secondary' : 'placeholder'"
    :class="`
      o-switch
      ${sizeMap[size]}
      ${disabled || isLoading ? 'o-disabled' : ''}
      ${switching}`"
    tabindex="0"
    @click="handleClick"
  >
    <div v-if="!innerState" :class="`${sizeSlotUncheckMap[size]}`">
      <slot
        name="unchecked"
        :state="innerState"
      />
    </div>

    <div :class="`o-switch-circle ${sizeCircleMap[size]} ${setCheckClass}`">
      <div i-carbon-circle-dash animate-spin v-if="isLoading"/>
      <!--      <BeIcon
        v-if="isLoading"
        spin
        icon="loading"
        custom-class="be-switch&#45;&#45;circle&#45;&#45;icon"
      /> -->
    </div>
    <div v-if="innerState" :class="`${sizeSlotCheckMap[size]}`">
      <slot
        name="checked"
        :state="innerState"
      />
    </div>
  </div>
</template>

<script lang="ts" setup name="O-Switch">
import { isBool, isNumber, isString } from '@onu-ui/utils'
import { computed, ref, watch } from 'vue'
interface ISwitchProps {
  modelValue?: string | boolean |number,
  disabled?:boolean,
  size: 'small' | 'medium' | 'large'
  isLoading?:boolean,
  checkedValue?: string | boolean |number,
  unCheckedValue?: string | boolean |number
}

const props = withDefaults(defineProps<ISwitchProps>(), {
  unCheckedValue: false,
  checkedValue: false,
  isLoading: false,
  size: 'medium',
  disabled: false,
  modelValue: '',
})
const emit = defineEmits(['update:modelValue', 'change', 'click'])
const innerState = ref<boolean>(false)
const switching = ref<string>('')

let changeData = {}
const emitChangeEvt = (): void => {
  emit('change', changeData)
}
/**
 * 设置动画样式类
 */
const changeClass = (): void => {
  switching.value = 'animate-switching'
  setTimeout(() => {
    switching.value = ''
  }, 500)
}
const setInnerState = (): string | number | boolean => {
  if (innerState.value) {
    innerState.value = false
    changeData = {
      newVal: props.unCheckedValue ? props.unCheckedValue : false,
      oldVal: props.checkedValue ? props.checkedValue : true,
    }
    return props.unCheckedValue ? props.unCheckedValue : false
  }
  innerState.value = true
  changeData = {
    newVal: props.checkedValue ? props.checkedValue : true,
    oldVal: props.unCheckedValue ? props.unCheckedValue : false,
  }
  return props.checkedValue ? props.checkedValue : true
}
let isUpdateModel = false
/**
 * 切换状态方法
 */
const switchState = (): void => {
  changeClass()
  // 切换状态
  const modelValue = setInnerState()
  emitChangeEvt()
  emit('update:modelValue', modelValue)
  isUpdateModel = true
}

watch(
  () => props.modelValue,
  () => {
    if (isUpdateModel) {
      isUpdateModel = false
      return
    }
    setInnerState()
    emitChangeEvt()
  },
)
/**
 * 点击方法
 * @param {Event} $event - 事件对象
 */
const handleClick = async($event?: Event) => {
  if (props.disabled || props.isLoading) return
  await switchState()
  emit('click', $event)
}
/**
 * 初始化方法
 */
const init = (): void => {
  if (
    props.unCheckedValue !== undefined
      && props.unCheckedValue !== ''
      && (isBool(props.unCheckedValue)
          || isString(props.unCheckedValue)
          || isNumber(props.unCheckedValue))
      && props.modelValue === props.unCheckedValue
  ) {
    innerState.value = false
    emit('update:modelValue', props.unCheckedValue)
    return
  }

  if (
    props.checkedValue !== undefined
      && props.checkedValue !== ''
      && (isBool(props.checkedValue)
          || isString(props.checkedValue)
          || isNumber(props.checkedValue))
      && props.modelValue === props.checkedValue
  ) {
    innerState.value = true
    emit('update:modelValue', props.checkedValue)
    return
  }

  emit('update:modelValue', setInnerState())
}
init()
const sizeMap = {
  small: 'o-switch-size-small',
  medium: 'o-switch-size-medium',
  large: 'o-switch-size-large',
}
const sizeCircleMap = {
  small: 'o-switch-size-small-circle',
  medium: 'o-switch-size-medium-circle',
  large: 'o-switch-size-large-circle',
}
const sizeSlotCheckMap = {
  small: 'o-switch-small-slot-check',
  medium: 'o-switch-medium-slot-check',
  large: 'o-switch-large-slot-check',
}
const sizeSlotUncheckMap = {
  small: 'o-switch-small-slot-uncheck',
  medium: 'o-switch-medium-slot-uncheck',
  large: 'o-switch-large-slot-uncheck',
}
const setCheckClass = computed(() => {
  return innerState.value ? 'o-switch-check-circle' : 'o-switch-uncheck-circle'
})
</script>

<style scoped>

</style>
