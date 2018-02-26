<template>
  <div id="app">
    <v-app class="secondary">
      <side-nav></side-nav>
      <toolbar></toolbar>
      <v-content style="z-index: 4" fill-height>
        <transition
            name="fade-quick"
            mode="out-in"
        >
          <router-view/>
        </transition>
      </v-content>
      <my-footer></my-footer>
      <vue-progress-bar></vue-progress-bar>
      <soundwaves3></soundwaves3>
    </v-app>
  </div>
</template>

<script>
  import Soundwaves3 from './components/svg/Soundwaves3';
  import Soundwaves2 from './components/svg/Soundwaves2';
  import {mapGetters} from 'vuex';
  import Toolbar from './components/Toolbar';
  import MyFooter from './components/Footer';
  import SideNav from './components/SideNav';

  export default {
    name:       'App',
    components: {
      Toolbar, MyFooter, SideNav, Soundwaves3, Soundwaves2,
    },
    computed:   {
      ...mapGetters({
        getPageColors: 'getPageColors',
      })
    },
    created() {
      //  [App.vue specific] When App.vue is first loaded start the progress bar
      this.$Progress.start();
      //  hook the progress bar to start before we move router-view
      this.$router.beforeEach((to, from, next) => {
        //  does the page we want to go to have a meta.progress object
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          // parse meta tags
          this.$Progress.parseMeta(meta);
        }
        //  start the progress bar
        this.$Progress.start();
        //  continue to next page
        next();
      });
      //  hook the progress bar to finish after we've finished moving router-view
      this.$router.afterEach((to, from) => {
        //  finish the progress bar
        const vm = this;
        this.$nextTick()
            .then(function () {
              vm.$Progress.finish();
            });
      });
    },
    mounted() {
      //  [App.vue specific] When App.vue is finish loading finish the progress bar
      this.$Progress.finish();
    },
    watch:      {
      getPageColors: {
        handler(newValue) {
          this.$vuetify.theme.secondary = newValue.secondary;
          this.$vuetify.theme.error = newValue.error;
        },
        deep: true,
        immediate: true,
      }
    }
  }
</script>

<style>

</style>
