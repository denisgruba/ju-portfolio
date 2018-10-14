const module = {
  state:   {
    aboutMessage:
                '<div>\n  ' +
                '<p>Hi, I\'m Jacob, an audio designer. I make sure games have noises.</p>\n  ' +
                '<p>I am currently based in the UK, just outside the city of Brighton. I love audio design, though it is the technical side of it that I can truly call my jam. I was hired by Salix Games Ltd. during my final year at university to do just that and hundreds of hundreds of hours later I\'m still loving every second of it. </p>' +
                '<p>Besides Du Lac & Fey, I have also worked on Sundown, done sound editing for an LGBTQ+ podcast, sound designed a short film about Asperger syndrome in fashion, dabbled in things like MaxMSP, web programming, and volunteered at Develop: Brighton conference, so there has never really been a dull moment!   </p>\n  ' +
                '<p>Other fun assorted facts about me:</p>\n  ' +
                '<ul class="pl-4 pb-3">\n    ' +
                '<li>I\'m colourblind.</li>\n    ' +
                '<li>Banana breads are my specialty.</li>\n    ' +
                '<li>Ana is by far my favourite character in Overwatch.</li>\n' +
                '<li>I really like plants.</li>  ' +
                '</ul>\n' +
                '<p>Feel free to get in touch on <a href="mailto:urantowka.jacob@gmail.com">urantowka.jacob@gmail.com</a> or drop by my\n     social media: <a\n      href="https://twitter.com/the_audio_kid"\n      target="_blank"\n    >Twitter</a> or <a\n      href="https://uk.linkedin.com/in/jurantowka"\n      target="_blank"\n    >LinkedIn</a>. I look forward to hearing from you!</p>\n  ' +
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
