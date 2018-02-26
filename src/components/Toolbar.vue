<template>
  <v-toolbar
      app
      flat
      class="secondary pt-4 pb-2"
      fixed
      style="z-index: 6"
      :class="largeSize ? 'toolbar-contained' : ''"
  >
    <v-btn
        icon
        class="btn-social clear-border-radius mx-0 px-4 hidden-md-and-up"
        style="height: 100%; width: 100%;"
        @click="setSideNav(true)"
        :ripple="false"
    >
      <menu-icon class="text--grey text--darken-2"></menu-icon>
    </v-btn>
    <router-link
        :to="{name: 'Home'}"
        style="height: 100%;"
        class="pt-1"
    >
      <v-toolbar-title
          class="ma-0 px-4 depth8"
          style="line-height: 1.3"
      >
        <span style="font-weight: 600; font-size: 28px">Jacob Urantowka</span><br>
        <span
            style="font-size: 16px"
            class="grey--text text--darken-2"
        >Dialogue and Sound Designer</span>
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-toolbar-items class="depth8 hidden-sm-and-down">
      <v-btn
          flat
          :to="{name: 'Home'}"
          exact
          class="clear-border-radius"
          active-class="selected-menu-item"
          :ripple="false"
      ><span>Showreel</span>
      </v-btn>
      <v-btn
          flat
          :to="{name: 'PortfolioList'}"
          class="clear-border-radius"
          active-class="selected-menu-item"
          :ripple="false"
      ><span>Projects</span>
      </v-btn>
      <v-btn
          flat
          :to="{name: 'About'}"
          class="clear-border-radius"
          active-class="selected-menu-item"
          :ripple="false"
      ><span>About</span>
      </v-btn>
      <v-btn
          icon
          class="btn-social clear-border-radius px-4"
          href="https://uk.linkedin.com/in/jurantowka"
          target="_blank"
          style="height: 100%; width: 100%;"
          active-class="selected-menu-item"
          :ripple="false"
      >
        <linked-in-icon class="text--grey text--darken-2"></linked-in-icon>
      </v-btn>
      <v-btn
          icon
          class="btn-social clear-border-radius px-4"
          href="https://twitter.com/the_audio_kid"
          target="_blank"
          style="height: 100%; width: 100%;"
          active-class="selected-menu-item"
          :ripple="false"
      >
        <twitter-icon class="text--grey text--darken-2"></twitter-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import InstagramIcon from 'vue-material-design-icons/instagram.vue';
  import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
  import TwitterIcon from 'vue-material-design-icons/twitter.vue';
  import MenuIcon from 'vue-material-design-icons/menu.vue';

  export default {
    name: 'toolbar',
    components: {
      InstagramIcon, LinkedInIcon, TwitterIcon, MenuIcon,
    },
    computed: {
      largeSize() {
        return this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
      ...mapGetters([
        'getSideNavState',
      ]),
    },
    methods: {
      ...mapMutations([
        'setSideNav',
      ]),
    }
  }
</script>

<style>
  .material-design-icon__svg path {
    fill: #313131;
  }

  .depth8 {
    z-index: 8;
  }
</style>
