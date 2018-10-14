<template>
  <v-footer
    class="px-0 pt-0 success"
    height="70px"
    inset
    style="z-index: 5; padding-bottom: 150px;"
  >
    <v-container
      class="py-0"
      :fluid="!largeSize"
    >
      <v-layout
        row
        wrap
        fill-height
      >
        <!--<v-flex-->
        <!--xs12-->
        <!--class="zindex6 px-4"-->
        <!--&gt;-->
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
        <!--<div-->
        <!--class="mx-auto"-->
        <!--style="width: 100%"-->
        <!--:class="[largeSize ? 'contact-footer-contained' : '', !smallSize ? 'side-nav-padding': '']"-->
        <!--&gt;-->
        <!--<a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a>-->
        <!--</div>-->
        <!--&lt;!&ndash;</divs>&ndash;&gt;-->

        <!--</v-flex>-->
        <v-flex
          xs12
          class="text-xs-center"
        >


          <v-btn
            icon
            class="btn-social btn-social-footer clear-border-radius"
            @click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"
            style="height: 100%; width: 100%;"
            active-class="selected-menu-item"
            :ripple="false"
          >
            <linked-in-icon title="LinkedIn"></linked-in-icon>
          </v-btn>
          <v-btn
            icon
            class="btn-social btn-social-footer clear-border-radius"
            @click="openInNewWindow('https://twitter.com/the_audio_kid')"
            style="height: 100%; width: 100%;"
            active-class="selected-menu-item"
            :ripple="false"
          >
            <twitter-icon title="Twitter"></twitter-icon>
          </v-btn>
          <v-btn
            icon
            class="btn-social btn-social-footer clear-border-radius"
            @click="openInWindow('mailto:urantowka.jacob@gmail.com')"
            active-class="selected-menu-item"
            :ripple="false"
          >
            <email-icon title="Email"></email-icon>
          </v-btn>

        </v-flex>
      </v-layout>
    </v-container>
    <!--<soundwaves4 class="zindex5"></soundwaves4>-->
  </v-footer>
</template>

<script>
import Soundwaves4 from './svg/Soundwaves4';
import InstagramIcon from 'vue-material-design-icons/instagram.vue';
import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
import TwitterIcon from 'vue-material-design-icons/twitter.vue';
import EmailIcon from 'vue-material-design-icons/email.vue';

export default {
  name:       'my-footer',
  components: {
    Soundwaves4, InstagramIcon, LinkedInIcon, TwitterIcon, EmailIcon,
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
      window.open(url, '_blank');
    },
    openInWindow(url) {
      window.open(url, '_self');
    },
  },
};
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
