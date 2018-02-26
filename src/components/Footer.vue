<template>
  <v-container fluid class="pa-0 mt-5" align-content-end align-end style="max-height: 250px;">
    <v-layout row wrap align-end fill-height>
      <v-spacer></v-spacer>
      <v-flex xs12 class="zindex6">
        <v-card flat color="transparent white--text zindex6" width="400" style="float: right; max-width: 100%">
          <v-card-text>
            <h6 class="headline">Contact Me</h6>
            <table>
              <tr>
                <td class="subheading">Email:</td>
                <td class="subheading"><a href="mailto:contact@jacoburantowka.com">urantowka.jacob@gmail.com</a></td>
              </tr>
              <tr>
                <td class="subheading">Phone:</td>
                <td class="subheading phone"> +44 (0) 7463341569</td>
              </tr>
              <!--<tr>-->
                <!--<td class="subheading">Twitter:</td>-->
                <!--<td class="subheading"><a href="https://twitter.com/the_audio_kid" target="_blank">@j_urantowka</a></td>-->
              <!--</tr>-->
              <!--<tr>-->
                <!--<td class="subheading">LinkedIn:</td>-->
                <!--<td class="subheading"><a href="https://uk.linkedin.com/in/jurantowka" target="_blank">/jurantowka</a>-->
                <!--</td>-->
              <!--</tr>-->
            </table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <soundwaves4 class="zindex5"></soundwaves4>
  </v-container>
</template>

<script>
  import Soundwaves4 from './svg/Soundwaves4';

  export default {
    name:       'my-footer',
    components: {
      Soundwaves4
    }
  }
</script>

<style scoped>
  .container {
    z-index: 5;
  }

  .zindex6 {
    z-index: 6;
  }

  .zindex5 {
    z-index: 5;
  }

  a, .phone {
    text-decoration: none;
    font-weight: 600;
    color: #fff;
  }
</style>
