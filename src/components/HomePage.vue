<template>
  <v-container
      :fluid="!largeSize"
      :class="smallSize ? 'pa-0' : ''"
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
            class="px-2"
        >
          <v-layout
              row
              wrap
          >
            <v-flex
                xs12
                class="py-0"
            >
              <h5 class="headline">Hey!</h5>
            </v-flex>
            <v-flex
                xs12
                md6
            >
              <component
                  v-bind:is="helloLinked"
                  v-bind="$props"
              />
            </v-flex>
            <v-flex
                xs12
                md6
            >
              <div class='embed-container'>
                <iframe
                    :src="homeVideo"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                ></iframe>
              </div>
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
    name: 'home-page',
    computed: {
      helloLinked() {
        return {
          template: this.helloMessage,
          props:    this.$options.props
        }
      },
      smallSize() {
        return this.$vuetify.breakpoint.xsOnly || this.$vuetify.breakpoint.smOnly;
      },
      largeSize() {
        return this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
      ...mapGetters({
        helloMessage: 'getHelloMessage',
        pageColors:   'getHomeColors',
        homeVideo:    'getHomeVideo',
      })
    },
    data() {
      return {}
    },
    created() {
      this.$store.commit('setPageColors', this.pageColors);
    }
  }
</script>

<style>

</style>
