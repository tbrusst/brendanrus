(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{204:function(t,n,e){var o=e(212);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e(13).default)("2f0cd686",o,!0,{})},211:function(t,n,e){"use strict";var o=e(204);e.n(o).a},212:function(t,n,e){var o=e(18);(t.exports=e(12)(!1)).push([t.i,"@font-face{font-family:TradeGothic LT Extended;src:url("+o(e(4))+') format("woff2"),url('+o(e(4))+') format("woff");font-weight:700;font-style:normal}@font-face{font-family:Sporting Grotesque;src:url('+o(e(19))+') format("woff2"),url('+o(e(20))+') format("woff");font-style:normal}@font-face{font-family:Sporting Grotesque;src:url('+o(e(21))+') format("woff2"),url('+o(e(22))+') format("woff");font-weight:700;font-style:normal}@font-face{font-family:Pangram;src:url('+o(e(23))+') format("woff2"),url('+o(e(24))+') format("woff");font-style:normal}@font-face{font-family:Pangram;src:url('+o(e(25))+') format("woff2"),url('+o(e(26))+') format("woff");font-weight:700;font-style:normal}body{font-size:100%;letter-spacing:.0625rem;line-height:1.75}h1,h2,h3,h4,h5,h6,p{margin:0}a{text-decoration:none}h1{font-family:TradeGothic LT Extended;font-size:1.7rem}@media only screen and (min-width:768px){h1{font-size:3rem}}@media only screen and (min-width:1280px){h1{font-size:5rem}}h2{font-family:TradeGothic LT Extended;font-size:1.5rem}@media only screen and (min-width:768px){h2{font-size:2.5rem}}@media only screen and (min-width:1280px){h2{font-size:3.5rem}}h3{font-family:Sporting Grotesque;font-size:1.25rem;font-weight:400}@media only screen and (min-width:768px){h3{font-size:1.1rem}}@media only screen and (min-width:1280px){h3{font-size:1.5rem}}p{font-family:Pangram;font-size:.9rem}@media only screen and (min-width:768px){p{font-size:1.1rem}}@media only screen and (min-width:1280px){p{font-size:1.1rem}}#content img{width:100%;margin:50px 0}@media only screen and (min-width:768px){#content img{width:49.5%}}@media only screen and (min-width:1280px){#content img{width:49.5%}}.post-content{padding:0 20px;margin:40px 0 100px}.post-content:before{content:"";position:absolute;background-color:#141414;height:5px;width:20%}@media only screen and (min-width:768px){.post-content:before{width:15%}}@media only screen and (min-width:1280px){.post-content:before{width:10%}}.post-content div img{width:50%;position:relative}.post-content div p{line-height:2rem;margin:0 0 20px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;flex-wrap:wrap}.post-content h1{margin:0 0 20px;padding-top:10px}.post-content h2{margin:100px 0 15px}.post-content a{color:#141414;font-weight:700}.post-content a:hover{text-decoration:underline}',""])},215:function(t,n,e){"use strict";e.r(n);var o=e(210),i=e.n(o),r={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/work/"+t.params.postId,{version:"draft"}).then(function(t){return console.log(t.content),{title:t.data.story.content.title,content:i()(t.data.story.content.content)}})}},a=(e(211),e(11)),f=Object(a.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"post"}},[n("section",{staticClass:"post-content"},[n("h1",[this._v(this._s(this.title))]),this._v(" "),n("div",{attrs:{id:"content"},domProps:{innerHTML:this._s(this.content)}})])])},[],!1,null,null,null);f.options.__file="index.vue";n.default=f.exports}}]);