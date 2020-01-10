(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],d=0,g=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&g.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(g.length)g.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dotsgame/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"3eb4":function(t,e,n){},"44ca":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Welcome to Your Vue.js App"}}),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t._v(" Made with "),r("img",{staticStyle:{"margin-left":"12px",width:"100%","max-width":"20px"},attrs:{alt:"Vue logo",src:n("cf05")}})])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("game-settings"),t.getWinner?n("game-winner"):t._e(),n("game-fields")],1),n("div",{staticClass:"col-sm"},[n("game-winners")],1)])},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm"},[n("div",{class:["dropdown",{"no-event":t.getGameStarted}]},[n("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.getChosenSetting.complexety||"Pick game mode")+" ")]),n("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.getSettings,(function(e,r){return n("a",{key:r,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(n){return t.choseSetting(e,r)}}},[t._v(t._s(r))])})),0)])]),n("div",{staticClass:"col-sm"},[n("div",{staticClass:"input-group flex-nowrap"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.playerName,expression:"playerName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Player name","aria-label":"Username","aria-describedby":"addon-wrapping"},domProps:{value:t.playerName},on:{input:function(e){e.target.composing||(t.playerName=e.target.value)}}})])]),n("div",{staticClass:"col-sm"},[n("button",{staticClass:"btn  btn-secondary",on:{click:function(e){return t.startPlay()}}},[t._v(" "+t._s(!t.getGameStarted&&t.getWinner?"Play again":"Play")+" ")])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"addon-wrapping"}},[t._v("#")])])}],l=(n("b0c0"),{name:"GameSettings",props:{msg:String},data:function(){return{input:""}},computed:{getSettings:function(){return this.$store.getters.getGameSettings},getChosenSetting:function(){return this.$store.getters.getChosenSetting},playerName:{get:function(){return this.$store.state.player.name},set:function(t){this.$store.commit("UPDATE_PLAYER_NAME",t)}},getGameStarted:function(){return this.$store.getters.getGameStarted},getWinner:function(){return this.$store.getters.getWinner}},methods:{choseSetting:function(t,e){var n={};n.complexety=e,n.settings=t,this.$store.dispatch("startGame",n)},startPlay:function(){this.getChosenSetting.settings?this.playerName?this.getGameStarted||this.$store.dispatch("fillGameFields"):alert("Enter your name"):alert("Chose game mode")}}}),d=l,g=(n("b4d3"),n("2877")),m=Object(g["a"])(d,c,u,!1,null,"8044cdf4",null),p=m.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"100px",width:"50%",margin:"0 auto"}},[t.getFields?n("div",{staticStyle:{display:"flex","flex-flow":"row wrap","border-top":"1px solid #cccccc","border-right":"1px solid #cccccc"}},t._l(t.getFields,(function(e){return n("div",{key:e.id,class:{active:e.status==t.getStatus.active,aipoint:e.status==t.getStatus.ai,playerpoint:e.status==t.getStatus.player},style:"padding-bottom:calc(100% / "+t.getChosenSetting.settings.field+";\n                     border-bottom:1px solid #cccccc; border-left:1px solid #cccccc; ; width:calc(100% / "+t.getChosenSetting.settings.field+")",attrs:{id:"id-"+e.id},on:{click:function(n){t.preventClick(e)&&t.chooseBox()}}})})),0):t._e()])},h=[],b=(n("a4d3"),n("4de4"),n("4160"),n("a434"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),v=n("ade3"),y=n("2f62"),S=n("bc3a"),_=n.n(S);function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}r["a"].use(y["a"]);var x="https://starnavi-frontend-test-task.herokuapp.com/game-settings",G="https://starnavi-frontend-test-task.herokuapp.com/winners",O={default:0,active:1,player:2,ai:4},P=function(){var t=new Date,e=["January","February","March","April","May","June","July","August","September","October","November","December"];return t.getHours()+":"+t.getMinutes()+"; "+t.getDate()+" "+e[t.getMonth()]+" "+t.getFullYear()},N=new y["a"].Store({state:{gameSetting:null,chosenSetting:{complexety:"",settings:null},gameStarted:!1,gameFields:null,gameRandomNums:[],gameRandomUnit:null,totalScore:0,player:{name:null,score:null,date:null},computer:{name:"Computer AI",score:null,date:null},winner:null,winners:null},actions:{updateGameSettings:function(t){var e=t.commit;_.a.get(x).then((function(t){e("UPDATE_GAME_SETTINGS",t.data)}))},updateGameWinners:function(t){var e=t.commit,n=t.getters;n.getWinner?_.a.post(G,w({},n.getWinner)).then((function(t){e("UPDATE_GAME_WINNERS",t.data)})):_.a.get(G).then((function(t){e("UPDATE_GAME_WINNERS",t.data)}))},startGame:function(t,e){var n=t.commit;n("UPDATE_CHOSEN_SETTING",e),n("GENERATE_GAME_FIELDS")},fillGameFields:function(t){var e=t.commit,n=t.getters,r=t.dispatch;!n.getGameStarted&&n.getWinner&&e("GENERATE_GAME_FIELDS");var a=function(t){return new Promise((function(e){return setTimeout(e,t)}))};function i(t,e){return s.apply(this,arguments)}function s(){return s=Object(b["a"])(regeneratorRuntime.mark((function t(e,a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=0;case 1:if(!(i<e)){t.next=10;break}return t.next=4,a();case 4:if(!n.getWinner){t.next=7;break}return r("updateGameWinners"),t.abrupt("break",10);case 7:i++,t.next=1;break;case 10:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}i(n.getFields.length,Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("FILL_GAME_FIELDS"),t.next=3,a(n.getChosenSetting.settings.delay);case 3:if(n.getFields[n.getRandomUnit].status===O.player){t.next=7;break}return t.next=6,e("COMPUTER_GET_POINT");case 6:e("CALCULATE_WINNER");case 7:case"end":return t.stop()}}),t)}))))},playerGetPoint:function(t){var e=t.commit;e("PLAYER_GET_POINT"),e("CALCULATE_WINNER")}},mutations:{UPDATE_GAME_SETTINGS:function(t,e){t.gameSetting=e},UPDATE_GAME_WINNERS:function(t,e){t.winners=e},UPDATE_CHOSEN_SETTING:function(t,e){t.chosenSetting=e,t.totalScore=t.chosenSetting.settings.field*t.chosenSetting.settings.field},UPDATE_PLAYER_NAME:function(t,e){t.player.name=e},GENERATE_GAME_FIELDS:function(t){t.gameFields=[];for(var e=t.chosenSetting.settings.field*t.chosenSetting.settings.field,n=0;n<e;n++)t.gameFields.push({id:n,status:O.default}),t.gameRandomNums.push(n)},FILL_GAME_FIELDS:function(t){t.winner=null,t.gameStarted=!0;var e=Math.floor(Math.random()*t.gameRandomNums.length);t.gameRandomUnit=t.gameRandomNums.splice(e,1),t.gameFields[t.gameRandomUnit].status=O.active},COMPUTER_GET_POINT:function(t){t.gameFields[t.gameRandomUnit].status=O.ai,t.computer.score++},PLAYER_GET_POINT:function(t){t.gameFields[t.gameRandomUnit].status=O.player,t.player.score++},CALCULATE_WINNER:function(t){var e=Math.round(50*t.totalScore/100),n=function(e){t.winner={},t.winner.date=P(),t.winner.winner=e,t.player.score=0,t.computer.score=0,t.gameStarted=!1};t.computer.score>=e&&n(t.computer.name),t.player.score>=e&&n(t.player.name)}},getters:{getGameSettings:function(t){return t.gameSetting},getChosenSetting:function(t){return t.chosenSetting},getGameStarted:function(t){return t.gameStarted},getFields:function(t){return t.gameFields},getRandomNums:function(t){return t.gameRandomNums},getRandomUnit:function(t){return t.gameRandomUnit},getWinner:function(t){return t.winner},getWinners:function(t){return t.winners}}}),C={name:"GameFields",props:{msg:String},data:function(){return{interval:null,chunks:[]}},computed:{getStatus:function(){return O},getFields:function(){return this.$store.getters.getFields},getRandomNums:function(){return this.$store.getters.getRandomNums},getRandomUnit:function(){return this.$store.getters.getRandomUnit},getChosenSetting:function(){return this.$store.getters.getChosenSetting}},methods:{preventClick:function(t){return this.getFields[this.getRandomUnit].id==t.id&&this.getFields[this.getRandomUnit].status==O.active},chooseBox:function(){this.$store.dispatch("playerGetPoint")}}},R=C,A=(n("c105"),Object(g["a"])(R,f,h,!1,null,"412b0f8d",null)),T=A.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"lead text-center",staticStyle:{position:"absolute",width:"100%",left:"50%","margin-top":"40px","max-width":"280px","margin-left":"-140px"}},[t._v(t._s(t.getWinner.winner)+" won!")])])},j=[],F={name:"GameWinner",props:{msg:String},data:function(){return{input:""}},computed:{getWinner:function(){return this.$store.getters.getWinner}},methods:{}},M=F,U=(n("bd99"),Object(g["a"])(M,W,j,!1,null,"0ff3c44d",null)),$=U.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Leader Board")]),n("table",{staticClass:"table"},[n("tbody",t._l(t.getWinners,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.winner))]),n("td",[t._v(t._s(e.date))])])})),0)])])},I=[],D={name:"GameWinners",props:{msg:String},data:function(){return{input:""}},computed:{getWinners:function(){return this.$store.getters.getWinners}},methods:{}},L=D,H=(n("8b1e"),Object(g["a"])(L,k,I,!1,null,"7135d668",null)),Y=H.exports,B={name:"Home",components:{GameSettings:p,GameFields:T,GameWinner:$,GameWinners:Y},props:{msg:String},data:function(){return{seed:null}},computed:{getWinner:function(){return this.$store.getters.getWinner}}},J=B,V=(n("f638"),Object(g["a"])(J,s,o,!1,null,"e94e34fa",null)),q=V.exports,z={name:"app",components:{Home:q},created:function(){this.$store.dispatch("updateGameSettings"),this.$store.dispatch("updateGameWinners")}},K=z,Q=(n("034f"),Object(g["a"])(K,a,i,!1,null,null,null)),X=Q.exports;n("4989"),n("ab8b");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(X)},store:N}).$mount("#app")},"85ec":function(t,e,n){},"8b1e":function(t,e,n){"use strict";var r=n("44ca"),a=n.n(r);a.a},b1c9:function(t,e,n){},b4d3:function(t,e,n){"use strict";var r=n("3eb4"),a=n.n(r);a.a},bd99:function(t,e,n){"use strict";var r=n("e7bb"),a=n.n(r);a.a},c105:function(t,e,n){"use strict";var r=n("daef"),a=n.n(r);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},daef:function(t,e,n){},e7bb:function(t,e,n){},f638:function(t,e,n){"use strict";var r=n("b1c9"),a=n.n(r);a.a}});
//# sourceMappingURL=app.7ddd8b1e.js.map