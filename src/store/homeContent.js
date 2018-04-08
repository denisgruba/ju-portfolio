const module = {
  state:   {
    helloMessage: '<div><p>My name is Jacob, and welcome to my piece of the internet!</p>' +
                  '<p>I\'m an audio designer, currently employed part-time as an <router-link :to="{name: \'PortfolioItem\', params: { id: 1 } }">Assistant Sound Designer by Salix Games Ltd</router-link> where I take care of audio assets management and dialogue implementation and finishing my studies in <router-link :to="{name: \'PortfolioItem\', params: { id: 2 }}">Game Development at Falmouth University</router-link> where I got to specialise in sound and voice recording, editing, and implementation.</p>' +
                  '<p>You can see the projects I\'ve worked on right on this page and click <router-link :to="{name: \'About\'}">here</router-link> if you\'d like to find out a bit more about me and my baking escapades. Hope you enjoy your stay and don\'t hesitate to say hi via <a href="mailto:urantowka.jacob@gmail.com">email</a> or social media.</p></div>',
    // video:        'https://player.vimeo.com/video/259221160',
    pageColors:   {
      secondary: '#ffffff',
      error:     '#ff0041'
    },
  },
  getters: {
    getHelloMessage: (state) => {
      return state.helloMessage
    },
    getHomeVideo:    (state) => {
      return state.video
    },
    getHomeColors:   (state) => {
      return state.pageColors
    },
  }
};

export default module;
