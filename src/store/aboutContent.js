const module = {
  state:   {
    aboutMessage:
                '<p>Hi! My name is Jacob, and am a <i>sound</i> guy about to graduate in Falmouth University\'s Game Development: Audio program. I\'ve been a determined and proactive student, have persuaded the course to invest in audio tutors and equipment, and regularly supported interdepartmental work between the Games and Music Academies. My drive and commitment has helped me land my first role within the games industry already, and I aim to keep the ball rolling.</p>' +
                '<p>Also my banana breads are simply sensational.</p>',
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
