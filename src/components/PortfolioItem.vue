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
          style="overflow: hidden; max-height: 450px;"
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
        class="mb-3"
        v-for="(row, index) in item.content"
        :key="`descRow${index}`"
        :class="row.align === 'right' ? 'reverse-row' : ''"
    >
      <v-flex
          xs12
          v-if="row.align==='full-width'"
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
      </v-flex>
      <v-flex
          xs12
          v-if="row.headline"
          :class="row.headlineClass"
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
        <v-carousel
            v-if="row.imagesSlider"
        >
          <v-carousel-item
              v-for="image in row.imagesSlider"
              :src="image.src"
              :key="image.src"
          >

          </v-carousel-item>
        </v-carousel>
        <img
            v-if="row.images"
            v-for="image in row.images"
            :key="image.src"
            :src="image.src"
            class="responsive-img"
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
        v-if="item.video"
    >
      <v-flex
          xs12
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
    <v-layout
        row
        wrap
        v-if="item.images"
    >
      <v-flex
          xs12
          class="text-xs-center"
      >
        <v-carousel>
          <v-carousel-item
              v-for="image in item.images"
              :src="image.src"
              :key="image.src"
          >

          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name:     'portfolio-item',
    computed: {

      item() {
        return this.$store.getters.getPortfolioItem(this.$route.params.id);
      },
      largeSize() {
        return this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
    },
    watch:    {
      $route: {
        handler(to, from) {
          // this.$store.commit('setPageColors', this.item.colors);
        },
        immediate: true,
      }
    },
  }
</script>

<style>

</style>
