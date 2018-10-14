<template>
  <v-toolbar
      flat
      class="success"
      fixed
      style="z-index: 6"
      height="60px"
      :class="[largeSize ? 'toolbar-contained' : '', smallSize ? 'pt-2 pb-2' : 'pt-4 pb-4']"
  >
    <router-link
        :to="{name: 'Home'}"
        style="height: 100%;"
        class="pt-1"
    >
      <v-toolbar-title
          class="ma-0 px-4 depth8"
          style="line-height: 1.3"
      >
        <span class="name-title">Jacob Urantowka</span><br>
        <span
            style="font-size: 16px"
            class="grey--text text--darken-2"
        >Audio Designer</span>
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import InstagramIcon from 'vue-material-design-icons/instagram.vue';
  import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
  import TwitterIcon from 'vue-material-design-icons/twitter.vue';
  import MenuIcon from 'vue-material-design-icons/menu.vue';

  export default {
    name:       'toolbar',
    components: {
      InstagramIcon, LinkedInIcon, TwitterIcon, MenuIcon,
    },
    computed:   {
      smallSize() {
        return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly;
      },
      largeSize() {
        return this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
      ...mapGetters([
        'getSideNavState',
      ]),
    },
    methods:    {
      openInNewWindow(url) {
        window.open(url, '_blank')
      },
      ...mapMutations([
        'setSideNav',
      ]),
    }
  }
</script>

<style lang="scss">
  .secondary {
    .toolbar__content {
      height: auto !important;
    }
  }

  .material-design-icon__svg path {
    fill: #313131;
  }

  .depth8 {
    z-index: 8;
  }
</style>
