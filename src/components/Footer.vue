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
          class="zindex6 px-4 pb-3"
          :class="largeSize ? 'contact-footer-contained' : ''"
      >
        <div
            style="width: 50%; float: left;"
            class="text-xs-left"
        >
          <v-btn
              icon
              class="btn-social btn-social-footer clear-border-radius"
              @click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"
              style="height: 100%; width: 100%;"
              active-class="selected-menu-item"
              :ripple="false"
          >
            <linked-in-icon></linked-in-icon>
          </v-btn>
          <v-btn
              icon
              class="btn-social btn-social-footer clear-border-radius"
              @click="openInNewWindow('https://twitter.com/the_audio_kid')"
              style="height: 100%; width: 100%;"
              active-class="selected-menu-item"
              :ripple="false"
          >
            <twitter-icon></twitter-icon>
          </v-btn>
        </div>
        <div
            style="width: 50%; float: right;"
            class="text-xs-right"
        >
          <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a>
        </div>

      </v-flex>
    </v-layout>
    <!--<soundwaves4 class="zindex5"></soundwaves4>-->
  </v-container>
</template>

<script>
  import Soundwaves4 from './svg/Soundwaves4';
  import InstagramIcon from 'vue-material-design-icons/instagram.vue';
  import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
  import TwitterIcon from 'vue-material-design-icons/twitter.vue';

  export default {
    name: 'my-footer',
    components: {
      Soundwaves4, InstagramIcon, LinkedInIcon, TwitterIcon
    },
    computed: {
      largeSize() {
        return this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
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
    max-width: 1000px !important;
    margin: 0 auto;
  }

  a, .phone {
    text-decoration: none;
    font-weight: 600;
    /*color: #fff;*/
  }
</style>
