(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{15:function(t,e,r){},20:function(t,e,r){t.exports=r(30)},30:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),c=r(9),o=r(10),i="ADD",l="OUT",u=r(4),p=r(5),s=r(7),d=r(6),h=r(8),b=(r(15),function(t){function e(){var t,r;Object(u.a)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).addToCart=function(t){t.inventory>0&&r.props.addtocart(t)},r}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.products,r=e.map((function(r,n){return a.a.createElement("ul",{key:n},a.a.createElement("li",null,r.title," - $ ",r.price," \xd7 ",r.inventory),a.a.createElement("button",{className:0!==r.inventory?"":"style",onClick:t.addToCart.bind(t,e[n])},"Add to cart"))}));return a.a.createElement("div",null,a.a.createElement("h3",null,"Products"),r)}}]),e}(n.Component)),f=function(t){function e(){var t,r;Object(u.a)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(s.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).checkout=function(){r.props.checkout()},r}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){for(var t=this.props.cart,e=t.map((function(t,e){return a.a.createElement("ul",{key:e},a.a.createElement("li",null,t.title," - $ ",t.price," \xd7 ",t.inventory," = $ ",(t.price*t.inventory).toFixed(2)))})),r=0,n=0;t.length>n;n++)r+=t[n].price*t[n].inventory*1;return 0===t.length?a.a.createElement("div",null,a.a.createElement("h3",null,"Your Cart"),a.a.createElement("p",null,"Please add some products to cart."),a.a.createElement("p",null," Total : $ 0.00"),a.a.createElement("button",{className:"style"},"Checkout")):a.a.createElement("div",null,a.a.createElement("h3",null,"Your Cart"),e,a.a.createElement("p",null," Total : $ ",r.toFixed(2)),a.a.createElement("button",{onClick:this.checkout},"Checkout"))}}]),e}(n.Component),v=function(t){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Shopping Cart Example"),a.a.createElement("hr",null),a.a.createElement(b,{products:this.props.products,addtocart:this.props.addtocart}),a.a.createElement("hr",null),a.a.createElement(f,{cart:this.props.cart,checkout:this.props.checkout}))}}]),e}(n.Component),y=Object(o.b)((function(t){return{products:t.products,cart:t.cart}}),{addtocart:function(t){return{type:i,data:t}},checkout:function(){return{type:l,data:[]}}})(v),O=r(2),m=r(17),j=r(18),E=r(19);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var k=[{id:1,title:"iphone8",price:4999,inventory:10},{id:2,title:"iphoneX",price:5999.9,inventory:15},{id:3,title:"iphone 11",price:6999.8,inventory:12}];var w=[];var C=Object(O.combineReducers)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:var r=JSON.parse(JSON.stringify(t));return r.map((function(t){return t.id===e.data.id&&t.inventory>0?t.inventory--:t})),r;default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:var r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(E.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e.data,{},{inventory:1}),n=JSON.parse(JSON.stringify(t));if(0!==t){for(var a=0;n.length>a;a++)if(n[a].id===r.id)return n[a].inventory++,n;return n.concat(r)}return t.concat(r);case l:return e.data;default:return t}}}),P=Object(O.createStore)(C,Object(j.composeWithDevTools)(Object(O.applyMiddleware)(m.a)));Object(c.render)(a.a.createElement(o.a,{store:P},a.a.createElement(y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1969cd9.chunk.js.map