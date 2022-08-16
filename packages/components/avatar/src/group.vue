<script lang='ts' setup name="O-Avatar-Group">
interface IAvatarGroupProps {
    size: 'xs' | 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<IAvatarGroupProps>(), {
  size: 'md',
})
</script>

<template>
  <div class="o-avatar-group-base" :class="[`o-avatar-group-${size}`]">
    <slot />
  </div>
</template>
