const module = {
  state:   {
    aboutMessage:
                '<div>' +
                '<p>I’m an audio designer currently based in the rainy Cornwall but will be leaving the peninsula and returning to the South East very soon (Will miss the pasties though…)!</p>' +
                '<p>Designing sound and seeing it all in action after hours of hard work is one of the most amazing feelings, however few things bring me as much joy as working with dialogue. Now I may be slightly biased seeing both my dissertation and first job in the industry were dialogue heavy, but there is something special about working with voice. Don’t get me wrong though, getting that perfect footstep into the scene is beyond satisfying too!</p>' +
                '<p>But you have probably had a look at my projects and know all of this already (and if not then <router-link :to="{ name: \'Home\'}">I warmly welcome you to</router-link>) so here is some info you might have not known about me:</p>' +
                '<ul class="pl-4 pb-3">' +
                '<li>In Overwatch, I prefer the competitive mode over quick play</li>' +
                '<li>I love horror games, but often I’m too scared to play them myself and get others to do it while I watch from under a blanket</li>' +
                '<li>I’m colourblind</li>' +
                '<li>Carrot cakes and cinnamon rolls are my confectionary specialties</li>' +
                '<li>I sing Disney songs on repeat</li>' +
                '</ul>' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my social media: <a href="https://twitter.com/the_audio_kid" target="_blank">Twitter</a> or <a href="https://uk.linkedin.com/in/jurantowka" target="_blank">LinkedIn</a>.I look forward to hearing from you!</p>' +
                '</div>',
    aboutImage: require('../assets/jacob.jpg'),
    pageColors: {
      secondary: '#ffffff',
      error:     '#4f00ff'
    }
  },
  getters: {
    getAboutMessage: (state) => {
      return state.aboutMessage
    },
    getAboutImage:   (state) => {
      return state.aboutImage
    },
    getAboutColors:  (state) => {
      return state.pageColors
    }
  }
};

export default module;
