const module = {
  state:   {
    helloMessage: '<div><p>My name is Jacob, and welcome to my piece of the internet!</p>' +
                  '<p>You can see the projects I’ve worked on right on this page and click here if you’d like to find out a bit more about me and my baking escapades. Hope you enjoy your stay and don’t hesitate to say hi via <a href="mailto:urantowka.jacob@gmail.com">email</a> or social media.</p></div>',
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
