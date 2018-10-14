<template>
  <v-layout
    row
    wrap
    align-content-center
  >
    <v-flex xs12>
      <h5 class="display-1 mb-4 headline-underline text-xs-center pt-4">Jacob Urantowka</h5>
      <component
        v-bind:is="helloLinked"
        v-bind="$props"
      />
      <div class="text-xs-center">

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
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
import TwitterIcon from 'vue-material-design-icons/twitter.vue';
import EmailIcon from 'vue-material-design-icons/email.vue';

export default {
  name:       'home-page',
  components: {
    LinkedInIcon, TwitterIcon, EmailIcon,
  },
  computed:   {
    helloLinked() {
      return {
        template: this.helloMessage,
        props:    this.$options.props,
      };
    },
    smallSize() {
      return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly;
    },
    largeSize() {
      return this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
    },
    ...mapGetters({
                    helloMessage: 'getHelloMessage',
                    pageColors:   'getHomeColors',
                    homeVideo:    'getHomeVideo',
                  }),
  },

  data() {
    return {};
  },
  methods: {
    openInNewWindow(url) {
      window.open(url, '_blank');
    },
    openInWindow(url) {
      window.open(url, '_self');
    },
  },
  created() {
    this.$store.commit('setPageColors', this.pageColors);
  },
};
</script>

<style>

</style>
