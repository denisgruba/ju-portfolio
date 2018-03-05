<template>
  <v-container
      :fluid="!largeSize"
      grid-list-xl
  >
    <v-layout
        row
        wrap
    >
      <v-flex
          xs12
          class="text-xs-center"
          style="overflow: hidden; max-height: 250px;"
      >
        <img
            :src="item.mainImg"
            class="responsive-img "
        >
      </v-flex>
      <!--<v-flex xs12>-->
      <!--<h5 class="headline" v-html="item.pageTitle">-->

      <!--</h5>-->
      <!--</v-flex>-->
      <!--<v-flex xs12 md6 lg6>-->
      <!--<div class='embed-container'>-->
      <!--<iframe :src="item.vimeo" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>-->
      <!--</div>-->
      <!--</v-flex>-->
      <!--<v-flex xs12 md6 lg6>-->
      <!--<div v-html="item.description"></div>-->
      <!--</v-flex>-->
    </v-layout>
    <v-layout
        row
        wrap
        class="mb-5"
        v-for="(row, index) in item.content"
        :key="`descRow${index}`"
        :class="row.align === 'right' ? 'reverse-row' : ''"
    >
      <v-flex xs12 v-if="row.align==='full-width'">
        <div
            class='embed-container'
            v-if="row.video"
        >
          <iframe
              :src="row.video"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
          ></iframe>
        </div>
      </v-flex>
      <v-flex
          xs12
          v-if="row.headline"
          class="text-xs-center"
      >
        <div
            class="display-1"
            v-html="row.headline"
        ></div>
      </v-flex>
      <v-flex
          xs12
          sm6
          class="limited-height"
      >
        <div
            class='embed-container'
            v-if="row.video"
        >
          <iframe
              :src="row.video"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
          ></iframe>
        </div>
        <img
            v-if="row.img"
            :src="row.img"
            class="responsive-img"
        >
        <div
            v-if="row.secondHeadline"
            v-html="row.secondHeadline"
        >

        </div>
        <div
            v-if="row.secondText"
            v-html="row.secondText"
        >

        </div>
      </v-flex>
      <v-flex
          xs12
          sm6
          v-html="row.description"
      >

      </v-flex>
    </v-layout>
    <v-layout
        row
        wrap
    >
      <v-flex
          xs12
          v-if="item.video"
      >
        <div
            class='embed-container'
        >
          <iframe
              :src="item.video"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
          ></iframe>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'portfolio-item',
    computed: {

      item() {
        return this.$store.getters.getPortfolioItem(this.$route.params.id);
      },
      largeSize() {
        return this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
    },
    watch: {
      $route: {
        handler(to, from) {
          // this.$store.commit('setPageColors', this.item.colors);
        },
        immediate: true,
      }
    },
  }
</script>

<style scoped>

</style>
