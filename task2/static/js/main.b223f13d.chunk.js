(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{126:function(t,e,a){t.exports=a(266)},265:function(t,e,a){},266:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),r=a(12),i=a.n(r),c=a(6),o=a(7),s=a(9),h=a(8),u=a(10),p=a(4);function m(){return l.a.createElement("div",{className:"header"},l.a.createElement("header",null,l.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}),l.a.createElement("div",{style:{float:"right"}},l.a.createElement(p.b,{to:"/home"},"\u9996\u9875"),l.a.createElement(p.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),l.a.createElement(p.b,{to:"/api"},"API"),l.a.createElement(p.b,{to:"/about"},"\u5173\u4e8e"),l.a.createElement(p.b,null,"\u6ce8\u518c"),l.a.createElement(p.b,{to:"/login"},"\u767b\u5f55"))))}var d=a(33),f=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={data:[]},t}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?page="+e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data}),console.log(t.state.data)}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/?page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"pgchange",value:function(t){var e=this;fetch("https://cnodejs.org/api/v1/topics?page="+t).then((function(t){return t.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",null,this.state.data.map((function(t,e){return l.a.createElement("ul",{className:"mingzi"},l.a.createElement("li",{num:"item"},l.a.createElement("img",{src:t.author.avatar_url,alt:"",style:{float:"left",width:30,height:30}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.reply_count+"/"},style:{float:"left",width:40,height:"40px",paddingTop:10,fontSize:16,textAlign:"center"}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.visit_count},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.tab},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement(p.b,{to:"/detail/"+t.id},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.title},style:{width:650,height:"40px",paddingTop:"12px",float:"left",overflow:"hidden",fontWeight:"bold",fontSize:16}})),l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/227713?v=4&s=120",style:{float:"left",width:20,height:20}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"2\u5929\u524d"},style:{width:65,float:"left",height:40}})))}))),l.a.createElement("div",{className:"change"},l.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return l.a.createElement("li",{onClick:function(){return t.handleclick(e)}},l.a.createElement("a",null,e))})))))}}]),e}(n.Component),g=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={data:[]},t}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data}),console.log(t.state.data)}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"pgchange",value:function(t){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+t).then((function(t){return t.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",null,this.state.data.map((function(t,e){return l.a.createElement("ul",{className:"mingzi"},l.a.createElement("li",{num:"item"},l.a.createElement("img",{src:t.author.avatar_url,alt:"",style:{float:"left",width:30,height:30}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.reply_count+"/"},style:{float:"left",width:40,height:"40px",paddingTop:10,fontSize:16,textAlign:"center"}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.visit_count},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.tab},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement(p.b,{to:"/detail/"+t.id},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.title},style:{width:650,height:"40px",paddingTop:"12px",float:"left",overflow:"hidden",fontWeight:"bold",fontSize:16}})),l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/227713?v=4&s=120",alt:"",style:{float:"left",width:20,height:20}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"2\u5929\u524d"},style:{width:65,float:"left",height:40}})))}))),l.a.createElement("div",{className:"change"},l.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return l.a.createElement("li",{onClick:function(){return t.handleclick(e)}},l.a.createElement("a",null,e))})))))}}]),e}(n.Component),v=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={data:[]},t}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data}),console.log(t.state.data)}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"pgchange",value:function(t){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+t).then((function(t){return t.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",null,this.state.data.map((function(t,e){return l.a.createElement("ul",{className:"mingzi"},l.a.createElement("li",{num:"item"},l.a.createElement("img",{src:t.author.avatar_url,alt:"",style:{float:"left",width:30,height:30}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.reply_count+"/"},style:{float:"left",width:40,height:"40px",paddingTop:10,fontSize:16,textAlign:"center"}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.visit_count},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.tab},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement(p.b,{to:"/detail/"+t.id},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.title},style:{width:650,height:"40px",paddingTop:"12px",float:"left",overflow:"hidden",fontWeight:"bold",fontSize:16}})),l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/227713?v=4&s=120",alt:"",style:{float:"left",width:20,height:20}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"2\u5929\u524d"},style:{width:65,float:"left",height:40}})))}))),l.a.createElement("div",{className:"change"},l.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return l.a.createElement("li",{onClick:function(){return t.handleclick(e)}},l.a.createElement("a",null,e))})))))}}]),e}(n.Component),E=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={data:[]},t}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data}),console.log(t.state.data)}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"pgchange",value:function(t){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+t).then((function(t){return t.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",null,this.state.data.map((function(t,e){return l.a.createElement("ul",{className:"mingzi"},l.a.createElement("li",{num:"item"},l.a.createElement("img",{src:t.author.avatar_url,alt:"",style:{float:"left",width:30,height:30}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.reply_count+"/"},style:{float:"left",width:40,height:"40px",paddingTop:10,fontSize:16,textAlign:"center"}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.visit_count},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.tab},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement(p.b,{to:"/detail/"+t.id},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.title},style:{width:650,height:"40px",paddingTop:"12px",float:"left",overflow:"hidden",fontWeight:"bold",fontSize:16}})),l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/227713?v=4&s=120",alt:"",style:{float:"left",width:20,height:20}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"2\u5929\u524d"},style:{width:65,float:"left",height:40}})))}))),l.a.createElement("div",{className:"change"},l.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return l.a.createElement("li",{onClick:function(){return t.handleclick(e)}},l.a.createElement("a",null,e))})))))}}]),e}(n.Component),b=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={data:[]},t}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+e).then((function(t){return t.json()})).then((function(e){t.setState({data:e.data}),console.log(t.state.data)}))}},{key:"componentDidUpdate",value:function(t,e){var a=this;if(t.match.params.page!==this.props.match.params.page){var n=this.props.match.params.page;fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+n).then((function(t){return t.json()})).then((function(t){a.setState({data:t.data})}))}}},{key:"pgchange",value:function(t){var e=this;fetch("https://cnodejs.org/api/v1/topics?tab=job&page="+t).then((function(t){return t.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",null,l.a.createElement("div",null,this.state.data.map((function(t,e){return l.a.createElement("ul",{className:"mingzi"},l.a.createElement("li",{num:"item"},l.a.createElement("img",{src:t.author.avatar_url,alt:"",style:{float:"left",width:30,height:30}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.reply_count+"/"},style:{float:"left",width:40,height:"40px",paddingTop:10,fontSize:16,textAlign:"center"}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.visit_count},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.tab},style:{float:"left",width:40,height:"40px",paddingTop:10}}),l.a.createElement(p.b,{to:"/detail/"+t.id},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.title},style:{width:650,height:"40px",paddingTop:"12px",float:"left",overflow:"hidden",fontWeight:"bold",fontSize:16}})),l.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/227713?v=4&s=120",alt:"",style:{float:"left",width:20,height:20}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"2\u5929\u524d"},style:{width:65,float:"left",height:40}})))}))),l.a.createElement("div",{className:"change"},l.a.createElement("ul",null,[1,2,3,4,5,6,7,8,9,10].map((function(e){return l.a.createElement("li",{onClick:function(){return t.handleclick(e)}},l.a.createElement("a",null,e))})))))}}]),e}(n.Component),y=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this.props.match.url;return l.a.createElement("div",{className:"all"},l.a.createElement("div",{className:"qjf"},l.a.createElement(p.b,{to:"".concat(t,"/all")},"\u5168\u90e8"),l.a.createElement(p.b,{to:"".concat(t,"/jing")},"\u7cbe\u534e"),l.a.createElement(p.b,{to:"".concat(t,"/share")},"\u5206\u4eab"),l.a.createElement(p.b,{to:"".concat(t,"/ask")},"\u95ee\u7b54"),l.a.createElement(p.b,{to:"".concat(t,"/job")},"\u62db\u8058")),l.a.createElement("div",null,l.a.createElement(d.a,{path:t+"/all",component:f}),l.a.createElement(d.a,{path:t+"/jing",component:g}),l.a.createElement(d.a,{path:t+"/share",component:v}),l.a.createElement(d.a,{path:t+"/ask",component:E}),l.a.createElement(d.a,{path:t+"/job",component:b})))}}]),e}(n.Component),j=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l.a.createElement("div",null,"Start")}}]),e}(n.Component),_=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l.a.createElement("div",null,"Api")}}]),e}(n.Component),S=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l.a.createElement("div",null,"About")}}]),e}(n.Component),O=a(268),k=a(269),T=a(98);function w(t){return l.a.createElement("div",{style:{background:"#fff"}},l.a.createElement("a",{style:{fontSize:"20px",color:"gray"}},"\u4e3b\u9875/ \u767b\u5f55"),l.a.createElement(O.a,{style:{width:500,margin:"100px 100px"}},l.a.createElement("a",{style:{color:"black"}},"\u7528\u6237\u540d",l.a.createElement(k.a,null)),l.a.createElement("a",{style:{color:"black"}},"\u5bc6\u7801",l.a.createElement(k.a,null)),l.a.createElement(T.a,{href:"/home",type:"Login",style:{margin:"100px 0"}},"\u767b\u5f55")))}var x=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(m,null)),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"left"},l.a.createElement(d.a,{path:"/home",component:y}),l.a.createElement(d.a,{path:"/start",component:j}),l.a.createElement(d.a,{path:"/api",component:_}),l.a.createElement(d.a,{path:"/about",component:S}),l.a.createElement(d.a,{path:"/login",component:w})),l.a.createElement("div",{className:"right"},l.a.createElement("h3",null,"\u5ba2\u6237\u7aef\u4e8c\u7ef4\u7801"),l.a.createElement("img",{src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"}),l.a.createElement("p",{href:"https://github.com/soliury/noder-react-native"},"\u5ba2\u6237\u7aef\u6e90\u7801\u5730\u5740")),l.a.createElement("div",{className:"bottom"},"\u6211\u662f\u5e95\u90e8")))}}]),e}(n.Component);a(265);i.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.b223f13d.chunk.js.map