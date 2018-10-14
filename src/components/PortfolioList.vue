<template>
  <!--<v-container-->
  <!--:fluid="!largeSize"-->
  <!--grid-list-xl-->
  <!--justify-center-->
  <!--&gt;-->
  <!--<v-layout-->
  <!--row-->
  <!--wrap-->
  <!--v-match-heights="matchHeights"-->
  <!--&gt;-->
  <!--<v-flex xs12>-->
  <div>
    <div
      class="success"
    >
      <v-container
        :fluid="!largeSize"
      >
        <home-page
          class="half-screen-height"
        ></home-page>
      </v-container>
    </div>
    <div class="fp-auto-height-responsive">
      <v-container
        class="px-0 backgroundImageContainer"
        :fluid="!largeSize"
        dark
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            class="justify-height "
            xs12
            sm6
            v-for="(portfolioItem, index) in portfolioItems"
            :key="portfolioItem.title"
            :class="index % 2 === 0 ? 'splitLine' : ''"
          >
            <portfolio-item :id="index"></portfolio-item>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div
      class="success"
    >
      <v-container
        :fluid="!largeSize"
      >
        <about class="screen-height"></about>
      </v-container>
    </div>
  </div>
  <!--</v-flex>-->
  <!--<v-flex xs12 class="py-0">-->
  <!--<h5 class="headline mb-2">Projects</h5>-->
  <!--</v-flex>-->
  <!--<v-flex-->
  <!--class="justify-height"-->
  <!--xs12-->
  <!--sm6-->
  <!--v-for="(portfolioItem, index) in portfolioItems"-->
  <!--:key="portfolioItem.title"-->
  <!--&gt;-->
  <!--<portfolio-item :id="index"></portfolio-item>-->
  <!--<v-card-->
  <!--class="highlight"-->
  <!--color="transparent"-->
  <!--flat-->
  <!--:to="{name: 'PortfolioItem', params: {id: index}}"-->
  <!--&gt;-->
  <!--<v-card-media-->
  <!--class="white&#45;&#45;text "-->
  <!--height="300px"-->
  <!--:src="portfolioItem.previewImg"-->
  <!--&gt;-->
  <!--</v-card-media>-->
  <!--<v-card-text-->
  <!--class="text-xs-center"-->
  <!--style="height: 50px"-->
  <!--&gt;-->
  <!--<h5 class="subheading"><b>{{portfolioItem.title}}</b> <br> {{portfolioItem.subTitle}}</h5>-->
  <!--</v-card-text>-->
  <!--</v-card>-->
  <!--</v-flex>-->
  <!--<v-flex-->
  <!--xs12-->
  <!--class="fixed-height-spacer"-->
  <!--&gt;-->
  <!--</v-flex>-->
  <!--</v-layout>-->
  <!--</v-container>-->
</template>

<script>
import { mapGetters } from 'vuex';
import HomePage from './HomePage';
import PortfolioItem from './PortfolioItem';
import About from './About';

export default {
  name:       'portfolio-list',
  components: {
    HomePage, PortfolioItem, About,
  },
  computed:   {
    largeSize() {
      return this.$vuetify.breakpoint.mdOnly || this.$vuetify.breakpoint.lgOnly || this.$vuetify.breakpoint.xlOnly;
    },
    ...mapGetters({
                    portfolioItems: 'getListOfPortfolioItems',
                    pageColors:     'getPortfolioListColors',
                  }),
  },
  data() {
    return {
      matchHeights: {
        el: ['.title', '.subheading'],  // Array of selectors to fix
      },
      options:      {
        scrollOverflow:  true,
        sectionsColor:   ['#ffffba', '#baffc9', '#bae1ff'],
        responsiveWidth: 900,
      },
    };
  },
  // created() {
  //   this.$store.commit('setPageColors', this.pageColors);
  // }
};
</script>

<style
  scoped
  lang="scss"
>
  .section {
    padding-top: 100px;
    padding-bottom: 100%;
  }

  .backgroundImageContainer {
    position: relative;
  }

  .splitLine {
    position: relative;
  }

  .splitLine:before {
    content: "";
    border-left: #f8ebdc solid 4px;
    height: 100%;
    position: absolute;
    left: -2px;
  }

</style>
