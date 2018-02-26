<template>
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 2273.8 307.5" enable-background="new 0 0 2273.8 307.5" xml:space="preserve" class="soundwaves-bottom-absolute" >
    <path opacity="0.14" fill="#0088FF" d="M2274.2,111.5c0,0-39.1,34-147.1,34c-108,0-151.3-73.5-294-73.5s-183,117.8-321,117.8
      s-155.2-71.3-331.5-71.3s-242,139-403,139s-301.4-126-442.3-126S-0.2,212.8-0.2,212.8v94.7h2272.4L2274.2,111.5z"/>
    <path opacity="0.17" fill="#0088FF" d="M0.2,307.5L0.2,162c0,0,39.5-50.5,129.6-50.5s221.4,127,408.9,127s218.1-83,422.1-83
      s394,152,394,152L0.2,307.5z"/>
    <path opacity="0.18" fill="#00FFFF" d="M0.3,89.5c0,0,125.5,108.7,357.8,108.7S662.4,72,899.8,72s392.4,171,558.4,171
      s218.4-96,450.6-96s365.4,96,365.4,96l-0.4,64.5H0.2L0.3,89.5z"/>
    <path opacity="0.19" fill="#00FF00" d="M1084.6,307.5c0,0,283.8-203,437.9-203s386.4,111,519.2,111s232.5-46,232.5-46l-0.4,138
      H1084.6z"/>
</svg>
</template>

<script>
  export default {
    name:     'soundwaves5',
  }
</script>

<style
    scoped
    lang="scss"
>

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

  @media screen and (min-width: 1150px) {
    .soundwaves-bottom-absolute {
      width: 100%;
    }
  }
</style>
