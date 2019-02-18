(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});n(166);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),c=n(174),l=n(449),u=n(797),s=n(791),m=n(798),d=n(519),p=n(795),f=n(170),h=n.n(f),g=n(158),E=n(168),C=n(181),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={name:"",email:"",password:"",loading:!1,errors:null},t._handleSubmit=function(e,n){e.preventDefault();var a=t.state,r=a.name,o=a.email,i=a.password;t.setState({loading:!0}),Object(C.register)({name:r,email:o,password:i}).then(function(e){var t=e.id,a=e.token;localStorage.setItem("customerToken",a),localStorage.setItem("mcustomer",t),n.updateToken(),Object(c.navigate)("/myaccount/")}).catch(function(e){console.log(e),t.setState({loading:!1,errors:e.errors||e})})},t._handleChange=function(e){var n,a=e.target,r=a.name,o=a.value;return t.setState(((n={})[r]=o,n))},t.handleErrors=function(e){return!Array.isArray(e)&&!e.length>0?i.a.createElement(l.a,{error:!0,header:"Sorry",content:"Cannot register at this time."}):e.map(function(e,t){return i.a.createElement(l.a,{error:!0,header:e.title,content:e.detail,key:t})})},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.loading,a=t.errors;return i.a.createElement(E.a,{location:this.props.location},i.a.createElement(g.a.Consumer,null,function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{title:"Register"}),i.a.createElement(u.a,{as:"h1"},"Créer un compte"),i.a.createElement(s.a,{onSubmit:function(n){return e._handleSubmit(n,t)},loading:n,error:!!a},a?e.handleErrors(a):null,i.a.createElement(m.a,null,i.a.createElement(s.a.Field,null,i.a.createElement("label",{htmlFor:"name"},"Nom"),i.a.createElement(d.a,{id:"name",fluid:!0,name:"name",autoFocus:!0,required:!0,onChange:function(t){return e._handleChange(t)}})),i.a.createElement(s.a.Field,null,i.a.createElement("label",{htmlFor:"email"},"Adresse Email"),i.a.createElement(d.a,{id:"email",fluid:!0,name:"email",type:"email",required:!0,onChange:function(t){return e._handleChange(t)}})),i.a.createElement(s.a.Field,null,i.a.createElement("label",{htmlFor:"password"},"Mot de passe"),i.a.createElement(d.a,{id:"password",fluid:!0,name:"password",type:"password",required:!0,onChange:function(t){return e._handleChange(t)}})),i.a.createElement(p.a,{type:"submit",color:"black"},"S'enregistrer"))))}))},t}(i.a.Component)},157:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},160:function(e,t,n){var a;e.exports=(a=n(171))&&a.default||a},168:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(790),i=n(188),c=n.n(i),l=n(170),u=n.n(l),s=n(152),m=n.n(s),d=(n(189),n(6)),p=n.n(d),f=n(158),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).updateToken=function(){return n.setState({token:localStorage.getItem("customerToken")})},n.updateVerified=function(e){return n.setState({userVerified:e})},n.state={token:null,verified:null,updateToken:n.updateToken,updateVerified:n.updateVerified},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=localStorage.getItem("customerToken");this.setState({token:e})},n.render=function(){var e=this.state,t=e.token,n=e.updateToken,a=e.verified,o=e.updateVerified;return r.a.createElement(f.a.Provider,{value:{verified:a,token:t,updateToken:n,updateVerified:o}},this.props.children)},t}(a.Component),g=(n(28),n(187),n(30),n(190),n(157)),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).addToCart=function(e,t){var a=Number(n.state.cartCount)+Number(e);return localStorage.setItem("mdata",JSON.stringify({cartId:t,cartCount:a})),n.setState(function(){return{cartCount:a}})},n.updateCartCount=function(e,t){localStorage.setItem("mdata",JSON.stringify({cartId:t,cartCount:e})),n.setState(function(){return{cartCount:e}})},n.state={cartId:null,cartCount:0,addToCart:n.addToCart,updateCartCount:n.updateCartCount},n}p()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=localStorage.getItem("mcart"),t=localStorage.getItem("mdata");if(e&&!t||!e){var n="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,function(){return(16*Math.random()|0).toString(16)});localStorage.setItem("mcart",n),localStorage.setItem("mdata",JSON.stringify({cartId:n,cartCount:0})),this.setState({cartId:n})}else{var a=localStorage.getItem("mdata"),r=JSON.parse(a);this.setState({cartCount:r.cartCount||0})}},n.render=function(){return r.a.createElement(g.a.Provider,{value:Object.assign({},this.state)},this.props.children)},t}(a.Component),C=n(802),v=n(796),x=n(346),y=(n(166),function(e){var t=e.cartCount,n=e.name;return r.a.createElement("div",null,r.a.createElement(x.a,{name:"cart"})," "+n+" ",t?t>9?r.a.createElement("span",{style:{fontSize:"smaller"}},"(9",r.a.createElement("sup",null,"+"),")"):"("+t+")":"(0)")}),b=n(780),w=n(172),k=n.n(w),I=function(){return r.a.createElement(b.a,{size:"mini",src:k.a,style:{marginRight:"1.5em"},alt:"I love Lamp"})},S=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={activeItem:t.props.location.pathname},t}p()(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){var t=e.location.pathname;t!==this.props.location.pathname&&this.setState({activeItem:t})},n.render=function(){var e=this.state.activeItem,t=this.props,n=t.token,a=t.cartCount;return r.a.createElement(v.a,{size:"huge",borderless:!0,pointing:!0},r.a.createElement(o.a,{text:!0},r.a.createElement(v.a.Item,{active:e===Object(s.withPrefix)("/"),as:m.a,to:"/",header:!0},r.a.createElement(I,null),"Zazou !"),n?r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/myaccount/",active:e===Object(s.withPrefix)("/myaccount/")},r.a.createElement(x.a,{name:"user"}),"Mon compte"),r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:e===Object(s.withPrefix)("/cart/")},r.a.createElement(y,{cartCount:a,name:"Panier"}))):r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/register/",active:e===Object(s.withPrefix)("/register/")},"S'inscrire"),r.a.createElement(v.a.Item,{as:m.a,to:"/login/",active:e===Object(s.withPrefix)("/login/")},"Se connecter"),r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:e===Object(s.withPrefix)("/cart/")},r.a.createElement(y,{cartCount:a,name:"Panier"})))))},t}(a.Component),O=n(795),P=n(798),T=n(789),j=n(800),_=n(185),M=Object(_.a)(m.a).withConfig({displayName:"MobileMenu__StyledLink",componentId:"sc-45ix4h-0"})(["font-weight:bold;text-align:center;font-size:2em;&:hover{text-decoration:underline;}"]),F=Object(_.a)(O.a).withConfig({displayName:"MobileMenu__BurgerButton",componentId:"sc-45ix4h-1"})(["&&&{font-size:1rem;padding:0.785em 1.5em;box-shadow:0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,0.15) inset;}"]),z=Object(_.a)(F).withConfig({displayName:"MobileMenu__CloseButton",componentId:"sc-45ix4h-2"})(["&&&{position:absolute;top:-4em;right:0em;padding:0.5em;font-size:1.5em;width:2em;height:2em;}"]),q=Object(_.a)(P.a).withConfig({displayName:"MobileMenu__StyledSegment",componentId:"sc-45ix4h-3"})(["&&&{position:fixed;top:0%;left:0vw;z-index:1000;width:100vw;height:110vh;}"]),N=_.a.div.withConfig({displayName:"MobileMenu__StyledContainer",componentId:"sc-45ix4h-4"})(["&&&{margin-top:6em;text-align:center;position:relative;}"]),R=Object(_.a)(T.a).withConfig({displayName:"MobileMenu__StyledDivider",componentId:"sc-45ix4h-5"})(["&&&{margin:2em;}"]),A=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={open:!1,activeItem:t.props.location.pathname},t.handleClick=function(){return t.setState({open:!t.state.open})},t.handleClose=function(){return t.setState({open:!1})},t}p()(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){var t=e.location.pathname;t!==this.props.location.pathname&&this.setState({activeItem:t})},n.render=function(){var e=this.state,t=e.open,n=e.activeItem,a=this.props,i=a.token,c=a.cartCount;return r.a.createElement(v.a,{size:"huge",borderless:!0,pointing:!0},r.a.createElement(o.a,{text:!0},r.a.createElement(v.a.Item,{as:m.a,to:"/",header:!0,active:n===Object(s.withPrefix)("/")},r.a.createElement(I,null),"Zazou"),r.a.createElement(v.a.Menu,{position:"right"},r.a.createElement(v.a.Item,{as:m.a,to:"/cart/",active:n===Object(s.withPrefix)("/cart/")},r.a.createElement(y,{cartCount:c,name:""})),r.a.createElement(v.a.Item,{position:"right"},r.a.createElement(F,{basic:!0,onClick:this.handleClick,"aria-label":"Open Navigation Menu",autoFocus:!0},r.a.createElement(x.a,{fitted:!0,name:"bars"})))),r.a.createElement(j.a,{closeOnEscape:!0,onClose:this.handleClose,open:t},r.a.createElement(q,{className:!0,role:"dialog","aria-label":"Navigation Menu"},r.a.createElement(N,null,r.a.createElement(z,{"aria-label":"Close Navigation",basic:!0,circular:!0,onClick:this.handleClose,autoFocus:!0},"X"),r.a.createElement(M,{to:"/",onClick:this.handleClose},"Boutique"),r.a.createElement(R,null),r.a.createElement(M,{to:"/cart/",onClick:this.handleClose},"Panier "+(c?"("+c+")":"")),r.a.createElement(R,null),i?r.a.createElement(M,{to:"/myaccount/",onClick:this.handleClose},"Mon compte"):[r.a.createElement(M,{to:"/register/",onClick:this.handleClose,key:1},"S'inscrire"),r.a.createElement(R,{key:2}),r.a.createElement(M,{to:"/login/",onClick:this.handleClose,key:3},"Se connecter")])))))},t}(a.Component),B=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(f.a.Consumer,null,function(t){return r.a.createElement(g.a.Consumer,null,function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{maxWidth:C.a.onlyMobile.maxWidth},r.a.createElement(A,{location:e.props.location,token:t.token,cartCount:n.cartCount})),r.a.createElement(C.a,{minWidth:C.a.onlyTablet.minWidth},r.a.createElement(S,{location:e.props.location,token:t.token,cartCount:n.cartCount})))})})},t}(r.a.PureComponent),W=n(799),G=n(797),U=n(794),V=function(){return r.a.createElement(P.a,{vertical:!0,style:{padding:"4em 0em",marginTop:"3em",borderTop:"1px solid #f2f2f2"}},r.a.createElement(o.a,{text:!0},r.a.createElement(W.a,{stackable:!0},r.a.createElement(W.a.Row,null,r.a.createElement(W.a.Column,{width:4},r.a.createElement(G.a,{as:"h4",content:"À propos"}),r.a.createElement(U.a,null,r.a.createElement(U.a.Item,{as:m.a,to:"/privacy/"},"Données personnelles"),r.a.createElement(U.a.Item,{as:m.a,to:"/terms/"},"Conditions"))),r.a.createElement(W.a.Column,{width:5},r.a.createElement(G.a,{as:"h4",content:"Navigation"}),r.a.createElement(U.a,null,r.a.createElement(U.a.Item,{as:m.a,to:"/"},"Boutique"))),r.a.createElement(W.a.Column,{width:7},r.a.createElement(G.a,{as:"h4"},"Réseaux"),r.a.createElement("p",null,"Vous aimez mes bijoux ? Faites le moi savoir, et criez le autour de vous !"),r.a.createElement(U.a,{horizontal:!0},r.a.createElement(U.a.Item,{as:m.a,to:"/"},r.a.createElement(x.a,{name:"instagram"})),r.a.createElement(U.a.Item,{as:m.a,to:"/"},r.a.createElement(x.a,{name:"facebook"})),r.a.createElement(U.a.Item,{as:m.a,to:"/"},r.a.createElement(x.a,{name:"mail"}))))))))};t.a=function(e){var t=e.children,n=e.location;return r.a.createElement(h,null,r.a.createElement(E,null,r.a.createElement(u.a,{meta:[{name:"description",content:"Boutique en ligne Zazou-Paris de bijoux personnalisés faits à la main"},{name:"keywords",content:"bijoux, zazou, mode"},{name:"msapplication-TileColor",content:"#da532c"},{name:"theme-color",content:"#ffffff"}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(s.withPrefix)("/favicons/apple-touch-icon.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(s.withPrefix)("/favicons/favicon-32x32.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(s.withPrefix)("/favicons/favicon-16x16.png")})),r.a.createElement(c.a,{upTolerance:10,downTolerance:10,style:{zIndex:"20",height:"6.5em"}},r.a.createElement(B,{location:n})),r.a.createElement(o.a,{text:!0},t),r.a.createElement(V,null)))}},171:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(48),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},172:function(e,t,n){e.exports=n.p+"static/logo-carre-2-8bccac38e7f1cfcb4a58878f146346b3.png"},174:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(152),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(160),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},181:function(e,t,n){"use strict";n.r(t),n.d(t,"getProducts",function(){return i}),n.d(t,"getProductById",function(){return c}),n.d(t,"addToCart",function(){return l}),n.d(t,"getCartItems",function(){return u}),n.d(t,"removeFromCart",function(){return s}),n.d(t,"deleteCart",function(){return m}),n.d(t,"checkoutCart",function(){return d}),n.d(t,"payForOrder",function(){return p}),n.d(t,"register",function(){return h}),n.d(t,"login",function(){return f}),n.d(t,"getOrders",function(){return g}),n.d(t,"getOrderItems",function(){return E}),n.d(t,"getCustomer",function(){return C}),n.d(t,"findCustomerByEmail",function(){return v}),n.d(t,"updateCustomer",function(){return x}),n.d(t,"findCustomerByResetToken",function(){return y}),n.d(t,"getFiles",function(){return b});n(166),n(28);var a=n(180),r=n.n(a),o=(n(198),(0,n(205).gateway)({client_id:"xdIRZLJFUU3T8LYrlFfhcm0QOlgn3UhPhy2swxrD79",client_secret:"YPkgK26eGb5qQE59yuHuBxUUt11H4V3Ob1Lyh9oXhZ",grant_type:"client_credentials"})),i=function(){return o.Products.With("main_image").All()},c=function(e){return o.Products.With("main_image").Get(e)},l=function(e,t,n){return o.Cart(e).AddProduct(t,n)},u=function(e){return o.Cart(e).Items()},s=function(e,t){return o.Cart(t).RemoveItem(e)},m=function(e){return o.Cart(e).Delete()},d=function(e,t,n,a){return o.Cart(e).Checkout(t,n,a)},p=function(e,t,n){return o.Orders.Payment(e,{gateway:"stripe",method:"purchase",payment:t.id,options:{receipt_email:n}})},f=function(e){var t=e.email,n=e.password;return o.Customers.Token(t,n).then(function(e){var t=e.data;return{id:t.customer_id,token:t.token}})},h=function(e){var t=e.email,n=e.password,a=r()(e,["email","password"]);return o.Customers.Create(Object.assign({email:t,password:n,type:"customer"},a)).then(function(e){var a=e.data,r=a.name,o=a.id;return f({email:t,password:n}).then(function(e){var n=e.token;return{id:o,name:r,email:t,token:n}})})},g=function(e){return o.Orders.With("items").All(e)},E=function(e){return o.Orders.Items(e)},C=function(e){return o.Customers.Get(e)},v=function(e){return o.Customers.Filter({eq:{email:e}}).All()},x=function(e,t){return o.Customers.Update(e,t)},y=function(e){return o.Customers.Filter({eq:{resetPasswordToken:e}}).All().then(function(t){for(var n=0;n<t.data.length;n++)if(t.data[n].resetPasswordToken==e)return t.data[n]})},b=function(e){return o.Files.Get(e)}},206:function(e,t){},207:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-register-js-627aeb850cd1ee2e5cb2.js.map