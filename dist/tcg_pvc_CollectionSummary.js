(window.webpackJsonpmapboard=window.webpackJsonpmapboard||[]).push([[8],{470:function(t,s,n){"use strict";n.r(s);var r={mixins:[n(25).a],computed:{summary(){const t=this.valueQuantities;return(0,this["context"+(this.isPlural(t)?"Plural":"Singular")])(this.naturalList)},contextSingular(){const t=this.options.context;return t.singular||t},contextPlural(){const t=this.options.context;return t.plural||t},descriptorSingular(){const t=this.options.descriptor;return t.singular||t},descriptorPlural(){const t=this.options.descriptor;return t.plural||t+"s"},naturalList(){const t=this.valueQuantities,s=this.naturalizeQuantities(t),n=s.length;if(Array.isArray(s)&&n>0){if(1===n)return s[0];if(2===n)return s.join(" and ");return`${s.slice(0,s.length-1).join(", ")}, and ${s[s.length-1]}`}return`no ${this.descriptorPlural}`},valueQuantities(){const t=this.slots.items(this.$store.state),s=this.options.getValue;return t.reduce((t,n)=>{const r=s(n);return t[r]=t[r]||0,t[r]++,t},{})}},methods:{isPlural(t={}){const s=Object.keys(t);if(1===s.length){if(1===t[s[0]])return!1}return!0},naturalizeQuantities(t={}){const s=this.options.types,n=this.options.includeZeroes;return s.reduce((s,r)=>{const e=r.value;let i=t[e]||0;if(0===i){if(!n)return s;i="no"}const u=r.label;let o;if(1!==i){o=r.plural||u+"s"}else o=u;const a=`${i} ${o}`;return s.push(a),s},[])}}},e=n(2),i=Object(e.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("h3",[this._v("\n  "+this._s(this.summary)+"\n")])},[],!1,null,"10a949da",null);s.default=i.exports}}]);