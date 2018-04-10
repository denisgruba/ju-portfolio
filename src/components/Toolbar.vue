<template>
  <v-toolbar
      app
      flat
      class="secondary"
      fixed
      v-show="smallSize"
      style="z-index: 6"
      :class="[largeSize ? 'toolbar-contained' : '', smallSize ? 'pt-2 pb-2' : 'pt-4 pb-4']"
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
        <span class="name-title">Jacob Urantowka</span><br>
        <span
            style="font-size: 16px"
            class="grey--text text--darken-2"
        >Audio Designer</span>
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <!--<v-toolbar-items class="depth8 hidden-sm-and-down">-->
      <!--<v-btn-->
          <!--flat-->
          <!--:to="{name: 'Home'}"-->
          <!--class="clear-border-radius"-->
          <!--active-class="selected-menu-item"-->
          <!--exact-->
          <!--:ripple="false"-->
      <!--&gt;<span>Home</span>-->
      <!--</v-btn>-->
      <!--<v-menu-->
          <!--open-on-hover-->
          <!--bottom-->
          <!--offset-y-->
          <!--content-class="toolbar-menu elevation-1"-->
      <!--&gt;-->
        <!--<v-btn-->
            <!--slot="activator"-->
            <!--flat-->
            <!--exact-->
            <!--class="clear-border-radius"-->
            <!--active-class="selected-menu-item"-->
            <!--:ripple="false"-->
        <!--&gt;<span>Projects</span>-->
        <!--</v-btn>-->
        <!--<v-list-->
        <!--&gt;-->
          <!--<v-list-tile-->
              <!--class="project-links"-->
              <!--v-for="(item, index) in $store.state.portfolioItems.list"-->
              <!--:key="item.title"-->
              <!--:to="{name: 'PortfolioItem', params: {id: index}}"-->
          <!--&gt;-->
            <!--<v-list-tile-title>{{ item.menuTitle }}</v-list-tile-title>-->
          <!--</v-list-tile>-->
        <!--</v-list>-->
      <!--</v-menu>-->
      <!--<v-btn-->
          <!--flat-->
          <!--:to="{name: 'About'}"-->
          <!--class="clear-border-radius"-->
          <!--active-class="selected-menu-item"-->
          <!--:ripple="false"-->
      <!--&gt;<span>About</span>-->
      <!--</v-btn>-->
      <!--<v-btn-->
          <!--icon-->
          <!--class="btn-social clear-border-radius px-4"-->
          <!--@click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"-->
          <!--style="height: 100%; width: 100%;"-->
          <!--active-class="selected-menu-item"-->
          <!--:ripple="false"-->
      <!--&gt;-->
        <!--<linked-in-icon class="text&#45;&#45;grey text&#45;&#45;darken-2"></linked-in-icon>-->
      <!--</v-btn>-->
      <!--<v-btn-->
          <!--icon-->
          <!--class="btn-social clear-border-radius px-4"-->
          <!--@click="openInNewWindow('https://twitter.com/the_audio_kid')"-->
          <!--style="height: 100%; width: 100%;"-->
          <!--active-class="selected-menu-item"-->
          <!--:ripple="false"-->
      <!--&gt;-->
        <!--<twitter-icon class="text&#45;&#45;grey text&#45;&#45;darken-2"></twitter-icon>-->
      <!--</v-btn>-->
    <!--</v-toolbar-items>-->
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
