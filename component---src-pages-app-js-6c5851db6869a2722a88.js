(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{227:function(e,a,t){"use strict";t.r(a);var n=t(6),o=t.n(n),c=t(0),p=t.n(c),i=t(7),r=t(30),l=t(41),u=t(75),d=t.n(u),s=t(19),m=t.n(s),y=(t(273),t(51)),_=t(239),f=t(74),g={"./app.module.scss":{"api-key":"app-module--api-key--1FmVO","api-key__code":"app-module--api-key__code--EfNXK","api-key__code_active":"app-module--api-key__code_active--1Czaj","api-key__copy":"app-module--api-key__copy--2zQ19"}},k=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).clipAreaRef=p.a.createRef(),a.state={copied:!1},a.handlesClipboardCopy=function(e){a.clipAreaRef.current.select(),document.execCommand("copy"),e.target.focus(),a.setState({copied:!0}),setTimeout(function(){a.setState({copied:!1})},200)},a}return o()(a,e),a.prototype.render=function(){var e=this.props.account;return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"container page__header"},p.a.createElement("h2",null,"Your api key:")),p.a.createElement("div",{className:"container"},p.a.createElement("div",{className:"app-module--api-key--1FmVO"},p.a.createElement("span",{className:d()(m()("api-key__code",{"api-key__code_active":this.state.copied}),g)},p.a.createElement("input",{ref:this.clipAreaRef,type:"text",value:e.access_token,readOnly:!0})),document.queryCommandSupported("copy")&&p.a.createElement("button",{onClick:this.handlesClipboardCopy,className:"app-module--api-key__copy--2zQ19"},p.a.createElement(y.a,{icon:_.d}),"Copy key"))))},a}(c.Component),h=Object(l.b)(function(e){return{account:Object(f.b)(e)}},null)(k),b=t(37),v=t.n(b),E=function(e){var a=e.component,t=e.location,n=e.isLoggedIn,o=v()(e,["component","location","isLoggedIn"]);return n||"/login"===t.pathname?p.a.createElement(a,o):(Object(i.navigate)("/login"),null)},O=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(a=e.call.apply(e,[this].concat(n))||this).componentDidMount=function(){a.props.isLoggedIn&&Object(i.navigate)("/app/home")},a}return o()(a,e),a.prototype.render=function(){var e=this.props.isLoggedIn;return p.a.createElement(r.Router,null,p.a.createElement(E,{path:"/app/home",component:h,isLoggedIn:e}))},a}(c.Component);a.default=Object(l.b)(function(e){return{accountDetailsLoaded:Object(f.d)(e),isLoggedIn:Object(f.e)(e),accountIsLoading:Object(f.a)(e),account:Object(f.b)(e)}},null)(O)},273:function(e,a,t){e.exports={apiKey:"app-module--api-key--1FmVO",apiKey__code:"app-module--api-key__code--EfNXK",apiKey__code_active:"app-module--api-key__code_active--1Czaj",apiKey__copy:"app-module--api-key__copy--2zQ19"}}}]);
//# sourceMappingURL=component---src-pages-app-js-6c5851db6869a2722a88.js.map