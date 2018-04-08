const module = {
  state:   {
    aboutMessage:
                '<div>' +
                '<p>Hi, I’m an audio designer currently based in the rainy Cornwall but will be leaving the peninsula and returning to the South East in search for audio opportunities very soon (Will miss the pasties though…)!</p>' +
                '<p>Although my audio journey begins with me doing music in college, I have now moved away from composition and developed a keen interest in dialogue and sound production, editing and implementation. As a result I have now worked on multiple projects ranging from podcasts and short films to indie narrative games over the past year. </p>' +
                '<p>But you have probably had a look at my projects and know all of this already (and if not then <router-link :to="{ name: \'Home\'}">I warmly welcome you to</router-link>) so here are some other assorted facts about me!</p>' +
                '<ul class="pl-4 pb-3">' +
                '<li>I’m colourblind</li>' +
                '<li>Banana breads are my bakery specialty</li>' +
                '<li>I’m an active member of the LGBTQ+ community</li>' +
                '<li>I main Shen in League of Legends and Ana in Overwatch</li>' +
                '</ul>' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my social media: <a href="https://twitter.com/the_audio_kid" target="_blank">Twitter</a> or <a href="https://uk.linkedin.com/in/jurantowka" target="_blank">LinkedIn</a>. I look forward to hearing from you!</p>' +
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
