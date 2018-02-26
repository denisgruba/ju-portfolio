<template>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 2273.8 615" enable-background="new 0 0 2273.8 615" xml:space="preserve" class="error--text soundwaves-bottom-fixed">
    <path opacity="0.24" fill="#0088FF" d="M2274.2,103c0,0-20.1,82-143.6,100c-122.4,17.8-188.5-54-321.2-24  c-122.4,27.7-131.6,98-276.2,158s-303.8-84.2-434.3-38c-135.6,48-155.3,252-321.2,266S476.3,376,335.5,376S0,520.3,0,520.3V615  h2272.2L2274.2,103z"></path>
    <path opacity="0.28" fill="#00FFFF" d="M0.3,397c0,0,125.5,108.7,357.8,108.7S662.4,303,899.8,303s301.5,112,467.5,112  s309.4-356,541.6-356S2274,299,2274,299v316H0.2L0.3,397z"></path>
    <path opacity="0.27" fill="#0088FF" d="M330.8,615c0,0,160-144,303.5-144s348.7,144,348.7,144H330.8z"></path>
  </svg>
</template>

<script>
  export default {
    name: 'soundwaves3'
  }
</script>

<style scoped lang="scss">
  .soundwaves-bottom-fixed {
    position: fixed;
    z-index: 1;
    bottom: 0;
    opacity: .8;
    path {
      will-change: fill;
      transition: fill .5s;
    }
  }
</style>
