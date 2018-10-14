<template>
  <v-layout
    row
    wrap
    fill-height
    align-content-center
  >
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
            <h5 class="display-1 headline-underline">About me</h5>
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

          >
            <component
              v-bind:is="aboutLinked"
              v-bind="$props"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name:     'about',
  computed: {
    aboutLinked() {
      return {
        template: this.aboutMessage,
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
                    aboutImage:   'getAboutImage',
                    aboutMessage: 'getAboutMessage',
                    pageColors:   'getAboutColors',
                  }),
  },
  // created() {
  //   this.$store.commit('setPageColors', this.pageColors);
  // }
};
</script>

<style scoped>

</style>
