(window.webpackJsonpmapboard=window.webpackJsonpmapboard||[]).push([[4],{416:function(t,n,e){var a=e(418);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,i);a.locals&&(t.exports=a.locals)},417:function(t,n,e){"use strict";var a=e(416);e.n(a).a},418:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,"\n.external-link[data-v-6946008e] {\r\n  padding-top: 5px;\n}\r\n\r\n",""])},420:function(t,n,e){"use strict";var a={mixins:[e(25).a],props:["count","limit","type"],computed:{externalLinkCount(){return this.count-this.limit},externalLinkAction(){const t=this.options.action;if(t)return t(this.externalLinkCount)||"See more at "},externalLinkDataFromState(){const t=this.options.data;return this.evaluateSlot(t)},externalLinkText(){if(this.options){const t=this.options.name||"";return"vertical-table"===this.type?t?`${this.externalLinkAction} at ${t}`:`${this.externalLinkAction}`:"horizontal-table"===this.type?`${this.externalLinkAction}`:`${this.externalLinkDataFromState}`}return null},externalLinkHref(){return this.options?this.evaluateSlot(this.options.href):null}}},i=(e(417),e(2)),o=Object(i.a)(a,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"external-link"},[n("a",{attrs:{target:"_blank",href:this.externalLinkHref}},[this._v("\n    "+this._s(this.externalLinkText)+"\n    "),n("font-awesome-icon",{attrs:{icon:"external-link","aria-hidden":"true"}})],1)])},[],!1,null,"6946008e",null);n.a=o.exports},421:function(t,n,e){var a=e(438);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,i);a.locals&&(t.exports=a.locals)},437:function(t,n,e){"use strict";var a=e(421);e.n(a).a},438:function(t,n,e){(t.exports=e(4)(!1)).push([t.i,"\n.mb-badge[data-v-7881f935] {\n  /*width: 300px;*/\n  padding: 0;\n  margin: 0 auto;\n  margin-bottom: inherit;\n}\n@media (max-width: 640px) {\n.mb-badge[data-v-7881f935] {\n    width: 100%;\n}\n}\n\n/*REVIEW this should use foundation classes*/\n@media (min-width: 640px) {\n.mb-badge[data-v-7881f935] {\n    width: 325px;\n}\n}\n.mb-badge-header[data-v-7881f935] {\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.mb-badge-body[data-v-7881f935] {\n  padding: 12px;\n}\n.mb-badge-body > h1[data-v-7881f935] {\n  margin: 0;\n  margin-bottom: 5px;\n}\n",""])},476:function(t,n,e){"use strict";e.r(n);var a=e(25),i=e(420),o={name:"Badge",mixins:[a.a],components:{ExternalLink:i.a},computed:{style(){const t=(this.options||{}).titleBackground;let n;return{background:n=t?"function"==typeof t?t(this.$store.state):t:"#444"}}}},s=(e(437),e(2)),r=Object(s.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"center"},[e("div",{staticClass:"mb-badge panel"},[e("div",{staticClass:"mb-badge-header",style:t.style},[t._v("\n      "+t._s(t.evaluateSlot(t.slots.title))+"\n    ")]),t._v(" "),e("div",{staticClass:"mb-badge-body"},[e("h1",[t._v(t._s(t.evaluateSlot(t.slots.value)))]),t._v(" "),e("strong",[t._v(t._s(t.evaluateSlot(t.slots.description)))])])]),t._v(" "),t.options&&t.options.externalLink?e("external-link",{attrs:{options:t.options.externalLink,type:"badge"}}):t._e()],1)},[],!1,null,"7881f935",null);n.default=r.exports}}]);