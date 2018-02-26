<template>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2273.8 615" enable-background="new 0 0 2273.8 615" xml:space="preserve" class="error--text soundwaves-bottom-absolute">
    <path opacity="0.59" fill="currentColor" d="M1076.6,615c0,0,291.8-406,445.9-406s386.4,116,519.2,116c132.8,0,232.5-188,232.5-188  l-2,478H1076.6z"></path>
  </svg>
</template>

<script>
  export default {
    name: 'soundwaves3'
  }
</script>

<style scoped lang="scss">
  .soundwaves-bottom-absolute {
    position: absolute;
    z-index: 1;
    bottom: 0;
    opacity: .8;
    width: 1220px;
    right: 0;
    path {
      will-change: fill;
      transition: fill .5s;
    }
  }
</style>
