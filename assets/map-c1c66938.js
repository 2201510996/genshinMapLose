import{ae as q,aq as Q,an as W,ab as re,V as se,a as f,a3 as $,R as ce,ah as V,aj as F,o as x,av as D,j as U,w as ue,e as c,h as R,u as b,d as X,aK as me,aV as ve,m as de,c as M,i as Y,F as oe,a2 as fe,af as j,O as K,as as pe,n as G,ag as he,r as ae,P as le,ar as ge,ap as _e,aw as ye,g as be,T as J,aO as we,aB as Se,_ as ze,bS as xe,bB as ke,ay as ee,f as Ee,p as Pe,l as Ce}from"./index-240abc48.js";class Le extends Error{constructor(u){super(u),this.name="ElementPlusError"}}function Me(m,u){throw new Le(`[${m}] ${u}`)}function dt(m,u){}const N=4,Re={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Te=({move:m,size:u,bar:n})=>({[n.size]:u,transform:`translate${n.axis}(${m}%)`}),ne=Symbol("scrollbarContextKey"),Be=q({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),He="Thumb",Ne=W({__name:"thumb",props:Be,setup(m){const u=m,n=re(ne),a=se("scrollbar");n||Me(He,"can not inject scrollbar context");const i=f(),_=f(),r=f({}),h=f(!1);let t=!1,E=!1,S=de?document.onselectstart:null;const s=$(()=>Re[u.vertical?"vertical":"horizontal"]),y=$(()=>Te({size:u.size,move:u.move,bar:s.value})),C=$(()=>i.value[s.value.offset]**2/n.wrapElement[s.value.scrollSize]/u.ratio/_.value[s.value.offset]),P=o=>{var e;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(e=window.getSelection())==null||e.removeAllRanges(),T(o);const l=o.currentTarget;l&&(r.value[s.value.axis]=l[s.value.offset]-(o[s.value.client]-l.getBoundingClientRect()[s.value.direction]))},p=o=>{if(!_.value||!i.value||!n.wrapElement)return;const e=Math.abs(o.target.getBoundingClientRect()[s.value.direction]-o[s.value.client]),l=_.value[s.value.offset]/2,z=(e-l)*100*C.value/i.value[s.value.offset];n.wrapElement[s.value.scroll]=z*n.wrapElement[s.value.scrollSize]/100},T=o=>{o.stopImmediatePropagation(),t=!0,document.addEventListener("mousemove",g),document.addEventListener("mouseup",k),S=document.onselectstart,document.onselectstart=()=>!1},g=o=>{if(!i.value||!_.value||t===!1)return;const e=r.value[s.value.axis];if(!e)return;const l=(i.value.getBoundingClientRect()[s.value.direction]-o[s.value.client])*-1,z=_.value[s.value.offset]-e,w=(l-z)*100*C.value/i.value[s.value.offset];n.wrapElement[s.value.scroll]=w*n.wrapElement[s.value.scrollSize]/100},k=()=>{t=!1,r.value[s.value.axis]=0,document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",k),d(),E&&(h.value=!1)},Z=()=>{E=!1,h.value=!!u.size},v=()=>{E=!0,h.value=t};ce(()=>{d(),document.removeEventListener("mouseup",k)});const d=()=>{document.onselectstart!==S&&(document.onselectstart=S)};return V(F(n,"scrollbarElement"),"mousemove",Z),V(F(n,"scrollbarElement"),"mouseleave",v),(o,e)=>(x(),D(ve,{name:b(a).b("fade"),persisted:""},{default:U(()=>[ue(c("div",{ref_key:"instance",ref:i,class:R([b(a).e("bar"),b(a).is(b(s).key)]),onMousedown:p},[c("div",{ref_key:"thumb",ref:_,class:R(b(a).e("thumb")),style:X(b(y)),onMousedown:P},null,38)],34),[[me,o.always||h.value]])]),_:1},8,["name"]))}});var te=Q(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const $e=q({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),je=W({__name:"bar",props:$e,setup(m,{expose:u}){const n=m,a=f(0),i=f(0);return u({handleScroll:r=>{if(r){const h=r.offsetHeight-N,t=r.offsetWidth-N;i.value=r.scrollTop*100/h*n.ratioY,a.value=r.scrollLeft*100/t*n.ratioX}}}),(r,h)=>(x(),M(oe,null,[Y(te,{move:a.value,ratio:r.ratioX,size:r.width,always:r.always},null,8,["move","ratio","size","always"]),Y(te,{move:i.value,ratio:r.ratioY,size:r.height,vertical:"",always:r.always},null,8,["move","ratio","size","always"])],64))}});var Ze=Q(je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const Oe=q({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:fe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Ie={scroll:({scrollTop:m,scrollLeft:u})=>[m,u].every(j)},We="ElScrollbar",Ae=W({name:We}),Ve=W({...Ae,props:Oe,emits:Ie,setup(m,{expose:u,emit:n}){const a=m,i=se("scrollbar");let _,r;const h=f(),t=f(),E=f(),S=f("0"),s=f("0"),y=f(),C=f(1),P=f(1),p=$(()=>{const e={};return a.height&&(e.height=J(a.height)),a.maxHeight&&(e.maxHeight=J(a.maxHeight)),[a.wrapStyle,e]}),T=$(()=>[a.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!a.native}]),g=$(()=>[i.e("view"),a.viewClass]),k=()=>{var e;t.value&&((e=y.value)==null||e.handleScroll(t.value),n("scroll",{scrollTop:t.value.scrollTop,scrollLeft:t.value.scrollLeft}))};function Z(e,l){we(e)?t.value.scrollTo(e):j(e)&&j(l)&&t.value.scrollTo(e,l)}const v=e=>{j(e)&&(t.value.scrollTop=e)},d=e=>{j(e)&&(t.value.scrollLeft=e)},o=()=>{if(!t.value)return;const e=t.value.offsetHeight-N,l=t.value.offsetWidth-N,z=e**2/t.value.scrollHeight,w=l**2/t.value.scrollWidth,O=Math.max(z,a.minSize),I=Math.max(w,a.minSize);C.value=z/(e-z)/(O/(e-O)),P.value=w/(l-w)/(I/(l-I)),s.value=O+N<e?`${O}px`:"",S.value=I+N<l?`${I}px`:""};return K(()=>a.noresize,e=>{e?(_==null||_(),r==null||r()):({stop:_}=pe(E,o),r=V("resize",o))},{immediate:!0}),K(()=>[a.maxHeight,a.height],()=>{a.native||G(()=>{var e;o(),t.value&&((e=y.value)==null||e.handleScroll(t.value))})}),he(ne,ae({scrollbarElement:h,wrapElement:t})),le(()=>{a.native||G(()=>{o()})}),ge(()=>o()),u({wrapRef:t,update:o,scrollTo:Z,setScrollTop:v,setScrollLeft:d,handleScroll:k}),(e,l)=>(x(),M("div",{ref_key:"scrollbarRef",ref:h,class:R(b(i).b())},[c("div",{ref_key:"wrapRef",ref:t,class:R(b(T)),style:X(b(p)),onScroll:k},[(x(),D(ye(e.tag),{ref_key:"resizeRef",ref:E,class:R(b(g)),style:X(e.viewStyle)},{default:U(()=>[_e(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?be("v-if",!0):(x(),D(Ze,{key:0,ref_key:"barRef",ref:y,height:s.value,width:S.value,always:e.always,"ratio-x":P.value,"ratio-y":C.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var De=Q(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Xe=Se(De);const ie="/map-images/arrow.png",Ye="/map-images/map_icon.png";const A=m=>(Pe("data-v-5c57eab4"),m=m(),Ce(),m),Ke={class:"map_control"},qe={key:0,class:"open"},Qe={class:"head"},Ue={class:"img"},Fe=["src"],Ge={class:"title"},Je={class:"open_content"},et=["onClick"],tt={class:"img"},st=["src"],ot=["src"],at={class:"title"},lt=A(()=>c("div",{class:"arrow_bg"},[c("img",{src:ie,alt:""})],-1)),nt=[lt],it=A(()=>c("div",{class:"map_icon"},[c("img",{src:Ye,alt:""})],-1)),rt=A(()=>c("div",{class:"arrow_bg"},[c("img",{src:ie,alt:""})],-1)),ct=[it,rt],ut=A(()=>c("div",{id:"map"},null,-1)),B=2,H=7,mt={__name:"map",props:{mini:{type:Boolean,default:!1},marker:{type:Boolean,default:!1},showQuery:{type:Boolean,default:!1}},setup(m,{expose:u}){const n=m,i=[14500,13e3],{currentRoute:_,replace:r}=xe(),{query:h}=ke(),t=ae([{title:"提瓦特大陆",tiles:"tiles_tivat",img:"tiwate.png",name:"tiwate",imgSize:i,minZoom:B,maxZoom:H},{title:"枫丹",tiles:"tiles_tivat",img:"fd.png",name:"fd",centerPosi:[3434,1578],imgSize:i,minZoom:B,maxZoom:H},{title:"蒙德",tiles:"tiles_tivat",img:"md.png",name:"md",centerPosi:[8821,2851],imgSize:i,minZoom:B,maxZoom:H},{title:"璃月",tiles:"tiles_tivat",img:"ly.png",name:"ly",centerPosi:[7634,5716],imgSize:i,minZoom:B,maxZoom:H},{title:"稻妻",tiles:"tiles_tivat",img:"dq.png",name:"dq",centerPosi:[12413,8215],imgSize:i,minZoom:B,maxZoom:H},{title:"须弥",tiles:"tiles_tivat",img:"xm.png",name:"xm",centerPosi:[5192,5518],imgSize:i,minZoom:B,maxZoom:H},{title:"渊下宫",tiles:"tiles_yxg",img:"yxg.png",name:"yxg",imgSize:[3277,3277],minZoom:2,maxZoom:5},{title:"层岩巨渊·地下矿区",tiles:"tiles_cyjy",img:"cyjy.png",name:"cyjy",imgSize:[4096,4096],minZoom:3,maxZoom:5},{title:"琉形蜃境",tiles:"tiles_lxsj",img:"lxsj.png",name:"lxsj",imgSize:[7900,7900],minZoom:2,maxZoom:6}]),E=()=>{if(n.showQuery&&h!=null&&h.tab){const v=t.findIndex(d=>d.name==h.tab);if(v!=-1)return f(v)}return f(0)},S=f(!1);let s=f(null);const y=E();K(y,v=>{n.showQuery&&r({query:{..._.value.query,tab:t.find((d,o)=>o==v).name}})});const C=(v,d)=>{y.value=d,S.value=!1,k()};le(()=>{k()});let P,p,T,g;function k(){s.value=null;const v=t[y.value],d=v.imgSize,o=v.minZoom,e=v.maxZoom;if(!p){p=L.map("map",{crs:L.CRS.Simple,zoomControl:!1,zoomSnap:.5,contextmenu:!0});let l=null;p.on("click",function(z){const w=g.project(z.latlng);console.log("["+Math.floor(w.x)+","+Math.floor(w.y)+"]"),n.marker&&(l?l.setLatLng(g.unproject(w)):l=L.marker(g.unproject(w)).addTo(p),s.value={x:Math.floor(w.x),y:Math.floor(w.y)})})}p.setMinZoom(o),p.setMaxZoom(e),g=new L.RasterCoords(p,d),v.centerPosi?p.setView(g.unproject(v.centerPosi),e-1):p.setView(g.unproject([d[0]/2,d[1]/2]),o),T!=v.tiles&&(P&&p.removeLayer(P),P=L.tileLayer(`./${v.tiles}/{z}/{x}/{y}.png`,{noWrap:!0,minZoom:o,bounds:g.getMaxBounds(),maxNativeZoom:g.zoomLevel()}).addTo(p),T=v.tiles)}return u({propCoords:s,activeIndex:y,mapModule:t,getMap:()=>({rc:g,map:p})}),(v,d)=>{const o=Xe;return x(),M("div",{class:R([{mini:!!n.mini},"content"])},[c("div",Ke,[S.value?(x(),M("div",qe,[c("div",Qe,[c("div",Ue,[c("img",{src:`/map-images/map-img-head/${t[b(y)].img}`,alt:""},null,8,Fe)]),c("div",Ge,ee(t[b(y)].title),1)]),Y(o,{height:n.mini?"350px":null},{default:U(()=>[c("div",Je,[(x(!0),M(oe,null,Ee(t,(e,l)=>(x(),M("div",{class:R(["item",b(y)==l?"active":""]),key:l,onClick:z=>C(e,l)},[c("div",tt,[c("img",{class:"info",src:`/map-images/map-img-list/${e.img}`,alt:""},null,8,st),c("img",{class:"active",src:`/map-images/map-img-active/${e.img}`,alt:""},null,8,ot)]),c("div",at,ee(e.title),1)],10,et))),128))])]),_:1},8,["height"]),c("div",{class:"on_open",onClick:d[0]||(d[0]=e=>S.value=!1)},nt)])):(x(),M("div",{key:1,class:"no_open",onClick:d[1]||(d[1]=e=>S.value=!0)},ct))]),ut],2)}}},ft=ze(mt,[["__scopeId","data-v-5c57eab4"]]);export{Xe as E,dt as d,ft as m,Me as t};
