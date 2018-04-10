<template>
  <v-navigation-drawer
      class="side-nav pb-0"
      v-model="sideNavState"
      fixed
      :temporary="smallSize"
      :floating="!smallSize"
      :permanent="!smallSize"
      app
      height="100%"
      style="z-index: 20;"
  >
    <v-layout
        column
        fill-height
        justify-space-between
    >
      <v-flex xs12>
        <!--<v-list>-->
        <!--<v-list-tile>-->
        <!--<v-list-tile-title class="title">-->
        <router-link
            :to="{name: 'Home'}">
          <p class="pa-3">
            <span class="name-title">Jacob Urantowka</span><br>
            <span
                style="font-size: 16px"
                class="grey--text text--darken-2"
            >Audio Designer</span>
          </p>
        </router-link>

        <!--</v-list-tile-title>-->
        <!--</v-list-tile>-->
        <!--</v-list>-->
        <v-list
            dense
            class="pt-0"
        >
          <v-list-tile>
            <v-btn
                flat
                block
                :to="{name: 'Home'}"
                class="clear-border-radius text-xs-left btn-justify-left"
                active-class="selected-menu-item"
                exact
                :ripple="false"
            ><span>Home</span></v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn
                flat
                block
                exact
                class="clear-border-radius text-xs-left btn-justify-left default-cursor"
                active-class="selected-menu-item"
                :ripple="false"
            ><span>
              Projects
              <!--<v-icon color="grey">arrow_drop_down</v-icon>-->
            </span>
            </v-btn>
          </v-list-tile>
          <v-list-tile
              class="project-links"
              v-for="(item, index) in $store.state.portfolioItems.list"
              :key="item.title"
          >
            <v-btn
                flat
                block
                exact
                class="pl-4 clear-border-radius text-xs-left btn-justify-left"
                active-class="selected-menu-item"
                :to="{name: 'PortfolioItem', params: {id: index}}"
                :ripple="false"
            ><span>{{ item.menuTitle }}</span></v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn
                flat
                block
                :to="{name: 'About'}"
                class="clear-border-radius text-xs-left btn-justify-left"
                active-class="selected-menu-item"
                :ripple="false"
            ><span>About</span>
            </v-btn>
          </v-list-tile>
          <!--<v-list-tile-->
          <!--@click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"-->
          <!--&gt;-->
          <!--<v-list-tile-action>-->
          <!--<linked-in-icon class="text&#45;&#45;grey text&#45;&#45;darken-2"></linked-in-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
          <!--<v-list-tile-title>LinkedIn</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
          <!--<v-list-tile-->
          <!--@click="openInNewWindow('https://twitter.com/the_audio_kid')"-->
          <!--&gt;-->
          <!--<v-list-tile-action>-->
          <!--<twitter-icon class="text&#45;&#45;grey text&#45;&#45;darken-2"></twitter-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
          <!--<v-list-tile-title>Twitter</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
          <!--</v-list-tile>-->
        </v-list>
<!--<v-btn block color="primary" outline href="https://itunes.apple.com/us/podcast/truesdale/id1360868294?mt=2&app=podcast">-->
  <!--Listen on Apple Podcasts-->
  <!--<v-icon right>volume_up</v-icon>-->
<!--</v-btn>-->
      </v-flex>
      <div>
        <v-list style="bottom:0; width: 100%">
          <!--<v-list-tile>-->
            <!--<v-btn-->
                <!--flat-->
                <!--block-->
                <!--href="mailto:urantowka.jacob@gmail.com"-->
                <!--class="clear-border-radius text-xs-left btn-justify-left"-->
                <!--active-class="selected-menu-item"-->
                <!--:ripple="false"-->
            <!--&gt;<span>urantowka.jacob@gmail.com</span>-->
            <!--</v-btn>-->
          <!--</v-list-tile>-->
          <v-list-tile>
            <v-btn
                icon
                class="btn-social clear-border-radius px-4"
                @click="openInNewWindow('https://uk.linkedin.com/in/jurantowka')"
                style="height: 100%; width: 100%;"
                active-class="selected-menu-item"
                :ripple="false"
            >
              <linked-in-icon class="text--grey text--darken-2"></linked-in-icon>
            </v-btn>
            <v-btn
                icon
                class="btn-social clear-border-radius px-4"
                @click="openInNewWindow('https://twitter.com/the_audio_kid')"
                style="height: 100%; width: 100%;"
                active-class="selected-menu-item"
                :ripple="false"
            >
              <twitter-icon class="text--grey text--darken-2"></twitter-icon>
            </v-btn>
          </v-list-tile>
        </v-list>

      </div>
    </v-layout>
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
    name:       'side-nav',
    components: {
      InstagramIcon, LinkedInIcon, TwitterIcon,
    },
    computed:   {
      sideNavState: {
        get() {
          return this.getSideNavState;
        },
        set(newValue) {
          this.setSideNav(newValue);
        },
      },
      smallSize() {
        return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly;
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
    methods:    {
      openInNewWindow(url) {
        window.open(url, '_blank')
      },
      ...mapMutations([
        'setSideNav'
      ])
    }
  }
</script>

<style lang="scss">
  .side-nav {
    overflow-y: auto;
    z-index: 4;
  }
</style>
