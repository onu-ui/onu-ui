<script lang='ts' setup>
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
  <OCard title="Avatar">
    <div space-y-2>
      <div fsc gap-2>
        <O-Avatar :src="getRandomSrc()" />
        <O-Avatar :src="getRandomSrc()" />
        <O-Avatar :src="getRandomSrc()" />
        <O-Avatar mode="img" :src="getRandomSrc()" />
        <O-Avatar mode="img" :src="getRandomSrc()" />
        <O-Avatar mode="img" :src="getRandomSrc()" />
      </div>
      <div fsc gap-4>
        <O-Avatar-Group>
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar o-info>
            +99
          </O-Avatar>
        </O-Avatar-Group>
        <O-Avatar-Group size="lg">
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar :src="getRandomSrc()" />
          <O-Avatar o-info>
            +99
          </O-Avatar>
        </O-Avatar-Group>
      </div>
      <div fsc gap-2>
        <O-Avatar size="xs" :src="getRandomSrc()" />
        <O-Avatar size="xs" rounded :src="getRandomSrc()" />
        <O-Avatar size="sm" :src="getRandomSrc()" />
        <O-Avatar size="sm" rounded :src="getRandomSrc()" />
        <O-Avatar size="md" :src="getRandomSrc()" />
        <O-Avatar size="md" rounded :src="getRandomSrc()" />
        <O-Avatar size="lg" :src="getRandomSrc()" />
        <O-Avatar size="lg" rounded="md" :src="getRandomSrc()" />
      </div>
      <div fsc gap-2 />
      <div fsc gap-2>
        <O-Avatar>
          <div text-primary class="i-carbon-user-certification" />
        </O-Avatar>
        <O-Avatar o-gray>
          <span text-xs>Avatar</span>
        </O-Avatar>
        <O-Avatar o-primary>
          <div text-lg i-carbon-face-satisfied-filled />
        </O-Avatar>
        <O-Avatar o-warning>
          <div text-lg i-carbon-bee />
        </O-Avatar>
        <O-Avatar o-error>
          123
        </O-Avatar>
      </div>
    </div>
  </OCard>
</template>

<style lang='scss' scoped>
</style>
