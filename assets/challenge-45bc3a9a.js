import{_ as y,r as Z,e as $,f as I,o as c,c as l,a as e,t as f,F as w,g as C,n as b,p as j,d as M,h as P}from"./index-e1a90bcb.js";const S="/map-images/arrow.png",V="/map-images/map_icon.png";const g=_=>(j("data-v-3fb9cde1"),_=_(),M(),_),B={class:"content"},N={class:"map_control"},U={key:0,class:"open"},F={class:"head"},R={class:"img"},T=["src"],q={class:"title"},D={class:"open_content"},E=["onClick"],W={class:"img"},A=["src"],G=["src"],H={class:"title"},J=g(()=>e("div",{class:"arrow_bg"},[e("img",{src:S,alt:""})],-1)),K=[J],O=g(()=>e("div",{class:"map_icon"},[e("img",{src:V,alt:""})],-1)),Q=g(()=>e("div",{class:"arrow_bg"},[e("img",{src:S,alt:""})],-1)),X=[O,Q],Y=g(()=>e("div",{id:"map"},null,-1)),ee={__name:"map",setup(_){const p=Z(!1),n=Z(0),z=(t,s)=>{n.value=s,x()};$(()=>{x()});const r=[15597,13782],d=I([{title:"提瓦特大陆",tiles:"tiles_tivat",img:"tiwate.png",imgSize:r,minZoom:3,maxZoom:7},{title:"琉形蜃境",tiles:"tiles_lxsj",img:"lxsj.png",imgSize:[7900,7900],minZoom:2,maxZoom:6},{title:"蒙德",tiles:"tiles_tivat",img:"md.png",imgSize:r,centerPosi:[9051,2851],minZoom:3,maxZoom:7},{title:"璃月",tiles:"tiles_tivat",img:"ly.png",imgSize:r,centerPosi:[7784,5669],minZoom:3,maxZoom:7},{title:"稻妻",tiles:"tiles_tivat",img:"dq.png",imgSize:r,centerPosi:[12602,8231],minZoom:3,maxZoom:7},{title:"须弥",tiles:"tiles_tivat",img:"xm.png",imgSize:r,centerPosi:[5352,5596],minZoom:3,maxZoom:7},{title:"渊下宫",tiles:"tiles_yxg",img:"yxg.png",imgSize:[3277,3277],minZoom:2,maxZoom:5},{title:"层岩巨渊·地下矿区",tiles:"tiles_cyjy",img:"cyjy.png",imgSize:[4096,4096],minZoom:3,maxZoom:5}]);let v,o,h;function x(){const t=d[n.value],s=t.imgSize,i=t.minZoom,m=t.maxZoom;o||(o=L.map("map",{crs:L.CRS.Simple,zoomControl:!1,zoomSnap:.5}),o.on("click",function(k){const u=a.project(k.latlng);L.marker(a.unproject(u)).addTo(o).bindPopup("["+Math.floor(u.x)+","+Math.floor(u.y)+"]").openPopup()})),o.setMinZoom(i),o.setMaxZoom(m);const a=new L.RasterCoords(o,s);t.centerPosi?o.setView(a.unproject(t.centerPosi),m-1):o.setView(a.unproject([s[0]/2,s[1]/2]),3),h!=t.tiles&&(v&&o.removeLayer(v),v=L.tileLayer(`./${t.tiles}/{z}/{x}/{y}.png`,{noWrap:!0,minZoom:i,bounds:a.getMaxBounds(),maxNativeZoom:a.zoomLevel()}).addTo(o),h=t.tiles)}return(t,s)=>(c(),l("div",B,[e("div",N,[p.value?(c(),l("div",U,[e("div",F,[e("div",R,[e("img",{src:t.$m.getImgUrl(`/map-images/map-img-head/${d[n.value].img}`),alt:""},null,8,T)]),e("div",q,f(d[n.value].title),1)]),e("div",D,[(c(!0),l(w,null,C(d,(i,m)=>(c(),l("div",{class:b(["item",n.value==m?"active":""]),key:m,onClick:a=>z(i,m)},[e("div",W,[e("img",{class:"info",src:t.$m.getImgUrl(`/map-images/map-img-list/${i.img}`),alt:""},null,8,A),e("img",{class:"active",src:t.$m.getImgUrl(`/map-images/map-img-active/${i.img}`),alt:""},null,8,G)]),e("div",H,f(i.title),1)],10,E))),128))]),e("div",{class:"on_open",onClick:s[0]||(s[0]=i=>p.value=!1)},K)])):(c(),l("div",{key:1,class:"no_open",onClick:s[1]||(s[1]=i=>p.value=!0)},X))]),Y]))}},te=y(ee,[["__scopeId","data-v-3fb9cde1"]]);const oe={class:"box"},se={__name:"challenge",setup(_){return(p,n)=>(c(),l("div",oe,[P(te)]))}},ne=y(se,[["__scopeId","data-v-893393ce"]]);export{ne as default};
