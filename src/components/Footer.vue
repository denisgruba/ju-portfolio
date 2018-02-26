<template>
  <v-container
      fluid
      class="pa-0 mt-5"
      align-content-end
      align-end
      style="max-height: 250px;"
  >
    <v-layout
        row
        wrap
        align-end
        fill-height
    >
      <v-flex
          xs12
          class="zindex6 px-4 text-xs-right pb-3"
          :class="largeSize ? 'contact-footer-contained' : ''"
      >
        <a href="mailto:contact@jacoburantowka.com">urantowka.jacob@gmail.com</a>
        <span class="break-pipe-opacity">|</span>
        <span class="phone">+44&nbsp;(0)&nbsp;7463341569</span>
      </v-flex>
    </v-layout>
    <!--<soundwaves4 class="zindex5"></soundwaves4>-->
  </v-container>
</template>

<script>
  import Soundwaves4 from './svg/Soundwaves4';

  export default {
    name: 'my-footer',
    components: {
      Soundwaves4
    },
    computed: {
      largeSize() {
        return this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
    }
  }
</script>

<style scoped>
  .container {
    z-index: 5;
  }

  .zindex6 {
    z-index: 6;
  }

  .zindex5 {
    z-index: 5;
  }

  .break-pipe-opacity{
    opacity: .4;
  }

  .contact-footer-contained {
    max-width: 1000px!important;
    margin: 0 auto;
  }

  a, .phone {
    text-decoration: none;
    font-weight: 600;
    /*color: #fff;*/
  }
</style>
