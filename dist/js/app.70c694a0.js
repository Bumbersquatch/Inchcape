(function(e){function t(t){for(var r,l,i=t[0],o=t[1],c=t[2],m=0,v=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&v.push(s[l][0]),s[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},s={app:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"39dd":function(e,t,a){e.exports=a.p+"img/inchcapelogo.923c2b0f.png"},"465e":function(e,t,a){"use strict";a("556b")},"556b":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=a("ecee"),n=a("c074"),l=a("ad3d");s["c"].add(n["a"]),r["a"].component("font-awesome-icon",l["a"]);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bg-grey min-h-screen",attrs:{id:"app"}},[a("Index")],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"min-h-screen relative"},[a("Header"),a("div",{staticClass:"container m-auto pb-20 px-6 min-h-full"},[a("h1",{staticClass:"text-3xl font-bold py-6 w-full"},[e._v("Audi A1 25 TFSI Technik 5dr")]),a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"w-full md:w-2/3 md:pr-6"},[a("ImageGallery"),a("Specs")],1),a("div",{staticClass:"w-full md:w-1/3 md:pl-6 mt-6 md:mt-0"},[a("div",{staticClass:"price bg-white w-full mb-6 p-6"},[a("Price")],1),a("div",{staticClass:"mt-6 bg-white p-6"},[a("Form")],1)])])]),a("Footer")],1)},u=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-charcoal text-4xl px-6 py-2"},[r("img",{staticClass:"logo",attrs:{alt:"Inchcape logo",src:a("39dd")}})])}],d={name:"Header"},p=d,f=(a("ff9a"),a("2877")),h=Object(f["a"])(p,m,v,!1,null,"7d98f64f",null),g=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.complete?a("div",{staticClass:"text-center"},[a("font-awesome-icon",{staticClass:"text-green text-4xl mb-2",attrs:{icon:"check-circle"}}),a("p",[e._v("Thanks "+e._s(e.firstname)+"!")]),a("p",[e._v("We have recieved your enquiry and someone will be in touch soon.")])],1):a("form",{attrs:{id:"form",action:"/something",method:"post",novalidate:"true"},on:{submit:e.sendForm}},[e.errors.length?a("p",{staticClass:"text-sm text-red"},[a("b",[e._v("Please correct the following errors:")]),a("ul",e._l(e.errors,(function(t){return a("li",{key:t,staticClass:"text-xs"},[e._v(e._s(t))])})),0)]):e._e(),a("p",[a("label",{attrs:{for:"name"}},[e._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],attrs:{type:"text",name:"firstname",id:"firstname"},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}})]),a("p",[a("label",{attrs:{for:"name"}},[e._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.lastname,expression:"lastname"}],attrs:{type:"text",name:"lastname",id:"lastname"},domProps:{value:e.lastname},on:{input:function(t){t.target.composing||(e.lastname=t.target.value)}}})]),a("p",[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("p",[a("label",{attrs:{for:"name"}},[e._v("Telephone")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",name:"phone",id:"phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("p",[a("label",{attrs:{for:"name"}},[e._v("Postcode")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.postcode,expression:"postcode"}],attrs:{type:"text",name:"postcode",id:"postcode"},domProps:{value:e.postcode},on:{input:function(t){t.target.composing||(e.postcode=t.target.value)}}})]),a("p",[a("button",{staticClass:"bg-green text-white p-2 w-full rounded text-sm mt-3",attrs:{type:"submit"}},[e.loading?[a("font-awesome-icon",{staticClass:"fa-spin",attrs:{icon:"cog"}})]:[e._v(" Submit ")]],2)]),e.serverError?a("p",{staticClass:"text-red text-xs"},[e._v(" There was a problem connecting to our servers. ")]):e._e()])])},x=[],b=(a("d3b7"),a("e9c4"),a("ac1f"),a("00b4"),{name:"Form",data:function(){return{errors:[],firstname:null,lastname:null,phone:null,email:null,postcode:null,complete:!1,loading:!1,serverError:!1}},methods:{sendForm:function(e){var t=this;this.loading||(e.preventDefault(),this.errors=[],this.serverError=!1,this.loading=!0,this.validateForm()?fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify({firstname:this.firstname,lastname:this.lastname,phone:this.phone,email:this.email,postcode:this.postcode}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){e&&(t.complete=!0),t.loading=!1})).catch((function(){t.serverError=!0,t.loading=!1})):this.loading=!1)},validateForm:function(){return this.firstname||this.errors.push("First Name required."),this.lastname||this.errors.push("Last Name required."),this.phone||this.errors.push("Telephone number required."),this.postcode||this.errors.push("Postcode required."),this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),!this.errors.length},validEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}}}),w=b,C=(a("c4e7"),Object(f["a"])(w,_,x,!1,null,null,null)),y=C.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"features-wrap"},[a("ul",{staticClass:"features"},[a("li",[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M18 8.312c0-.474-.371-.863-.825-.863h-.987l-.715-1.944c-.178-.483-.712-.994-1.189-1.136 0 0-1.234-.369-3.784-.369s-3.785.369-3.785.369c-.476.142-1.01.653-1.188 1.136L4.812 7.45h-.987c-.454 0-.825.389-.825.863s.371.862.825.862h.352l-.254.69a6.316 6.316 0 00-.323 1.819v4.077c0 .603.472 1.097 1.05 1.097.577 0 1.05-.494 1.05-1.097v-.628h9.6v.628c0 .603.473 1.097 1.05 1.097.578 0 1.05-.494 1.05-1.097v-4.077c0-.517-.145-1.336-.323-1.819l-.254-.69h.352c.454 0 .825-.388.825-.862zm-12.346.254l.842-2.39a.465.465 0 01.404-.294h7.2c.165 0 .347.132.404.294l.842 2.39c.057.162-.031.295-.196.295h-9.3c-.165 0-.253-.133-.196-.295zm-.029 3.9c-.456 0-.825-.386-.825-.861 0-.476.37-.863.825-.863.456 0 .825.387.825.863 0 .475-.37.862-.825.862zm9.75 0c-.456 0-.825-.385-.825-.861 0-.477.37-.863.825-.863.456 0 .825.386.825.863 0 .476-.37.862-.825.862z",fill:"currentColor","fill-rule":"evenodd"}})]),e._m(0)]),a("li",[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M14.974 7.013H17a1 1 0 011 1v4.26a1 1 0 01-.686.95l-.825.273a4.62 4.62 0 00-2.392 1.824l-.823 1.235a1 1 0 01-.833.445H8.708a1 1 0 01-.948-.683l-.548-1.639a1 1 0 00-.949-.682H4a1 1 0 01-1-1v-1.987a1 1 0 011-1h2.65a1 1 0 00.6-.2l3.465-2.596a1 1 0 01.6-.2h1.662V5H11.48a.5.5 0 01-.5-.5V3.5a.5.5 0 01.5-.5h4.986a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1.493v2.013zm.996 2.984a1 1 0 00-1-1h-2.99a1 1 0 000 2h2.99a1 1 0 001-1z",fill:"currentColor","fill-rule":"evenodd"}})]),e._m(1)]),a("li",[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M9.995 6c-4.637 0-8.497 3.535-8.99 8.026a.878.878 0 00.873.974H18.1a.9.9 0 00.896-.99c-.45-4.484-4.31-8.01-9-8.01zm1.817 6.96c-.322.64-.965 1.04-1.769 1.04-1.125 0-2.01-.88-2.01-2 0-.72.403-1.44 1.046-1.76L14.063 8l-2.251 4.96z",fill:"currentColor","fill-rule":"evenodd"}})]),e._m(2)]),a("li",[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{fill:"currentColor","fill-rule":"evenodd"}},[a("path",{attrs:{d:"M14.836 10.878L9.121 5.144c-.114-.079.137.018 0-.01v-3.53c0-.334-.241-.763-.766-.763a.795.795 0 00-.812.763v4.264l-4.616 4.648a3.15 3.15 0 00.02 4.486l2.038 2.012a3.207 3.207 0 002.258.985 3.126 3.126 0 002.258-.905l5.335-5.371a.627.627 0 000-.845zM17.348 14.81l-.088-.081c-1.034-1.165-1.62-1.75-1.755-1.753-.135-.003-.728.581-1.777 1.753a.17.17 0 01-.087.081v.041c-.879.994-.85 2.432.065 3.396a2.43 2.43 0 001.8.753 2.43 2.43 0 001.776-.753c.923-.959.96-2.397.088-3.396l-.022-.04z"}})])]),e._m(3)]),a("li",[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M17.778 6.728L15.49 4.48a.774.774 0 00-1.079 0 .74.74 0 000 1.06l2.065 2.028v5.682c0 .413-.342.75-.763.75a.758.758 0 01-.764-.75v-2.247a.758.758 0 00-.763-.75H12.95V2.75a.758.758 0 00-.764-.75h-8.66a.758.758 0 00-.763.75v12.748h-.456a.303.303 0 00-.307.3v.9c0 .166.135.302.307.302H13.409a.303.303 0 00.307-.301v-.9a.303.303 0 00-.307-.301h-.456v-3.746h.473v1.5c0 1.24 1.025 2.246 2.287 2.246S18 14.49 18 13.25V7.26a.722.722 0 00-.222-.532zM4.78 7.68V4.317A.31.31 0 015.088 4h5.488c.168 0 .306.141.306.317V7.68c0 .176-.135.32-.306.32H5.085a.314.314 0 01-.304-.32z",fill:"currentColor","fill-rule":"evenodd"}})]),e._m(4)]),a("li",[a("svg",{attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12.972 9.29V4.824c0-.722.556-1.323 1.27-1.323s1.28.603 1.258 1.323v5.805c0 .722-.556 1.323-1.271 1.323h-2.821v3.226c0 .722-.556 1.323-1.271 1.323-.708 0-1.271-.594-1.271-1.323v-3.226H7.042v3.226c0 .718-.567 1.323-1.271 1.323-.708 0-1.271-.594-1.271-1.323V4.823c0-.718.567-1.323 1.271-1.323.708 0 1.271.594 1.271 1.323V9.29H8.88V4.823c0-.722.556-1.323 1.27-1.323.709 0 1.272.594 1.272 1.323V9.29h1.55z",fill:"currentColor","fill-rule":"nonzero"}})]),e._m(5)])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"feature-key"},[e._v("Body Style")]),a("div",{staticClass:"feature-value"},[e._v("Hatchback")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"feature-key"},[e._v("Engine Size")]),a("div",{staticClass:"feature-value"},[e._v("1.0L")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"feature-key"},[e._v("Mileage")]),a("div",{staticClass:"feature-value"},[e._v("62,194 miles")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"feature-key"},[e._v("Colour")]),a("div",{staticClass:"feature-value"},[e._v("Mythos Black")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"feature-key"},[e._v("Fuel")]),a("div",{staticClass:"feature-value"},[e._v("Petrol")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"feature-key"},[e._v("Gearbox")]),a("div",{staticClass:"feature-value"},[e._v("Manual")])])}],O={name:"Specs"},P=O,$=(a("465e"),Object(f["a"])(P,E,j,!1,null,"0391d10d",null)),k=$.exports,z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"price text-sm"},[a("span",{staticClass:"text-2xl font-bold"},[e._v("£233.78")]),e._v(" per month ")]),a("div",{staticClass:"price text-sm pt-1 pb-2"},[e._v("£18,980.00 cash price")]),a("div",[a("a",{staticClass:"text-blue text-sm",attrs:{href:"#finance"}},[e._v("Adjust finance quote")])]),a("div",[a("div",{staticClass:"pill-wrap"},[a("div",{staticClass:"pill bg-orange text-white inline-block rounded-full px-2"},[e._v(" IN STOCK - AVAILABLE NOW ")])])])])}],F={name:"Price"},H=F,M=(a("bf03"),Object(f["a"])(H,z,S,!1,null,"c07e0f0a",null)),T=M.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white relative"},[r("img",{attrs:{alt:"Audi A1 25 TFSI Technik 5dr",src:a("acfc")}}),r("div",{staticClass:"absolute bottom-0 left-0"},[r("p",{staticClass:"text-xs text-gray p-2"},[e._v("Image for illustration purposes only")])])])}],A={name:"ImageGallery"},N=A,B=Object(f["a"])(N,I,V,!1,null,null,null),q=B.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"bg-charcoal text-4xl px-6 py-2 text-right items-center justify-end flex absolute bottom-0 w-full"},[r("img",{staticClass:"logo ",attrs:{alt:"Inchcape logo",src:a("39dd")}})])}],J={name:"Header"},W=J,Z=(a("6896"),Object(f["a"])(W,L,G,!1,null,"37f9b1e0",null)),D=Z.exports,K={name:"Index",components:{Header:g,Form:y,Specs:k,Price:T,ImageGallery:q,Footer:D}},U=K,Q=Object(f["a"])(U,c,u,!1,null,"e38a236e",null),R=Q.exports,X={name:"App",components:{Index:R}},Y=X,ee=Object(f["a"])(Y,i,o,!1,null,null,null),te=ee.exports;a("ba8c");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(te)}}).$mount("#app")},6896:function(e,t,a){"use strict";a("eca2")},"866c":function(e,t,a){},"86b4":function(e,t,a){},a483:function(e,t,a){},acfc:function(e,t,a){e.exports=a.p+"img/audi-a1.736154d6.jpg"},ba8c:function(e,t,a){},bf03:function(e,t,a){"use strict";a("a483")},c4e7:function(e,t,a){"use strict";a("86b4")},eca2:function(e,t,a){},ff9a:function(e,t,a){"use strict";a("866c")}});
//# sourceMappingURL=app.70c694a0.js.map