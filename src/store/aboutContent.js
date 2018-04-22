const module = {
  state:   {
    aboutMessage:
                '<div>' +
                '<p>Hi, I’m Jacob, an audio designer, currently studying in the rainy Cornwall but will be leaving the peninsula and returning to Eastern England very soon (Will miss the pasties though…)!</p>' +
                '<p>I have a BA in Game Development with specialism in Audio which gave me my understanding of game production and game and audio engines. I like keeping busy so I am also working on a couple of narrative games, including Sundown and Salix Games’ debut title which I have recently helped to exhibit at EGX Rezzed 2018 and assisted in dialogue production at Pinewood Studios, editing sound and dialogue for a podcast for the local LGBTQ+ community, bake weekly for my friends and colleagues and am planning on running a marathon in the near future.</p>' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my social media: <a href="https://twitter.com/the_audio_kid" target="_blank">Twitter</a> or <a href="https://uk.linkedin.com/in/jurantowka" target="_blank">LinkedIn</a>. I look forward to hearing from you!</p>' +
                '<p>Other assorted facts about me:</p>' +
                '<ul class="pl-4 pb-3">' +
                '<li>I am colourblind</li>' +
                '<li>Banana breads are my specialty</li>' +
                '<li>I am an active member of the LGBTQ+ community</li>' +
                '<li>Building, simulation and strategy games are my top three favourite genres</li>' +
                '<li>I main Shen and Ana in League of Legends and Overwatch respectively</li>' +
                '</ul>' +
                '</div>',
    aboutImage: require('../assets/jacob2.jpg'),
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
