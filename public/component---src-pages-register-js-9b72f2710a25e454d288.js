(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v});a(166);var n=a(6),r=a.n(n),o=a(0),i=a.n(o),c=a(169),l=a(391),u=a(703),s=a(696),m=a(704),d=a(460),p=a(700),f=a(168),h=a.n(f),g=a(159),E=a(170),C=a(180),v=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"",email:"",password:"",loading:!1,errors:null},t._handleSubmit=function(e,a){e.preventDefault();var n=t.state,r=n.name,o=n.email,i=n.password;t.setState({loading:!0}),Object(C.register)({name:r,email:o,password:i}).then(function(e){var t=e.id,n=e.token;localStorage.setItem("customerToken",n),localStorage.setItem("mcustomer",t),a.updateToken(),Object(c.navigate)("/myaccount/")}).catch(function(e){console.log(e),t.setState({loading:!1,errors:e.errors||e})})},t._handleChange=function(e){var a,n=e.target,r=n.name,o=n.value;return t.setState(((a={})[r]=o,a))},t.handleErrors=function(e){return!Array.isArray(e)&&!e.length>0?i.a.createElement(l.a,{error:!0,header:"Sorry",content:"Cannot register at this time."}):e.map(function(e,t){return i.a.createElement(l.a,{error:!0,header:e.title,content:e.detail,key:t})})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,a=t.loading,n=t.errors;return i.a.createElement(E.a,{location:this.props.location},i.a.createElement(g.a.Consumer,null,function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{title:"Register"}),i.a.createElement(u.a,{as:"h1"},"Créer un compte"),i.a.createElement(s.a,{onSubmit:function(a){return e._handleSubmit(a,t)},loading:a,error:!!n},n?e.handleErrors(n):null,i.a.createElement(m.a,null,i.a.createElement(s.a.Field,null,i.a.createElement("label",{htmlFor:"name"},"Nom"),i.a.createElement(d.a,{id:"name",fluid:!0,name:"name",autoFocus:!0,required:!0,onChange:function(t){return e._handleChange(t)}})),i.a.createElement(s.a.Field,null,i.a.createElement("label",{htmlFor:"email"},"Adresse Email"),i.a.createElement(d.a,{id:"email",fluid:!0,name:"email",type:"email",required:!0,onChange:function(t){return e._handleChange(t)}})),i.a.createElement(s.a.Field,null,i.a.createElement("label",{htmlFor:"password"},"Mot de passe"),i.a.createElement(d.a,{id:"password",fluid:!0,name:"password",type:"password",required:!0,onChange:function(t){return e._handleChange(t)}})),i.a.createElement(p.a,{type:"submit",color:"black"},"S'enregistrer"))))}))},t}(i.a.Component)},157:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);t.a=r},167:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(48),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(152),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(157),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(29);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(695),i=a(187),c=a.n(i),l=a(168),u=a.n(l),s=a(152),m=a.n(s),d=(a(188),a(6)),p=a.n(d),f=a(159),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).updateToken=function(){return a.setState({token:localStorage.getItem("customerToken")})},a.updateVerified=function(e){return a.setState({userVerified:e})},a.state={token:null,verified:null,updateToken:a.updateToken,updateVerified:a.updateVerified},a}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=localStorage.getItem("customerToken");this.setState({token:e})},a.render=function(){var e=this.state,t=e.token,a=e.updateToken,n=e.verified,o=e.updateVerified;return r.a.createElement(f.a.Provider,{value:{verified:n,token:t,updateToken:a,updateVerified:o}},this.props.children)},t}(n.Component),g=(a(28),a(185),a(30),a(189),a(158)),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).addToCart=function(e,t){var n=Number(a.state.cartCount)+Number(e);return localStorage.setItem("mdata",JSON.stringify({cartId:t,cartCount:n})),a.setState(function(){return{cartCount:n}})},a.updateCartCount=function(e,t){localStorage.setItem("mdata",JSON.stringify({cartId:t,cartCount:e})),a.setState(function(){return{cartCount:e}})},a.state={cartId:null,cartCount:0,addToCart:a.addToCart,updateCartCount:a.updateCartCount},a}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=localStorage.getItem("mcart"),t=localStorage.getItem("mdata");if(e&&!t||!e){var a="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)});localStorage.setItem("mcart",a),localStorage.setItem("mdata",JSON.stringify({cartId:a,cartCount:0})),this.setState({cartId:a})}else{var n=localStorage.getItem("mdata"),r=JSON.parse(n);this.setState({cartCount:r.cartCount||0})}},a.render=function(){return r.a.createElement(g.a.Provider,{value:Object.assign({},this.state)},this.props.children)},t}(n.Component),C=a(707),v=a(701),x=a(302),y=(a(166),function(e){var t=e.cartCount,a=e.name;return r.a.createElement("div",null,r.a.createElement(x.a,{name:"cart"})," "+a+" ",t?t>9?r.a.createElement("span",{style:{fontSize:"smaller"}},"(9",r.a.createElement("sup",null,"+"),")"):"("+t+")":"(0)")}),b=a(685),w=a(172),k=a.n(w),I=function(){return r.a.createElement(b.a,{size:"mini",src:k.a,style:{marginRight:"1.5em"},alt:"I love Lamp"})},S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={activeItem:t.props.location.pathname},t}p()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){var t=e.location.pathname;t!==this.props.location.pathname&&this.setState({activeItem:t})},a.render=function(){var e=this.state.activeItem,t=this.props,a=t.token,n=t.cartCount;return r.a.createElement(v.a,{size:"huge",borderless:!0,pointing:!0},r.a.createElement(o.a,{text:!0},r.a.createElement(v.a.Item,{active:e===Object(s.withPrefix)("/"),as:m.a,to:"/",header:!0},r.a.createElement(I,null),"Zazou !"),a?r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/myaccount/",active:e===Object(s.withPrefix)("/myaccount/")},r.a.createElement(x.a,{name:"user"}),"Mon compte"),r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:e===Object(s.withPrefix)("/cart/")},r.a.createElement(y,{cartCount:n,name:"Cart"}))):r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/register/",active:e===Object(s.withPrefix)("/register/")},"S'inscrire"),r.a.createElement(v.a.Item,{as:m.a,to:"/login/",active:e===Object(s.withPrefix)("/login/")},"Se connecter"),r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:e===Object(s.withPrefix)("/cart/")},r.a.createElement(y,{cartCount:n,name:"Panier"})))))},t}(n.Component),P=a(700),O=a(704),T=a(694),j=a(702),_=a(184),M=Object(_.a)(m.a).withConfig({displayName:"MobileMenu__StyledLink",componentId:"sc-45ix4h-0"})(["font-weight:bold;text-align:center;font-size:2em;&:hover{text-decoration:underline;}"]),z=Object(_.a)(P.a).withConfig({displayName:"MobileMenu__BurgerButton",componentId:"sc-45ix4h-1"})(["&&&{font-size:1rem;padding:0.785em 1.5em;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,0.15) inset;}"]),q=Object(_.a)(z).withConfig({displayName:"MobileMenu__CloseButton",componentId:"sc-45ix4h-2"})(["&&&{position:absolute;top:-4em;right:0em;padding:0.5em;font-size:1.5em;width:2em;height:2em;}"]),F=Object(_.a)(O.a).withConfig({displayName:"MobileMenu__StyledSegment",componentId:"sc-45ix4h-3"})(["&&&{position:fixed;top:0%;left:0vw;z-index:1000;width:100vw;height:110vh;}"]),N=_.a.div.withConfig({displayName:"MobileMenu__StyledContainer",componentId:"sc-45ix4h-4"})(["&&&{margin-top:6em;text-align:center;position:relative;}"]),R=Object(_.a)(T.a).withConfig({displayName:"MobileMenu__StyledDivider",componentId:"sc-45ix4h-5"})(["&&&{margin:2em;}"]),A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1,activeItem:t.props.location.pathname},t.handleClick=function(){return t.setState({open:!t.state.open})},t.handleClose=function(){return t.setState({open:!1})},t}p()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){var t=e.location.pathname;t!==this.props.location.pathname&&this.setState({activeItem:t})},a.render=function(){var e=this.state,t=e.open,a=e.activeItem,n=this.props,i=n.token,c=n.cartCount;return r.a.createElement(v.a,{size:"huge",borderless:!0,pointing:!0},r.a.createElement(o.a,{text:!0},r.a.createElement(v.a.Item,{as:m.a,to:"/",header:!0,active:a===Object(s.withPrefix)("/")},r.a.createElement(I,null),"Zazou"),r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:a===Object(s.withPrefix)("/cart/")},r.a.createElement(y,{cartCount:c,name:""})),r.a.createElement(v.a.Item,{position:"right"},r.a.createElement(z,{basic:!0,onClick:this.handleClick,"aria-label":"Open Navigation Menu",autoFocus:!0},r.a.createElement(x.a,{fitted:!0,name:"bars"})))),r.a.createElement(j.a,{closeOnEscape:!0,onClose:this.handleClose,open:t},r.a.createElement(F,{className:!0,role:"dialog","aria-label":"Navigation Menu"},r.a.createElement(N,null,r.a.createElement(q,{"aria-label":"Close Navigation",basic:!0,circular:!0,onClick:this.handleClose,autoFocus:!0},"X"),r.a.createElement(M,{to:"/",onClick:this.handleClose},"Boutique"),r.a.createElement(R,null),r.a.createElement(M,{to:"/cart/",onClick:this.handleClose},"Panier "+(c?"("+c+")":"")),r.a.createElement(R,null),i?r.a.createElement(M,{to:"/myaccount/",onClick:this.handleClose},"Mon compte"):[r.a.createElement(M,{to:"/register/",onClick:this.handleClose,key:1},"S'inscrire"),r.a.createElement(R,{key:2}),r.a.createElement(M,{to:"/login/",onClick:this.handleClose,key:3},"Se connecter")])))))},t}(n.Component),B=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(f.a.Consumer,null,function(t){return r.a.createElement(g.a.Consumer,null,function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{maxWidth:C.a.onlyMobile.maxWidth},r.a.createElement(A,{location:e.props.location,token:t.token,cartCount:a.cartCount})),r.a.createElement(C.a,{minWidth:C.a.onlyTablet.minWidth},r.a.createElement(S,{location:e.props.location,token:t.token,cartCount:a.cartCount})))})})},t}(r.a.PureComponent),W=a(705),U=a(703),V=a(698),D=function(){return r.a.createElement(O.a,{vertical:!0,style:{padding:"4em 0em",marginTop:"3em",borderTop:"1px solid #f2f2f2"}},r.a.createElement(o.a,{text:!0},r.a.createElement(W.a,{stackable:!0},r.a.createElement(W.a.Row,null,r.a.createElement(W.a.Column,{width:4},r.a.createElement(U.a,{as:"h4",content:"À propos"}),r.a.createElement(V.a,null,r.a.createElement(V.a.Item,{as:m.a,to:"/privacy/"},"Données personnelles"),r.a.createElement(V.a.Item,{as:m.a,to:"/terms/"},"Conditions"))),r.a.createElement(W.a.Column,{width:5},r.a.createElement(U.a,{as:"h4",content:"Navigation"}),r.a.createElement(V.a,null,r.a.createElement(V.a.Item,{as:m.a,to:"/"},"Boutique"))),r.a.createElement(W.a.Column,{width:7},r.a.createElement(U.a,{as:"h4"},"Réseaux"),r.a.createElement("p",null,"Vous aimez mes bijoux ? Faites le moi savoir, et criez le autour de vous !"),r.a.createElement(V.a,{horizontal:!0},r.a.createElement(V.a.Item,{as:m.a,to:"/"},r.a.createElement(x.a,{name:"instagram"})),r.a.createElement(V.a.Item,{as:m.a,to:"/"},r.a.createElement(x.a,{name:"facebook"})),r.a.createElement(V.a.Item,{as:m.a,to:"/"},r.a.createElement(x.a,{name:"mail"}))))))))};t.a=function(e){var t=e.children,a=e.location;return r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement(u.a,{meta:[{name:"Zazou Paris",content:"Boutique en ligne Zazou-Paris de bijoux personnalisés faits à la main"},{name:"keywords",content:"bijoux, zazou, mode"},{name:"msapplication-TileColor",content:"#da532c"},{name:"theme-color",content:"#ffffff"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(s.withPrefix)("/favicons/apple-touch-icon.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(s.withPrefix)("/favicons/favicon-32x32.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(s.withPrefix)("/favicons/favicon-16x16.png")})),r.a.createElement(c.a,{upTolerance:10,downTolerance:10,style:{zIndex:"20",height:"6.5em"}},r.a.createElement(B,{location:a})),r.a.createElement(o.a,{text:!0},t),r.a.createElement(D,null)))}},172:function(e,t,a){e.exports=a.p+"static/logo-carre-2-8bccac38e7f1cfcb4a58878f146346b3.png"},180:function(e,t,a){"use strict";a.r(t),a.d(t,"getProducts",function(){return i}),a.d(t,"getProductById",function(){return c}),a.d(t,"addToCart",function(){return l}),a.d(t,"getCartItems",function(){return u}),a.d(t,"removeFromCart",function(){return s}),a.d(t,"deleteCart",function(){return m}),a.d(t,"checkoutCart",function(){return d}),a.d(t,"payForOrder",function(){return p}),a.d(t,"register",function(){return h}),a.d(t,"login",function(){return f}),a.d(t,"getOrders",function(){return g}),a.d(t,"getCustomer",function(){return E}),a.d(t,"findCustomerByEmail",function(){return C}),a.d(t,"updateCustomer",function(){return v}),a.d(t,"findCustomerByResetToken",function(){return x});a(166),a(28);var n=a(178),r=a.n(n),o=(a(193),(0,a(199).gateway)({client_id:"xdIRZLJFUU3T8LYrlFfhcm0QOlgn3UhPhy2swxrD79",client_secret:"YPkgK26eGb5qQE59yuHuBxUUt11H4V3Ob1Lyh9oXhZ",grant_type:"client_credentials"})),i=function(){return o.Products.With("main_image").All()},c=function(e){return o.Products.With("main_image").Get(e)},l=function(e,t,a){return o.Cart(e).AddProduct(t,a)},u=function(e){return o.Cart(e).Items()},s=function(e,t){return o.Cart(t).RemoveItem(e)},m=function(e){return o.Cart(e).Delete()},d=function(e,t,a,n){return o.Cart(e).Checkout(t,a,n)},p=function(e,t,a){return o.Orders.Payment(e,{gateway:"stripe",method:"purchase",payment:t.id,options:{receipt_email:a}})},f=function(e){var t=e.email,a=e.password;return o.Customers.Token(t,a).then(function(e){var t=e.data;return{id:t.customer_id,token:t.token}})},h=function(e){var t=e.email,a=e.password,n=r()(e,["email","password"]);return o.Customers.Create(Object.assign({email:t,password:a,type:"customer"},n)).then(function(e){var n=e.data,r=n.name,o=n.id;return f({email:t,password:a}).then(function(e){var a=e.token;return{id:o,name:r,email:t,token:a}})})},g=function(e){return o.Orders.With("items").All(e)},E=function(e){return o.Customers.Get(e)},C=function(e){return o.Customers.Filter({eq:{email:e}}).All()},v=function(e,t){return o.Customers.Update(e,t)},x=function(e){return o.Customers.Filter({eq:{resetPasswordToken:e}}).All().then(function(t){for(var a=0;a<t.data.length;a++)if(t.data[a].resetPasswordToken==e)return t.data[a]})}},200:function(e,t){},201:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-register-js-9b72f2710a25e454d288.js.map