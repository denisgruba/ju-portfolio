webpackJsonp([3],{H4ju:function(e,t){},wrM5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s("Dd8w"),a=s.n(l),r=s("NYxO"),o={name:"home-page",computed:a()({helloLinked:function(){return{template:this.helloMessage,props:this.$options.props}},smallSize:function(){return this.$vuetify.breakpoint.xsOnly||this.$vuetify.breakpoint.smOnly},largeSize:function(){return this.$vuetify.breakpoint.lgOnly||this.$vuetify.breakpoint.xlOnly}},Object(r.b)({helloMessage:"getHelloMessage",pageColors:"getHomeColors",homeVideo:"getHomeVideo"})),data:function(){return{}},created:function(){this.$store.commit("setPageColors",this.pageColors)}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{class:e.smallSize?"pa-0":"",attrs:{fluid:!e.largeSize}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"fixed-height-spacer",attrs:{xs12:""}}),e._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-container",{staticClass:"px-2",attrs:{fluid:"","grid-list-xl":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"py-0",attrs:{xs12:""}},[s("h5",{staticClass:"headline"},[e._v("Hey!")])]),e._v(" "),s("v-flex",{attrs:{xs12:"",md6:""}},[s(e.helloLinked,e._b({tag:"component"},"component",e.$props,!1))],1),e._v(" "),s("v-flex",{attrs:{xs12:"",md6:""}},[s("div",{staticClass:"embed-container"},[s("iframe",{attrs:{src:e.homeVideo,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=s("VU/8")(o,i,!1,function(e){s("H4ju")},null,null);t.default=n.exports}});
//# sourceMappingURL=3.21fd86b90b857682842a.js.map