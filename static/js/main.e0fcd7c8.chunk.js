(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{103:function(e,t,a){e.exports=a(186)},179:function(e,t,a){},180:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o),l=a(26),i=a(11);var s=function(e){return c.a.createElement(i.b,{path:e.path,render:function(t){return c.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},u=a(27),m=a(28),p=a(31),d=a(30),h=a(14),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={selectedTab:"/"},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(h.d,{unselectedTintColor:"#949494",tintColor:"rgb(255,133,42)",barTintColor:"white"},c.a.createElement(h.d.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-home1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(h.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-cart"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-cart2"}),title:"\u6536\u85cf",key:"collect",selected:"/collect"===t,onPress:function(){e.props.history.push("/collect")},"data-seed":"logId1"}),c.a.createElement(h.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dingdan1"}),title:"\u8ba2\u5355\u5217\u8868",key:"order",selected:"/order"===t,onPress:function(){e.props.history.push("/order")},"data-seed":"logId2"}),c.a.createElement(h.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode2"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-wodedangxuan"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"/my"===t,onPress:function(){e.props.history.push("/my")}})))}}]),a}(c.a.Component),E=Object(i.g)(f),g=(a(179),function(){return c.a.createElement("div",null,c.a.createElement("header",{class:"sc-VigVT SQtZc"},c.a.createElement("div",{class:"header-bd"},c.a.createElement("a",{class:"placeholder"},c.a.createElement("span",{class:"text iconfont icon-search"},"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa")))))}),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3","4"],imgHeight:206},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["//gw.alicdn.com/imgextra/i1/2/O1CN0169xZ5Y1BsxQEkuxfV_!!2-0-lubanu.jpg","//gw.alicdn.com/imgextra/i4/67/O1CN01yPXGic1CMjAP1OVdX_!!67-0-lubanu.jpg","//gw.alicdn.com/imgextra/i2/60/O1CN01zHL8nS1CJWOSJYiLf_!!60-0-lubanu.jpg","//gw.alicdn.com/imgextra/i3/55/O1CN01wuefWN1CHEPlNBpUW_!!55-0-lubanu.jpg"]})}),100)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{marginTop:"37px"}},c.a.createElement(h.b,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return c.a.createElement("a",{key:t,href:"  https://main.m.taobao.com/?sprefer=sypc00",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{"data-src":"".concat(t),src:"".concat(t),alt:"\u9996\u9875\u8f6e\u64ad\u56fe",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),a}(c.a.Component),v=(a(180),a(21)),y=Object(v.b)((function(e){return console.log(e),{datalist:e.datalist}}))((function(e){Object(n.useEffect)((function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"Add_list",datalist:t.data})}))}))}),[]);var t=e.datalist;return t===[]?c.a.createElement("div",null):c.a.createElement("div",{class:"container"},t.map((function(t){return c.a.createElement("div",{onClick:function(){e.history.push("/details","".concat(t.img))}},c.a.createElement("div",{class:"item"},c.a.createElement("a",{class:"item-1"},c.a.createElement("img",{class:"item-img",src:"".concat(t.img)})),c.a.createElement("a",{class:"item-2"},c.a.createElement("div",{class:"title"},c.a.createElement("span",{class:"title-p"},"".concat(t.title))),c.a.createElement("div",{class:"price-box"},c.a.createElement("span",{class:"price-h"},"\uffe5"),c.a.createElement("span",{class:"price"},"".concat(t.price)),c.a.createElement("span",{class:"payed"},"\u5546\u54c1id:","".concat(t.id))))))})))})),j=Object(i.g)((function(e){return c.a.createElement("div",null,c.a.createElement(l.b,{activeClassName:"active",exact:!0,to:"/search"},c.a.createElement(g,null)),c.a.createElement(b,null),c.a.createElement(y,{history:e.history}),c.a.createElement(E,null))})),O=a(102),w=(a(182),Object(v.b)((function(e){return console.log(e),{userinfo:e.userinfo}}))((function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),o=a[0];a[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"log"},c.a.createElement("h1",{className:"p11"},"\u7528\u6237\u767b\u5f55"),c.a.createElement("p",{className:"p22"},"username:  ",c.a.createElement("input",{type:"text"})),c.a.createElement("p",{className:"p33"},"password:   ",c.a.createElement("input",{type:"password"})),e.userinfo?c.a.createElement("button",{className:"btn11",onClick:function(){e.dispatch({type:"LOGIN",userinfo:""})}},"\u9000\u51fa"):c.a.createElement("button",{className:"btn11",onClick:function(){e.dispatch((function(e){fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e({type:"LOGIN",userinfo:t.data.name})}))}))}},"\u767b\u5f55"),c.a.createElement(h.a,{toast:!0,text:"\u767b\u5f55\u4e2d...",animating:o})),c.a.createElement(E,null))}))),N=function(e){return c.a.createElement("div",null,"\u8ba2\u5355",c.a.createElement("button",{onClick:function(){return e.history.push("/")}},"\u8fd4\u56de"),c.a.createElement(E,null))},C=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:"\u5b9d\u8d1d"},e.onChange=function(t){e.setState({value:t})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h.c,{value:this.state.value,placeholder:"Search",onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(){return e.setState({value:""})},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return e.props.history.push("/")},showCancelButton:!0,onChange:this.onChange}))}}]),a}(c.a.Component),k=(a(183),Object(v.b)((function(e){return{mydata:e}}))((function(e){return console.log(e.mydata.userinfo),e.mydata.userinfo?c.a.createElement("div",{class:"con-shoucang"},e.mydata.shoucang.map((function(t,a){return c.a.createElement("div",{className:"goods-shoucang"},c.a.createElement("img",{src:e.mydata.datalist[t-100].img,className:"img-shoucang"}),c.a.createElement("p",{className:"p-shoucang"},e.mydata.datalist[t-100].title),c.a.createElement("p",{className:"p-shoucang"},"\uffe5:",e.mydata.datalist[t-100].price),c.a.createElement("button",{className:"btn-shoucang",onClick:function(){e.dispatch({type:"del_todo",index:a})}},"\u5220\u9664"))})),c.a.createElement(E,null)):c.a.createElement(i.a,{to:{pathname:"/my"}})}))),x=(a(184),{}),I="",S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"componentWillMount",value:function(){console.log(this.props);for(var e=0;e<this.props.data.datalist.length;e++)this.props.data.datalist[e].img===this.props.location.state&&(x=this.props.data.datalist[e],I=x.id)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{class:"container"},c.a.createElement("button",{class:"btn-back",onClick:function(){return e.props.history.push("/")}},c.a.createElement("i",{className:"iconfont icon-jiantouzuo"})),c.a.createElement("div",{class:"box"},c.a.createElement("img",{class:"details-img",src:"".concat(this.props.location.state)}),c.a.createElement("div",{class:"price-box1"},c.a.createElement("span",{class:"price-h1"},"\uffe5"),c.a.createElement("span",{class:"price1"},x.price),c.a.createElement("span",{class:"payed1"},"\u5546\u54c1id:",x.id)),c.a.createElement("div",{class:"title1"},c.a.createElement("span",{class:"title-p1"},x.title))),c.a.createElement("div",{class:"bar"},c.a.createElement("div",{class:"shop bar1"},c.a.createElement("p",null,c.a.createElement("i",{className:"iconfont icon-icon_A"})),c.a.createElement("p",{class:"bar-text"},"\u5e97\u94fa")),c.a.createElement("div",{class:"wang bar1"},c.a.createElement("p",null,c.a.createElement("i",{className:"iconfont icon-aliwangwang-aliwangwang"})),c.a.createElement("p",{class:"bar-text"},"\u5ba2\u670d")),c.a.createElement("div",{class:"fav bar1",onClick:function(t){""!==e.props.data.userinfo?(e.props.dispatch({shoucang:I,type:"add_todo"}),t.currentTarget.style.color="red"):e.props.history.push("/my")}},c.a.createElement("p",null,c.a.createElement("i",{className:"iconfont icon-shoucang"})),c.a.createElement("p",{class:"bar-text"},"\u6536\u85cf")),c.a.createElement("div",{class:"buy"},c.a.createElement("button",{class:"buy1 btn-lg btn-left"},"\u52a0\u5165\u8d2d\u7269\u8f66"),c.a.createElement("button",{class:"buy1 btn-lg btn-right"},"\u7acb\u5373\u8d2d\u4e70"))))}}]),a}(n.Component),_=Object(v.b)((function(e){return{data:e}}))(S),T=[{path:"/",exact:!0,component:j},{path:"/my",component:w},{path:"/collect",component:k},{path:"/order",component:N},{path:"/search",component:C},{path:"/details",component:_}],A=a(35),P=[];var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return"Add_list"===t.type?t.datalist:e},L=a(83),H=[];var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if("del_todo"==t.type){var a=Object(L.a)(e);return a.splice(t.index,1),a}return"add_todo"===t.type?(console.log(t),[].concat(Object(L.a)(e),[t.shoucang])):e},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.userinfo;default:return e}},V=Object(A.c)({datalist:B,shoucang:G,userinfo:J}),W=Object(A.e)(V,Object(A.d)(Object(A.a)((function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){return console.log("thunk"),"function"===typeof n?n(t,a):e(n)}}})))),z=function(){return c.a.createElement(v.a,{store:W},c.a.createElement(l.a,null,c.a.createElement(i.d,null,T.map((function(e,t){return c.a.createElement(s,Object.assign({key:t},e))})),c.a.createElement(i.b,{component:j}))))};a(185);r.a.render(c.a.createElement(z,null),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.e0fcd7c8.chunk.js.map