<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
function toggleDark() {
  isDark.value = !isDark.value
}

</script>

<template>
  <div wrapper gap-2>
    Onu Vue Example
    <OButton variant="solid" class="btn-teal" rounded size="lg" @click="toggleDark()">
      Toggle Dark
    </OButton>

    <OButton variant="link" to="https://google.com" target="_blank">
      Google
    </OButton>

    <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
    <OAvatar w="12!" rounded online src="https://avatars.githubusercontent.com/u/42139754" />
    <OAvatar variant="hexagon" src="https://avatars.githubusercontent.com/u/42139754" />
    <OAvatar size="sm" w-full rounded>
      <span>+99</span>
    </OAvatar>
    <OAvatarGroup>
      <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
      <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
      <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
      <OAvatar w-full>
        <span>+99</span>
      </OAvatar>
    </OAvatarGroup>
    <OAvatarGroup vertical size="sm" space-y="-3">
      <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
      <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
      <OAvatar src="https://avatars.githubusercontent.com/u/42139754" />
      <OAvatar w-full>
        <span>+99</span>
      </OAvatar>
    </OAvatarGroup>
  </div>
</template>

<style>
:root{
  background-color: #ffffff;
  color: #222222;
}

.dark {
  background-color: #1a1817;
  color: #ffffff;
}
</style>
