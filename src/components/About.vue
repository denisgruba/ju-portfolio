<template>
  <v-container
      :fluid="!largeSize"
      class="pa-0"
  >
    <v-layout
        row
        wrap
    >
      <v-flex
          xs12
          class="fixed-height-spacer"
      >

      </v-flex>
      <v-flex xs12>
        <v-container
            fluid
            grid-list-xl
        >
          <v-layout
              row
              wrap
          >
            <v-flex xs12>
              <h5 class="headline">About me</h5>
            </v-flex>
            <v-flex
                xs12
                md6
            >
              <img
                  :src="aboutImage"
                  alt=""
                  class="responsive-img"
              >
            </v-flex>
            <v-flex
                xs12
                md6
                v-html="aboutMessage"
            >

            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name:     'about',
    computed: {
      smallSize() {
        return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly;
      },
      largeSize() {
        return this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
      ...mapGetters({
        aboutImage:   'getAboutImage',
        aboutMessage: 'getAboutMessage',
        pageColors:   'getAboutColors'
      }),
    },
    // created() {
    //   this.$store.commit('setPageColors', this.pageColors);
    // }
  }
</script>

<style scoped>

</style>
