(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(170);t.default=function(e){return r.a.createElement(o.a,{location:e.location},r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},157:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},167:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(48),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(152),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(157),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(29);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(695),i=a(187),c=a.n(i),l=a(168),u=a.n(l),s=a(152),m=a.n(s),p=(a(188),a(6)),d=a.n(p),h=a(159),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).updateToken=function(){return a.setState({token:localStorage.getItem("customerToken")})},a.updateVerified=function(e){return a.setState({userVerified:e})},a.state={token:null,verified:null,updateToken:a.updateToken,updateVerified:a.updateVerified},a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=localStorage.getItem("customerToken");this.setState({token:e})},a.render=function(){var e=this.state,t=e.token,a=e.updateToken,n=e.verified,o=e.updateVerified;return r.a.createElement(h.a.Provider,{value:{verified:n,token:t,updateToken:a,updateVerified:o}},this.props.children)},t}(n.Component),g=(a(28),a(185),a(30),a(189),a(158)),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).addToCart=function(e,t){var n=Number(a.state.cartCount)+Number(e);return localStorage.setItem("mdata",JSON.stringify({cartId:t,cartCount:n})),a.setState(function(){return{cartCount:n}})},a.updateCartCount=function(e,t){localStorage.setItem("mdata",JSON.stringify({cartId:t,cartCount:e})),a.setState(function(){return{cartCount:e}})},a.state={cartId:null,cartCount:0,addToCart:a.addToCart,updateCartCount:a.updateCartCount},a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=localStorage.getItem("mcart"),t=localStorage.getItem("mdata");if(e&&!t||!e){var a="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)});localStorage.setItem("mcart",a),localStorage.setItem("mdata",JSON.stringify({cartId:a,cartCount:0})),this.setState({cartId:a})}else{var n=localStorage.getItem("mdata"),r=JSON.parse(n);this.setState({cartCount:r.cartCount||0})}},a.render=function(){return r.a.createElement(g.a.Provider,{value:Object.assign({},this.state)},this.props.children)},t}(n.Component),x=a(707),v=a(701),C=a(302),b=(a(166),function(e){var t=e.cartCount,a=e.name;return r.a.createElement("div",null,r.a.createElement(C.a,{name:"cart"})," "+a+" ",t?t>9?r.a.createElement("span",{style:{fontSize:"smaller"}},"(9",r.a.createElement("sup",null,"+"),")"):"("+t+")":"(0)")}),y=a(685),w=a(172),I=a.n(w),k=function(){return r.a.createElement(y.a,{size:"mini",src:I.a,style:{marginRight:"1.5em"},alt:"I love Lamp"})},S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeItem:t.props.location.pathname},t}d()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){var t=e.location.pathname;t!==this.props.location.pathname&&this.setState({activeItem:t})},a.render=function(){var e=this.state.activeItem,t=this.props,a=t.token,n=t.cartCount;return r.a.createElement(v.a,{size:"huge",borderless:!0,pointing:!0},r.a.createElement(o.a,{text:!0},r.a.createElement(v.a.Item,{active:e===Object(s.withPrefix)("/"),as:m.a,to:"/",header:!0},r.a.createElement(k,null),"Zazou !"),a?r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/myaccount/",active:e===Object(s.withPrefix)("/myaccount/")},r.a.createElement(C.a,{name:"user"}),"Mon compte"),r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:e===Object(s.withPrefix)("/cart/")},r.a.createElement(b,{cartCount:n,name:"Cart"}))):r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/register/",active:e===Object(s.withPrefix)("/register/")},"S'inscrire"),r.a.createElement(v.a.Item,{as:m.a,to:"/login/",active:e===Object(s.withPrefix)("/login/")},"Se connecter"),r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:e===Object(s.withPrefix)("/cart/")},r.a.createElement(b,{cartCount:n,name:"Panier"})))))},t}(n.Component),O=a(700),P=a(704),j=a(694),M=a(702),z=a(184),T=Object(z.a)(m.a).withConfig({displayName:"MobileMenu__StyledLink",componentId:"sc-45ix4h-0"})(["font-weight:bold;text-align:center;font-size:2em;&:hover{text-decoration:underline;}"]),N=Object(z.a)(O.a).withConfig({displayName:"MobileMenu__BurgerButton",componentId:"sc-45ix4h-1"})(["&&&{font-size:1rem;padding:0.785em 1.5em;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,0.15) inset;}"]),q=Object(z.a)(N).withConfig({displayName:"MobileMenu__CloseButton",componentId:"sc-45ix4h-2"})(["&&&{position:absolute;top:-4em;right:0em;padding:0.5em;font-size:1.5em;width:2em;height:2em;}"]),_=Object(z.a)(P.a).withConfig({displayName:"MobileMenu__StyledSegment",componentId:"sc-45ix4h-3"})(["&&&{position:fixed;top:0%;left:0vw;z-index:1000;width:100vw;height:110vh;}"]),R=z.a.div.withConfig({displayName:"MobileMenu__StyledContainer",componentId:"sc-45ix4h-4"})(["&&&{margin-top:6em;text-align:center;position:relative;}"]),V=Object(z.a)(j.a).withConfig({displayName:"MobileMenu__StyledDivider",componentId:"sc-45ix4h-5"})(["&&&{margin:2em;}"]),B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1,activeItem:t.props.location.pathname},t.handleClick=function(){return t.setState({open:!t.state.open})},t.handleClose=function(){return t.setState({open:!1})},t}d()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){var t=e.location.pathname;t!==this.props.location.pathname&&this.setState({activeItem:t})},a.render=function(){var e=this.state,t=e.open,a=e.activeItem,n=this.props,i=n.token,c=n.cartCount;return r.a.createElement(v.a,{size:"huge",borderless:!0,pointing:!0},r.a.createElement(o.a,{text:!0},r.a.createElement(v.a.Item,{as:m.a,to:"/",header:!0,active:a===Object(s.withPrefix)("/")},r.a.createElement(k,null),"Zazou"),r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:a===Object(s.withPrefix)("/cart/")},r.a.createElement(b,{cartCount:c,name:""})),r.a.createElement(v.a.Item,{position:"right"},r.a.createElement(N,{basic:!0,onClick:this.handleClick,"aria-label":"Open Navigation Menu",autoFocus:!0},r.a.createElement(C.a,{fitted:!0,name:"bars"})))),r.a.createElement(M.a,{closeOnEscape:!0,onClose:this.handleClose,open:t},r.a.createElement(_,{className:!0,role:"dialog","aria-label":"Navigation Menu"},r.a.createElement(R,null,r.a.createElement(q,{"aria-label":"Close Navigation",basic:!0,circular:!0,onClick:this.handleClose,autoFocus:!0},"X"),r.a.createElement(T,{to:"/",onClick:this.handleClose},"Boutique"),r.a.createElement(V,null),r.a.createElement(T,{to:"/cart/",onClick:this.handleClose},"Panier "+(c?"("+c+")":"")),r.a.createElement(V,null),i?r.a.createElement(T,{to:"/myaccount/",onClick:this.handleClose},"Mon compte"):[r.a.createElement(T,{to:"/register/",onClick:this.handleClose,key:1},"S'inscrire"),r.a.createElement(V,{key:2}),r.a.createElement(T,{to:"/login/",onClick:this.handleClose,key:3},"Se connecter")])))))},t}(n.Component),F=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(h.a.Consumer,null,function(t){return r.a.createElement(g.a.Consumer,null,function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{maxWidth:x.a.onlyMobile.maxWidth},r.a.createElement(B,{location:e.props.location,token:t.token,cartCount:a.cartCount})),r.a.createElement(x.a,{minWidth:x.a.onlyTablet.minWidth},r.a.createElement(S,{location:e.props.location,token:t.token,cartCount:a.cartCount})))})})},t}(r.a.PureComponent),J=a(705),W=a(703),D=a(698),G=function(){return r.a.createElement(P.a,{vertical:!0,style:{padding:"4em 0em",marginTop:"3em",borderTop:"1px solid #f2f2f2"}},r.a.createElement(o.a,{text:!0},r.a.createElement(J.a,{stackable:!0},r.a.createElement(J.a.Row,null,r.a.createElement(J.a.Column,{width:4},r.a.createElement(W.a,{as:"h4",content:"À propos"}),r.a.createElement(D.a,null,r.a.createElement(D.a.Item,{as:m.a,to:"/privacy/"},"Données personnelles"),r.a.createElement(D.a.Item,{as:m.a,to:"/terms/"},"Conditions"))),r.a.createElement(J.a.Column,{width:5},r.a.createElement(W.a,{as:"h4",content:"Navigation"}),r.a.createElement(D.a,null,r.a.createElement(D.a.Item,{as:m.a,to:"/"},"Boutique"))),r.a.createElement(J.a.Column,{width:7},r.a.createElement(W.a,{as:"h4"},"Réseaux"),r.a.createElement("p",null,"Vous aimez mes bijoux ? Faites le moi savoir, et criez le autour de vous !"),r.a.createElement(D.a,{horizontal:!0},r.a.createElement(D.a.Item,{as:m.a,to:"/"},r.a.createElement(C.a,{name:"instagram"})),r.a.createElement(D.a.Item,{as:m.a,to:"/"},r.a.createElement(C.a,{name:"facebook"})),r.a.createElement(D.a.Item,{as:m.a,to:"/"},r.a.createElement(C.a,{name:"mail"}))))))))};t.a=function(e){var t=e.children,a=e.location;return r.a.createElement(f,null,r.a.createElement(E,null,r.a.createElement(u.a,{meta:[{name:"Zazou Paris",content:"Boutique en ligne Zazou-Paris de bijoux personnalisés faits à la main"},{name:"keywords",content:"bijoux, zazou, mode"},{name:"msapplication-TileColor",content:"#da532c"},{name:"theme-color",content:"#ffffff"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(s.withPrefix)("/favicons/apple-touch-icon.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(s.withPrefix)("/favicons/favicon-32x32.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(s.withPrefix)("/favicons/favicon-16x16.png")})),r.a.createElement(c.a,{upTolerance:10,downTolerance:10,style:{zIndex:"20",height:"6.5em"}},r.a.createElement(F,{location:a})),r.a.createElement(o.a,{text:!0},t),r.a.createElement(G,null)))}},172:function(e,t,a){e.exports=a.p+"static/logo-carre-2-8bccac38e7f1cfcb4a58878f146346b3.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-482b75015c0ac296c9b8.js.map