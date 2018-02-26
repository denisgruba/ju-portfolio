const module = {
  state:     {
    list:       {
      1: {
        title:    'Du Lac & Fey: Dance of Death',
        subTitle: 'Game | Dialogue Management and Implementation',
        content:  [
          {
            align:    'left',
            headline: '<h5 class="headline"><i>Du Lac & Fey: Dance of Death</i> by <i>Salix Games Ltd</i></h5>',
            description:
                      '<p><a href="http://www.salixgames.com/" target="_blank">Salix</a> are a Guildford based indie company made from combined powers of ex-AAA developers from studios such as Rocksteady, Lionhead, and Creative Assembly. Du Lac & Fey: Dance of Death is the studio\'s debut title. It tells the story of Arthurian immortals Sir Lancelot Du Lac and Morgana Le Fey as they endeavor to bring the infamous murders of Jack the Ripper to an end and save the city of London. The game is set for release on PC this year.</p>',
            img:      require('../assets/dod_banner_fb_smaller.jpg'),
          },
          {
            align:    'right',
            headline: '<h5 class="headline" style="width: 50%">My work</h5>',
            description:
                      '<p>I first got involved with Salix at the start of my final year at university when I got asked to assist with polishing the localisation for the game. My eagerness and determination has landed me a part-time position with Salix this ultimate semester of university as an Assistant Sound Designer, where I work alongside the director and founder of the company on dialogue assets management and implementation.</p>',
            video:    'https://www.youtube.com/embed/FXyTjUJs4YU',
          }
        ],
        colors:   {
          secondary: '#e6e0ff',
          error:     '#5c00ff'
        },
        mainImg:  require('../assets/dod_banner_fb_smaller.jpg'),
        images:   [
          {
            src:   require('../assets/train_casting_cropped.jpg'),
            title: 'Title'
          },
          {
            src:   require('../assets/train_casting_cropped.jpg'),
            title: 'Title'
          },
          {
            src:   require('../assets/train_casting_cropped.jpg'),
            title: 'Title'
          },
        ]
      },
      2: {
        title:    'Train Project',
        subTitle: 'Game | Sound and Dialogue Production',
        content:  [
          {
            align:    'left',
            headline: '<i>Train Project</i> by <i>Teeny Tiny Bison</i>',
            description:
                      '<p>Timbre STC free field triangle wave 250 hz wavelength, 500 hz Sound speech NIC architecture. Decibel music concert hall information technology helmholtz, stereophonic phase sound wave hz Sound diffuse field math pure tones harmonics. 125 hz engineering T30 ear, Cerami  Associates Inc 8000 hz NC modes pitch decibel. Fundamental frequencies Vito tones ear cents ossicles pure tones ear canal eustachian tube. Sonic tonal ohms law pinna spectrum sonic boom, engineering fundamental frequencies pinna architecture. Founded 1965 helmholtz resonance instruments architecture security fresnel. Decibel high fidelity overtone phase tonal ear DBA frequency high fidelity. Cerami third octave NC architecture, architecture quiet diffusion helmholtz pitch ossicles. Timbre modes of vibration hear middle ear stereophonic resonance Sound, loudness security mass fundamental frequencies acoustics barriers.</p>',
            img:      require('../assets/train_casting.jpg'),
          },
          {
            align: 'right',
            description:
                   '<p>Timbre STC free field triangle wave 250 hz wavelength, 500 hz Sound speech NIC architecture. Decibel music concert hall information technology helmholtz, stereophonic phase sound wave hz Sound diffuse field math pure tones harmonics. 125 hz engineering T30 ear, Cerami  Associates Inc 8000 hz NC modes pitch decibel. Fundamental frequencies Vito tones ear cents ossicles pure tones ear canal eustachian tube. Sonic tonal ohms law pinna spectrum sonic boom, engineering fundamental frequencies pinna architecture. Founded 1965 helmholtz resonance instruments architecture security fresnel. Decibel high fidelity overtone phase tonal ear DBA frequency high fidelity. Cerami third octave NC architecture, architecture quiet diffusion helmholtz pitch ossicles. Timbre modes of vibration hear middle ear stereophonic resonance Sound, loudness security mass fundamental frequencies acoustics barriers.</p>',
            video: 'https://player.vimeo.com/video/31215588',
          }
        ],
        colors:   {
          secondary: '#ffebe0',
          error:     '#4bd500'
        },
        mainImg:  require('../assets/train_casting_cropped.jpg'),
        images:   [
          // {
          //   src:   require('../assets/train_casting_cropped.jpg'),
          //   title: 'Title'
          // },
          // {
          //   src:   require('../assets/train_casting_cropped.jpg'),
          //   title: 'Title'
          // },
          // {
          //   src:   require('../assets/train_casting_cropped.jpg'),
          //   title: 'Title'
          // },
        ]
      },
      3: {
        title:    'Sensory Overload',
        subTitle: 'Film | Sound Design',
        content:  [
          {
            align:    'left',
            headline: '<h5 class="headline"><i>Sensory Overload</i> by <i>Kate Shaw</i></h5>',
            description:
                      '<p>Sensory Overload is a film produced by a fashion photographer <a href="http://kateshaw.me/" target="_blank">Kate Shaw</a> as a part of her dissertation. The project\'s main objective was to focus on the exisitng symptoms of Aspergers Syndrome, as experienced and perceived by Kate herself, with a strong focus on hypersensitivity to light, sound, and tough. The film is being presented to professionals from Vice and Nick Knight, the founder and director of SHOWstudio.com.</p>',
            img:      require('../assets/SO+film+pic.png'),
          },
          {
            align:    'right',
            headline: '<h5 class="headline" style="width: 50%">My work</h5>',
            description:
                      '<p>Kate asked me to produce the whole soundscape for her production. We worked closely with each other, actively sharing any new iteractions and changes to the film, in order to help portray her vision exactly the way she imagined. In the end we both agreed that using organic sounding foley and synthetic effects was the best approach to make the audience feel unesay and uncomfortable and to give them an idea of what an Aspergers attack may feel like. I worked in Pro Tools and Adobe Audition and Premiere Pro to put the soundscape for Kate together.</p>',
            video:    'https://player.vimeo.com/video/31215588',
          }
        ],
        colors:   {
          secondary: '#e0ffe0',
          error:     '#ff9800'
        },
        mainImg:  require('../assets/SO+film+pic.png'),
        images:   [
          {
            src:   require('../assets/train_casting_cropped.jpg'),
            title: 'Title'
          },
          {
            src:   require('../assets/train_casting_cropped.jpg'),
            title: 'Title'
          },
          {
            src:   require('../assets/train_casting_cropped.jpg'),
            title: 'Title'
          },
        ]
      },
    },
    pageColors: {
      secondary: '#e0ffff',
      error:     '#ae00ff'
    }
  },
  getters:   {
    getListOfPortfolioItems: (state) => {
      return state.list;
    },
    getPortfolioItem:        (state) => (id) => {
      return state.list[id];
    },
    getPortfolioListColors:  (state) => {
      return state.pageColors
    },
  },
  actions:   {},
  mutations: {},
};

export default module;
