const module = {
  state:   {
    aboutMessage:
                '<div>\n  ' +
                '<p>Hi, I\'m Jacob, a technical audio designer, currently working at Salix Games. I make sure games have noises. Thank you for stopping by!</p>\n  ' +
                '<p>Fun facts:</p>\n  ' +
                '<ul class="pl-4 pb-3">\n    ' +
                '<li>I\'m colourblind.</li>\n    ' +
                '<li>Banana breads are my specialty.</li>\n    ' +
                '<li>My current D&D character is a half-orc/tiefling fighter.</li>\n' +
                '<li>I really like plants.</li>  ' +
                '</ul>\n' +
                '<p>Games I\'ve played recently:</p>\n  ' +
                '<ul class="pl-4 pb-3">\n    ' +
                '<li>Hades. </li>\n    ' +
                '<li>The Council.</li>\n    ' +
                '<li>Got back into Hearthstone too!</li>\n' +
                '</ul>\n' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my\n     social media: <a\n      href="https://twitter.com/the_audio_kid"\n      target="_blank"\n    >Twitter</a> or <a\n      href="https://uk.linkedin.com/in/jurantowka"\n      target="_blank"\n    >LinkedIn</a>. I look forward to hearing from you!</p>\n  ' +
                '</div>',
    aboutImage: require('../assets/bafta1 small.jpeg'),
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
