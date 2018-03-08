const module = {
  state:   {
    aboutMessage:
                '<p>Hello! My name is Jacob and I work with noises. I’m currently based in the rainy Cornwall but will be leaving the peninsula and coming back to the South East very soon! (Will miss the pasties though…)</p>' +
                '<p>Designing sound and seeing it all in action after hours of hard work is one of the most amazing feelings, however few things bring me as much joy as working with dialogue. Now I may be slightly biased seeing both my dissertation and first job in the industry are pretty dialogue heavy, but there is something special about working with voice that keeps me going. Don’t get me wrong though, getting that perfect footsteps into the scene is beyond satisfying too!</p>' +
                '<p>And now for the most essential game-persion bio bit – I believe Transistor is one of the many must-plays, enjoy Overwatch’s competitive more than quick play and as a stubborn Ana main I won’t stop playing her until I get a play of the game, because the most recent highlight intro is just something out of this world.</p>' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my social media: <a href="https://twitter.com/the_audio_kid" target="_blank">Twitter</a> or <a href="https://uk.linkedin.com/in/jurantowka" target="_blank">LinkedIn</a>. I look forward from hearing from you!</p>',
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
