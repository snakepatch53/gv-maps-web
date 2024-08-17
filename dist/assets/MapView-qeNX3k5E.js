import{r as i,u as M,M as p,A as O,t as a,j as t,i as v,B as N,k as b,H as S,c as x,F as w,p as A,C as j}from"./index-D2Y8Up8g.js";import{u as H,b as C,P as k,c as T,M as P,a as R}from"./MapLayerControl-BzZRNkKr.js";function V(){return H().map}function y(n){const e=V();return i.useEffect(function(){return e.on(n),function(){e.off(n)}},[e,n]),e}function L(){const{map_id:n}=M(),{toolSelected:e}=i.useContext(p),{markers:c,addMarker:u,moveMarker:d,removeMarker:m}=i.useContext(O);if(y({click(o){e.name!==a.DOMO.name&&e.name!==a.MANGA.name&&e.name!==a.RESERVA.name&&e.name!==a.NAP1.name&&e.name!==a.NAP2.name&&e.name!==a.ONT.name||u({latitude:o.latlng.lat,longitude:o.latlng.lng,type:e.name,map_id:n})}}),!(!c||c===null))return c.map(o=>{const l=Object.values(a).find(s=>s.name===o.type);return t.jsx(C,{position:{lat:o.latitude,lng:o.longitude},draggable:e.name===a.MOVE.name,icon:v({width:45,height:45,icon:l.icon}),eventHandlers:{click:()=>{e.name===a.TRASH.name&&m(o.id)},dblclick:()=>{console.log("hola")},dragend:s=>{e.name===a.MOVE.name&&d(s,o.id)}},children:t.jsx(k,{children:o.name_auto})},o.id)})}function F(){const{map_id:n}=M(),{fibers:e,handleClick:c,handleLineClick:u,handleDrag:d,onToolChange:m,removeFiberMarker:o}=i.useContext(N),{toolSelected:l}=i.useContext(p);if(i.useEffect(()=>{m()},[l]),y({click:s=>c(s,n,l)}),!(!e||e===null))return e==null?void 0:e.map(s=>{var g;const f=(g=s==null?void 0:s.fiber_markers)==null?void 0:g.map(r=>({lat:r.latitude,lng:r.longitude})),h=Object.values(a).find(r=>r.name===s.type);return t.jsxs("div",{children:[t.jsx(T,{pathOptions:{color:h.color},positions:f,weight:h.weight,eventHandlers:{click:r=>{l.name===a.MOVE.name&&u(r,s.id)}},children:l.name===a.POINTER.name&&t.jsx(k,{children:b(f)})}),(l.name===a.MOVE.name||l.name===a.TRASH.name)&&s.fiber_markers.map(r=>t.jsx(C,{position:{lat:r.latitude,lng:r.longitude},icon:v({width:20,height:20,icon:"/point.png"}),draggable:l.name===a.MOVE.name,eventHandlers:{click:()=>{l.name===a.TRASH.name&&o(r)},dragend:E=>{l.name===a.MOVE.name&&d(E,r)}}},r.id))]},s.id)})}function B(){const{isOpenHeaderOptions:n}=i.useContext(S);return t.jsx("div",{className:x(" relative flex w-full h-full p-7",{" -z-10 ":n}),children:t.jsxs("div",{className:" flex flex-col w-full h-full rounded-2xl shadow-xl overflow-hidden bg-white ",children:[t.jsxs("div",{className:" flex items-center py-1 px-4 ",children:[Object.values(a).map(e=>t.jsx(q,{tool:e},e.name)),t.jsxs("div",{className:" flex items-center border w-full max-w-96 py-2 px-2 ml-auto rounded ",children:[t.jsx("input",{className:" w-full ",type:"text",placeholder:"Buscar lugar"}),t.jsx(w,{icon:A})]})]}),t.jsx(I,{})]})})}const _=async n=>await(await fetch(`https://nominatim.openstreetmap.org/search?q=${n}&format=json`)).json(),I=()=>{const{toolSelected:n}=i.useContext(p),e=i.useRef(null);return i.useEffect(()=>{if(e.current){const c=e.current;(async d=>{const m=await _(d);if(m.length>0){const{lat:o,lon:l}=m[0],s=j.latLng(o,l);j.marker(s).addTo(c).bindPopup("Ubicación encontrada").openPopup(),c.setView(s,13)}})("New York")}},[]),i.useEffect(()=>{e.current&&(document.querySelector(".leaflet-container").style.cursor=n.cursor,console.log(n.cursor))},[n]),t.jsxs(P,{ref:e,className:x(" flex w-full h-full cursor-pointer "),center:{lat:-2.3093213892775175,lng:-78.12541130262117},zoom:16,style:{height:"100%",width:"100%"},children:[t.jsx(R,{}),t.jsx(L,{}),t.jsx(F,{})]})};function q({tool:n}){const{toolSelected:e,selectTool:c}=i.useContext(p),u=e.name===n.name,d=typeof n.icon=="string";return t.jsxs("button",{onClick:()=>c(n),className:x(" flex flex-col justify-between items-center py-1 px-3 h-full rounded transition-all hover:bg-black/5 hover:scale-110 ",{" opacity-80  ":!u," bg-black/5 hover:scale-100 ":u}),style:{color:n.color},children:[d?t.jsx("img",{className:" h-full max-h-6 aspect-square object-contain",src:n.icon,alt:n.name}):t.jsx(w,{className:"text-lg",icon:n.icon}),t.jsx("p",{className:" text-black text-[10.5px] ",children:n.name})]})}export{B as default};
