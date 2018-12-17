const module = {
  state:   {
    helloMessage: '<div>\n  <p class="text-xs-center" style="font-size: 20px;">Technical Audio Designer</p>\n  ' +
                  '\n</div>',
    // video:        'https://player.vimeo.com/video/270362205',
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
