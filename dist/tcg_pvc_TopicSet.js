(window.webpackJsonpmapboard=window.webpackJsonpmapboard||[]).push([[19],{474:function(t,e,i){"use strict";i.r(e);var o=i(166),s={mixins:[i(25).a],name:"TopicSet",components:{Topic:o.default},mounted(){null!==this.$store.state.activeTopic&&""!==this.$store.state.activeTopic||this.setDefaultTopicActive()},methods:{setDefaultTopicActive(){this.$props.options.defaultTopic&&(this.$store.state.activeTopic=this.$props.options.defaultTopic)}}},c=i(2),p=Object(c.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.$config.topics,function(t){return e("topic",{key:t.key,attrs:{topicKey:t.key}})}),1)},[],!1,null,null,null);e.default=p.exports}}]);