webpackJsonp([2],{ji0d:function(e,t){},yRL9:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"portfolio-item",props:{id:{type:[Number,String],default:null}},computed:{item:function(){var e=this.id?this.id:this.$route.params.id;return this.$store.getters.getPortfolioItem(e)},largeSize:function(){return this.$vuetify.breakpoint.mdOnly||this.$vuetify.breakpoint.lgOnly||this.$vuetify.breakpoint.xlOnly}},watch:{$route:{handler:function(e,t){},immediate:!0}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:!e.largeSize,"grid-list-xl":""}},[e._l(e.item.content,function(t,r){return s("v-layout",{key:"descRow"+r,staticClass:"mb-3",class:"right"===t.align?"reverse-row":"",attrs:{transition:"fade-quick",stagger:"250",row:"",wrap:""}},["full-width"===t.align?s("v-flex",{attrs:{xs12:""}},[t.video?s("div",{staticClass:"embed-container"},[s("iframe",{attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):e._e()]):e._e(),e._v(" "),t.headline?s("v-flex",{class:t.headlineClass,attrs:{xs12:""}},[s("div",{staticClass:"display-1",domProps:{innerHTML:e._s(t.headline)}})]):e._e(),e._v(" "),s("v-flex",{staticClass:"limited-height",attrs:{xs12:""}},[t.imagesSlider?s("v-carousel",e._l(t.imagesSlider,function(e){return s("v-carousel-item",{key:e.src,attrs:{src:e.src}})})):e._e(),e._v(" "),e._l(t.images,function(r){return t.images?s("img",{key:r.src,staticClass:"responsive-img",attrs:{src:r.src}}):e._e()}),e._v(" "),t.video?s("div",{staticClass:"embed-container"},[s("iframe",{attrs:{src:t.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]):e._e(),e._v(" "),t.img?s("img",{staticClass:"responsive-img",attrs:{src:t.img}}):e._e(),e._v(" "),t.secondHeadline?s("div",{domProps:{innerHTML:e._s(t.secondHeadline)}}):e._e(),e._v(" "),t.secondText?s("div",{domProps:{innerHTML:e._s(t.secondText)}}):e._e()],2),e._v(" "),s("v-flex",{attrs:{xs12:""},domProps:{innerHTML:e._s(t.description)}})],1)}),e._v(" "),e.item.video?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",{staticClass:"embed-container"},[s("iframe",{attrs:{src:e.item.video,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])],1):e._e(),e._v(" "),e.item.images?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("v-carousel",e._l(e.item.images,function(e){return s("v-carousel-item",{key:e.src,attrs:{src:e.src}})}))],1)],1):e._e()],2)},staticRenderFns:[]};var a=s("VU/8")(r,i,!1,function(e){s("ji0d")},null,null);t.default=a.exports}});