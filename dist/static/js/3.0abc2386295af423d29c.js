webpackJsonp([3],{"4zLe":function(e,t){},wrM5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Dd8w"),a=s.n(r),l=s("NYxO"),o={name:"home-page",computed:a()({helloLinked:function(){return{template:this.helloMessage,props:this.$options.props}},smallSize:function(){return this.$vuetify.breakpoint.xsOnly||this.$vuetify.breakpoint.smOnly},largeSize:function(){return this.$vuetify.breakpoint.lgOnly||this.$vuetify.breakpoint.xlOnly}},Object(l.b)({helloMessage:"getHelloMessage",pageColors:"getHomeColors",homeVideo:"getHomeVideo"})),data:function(){return{}},created:function(){this.$store.commit("setPageColors",this.pageColors)}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"pa-0",attrs:{fluid:!e.largeSize}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"fixed-height-spacer",attrs:{xs12:""}}),e._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-container",{attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"py-0",attrs:{xs12:""}},[s("h5",{staticClass:"headline"},[e._v("Hey!")])]),e._v(" "),s("v-flex",{attrs:{xs12:"",md6:""}},[s(e.helloLinked,e._b({tag:"component"},"component",e.$props,!1))],1),e._v(" "),s("v-flex",{attrs:{xs12:"",md6:""}},[s("div",{staticClass:"embed-container"},[s("iframe",{attrs:{src:e.homeVideo,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var i=s("VU/8")(o,n,!1,function(e){s("4zLe")},null,null);t.default=i.exports}});