(window.webpackJsonp=window.webpackJsonp||[]).push([["newsDetail"],{"276e":function(t,e,s){"use strict";var a={name:"hotNews",data(){return{hotNews:[]}},created(){this.getHotNews()},methods:{async getHotNews(){var t=(await this.$http.get("/web/hotnews"))["data"];200!==t.status?this.hotNews=[]:this.hotNews=t.data.list}}};s("5717"),s=s("0b56"),s=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"hot-news"},[e("h3",{staticClass:"hot-title"},[t._v("热门新闻")]),0!==t.hotNews.length?e("ul",{staticClass:"hot-list"},t._l(t.hotNews,(function(s,a){return e("li",{key:a,staticClass:"hot-list-item"},[e("span",{staticClass:"num-top"},[t._v(t._s(a+1))]),e("p",[e("router-link",{attrs:{to:"/news/"+s.news_path}},[t._v(t._s(s.news_title))]),e("span",{staticClass:"hot-date"},[t._v(t._s(s.publish_time))])],1)])})),0):e("span",{staticClass:"is-null"},[t._v("暂无数据")])])}),[],!1,null,"35112528",null);e.a=s.exports},5717:function(t,e,s){"use strict";s("ef7e")},"6f38":function(t,e,s){"use strict";s("7ef6")},"7ef6":function(t,e,s){},d2d9:function(t,e,s){"use strict";s.r(e);var a=s("4391"),i=s("ee5d");a={name:"newsDetail",components:{HotNews:s("276e").a,AwHeader:a.a,AwFooter:i.a},data(){return{news_detail:{title:"",publish_time:"",content:"",type:""}}},computed:{news_path(){return this.$route.params.id}},created(){this.getNewsDetail()},mounted(){this.$store.commit("setHeaderLogo",{headerLogoShow:!1}),this.$store.commit("setShadowActive",{headerShadowActive:!0}),this.$store.commit("setNavDarkActive",{navDarkActive:!0}),this.$store.commit("setHeaderShow",{headerShow:!1})},beforeRouteLeave(t,e,s){"index"===t.name&&(this.$store.commit("setHeaderLogo",{headerLogoShow:!0}),this.$store.commit("setShadowActive",{headerShadowActive:!1}),this.$store.commit("setNavDarkActive",{navDarkActive:!1}),this.$store.commit("setHeaderShow",{headerShow:!1})),s()},methods:{async getNewsDetail(){var t=(await this.$http.get("/web/article/"+this.news_path))["data"];200===t.status&&(this.news_detail={title:t.data.news_detail.news_title,publish_time:t.data.news_detail.publish_time,content:t.data.news_detail.news_content,type:t.data.news_detail.aw_news_type.type_name})}}},s("6f38"),i=s("0b56"),s=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-detail"},[e("AwHeader",{ref:"news_header",staticClass:"news_header"}),e("div",{staticClass:"container"},[e("div",{staticClass:"left"},[e("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[e("el-breadcrumb-item",{attrs:{to:{path:"/index"}}},[t._v("首页")]),e("el-breadcrumb-item",[t._v(t._s(t.news_detail.type))]),e("el-breadcrumb-item",[t._v(t._s(t.news_detail.title))])],1),e("div",{staticClass:"content"},[e("h1",[t._v(t._s(t.news_detail.title))]),e("span",[t._v(t._s(t.news_detail.publish_time))]),e("el-divider",[e("i",{staticClass:"el-icon-view"})]),e("article",{staticClass:"article",domProps:{innerHTML:t._s(t.news_detail.content)}})],1)],1),e("hot-news",{staticClass:"right"})],1),e("AwFooter")],1)}),[],!1,null,"778ec918",null);e.default=s.exports},ef7e:function(t,e,s){}}]);