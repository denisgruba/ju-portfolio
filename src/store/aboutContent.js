const module = {
  state:   {
    aboutMessage:
                '<p>I’m a sound guy currently based in the rainy Cornwall but will be leaving the peninsula and coming back to the South East very soon! (Will miss the pasties thought…)</p>' +
                '<p>Designing sound and seeing it all in action after hours of hard work is on of the most amazing feelings, however few things bring me as much joy as working with dialogue. Now I may be slightly biased seeing both my dissertation and first job in the industry were pretty dialogue heavy, but there is something special about working with voice that keeps me going. Don’t get me wrong though, getting that perfect footstep into the scene is beyond satisfying too!</p>' +
                '<p>As is expected of game-people bios – I believe Transistor is one of the many must-plays, enjoy Overwatch’s competitive more than quick play and as a stubborn Ana main I won’t stop playing her until I get a play of the game, because the most recent highlight intro is just something out of this world.</p>' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my social media: <a href="https://twitter.com/the_audio_kid" target="_blank">Twitter</a> or <a href="https://uk.linkedin.com/in/jurantowka" target="_blank">LinkedIn</a>. I look forward to hearing from you!</p>' +
                '<p>P.S: Also, I bake a ton! Cinnamon rolls, pretzels, banana breads, carrot, coffee, and red velvet cakes, anything that’s sweet and warming!</p>',
    aboutImage: require('../assets/jacob.jpg'),
    pageColors: {
      secondary: '#fff5e0',
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
