<template>
  <v-footer
      app
      class="pa-0 mt-5 white"
      inset
      style="z-index: 5"
  >
    <v-layout
        row
        wrap
        align-end
        fill-height
    >
      <v-flex
          xs12
          class="zindex6 px-4 pb-3 text-xs-right"
          style="float: right;"
      >
        <!--<div-->
        <!--style="width: 50%; float: left;"-->
        <!--class="text-xs-left"-->
        <!--&gt;-->
        <!--<v-btn-->
        <!--icon-->
        <!--class="btn-social btn-social-footer clear-border-radius"-->
        <!--@click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"-->
        <!--style="height: 100%; width: 100%;"-->
        <!--active-class="selected-menu-item"-->
        <!--:ripple="false"-->
        <!--&gt;-->
        <!--<linked-in-icon></linked-in-icon>-->
        <!--</v-btn>-->
        <!--<v-btn-->
        <!--icon-->
        <!--class="btn-social btn-social-footer clear-border-radius"-->
        <!--@click="openInNewWindow('https://twitter.com/the_audio_kid')"-->
        <!--style="height: 100%; width: 100%;"-->
        <!--active-class="selected-menu-item"-->
        <!--:ripple="false"-->
        <!--&gt;-->
        <!--<twitter-icon></twitter-icon>-->
        <!--</v-btn>-->
        <!--</div>-->
        <!--<divs-->
        <!--class="text-xs-right"-->
        <!--&gt;-->
        <div class="mx-auto"
             style="width: 100%"
             :class="[largeSize ? 'contact-footer-contained' : '', !smallSize ? 'side-nav-padding': '']">
          <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a>
        </div>
        <!--</divs>-->

      </v-flex>
    </v-layout>
    <!--<soundwaves4 class="zindex5"></soundwaves4>-->
  </v-footer>
</template>

<script>
  import Soundwaves4 from './svg/Soundwaves4';
  import InstagramIcon from 'vue-material-design-icons/instagram.vue';
  import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
  import TwitterIcon from 'vue-material-design-icons/twitter.vue';

  export default {
    name:       'my-footer',
    components: {
      Soundwaves4, InstagramIcon, LinkedInIcon, TwitterIcon
    },
    computed:   {
      smallSize() {
        return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly;
      },
      largeSize() {
        return this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
    },
    methods:    {
      openInNewWindow(url) {
        window.open(url, '_blank')
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

  .break-pipe-opacity {
    opacity: .4;
  }

  .contact-footer-contained {
    max-width: 1250px !important;
    margin: 0 auto;
  }

  .side-nav-padding {
    padding-left: 300px;
  }

  a, .phone {
    text-decoration: none;
    font-weight: 600;
    /*color: #fff;*/
  }
</style>
