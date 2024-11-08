<script lang='ts' setup>
import OCard from './o-card.vue'
</script>

<template>
  <OCard title="Avatar Component" desc="Avatar component with custom style">
    <div flex="~ col gap-2">
      <div flex items-center justify-center gap-2>
        <div class="avatar">
          <div class="rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar avatar-lg">
          <div class="rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar avatar-md">
          <div class="rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar avatar-sm">
          <div class="rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar avatar-xs">
          <div class="rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
      </div>
      <div flex items-center justify-center gap-2>
        <div class="avatar mask-hexagon">
          <div class="w-24 rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar mask-squircle">
          <div class="w-24 rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar mask-triangle">
          <div class="w-24 rounded">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
      </div>
      <div flex items-center justify-center gap-2>
        <div class="avatar-group avatar-group-sm space-x--6">
          <div class="avatar">
            <div class="">
              <img src="https://avatars.githubusercontent.com/u/42139754">
            </div>
          </div>
          <div class="avatar">
            <div class="">
              <img src="https://avatars.githubusercontent.com/u/42139754">
            </div>
          </div>
          <div class="avatar">
            <div class="">
              <img src="https://avatars.githubusercontent.com/u/42139754">
            </div>
          </div>
          <div class="avatar avatar-placeholder">
            <div class="">
              <span>+99</span>
            </div>
          </div>
        </div>
      </div>
      <div flex items-center justify-center gap-2>
        <div class="avatar">
          <div class=" w-24 rounded-full ring ring-context o-theme-200">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar avatar-online">
          <div class="w-24 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
        <div class="avatar avatar-offline">
          <div class="w-24 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/42139754">
          </div>
        </div>
      </div>
    </div>
  </OCard>
</template>
