const module = {
  state:   {
    helloMessage: '<div><p>my name is Jacob, welcome to my portfolio!</p>' +
                  '<p>I\'m a dialogue and sound designer, currently employed part-time as an <router-link :to="{name: \'PortfolioItem\', params: { id: 1 } }">Assistant Sound Designer at Salix Games Ltd</router-link> where I take care of audio assets management and dialogue implementation and finishing my studies in <router-link :to="{name: \'PortfolioItem\', params: { id: 2 }}">Game Development at Falmouth University</router-link> where I got to specialise in sound and voice recording, editing, and implementation.</p>' +
                  '<p>You can watch my showreel right on this page, click <router-link :to="{name: \'PortfolioList\'}">here</router-link> to find out a bit more about the projects I\'ve worked on, and finally <router-link :to="{name: \'About\'}">here</router-link> to learn about me and my baking escapades. Hope you enjoy your stay and don\'t hesitate to say hi via email or social media.</p></div>',
    video:        'https://player.vimeo.com/video/179429282',
    pageColors:   {
      secondary: '#fefffa',
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
