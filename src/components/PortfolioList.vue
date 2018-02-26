<template>
  <v-container
      :fluid="!largeSize"
      grid-list-xl
      justify-center
  >
    <v-layout
        row
        wrap
        v-match-heights="matchHeights"
    >
      <v-flex
          xs12
          class="fixed-height-spacer"
      >

      </v-flex>
      <v-flex
          xs12
          class="fixed-height-spacer"
      >

      </v-flex>
      <v-flex
          class="justify-height"
          xs12
          sm6
          md4
          v-for="(portfolioItem, index) in portfolioItems"
          :key="portfolioItem.title"
      >
        <v-card
            class="highlight"
            color="transparent"
            flat
            :to="{name: 'PortfolioItem', params: {id: index}}"
        >
          <v-card-text class="text-xs-center">
            <h5 class="title">{{portfolioItem.title}}</h5>
          </v-card-text>
          <v-card-media
              class="white--text "
              height="300px"
              :src="portfolioItem.mainImg"
          >
            <!--<v-container-->
            <!--fill-height-->
            <!--fluid-->
            <!--class="pa-0"-->
            <!--&gt;-->
            <!--<v-layout fill-height>-->
            <!--<v-flex-->
            <!--xs12-->
            <!--align-end-->
            <!--flexbox-->
            <!--&gt;-->
            <!--&lt;!&ndash;<div class="d-flex color-overlay px-2">&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="headline">{{portfolioItem.title}}</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="d-flex color-overlay px-2">&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="subheading">{{portfolioItem.subTitle}}</p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--</v-flex>-->
            <!--</v-layout>-->
            <!--</v-container>-->
          </v-card-media>
          <v-card-text
              class="text-xs-center"
              style="height: 50px"
          >
            <h5 class="subheading">{{portfolioItem.subTitle}}</h5>
          </v-card-text>
        </v-card>
      </v-flex>
      <!--<v-flex xs12 sm6 md4 v-for="(portfolioItem, index) in portfolioItems" :key="portfolioItem.title">-->
      <!--<v-card :to="{name: 'PortfolioItem', params: {id: index}}" hover>-->
      <!--<v-card-media-->
      <!--class="white&#45;&#45;text blur zoom"-->
      <!--height="300px"-->
      <!--:src="portfolioItem.mainImg"-->
      <!--&gt;-->
      <!--<v-container fill-height fluid class="pa-0">-->
      <!--<v-layout fill-height>-->
      <!--<v-flex xs12 align-end flexbox>-->
      <!--<div class="d-flex color-overlay px-2">-->
      <!--<p class="headline">{{portfolioItem.title}}</p>-->
      <!--</div>-->
      <!--<div class="d-flex color-overlay px-2">-->
      <!--<p class="subheading">{{portfolioItem.subTitle}}</p>-->
      <!--</div>-->
      <!--</v-flex>-->
      <!--</v-layout>-->
      <!--</v-container>-->
      <!--</v-card-media>-->
      <!--</v-card>-->
      <!--</v-flex>-->
    </v-layout>
  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name:     'portfolio-list',
    computed: {
      largeSize() {
        return this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
      },
      ...mapGetters({
        portfolioItems: 'getListOfPortfolioItems',
        pageColors:     'getPortfolioListColors',
      })
    },
    data() {
      return {
        matchHeights: {
          el: ['.title', '.subheading'],  // Array of selectors to fix
        }
      }
    },
    // created() {
    //   this.$store.commit('setPageColors', this.pageColors);
    // }
  }
</script>

<style scoped>

</style>
