(window.webpackJsonpmapboard=window.webpackJsonpmapboard||[]).push([[9],{422:function(s,t,o){var n=o(439);"string"==typeof n&&(n=[[s.i,n,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};o(5)(n,e);n.locals&&(s.exports=n.locals)},438:function(s,t,o){"use strict";var n=o(422);o.n(n).a},439:function(s,t,o){(s.exports=o(4)(!1)).push([s.i,"\n.wrapper[data-v-e45772ae] {\n}\n.callout[data-v-e45772ae] {\r\n  margin-top: 1rem;\r\n  position: inherit;\r\n  height: auto;\n}\r\n\r\n",""])},470:function(s,t,o){"use strict";o.r(t);var n=o(25),e=o(20),i={mixins:[n.a],computed:{calloutClass(){if(this.$props.options)return this.$props.options.class?this.$props.options.class:"columns small-24"},message(){return this.$props.slots&&this.evaluateSlot(this.$props.slots.text)||""},components(){return this.$props.options&&this.$props.options.components||null}},components:{},beforeCreate(){this.$options.components.TopicComponentGroup=e.default}},p=(o(438),o(2)),r=Object(p.a)(i,function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"wrapper grid-y"},[t("div",{class:"callout "+this.calloutClass},[this.message?t("p",{domProps:{innerHTML:this._s(this.message)}}):this._e(),this._v(" "),this.components?t("topic-component-group",{attrs:{"topic-components":this.components}}):this._e()],1)])},[],!1,null,"e45772ae",null);t.default=r.exports}}]);