<template>
  <div fscw gap-2>
    <o-progress type="circle" :percentage="0" />
    <o-progress type="circle" :percentage="25" />
    <o-progress type="circle" :percentage="100" status="success" />
    <o-progress type="circle" :percentage="70" status="warning" />
    <o-progress type="circle" :percentage="50" status="error" />
  </div>
</template>
