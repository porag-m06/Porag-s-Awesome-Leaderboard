"use strict";(self.webpackChunkporag_s_amazing_to_do_list=self.webpackChunkporag_s_amazing_to_do_list||[]).push([[412],{389:(n,e,r)=>{var t=r(379),o=r.n(t),s=r(795),a=r.n(s),i=r(569),A=r.n(i),c=r(565),l=r.n(c),p=r(216),d=r.n(p),u=r(589),h=r.n(u),f=r(426),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=A().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),o()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class g{constructor(n,e){this.name=n,this.score=e,this.scoreList=JSON.parse(localStorage.getItem("scores"))||[]}addScore=()=>{const{name:n}=this,{score:e}=this;this.scoreList.push({name:n,score:e}),localStorage.setItem("scores",JSON.stringify(this.scoreList))};showScores=()=>{const n=document.querySelector(".score-items");n.innerHTML="",n.innerHTML='<li Class="shade-m" ><span class="pname">Name</span><span class="pscore">| Score</span></li>';for(let e=0;e<this.scoreList.length;e+=1){const r=document.createElement("li");e%2&&(r.className="shade"),r.innerHTML=`<span class="pname">${this.scoreList[e].name}</span><span class="pscore">| ${this.scoreList[e].score}</span>`,n.appendChild(r)}};getStorage=()=>this.scoreList}const E=new g,C=document.querySelector(".form");E.getStorage().length&&E.showScores(),C.addEventListener("submit",(()=>{const n=document.getElementById("playername").value,e=document.getElementById("playerscore").value,r=new g(n,e);r.addScore(),r.showScores(),C.reset()}))},426:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(537),o=r.n(t),s=r(645),a=r.n(s)()(o());a.push([n.id,"* {\n  box-sizing: border-box;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbody {\n  font-family: monospace, sans-serif, serif;\n  overflow: hidden;\n  margin: 0;\n}\n\n.container {\n  flex-direction: column;\n  max-width: 1200px;\n  margin: auto;\n}\n\n.container h1 {\n  font-size: 80px;\n}\n\n.board {\n  align-items: flex-start;\n  gap: 65px;\n  padding: 5px;\n  margin: 5px;\n  width: 90%;\n}\n\n.showscore {\n  width: 40%;\n}\n\n.scorehead {\n  justify-content: space-between;\n}\n\n.scorelist ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.scorelist ul li {\n  border: 1px solid gray;\n  border-radius: 5px;\n  height: 25px;\n  margin: 7px 0;\n  padding: 0 3px;\n}\n\n.shade-m {\n  background-color: rgb(85, 85, 85);\n  color: white;\n}\n\n.shade {\n  background-color: rgb(151, 150, 150);\n  color: white;\n}\n\n.scorelist span {\n  display: inline-block;\n  height: 100%;\n}\n\n.pname {\n  width: 80%;\n}\n\n.addscore {\n  width: 40%;\n}\n\n.form {\n  flex-direction: column;\n}\n\n.form input {\n  width: 96%;\n  height: 25px;\n  margin: 5px;\n}\n\n.form button {\n  height: 25px;\n  margin: 3px 5px 5px 82.5%;\n  text-align: right;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;AACnB",sourcesContent:["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nbody {\r\n  font-family: monospace, sans-serif, serif;\r\n  overflow: hidden;\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  flex-direction: column;\r\n  max-width: 1200px;\r\n  margin: auto;\r\n}\r\n\r\n.container h1 {\r\n  font-size: 80px;\r\n}\r\n\r\n.board {\r\n  align-items: flex-start;\r\n  gap: 65px;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  width: 90%;\r\n}\r\n\r\n.showscore {\r\n  width: 40%;\r\n}\r\n\r\n.scorehead {\r\n  justify-content: space-between;\r\n}\r\n\r\n.scorelist ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n.scorelist ul li {\r\n  border: 1px solid gray;\r\n  border-radius: 5px;\r\n  height: 25px;\r\n  margin: 7px 0;\r\n  padding: 0 3px;\r\n}\r\n\r\n.shade-m {\r\n  background-color: rgb(85, 85, 85);\r\n  color: white;\r\n}\r\n\r\n.shade {\r\n  background-color: rgb(151, 150, 150);\r\n  color: white;\r\n}\r\n\r\n.scorelist span {\r\n  display: inline-block;\r\n  height: 100%;\r\n}\r\n\r\n.pname {\r\n  width: 80%;\r\n}\r\n\r\n.addscore {\r\n  width: 40%;\r\n}\r\n\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form input {\r\n  width: 96%;\r\n  height: 25px;\r\n  margin: 5px;\r\n}\r\n\r\n.form button {\r\n  height: 25px;\r\n  margin: 3px 5px 5px 82.5%;\r\n  text-align: right;\r\n}\r\n"],sourceRoot:""}]);const i=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var i=0;i<this.length;i++){var A=this[i][0];null!=A&&(a[A]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),s="/*# ".concat(o," */");return[e].concat([s]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var s={},a=[],i=0;i<n.length;i++){var A=n[i],c=t.base?A[0]+t.base:A[0],l=s[c]||0,p="".concat(c," ").concat(l);s[c]=l+1;var d=r(p),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)e[d].references++,e[d].updater(u);else{var h=o(u,t);t.byIndex=i,e.splice(i,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var s=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<s.length;a++){var i=r(s[a]);e[i].references--}for(var A=t(n,o),c=0;c<s.length;c++){var l=r(s[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}s=A}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},n=>{n(n.s=389)}]);
//# sourceMappingURL=mymain.bundle.js.map