<template>
  <TheHeader />
  <Bg />
  <main class="w-65% ma">
    <router-view v-slot="{ Component, route }">
      <transition
        enter-active-class="animate-fade-in animate-duration-300"
        leave-active-class="animate-fade-out animate-duration-300"
        mode="out-in"
      >
        <!-- <keep-alive> -->
        <div>
          <component :is="Component" :key="route.name" />
        </div>
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </main>
</template>
