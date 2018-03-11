<template>
  <v-navigation-drawer
      v-model="sideNavState"
      fixed
      temporary
      app
      height="100%"
      style="z-index: 20;"
  >
    <v-toolbar
        flat
        class="transparent"
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            <span style="font-weight: 600">Jacob Urantowka</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list
        dense
        class="pt-0"
    >
      <v-list-tile
          :to="{name: 'Home'}"
          exact
      >
        <v-list-tile-action>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group
          value="true"
          no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-action>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
            v-for="(item, index) in $store.state.portfolioItems.list"
            :key="item.title"
            :to="{name: 'PortfolioItem', params: {id: index}}"
        >
          <v-list-tile-content class="pl-4">
            <v-list-tile-title>{{ item.menuTitle }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
      <v-list-tile :to="{name: 'About'}">
        <v-list-tile-action>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>About</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
          @click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"
      >
        <v-list-tile-action>
          <linked-in-icon class="text--grey text--darken-2"></linked-in-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>LinkedIn</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile
          @click="openInNewWindow('https://twitter.com/the_audio_kid')"
      >
        <v-list-tile-action>
          <twitter-icon class="text--grey text--darken-2"></twitter-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Twitter</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <!--<v-btn flat :to="{name: 'Home'}" exact class="clear-border-radius">Showreel</v-btn>-->
    <!--<v-btn flat :to="{name: 'PortfolioList'}" class="clear-border-radius">Projects</v-btn>-->
    <!--<v-btn flat :to="{name: 'About'}" class="clear-border-radius">About</v-btn>-->
    <!--<v-btn icon class="btn-social clear-border-radius px-4" href="https://uk.linkedin.com/in/jacoburantowka">-->
    <!--<linked-in-icon class="text&#45;&#45;grey text&#45;&#45;darken-2"></linked-in-icon>-->
    <!--</v-btn>-->
    <!--<v-btn icon class="btn-social clear-border-radius px-4" href="https://twitter.com/the_audio_kid">-->
    <!--<twitter-icon class="text&#45;&#45;grey text&#45;&#45;darken-2"></twitter-icon>-->
    <!--</v-btn>-->
  </v-navigation-drawer>
</template>

<script>
  import InstagramIcon from 'vue-material-design-icons/instagram.vue';
  import LinkedInIcon from 'vue-material-design-icons/linkedin.vue';
  import TwitterIcon from 'vue-material-design-icons/twitter.vue';
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    name: 'side-nav',
    components: {
      InstagramIcon, LinkedInIcon, TwitterIcon,
    },
    computed: {
      sideNavState: {
        get() {
          return this.getSideNavState;
        },
        set(newValue) {
          this.setSideNav(newValue);
        }
      },
      ...mapGetters([
        'getSideNavState'
      ])
    },
    data() {
      return {
        // menuItems: [
        //   {
        //     title: 'Showreel',
        //     link:  {name: 'Home'},
        //     icon: '',
        //   }
        // ]
      }
    },
    methods: {
      openInNewWindow(url) {
        window.open(url, '_blank')
      },
      ...mapMutations([
        'setSideNav'
      ])
    }
  }
</script>

<style scoped>

</style>
