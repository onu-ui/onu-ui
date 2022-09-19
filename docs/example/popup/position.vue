<template>
  <div :style="{ position: 'relative', width: '440px', height: '280px' }">
    <o-popup position="top-left">
      <o-button class="button" :style="{ position: 'absolute', top: '0', left: '70px' }">
        top-left
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="top">
      <o-button class="button" :style="{ position: 'absolute', top: '0', left: '200px' }">
        top
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="top-right">
      <o-button class="button" :style="{ position: 'absolute', top: '0', left: '330px' }">
        top-right
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="bottom-left">
      <o-button class="button" :style="{ position: 'absolute', top: '240px', left: '70px' }">
        bottom-left
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="bottom">
      <o-button class="button" :style="{ position: 'absolute', top: '240px', left: '200px' }">
        bottom
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="bottom-right">
      <o-button class="button" :style="{ position: 'absolute', top: '240px', left: '330px' }">
        bottom-right
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="left-top">
      <o-button class="button" :style="{ position: 'absolute', top: '60px', left: '10px' }">
        left-top
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="left">
      <o-button class="button" :style="{ position: 'absolute', top: '120px', left: '10px' }">
        left
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="left-bottom">
      <o-button class="button" :style="{ position: 'absolute', top: '180px', left: '10px' }">
        left-bottom
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="right-top">
      <o-button class="button" :style="{ position: 'absolute', top: '60px', left: '390px' }">
        right-top
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="right">
      <o-button class="button" :style="{ position: 'absolute', top: '120px', left: '390px' }">
        right
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
    <o-popup position="right-bottom" trigger="click">
      <o-button class="button" :style="{ position: 'absolute', top: '180px', left: '390px' }">
        right-bottom
      </o-button>
      <template #content>
        <p>Here is the text content</p>
        <p>Here is the text content</p>
      </template>
    </o-popup>
  </div>
</template>

<style scoped>
.button {
  width: 120px;
}
</style>
