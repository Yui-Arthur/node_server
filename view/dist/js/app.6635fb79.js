(function(){"use strict";var t={8518:function(t,e,a){var s=a(144),i=a(998),n=a(3059),o=function(){var t=this,e=t._self._c;return e(i.Z,[e(n.Z,[e("router-view",{staticClass:"overflow-y-auto absolute"})],1)],1)},r=[],l=a(757),c=a(4562),d=a(4324),u=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{app:"",grow:"",color:t.color},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[e(c.Z,{attrs:{color:"white",value:"home",height:"100%",to:{name:"homeView"}}},[e("span",[t._v("Home")]),e(d.Z,[t._v("mdi-home")])],1),e(c.Z,{attrs:{color:"white",value:"plant",height:"100%",to:{name:"plantView"}}},[e("span",[t._v("Plants")]),e(d.Z,[t._v("mdi-sprout")])],1),e(c.Z,{attrs:{color:"white",value:"account",height:"100%",to:{name:"accountView"}}},[e("span",[t._v("Account")]),e(d.Z,[t._v("mdi-account")])],1)],1)},m=[],h={name:"BottomNav",data:()=>({value:"home",color:"green"})},p=h,f=a(1001),v=(0,f.Z)(p,u,m,!1,null,null,null),g=v.exports,_={name:"App",components:{BottomNav:g},data:()=>({})},w=_,Z=(0,f.Z)(w,o,r,!1,null,null,null),b=Z.exports,x=a(8345),y=a(9582),k=a(4886),C=a(6718),I=a(9223),S=a(4525),j=a(8721),O=a(8718),V=function(){var t=this,e=t._self._c;return e("Interface",[e("div",[e("div",{staticClass:"note-section background"},[e("div",{staticClass:"pa-3 d-flex justify-center align-center"},[e("h2",{staticClass:"ma-0"},[e("b",[t._v("Notifications")])]),e(O.Z)],1),e(C.Z,{attrs:{"max-width":"600"},scopedSlots:t._u([{key:"activator",fn:function({on:t,attrs:e}){}}]),model:{value:t.dialogShow,callback:function(e){t.dialogShow=e},expression:"dialogShow"}},[e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"600px",outlined:""}},[e(k.ZB),e(k.EB,{staticClass:"text-h6"},[e(d.Z,{staticClass:"mr-4",attrs:{color:t.showedItem.color}},[t._v(" "+t._s(t.showedItem.icon)+" ")]),t._v(" "+t._s(t.showedItem.title)+" ")],1),e(k.ZB,[e("div",{staticClass:"text-overline d-flex"},[t._v(" "+t._s(t.showedItem.date)+" "),e(O.Z),e(d.Z,[t._v("mdi-map-marker")]),t._v(" "+t._s(t.showedItem.block_id)+" - "+t._s(t.showedItem.small_block_id)+" ")],1),t._v(" "+t._s(t.showedItem.comment)+" ")]),e(k.h7,[e(O.Z),e(c.Z,{attrs:{color:"blue darken-1",text:"",to:{name:"SP"}}},[t._v(" 查看農場 ")]),e(c.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeItem}},[t._v(" 關閉 ")])],1)],1)],1),t._l(t.notes,(function(a,s){return e("div",[e(y.Z,{staticClass:"mx-auto",attrs:{flat:"","max-width":"600"},on:{click:function(e){return t.showItem(a)}}},[0!=s?e(I.Z,{staticClass:"ma-0"}):t._e(),e(S.Z,{attrs:{"three-line":""}},[e(d.Z,{staticClass:"mr-4",attrs:{color:a.color}},[t._v(" "+t._s(a.icon)+" ")]),e(j.km,[e("div",{staticClass:"text-overline"},[t._v(" "+t._s(a.date)+" ")]),e(j.V9,{staticClass:"text-h6"},[t._v(" "+t._s(a.title)+" ")]),e(j.oZ,[t._v(" "+t._s(a.comment)+" ")])],1)],1)],1)],1)}))],2)])])},P=[],$=function(){var t=this,e=t._self._c;return t.$store.state.isUserLoggedIn?e("div",[t._t("default",(function(){return[t._v(" No slot content defined. ")]})),e("BottomNav")],2):e("div",{staticClass:"d-flex text-center justify-center mt-2"},[e("p",[t._v("You have not login in yet, click the "),e("router-link",{attrs:{to:{name:"loginView"},color:"primary"}},[t._v(" log in url ")])],1)])},z=[],T={name:"Interface",components:{BottomNav:g},data(){return{}}},B=T,U=(0,f.Z)(B,$,z,!1,null,"33d405ee",null),L=U.exports,A={name:"HomeView",components:{Interface:L},data(){return{dialogAdd:!1,dialogShow:!1,editedIndex:-1,showedItem:{title:"",block_id:"",small_block_id:"",comment:""},editedItem:{title:"",block_id:"",small_block_id:"",comment:""},defaultItem:{title:"",block_id:"",small_block_id:"",comment:""},notes:[{color:"yellow darken-2",icon:"mdi-alert-octagram",title:"健康度低於標準",date:"Oct 4 5:43am",block_id:"第一溫室",small_block_id:"第二台攝影機",comment:"你的農場現在出現嚴重枯黃問題，現在的健康度為60%，溫度為28°C，濕度80%RH"},{color:"",icon:"mdi-chat",title:"歡迎使用Smart Farm",date:"Oct 1 5:43pm",block_id:"",small_block_id:"",comment:"歡迎您第一次使用這項服務，Smart Farm可以幫助你更有效率的管理你的農場，搜集農場各項數據！祝你有美好的一天"}],blocks:["first","second","third"],small_blocks:["west","east","south","north"],required:t=>!!t||"Required.",error:""}},methods:{showItem(t){this.editedIndex=this.notes.indexOf(t),this.showedItem=Object.assign({},t),this.dialogShow=!0},closeItem(){this.dialogShow=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})),this.error=""}}},H=A,E=(0,f.Z)(H,V,P,!1,null,"127d051a",null),N=E.exports,q=a(3305),R=a(626),F=a(5965),M=a(1475),Q=function(){var t=this,e=t._self._c;return e("Interface",[e("div",[e("div",{staticClass:"d-flex justify-center align-center background"},[e(y.Z,{attrs:{flat:""}},[e(F.Z,{attrs:{"background-color":"white","show-arrows":""}},[e(M.Z,{attrs:{color:"teal lighten-3"}}),t._l(t.blocks,(function(a){return e(R.Z,{attrs:{href:"#tab-"+a}},[t._v(" "+t._s(a)+" ")])}))],2)],1)],1),e("div",{staticClass:"background"},t._l(t.plants,(function(a,s){return e("div",[0!=s?e(I.Z,{staticClass:"ma-0"}):t._e(),e(y.Z,{staticClass:"mx-auto",attrs:{flat:"",to:{name:"SP"}}},[e(S.Z,{attrs:{"three-line":""}},[e(d.Z,{staticClass:"ma-1 mr-3",attrs:{size:"80",color:""}},[t._v(" mdi-sprout ")]),e(j.km,[e(j.V9,{staticClass:"text-body-1 font-weight-light mb-1"},[e("b",[t._v(t._s(a.name))])]),e("div",{staticClass:"d-flex justify-space-between align-center"},[e("div",[e("div",{staticClass:"text-subtitle-1 ma-0 font-weight-light"},[t._v(" 溫度："+t._s(a.temperature)+"% ")]),e("div",{staticClass:"text-subtitle-1 ma-0 font-weight-light"},[t._v(" 濕度："+t._s(a.humidity)+"% ")])]),e(q.Z,{staticClass:"text-center ma-2",attrs:{rotate:-90,size:55,width:4,value:a.health,color:a.health>85?"primary":"yellow darken-2"}},[t._v(" "+t._s(a.health)+"% ")])],1)],1)],1)],1)],1)})),0)])])},W=[],D={name:"PlantView",components:{Interface:L},data(){return{blockChoose:"",plants:[{name:"第一台攝影機",health:93,temperature:26,humidity:100},{name:"第二台攝影機",health:80,temperature:28,humidity:80},{name:"第三台攝影機",health:95,temperature:25.9,humidity:100},{name:"第四台攝影機",health:98,temperature:29.9,humidity:100},{name:"第五台攝影機",health:97,temperature:26.9,humidity:100}],blocks:["第一溫室","第二溫室","第三溫室"],small_blocks:["west","east","south","north"],required:t=>!!t||"Required.",error:""}},computed:{},methods:{showItem(t){this.editedIndex=this.notes.indexOf(t),this.editedItem=Object.assign({},t),this.dialogShow=!0},closeItem(){this.dialogShow=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})),this.error=""},close(){this.dialogAdd=!1,this.$nextTick((()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})),this.error=""},save(){}}},J=D,X=(0,f.Z)(J,Q,W,!1,null,"6637082e",null),Y=X.exports,G=a(266),K=a(523),tt=a(1713),et=a(7394),at=a(7423),st=a(4904),it=a(9159),nt=a(6072),ot=function(){var t=this,e=t._self._c;return e("Interface",[e("div",{staticClass:"background"},[e(S.Z,{attrs:{"two-line":""}},[e(K.Z,{attrs:{size:"80",color:"grey"}}),e(j.km,[e(j.V9,{staticClass:"text-h6"},[t._v(" "+t._s(t.user.name)+" ")]),e(j.oZ,[t._v(" "+t._s(t.user.permission)+" ")])],1)],1),e(tt.Z,{staticClass:"ma-2"},[e(G.Z,[e(c.Z,{attrs:{width:"100%",color:"grey lighten-1",dark:""}},[t._v(" Edit ")])],1),e(G.Z,[e(c.Z,{attrs:{width:"100%",color:"primary"},on:{click:t.logout}},[t._v(" Log Out ")])],1)],1)],1),e("div",{staticClass:"background"},[e("div",{staticClass:"pa-3 d-flex justify-center align-center"},[e("h2",{staticClass:"ma-0"},[e("b",[t._v("Manage Users")])]),e(O.Z)],1),t._l(t.users,(function(a,s){return e("div",[0!=s?e(I.Z,{staticClass:"ma-0"}):t._e(),e(y.Z,{staticClass:"mx-auto",attrs:{flat:""}},[e(S.Z,{attrs:{"two-line":""}},[e(K.Z,{attrs:{size:"80",color:"grey"}}),e(j.km,[e(j.V9,{staticClass:"text-h6"},[t._v(" "+t._s(a.name)+" ")]),e(j.oZ,[t._v(" "+t._s(a.permission)+" ")])],1)],1)],1)],1)}))],2),e("div",{staticClass:"background"},[e("div",{staticClass:"pa-3 d-flex justify-center align-center"},[e("h2",{staticClass:"ma-0"},[e("b",[t._v("Report Problem")])]),e(O.Z)],1),e("div",{staticClass:"pa-3 d-flex justify-center align-center"},[e(nt.Z,{attrs:{filled:"","auto-grow":"",label:"Input your problem",rows:"4","row-height":"30",value:t.problemcontent,shaped:""}})],1),e("div",{staticClass:"mr-3 mb-3 d-flex justify-center align-center"},[e(O.Z),e(c.Z,{attrs:{color:"primary",depressed:""}},[t._v(" Send ")])],1)]),e("div",{staticClass:"background"},[e("div",{staticClass:"pa-3 d-flex justify-center align-center"},[e("h2",{staticClass:"ma-0"},[e("b",[t._v("Change Farm")])]),e(O.Z)],1),e("div",{staticClass:"d-flex justify-center align-center"},[e(at.Z,{staticClass:"mx-auto",attrs:{flat:"",elevation:"0",width:"100%"}},[e(st.ZP,{attrs:{"show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.farms,(function(a,s){return e(it.Z,{key:s,scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:i}){return[e(y.Z,{staticClass:"ma-4",attrs:{color:s?"primary":"grey lighten-1",height:"150",width:"150"},on:{click:i}},[e(tt.Z,{staticClass:"ma-0 fill-height align-center justify-center"},[e("div",{staticClass:"text-center",attrs:{color:"white"}},[e("p",{staticClass:"mb-2 white--text font-weight-black",attrs:{color:"white"}},[t._v(" "+t._s(a.name)+" ")]),e(et.T0,[s?e(d.Z,{attrs:{color:"white",size:"48"},domProps:{textContent:t._s("mdi-share-circle")}}):t._e()],1)],1)])],1)]}}],null,!0)})})),1)],1)],1)])])},rt=[],lt=(a(7658),a(9669)),ct=a.n(lt),dt=()=>ct().create({baseURL:"http://114.33.145.3/api/",withCredentials:!0}),ut={register(t){return dt().post("user",t)},login(t){return dt().get(`user/${t.account}/login`,{headers:{password:t.password}})},getUserInfo(t){return dt().get(`user/${t.account}`,{headers:{Authorization:t.token}})}},mt={name:"AccountView",components:{Interface:L},data(){return{model:"",problemcontent:"",user:{name:"",permission:"admin"},users:[{name:"Jenny",permission:"admin"},{name:"Amy",permission:"worker"}],farms:[{name:"Happy farm 1"},{name:"Hoppy farm 2"}]}},created(){this.initialize()},methods:{async initialize(){try{const t=await ut.getUserInfo({token:this.$store.state.token,account:this.$store.state.user});this.user.name=t.data[0].name}catch(t){console.log(t)}},logout(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"loginView"})}}},ht=mt,pt=(0,f.Z)(ht,ot,rt,!1,null,"a0300508",null),ft=pt.exports,vt=a(5495),gt=function(){var t=this,e=t._self._c;return e("div",[e(y.Z,{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[e(vt.Z,{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),e(k.ZB,[e("div",{staticClass:"text-overline d-flex"},[t._v(" "+t._s(t.note.date)+" "),e(O.Z),e(d.Z,[t._v("mdi-map-marker")]),t._v(" "+t._s(t.note.block_id)+" - "+t._s(t.note.small_block_id)+" ")],1)]),e(k.EB,{staticClass:"text-h6"},[t._v(" "+t._s(t.note.title)+" ")]),e(k.ZB,[t._v(" "+t._s(t.note.comment)+" ")]),e(k.h7,[e(O.Z),e(c.Z,{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[e(d.Z,[t._v("mdi-pencil")]),t._v(" Revise ")],1)],1)],1)],1)},_t=[],wt={name:"HomeView",components:{},data(){return{note:{image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",date:"May 24 5:43pm",title:"Have A Nice Day in Farm",block_id:"farm1",small_block_id:"west",comment:"Excellent harvest the grapes have a rich flavor and aromaa rich flavor and aromaExcellent harvest the grapes have a rich flavor and aromaa rich flavor and aroma",writer:"Sunny Chuang"}}}},Zt=wt,bt=(0,f.Z)(Zt,gt,_t,!1,null,"26621b25",null),xt=bt.exports,yt=a(2165),kt=a(3736),Ct=a(8088),It=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fill-height d-flex justify-center align-center"},[e(y.Z,{staticClass:"ma-5 background",attrs:{flat:""}},[e(k.EB,{staticClass:"justify-center"},[e(vt.Z,{attrs:{"max-height":"100","max-width":"150",src:a(6949)}})],1),e(F.Z,{staticClass:"mb-2",attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(R.Z,{attrs:{href:"#login"}},[t._v(" Log in ")]),e(R.Z,{attrs:{href:"#signup"}},[t._v(" Sign up ")])],1),e(kt.Z,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(yt.Z,{attrs:{value:"login"}},[e(y.Z,{attrs:{color:"basil",flat:""}},[e(k.ZB,[e(Ct.Z,{attrs:{label:"Account",outlined:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),e(Ct.Z,{attrs:{label:"Password",type:"password",outlined:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e("div",{staticClass:"d-flex"},[e(O.Z),e(c.Z,{staticClass:"pa-5",attrs:{dark:"",color:"primary"},on:{click:t.login}},[t._v(" Login ")])],1)],1)],1)],1),e(yt.Z,{attrs:{value:"signup"}},[e(y.Z,{attrs:{color:"basil",flat:""}},[e(k.ZB,[e(Ct.Z,{staticClass:"mt-2",attrs:{label:"Account",outlined:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),e(Ct.Z,{attrs:{label:"Password",outlined:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),e(Ct.Z,{staticClass:"mt-2",attrs:{label:"Name",outlined:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),e("div",{staticClass:"d-flex"},[e(O.Z),e(c.Z,{staticClass:"pa-5",attrs:{dark:"",color:"primary"},on:{click:t.register}},[t._v(" Sign up ")])],1)],1)],1)],1)],1)],1)],1)},St=[],jt={name:"LoginView",components:{},setup(){},data(){return{tab:"login",account:"",password:"",name:""}},created(){this.initialize()},methods:{initialize(){this.$store.state.isUserLoggedIn&&this.$router.push({name:"homeView"})},async register(){try{await ut.register({account:this.account,password:this.password,name:this.name})}catch(t){console.log(t)}},async login(){const t=window.location.href;try{const e=await ut.login({account:this.account,password:this.password});if(t.includes("?")){const a=t.split("?")[1].split("&")[0].split("=")[1];console.log(a),location.assign("https://access.line.me/dialog/bot/accountLink?linkToken="+a+"&nonce="+e.data)}else this.$store.dispatch("setToken",e.data),this.$store.dispatch("setUser",this.account),this.$router.push({name:"homeView"})}catch(e){console.log(e)}}}},Ot=jt,Vt=(0,f.Z)(Ot,It,St,!1,null,"0e71f460",null),Pt=Vt.exports,$t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fill-height d-flex justify-center align-center"},[e(y.Z,{staticClass:"ma-5 background",attrs:{flat:""}},[e(k.EB,{staticClass:"justify-center"},[e(vt.Z,{attrs:{"max-height":"100","max-width":"150",src:a(6949)}})],1),e(k.ZB,{staticClass:"text-center"},[t._v(" Smartfarm can help you manage your farm! ")]),e("div",{staticClass:"d-flex justify-center"},[e(c.Z,{attrs:{color:"primary",to:{name:"loginView"}}},[t._v(" Start Smartfarm! ")])],1)],1)],1)},zt=[],Tt={name:"IndexView",created(){this.initialize()},methods:{initialize(){this.$store.state.isUserLoggedIn&&this.$router.push({name:"homeView"})}}},Bt=Tt,Ut=(0,f.Z)(Bt,$t,zt,!1,null,"31e5df35",null),Lt=Ut.exports,At=a(5174),Ht=a(7953),Et=function(){var t=this,e=t._self._c;return e("Interface",[e("div",[e(At.Z,{attrs:{absolute:"",color:"white"}},[e(c.Z,{staticClass:"mr-3",attrs:{width:"40",height:"40","min-width":"0",text:"",to:{name:"plantView"}}},[e(d.Z,[t._v("mdi-close-thick")])],1),e(Ht.qW,[t._v(t._s(t.plant.name))]),e(O.Z)],1),e(at.Z,{staticClass:"overflow-y-auto background"},[e("img",{attrs:{"data-v-2b2a7bad":"",id:"video",width:"100%",src:"http://219.86.140.31:8903/video.mjpg"}}),e(tt.Z,{staticClass:"d-flex justify-center align-center ma-4"},[e(G.Z,{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"text-center"},[e(q.Z,{attrs:{rotate:-90,size:70,width:7,value:t.plant.health,color:t.plant.health>85?"primary":"yellow darken-2"}},[t._v(" "+t._s(t.plant.health)+"% ")]),e("p",{staticClass:"primary--text overline"},[t._v(" HEALTH ")])],1)]),e(G.Z,{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"text-center"},[e(q.Z,{attrs:{rotate:-90,size:70,width:7,value:t.plant.temperature,color:"primary"}},[t._v(" "+t._s(t.plant.temperature)+"°C ")]),e("p",{staticClass:"primary--text overline"},[t._v(" temperature ")])],1)]),e(G.Z,{staticClass:"d-flex justify-center align-center"},[e("div",{staticClass:"text-center"},[e(q.Z,{attrs:{rotate:-90,size:70,width:7,value:t.plant.humidty,color:"primary"}},[t._v(" "+t._s(t.plant.humidty)+"% ")]),e("p",{staticClass:"primary--text overline"},[t._v(" humidty ")])],1)])],1),e(I.Z),e("apexchart",{attrs:{type:"line",height:"350",options:t.chartOptions,series:t.series}})],1)],1)])},Nt=[],qt=a(7166),Rt=a.n(qt),Ft={name:"SP",components:{Interface:L,apexchart:Rt()},data(){return{series:[{name:"溫度",data:[26,25.9,26,25.9,25.8,26.9,29.9,27,34.4,38.4]},{name:"濕度",data:[100,100,100,100,100,95,93.9,68,76,82]}],chartOptions:{chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{width:[5,7,5],curve:"straight",dashArray:[0,8,5]},title:{text:"感測器曲線圖",align:"center"},legend:{tooltipHoverFormatter:function(t,e){return t+" - "+e.w.globals.series[e.seriesIndex][e.dataPointIndex]}},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Sep","02 Sep","03 Sep","04 Sep","05 Sep","06 Sep","07 Sep","08 Sep","09 Sep","10 Sep"]},tooltip:{y:[{title:{formatter:function(t){return t+" (°C)"}}},{title:{formatter:function(t){return t}}}]},grid:{borderColor:"#f1f1f1"}},blockChoose:"",plant:{name:"第二台攝影機",health:80,temperature:28,humidty:80,live_stream:"https://www.youtube.com/embed/dQw4w9WgXcQ"},required:t=>!!t||"Required.",error:"",value:[423,446,675,510,590,610,760]}},methods:{}},Mt=Ft,Qt=(0,f.Z)(Mt,Et,Nt,!1,null,"9ddbc456",null),Wt=Qt.exports;s.ZP.use(x.ZP);const Dt=[{path:"/",name:"indexView",component:Lt},{path:"/home",name:"homeView",component:N},{path:"/plant",name:"plantView",component:Y},{path:"/account",name:"accountView",component:ft},{path:"/note",name:"noteView",component:xt},{path:"/login",name:"loginView",component:Pt},{path:"/sp",name:"SP",component:Wt}],Jt=new x.ZP({mode:"hash",base:"/",routes:Dt});var Xt=Jt,Yt=a(629),Gt=a(4702);s.ZP.use(Yt.ZP);var Kt=new Yt.ZP.Store({plugins:[(0,Gt.Z)({storage:window.sessionStorage})],strict:!0,state:{token:null,user:null,isUserLoggedIn:!1},getters:{},mutations:{setToken(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser(t,e){t.user=e}},actions:{setToken({commit:t},e){t("setToken",e)},setUser({commit:t},e){t("setUser",e)}},modules:{}}),te=a(8864),ee=a(2638);s.ZP.use(te.Z);var ae=new te.Z({theme:{themes:{light:{primary:ee.Z.green.darken2,secondary:ee.Z.red.lighten4,accent:ee.Z.indigo.base}}}});s.ZP.config.productionTip=!1,new s.ZP({router:Xt,store:Kt,vuetify:ae,render:t=>t(b)}).$mount("#app")},6949:function(t,e,a){t.exports=a.p+"img/logo.4417d692.png"}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],n=t[d][2];for(var r=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(r=!1,n<o&&(o=n));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(l)var d=l(a)}for(e&&e(s);c<o.length;c++)n=o[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkclient"]=self["webpackChunkclient"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8518)}));s=a.O(s)})();
//# sourceMappingURL=app.6635fb79.js.map