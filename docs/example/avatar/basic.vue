<script setup lang='ts'>
const avatarSrcs = [
  'https://images.unsplash.com/photo-1660594714679-19b0173e0558?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1657299143548-658603d76b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1660554042520-db71c7fea8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1657299170964-205905bb0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1660629845211-15da6db2e726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1660489060328-9868cad59617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1657299143437-b63ce1fc01aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1660567368387-33950e914e51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1660563115496-8040aa23fc81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1660548842498-852ef7793ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
]

const getRandomSrc = () => avatarSrcs[Math.floor(Math.random() * (avatarSrcs.length - 1))]
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <o-avatar :src="getRandomSrc()" />
      <o-avatar :src="getRandomSrc()" />
      <o-avatar :src="getRandomSrc()" />
      <o-avatar mode="img" :src="getRandomSrc()" />
      <o-avatar mode="img" :src="getRandomSrc()" />
      <o-avatar mode="img" :src="getRandomSrc()" />
    </div>
    <div fscw gap-2>
      <o-avatar size="xs" :src="getRandomSrc()" />
      <o-avatar size="xs" rounded :src="getRandomSrc()" />
      <o-avatar size="sm" rounded :src="getRandomSrc()" />
      <o-avatar size="md" :src="getRandomSrc()" />
      <o-avatar size="md" rounded :src="getRandomSrc()" />
      <o-avatar size="lg" :src="getRandomSrc()" />
      <o-avatar size="lg" rounded="!md" :src="getRandomSrc()" />
    </div>
  </div>
</template>
