import{u as V,r as o,z as b,A as k,t as m,j as e,h as q,B as y,C as v,i as A,D as H,c as f,F as g,E as $,b as F,H as Q,o as U}from"./index-CMEuing7.js";import{u as _,L as B,b as P,P as D,d as z,c as K,M as W,a as X}from"./MapLayerControl-BDKcxcjN.js";import{F as S,c as G,a as R,d as N,E as O,b as J}from"./index.esm-CREHgV1m.js";const{Overlay:Y}=z;function Z(){const{map_id:n}=V(),{toolSelected:s}=o.useContext(b),{markers:a,addMarker:t,moveMarker:r,removeMarker:l,openMarkerForm:c}=o.useContext(k);if(_({click(i){s.type===y.MARKER&&t({latitude:i.latlng.lat,longitude:i.latlng.lng,type:s.name,map_id:n})}}),!a||a===null)return;const x=a.reduce((i,u)=>(i[u.type]||(i[u.type]=[]),i[u.type].push(u),i),{});return Object.entries(x).map(([i,u])=>{const p=Object.values(m).find(d=>d.name===i);return e.jsx(Y,{name:i+"'s ("+(u==null?void 0:u.length)+")",checked:!0,children:e.jsx(B,{children:u.map(d=>e.jsx(P,{position:{lat:d.latitude,lng:d.longitude},draggable:s.name===m.MOVE.name,icon:q({width:45,height:45,icon:p.icon}),eventHandlers:{click:()=>{s.name===m.TRASH.name&&l(d.id)},dblclick:()=>{c(d)},dragend:h=>{s.name===m.MOVE.name&&r(h,d.id)}},children:e.jsx(D,{children:d.name_auto})},d.id))})},i)})}const{Overlay:ee}=z;function ne(){const{map_id:n}=V(),{fibers:s,handleClick:a,handleLineClick:t,onToolChange:r,openFiberForm:l}=o.useContext(v),{toolSelected:c}=o.useContext(b);if(o.useEffect(()=>{r()},[c]),_({click:i=>a(i,n,c),keydown:i=>{var p;const u=(p=i==null?void 0:i.originalEvent)==null?void 0:p.key;(u==="Escape"||u==="Enter")&&r()}}),!s||s===null)return;const x=s.reduce((i,u)=>(i[u.type]||(i[u.type]=[]),i[u.type].push(u),i),{});return Object.entries(x).map(([i,u])=>e.jsx(ee,{name:i+"'s ("+(u==null?void 0:u.length)+")",checked:!0,children:e.jsx(B,{children:u.map(p=>{var C;const d=(C=p==null?void 0:p.fiber_markers)==null?void 0:C.map(j=>[j.latitude,j.longitude]),h=Object.values(m).find(j=>j.name===i);return e.jsxs("div",{children:[e.jsx(K,{pathOptions:{color:h.color},positions:d,weight:h.weight,eventHandlers:{click:j=>{c.name===m.MOVE.name&&t(j,p.id)},dblclick:()=>{c.name===m.POINTER.name&&l(p)}},children:c.name===m.POINTER.name&&e.jsx(D,{children:A(d)})}),e.jsx(te,{fiber:p,positions:d}),e.jsx(se,{fiber:p})]},p.id)})})},i))}function te({fiber:n,positions:s}){const{handleDrag:a,removeFiberMarker:t}=o.useContext(v),{toolSelected:r}=o.useContext(b);return r.name!==m.MOVE.name&&r.name!==m.TRASH.name?null:n.fiber_markers.map((l,c)=>e.jsx(P,{position:{lat:l.latitude,lng:l.longitude},icon:q({width:20,height:20,icon:"/point.png"}),draggable:r.name===m.MOVE.name,eventHandlers:{click:()=>{r.name===m.TRASH.name&&t(l)},dragend:x=>{console.log("hola"),r.name===m.MOVE.name&&a(x,l)}},children:e.jsx(D,{children:A(s.slice(0,c+1))})},l.id))}function se({fiber:n}){const{fiberSelected:s}=o.useContext(v),{toolSelected:a}=o.useContext(b);return a.type!==y.FIBER||(s==null?void 0:s.id)!==n.id?null:n.fiber_markers.map(t=>e.jsx(P,{position:{lat:t.latitude,lng:t.longitude},icon:q({width:30,height:95,icon:"/marker.png"})},t.id))}function T({value:n,onChange:s}){const[a,t]=o.useState(n),r=(l,c)=>{t(l),s&&s(l,c)};return o.useEffect(()=>{t(n)},[n]),e.jsx("div",{className:" grid grid-cols-6 gap-1 ",children:Object.values(H).map((l,c)=>{const x=Object.keys(H)[c],i=a===l||a==x;return e.jsx("div",{className:f(" flex w-8 aspect-square rounded-full border  border-transparent transition hover:scale-110 ",{" border-black ":i}),children:e.jsx("button",{onClick:()=>r(l,x),type:"button",className:f(" w-full h-full rounded-full shadow-lg border-2 border-transparent transition ",{" border-green-400 ":i}),style:{backgroundColor:l}})},c)})})}function ae({selected:n,onSelect:s}){const a=Object.values(m).filter(t=>t.type===y.MARKER);return n||(n=a[0]),e.jsx(e.Fragment,{children:a.map(t=>e.jsx("button",{type:"button",className:f(" w-10 aspect-square bg-transparent transition-all duration-300 p-1.5 rounded-lg ",{" bg-black/10":t.name===n.name}),onClick:()=>s(t),children:e.jsx("img",{className:"w-full h-full object-contain",src:t.icon,alt:t.name})},t.name))})}function re({value:n,onChange:s}){const[a,t]=o.useState(n),r=l=>()=>{t(l),s&&s(l)};return o.useEffect(()=>{t(n)},[n]),e.jsxs("div",{className:" flex gap-2 ",children:[e.jsx(E,{label:2,selected:a,onClick:r(2)}),e.jsx(E,{label:4,selected:a,onClick:r(4)}),e.jsx(E,{label:8,selected:a,onClick:r(8)}),e.jsx(E,{label:16,selected:a,onClick:r(16)})]})}function E({label:n,selected:s,...a}){const t=s==n;return e.jsx("button",{type:"button",className:f(" w-10 aspect-square bg-transparent transition-all duration-300 p-1.5 rounded-lg hover:scale-110 hover:bg-black/5 ",{" bg-black/10 ":t}),...a,children:e.jsx("span",{className:" font-normal ",children:n})})}function le(){const n=o.useRef(null),{isMarkerFormOpen:s,closeMarkerForm:a}=o.useContext(k);return o.useEffect(()=>{const t=r=>r.key==="Escape"&&a();return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]),n.current&&(n.current.onclick=t=>{t.target===n.current&&a()}),e.jsx("div",{className:f(" absolute inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm ",{" hidden ":!s}),ref:n,children:e.jsxs("div",{className:" flex flex-col w-full max-w-[500px] p-5 bg-white rounded-lg shadow-lg ",children:[e.jsx("div",{className:" flex justify-end ",children:e.jsx("button",{onClick:a,type:"button",className:" flex justify-center items-center w-10 aspect-square rounded-full bg-black/10 transition duration-300 hover:rotate-90 ",children:e.jsx(g,{icon:$})})}),e.jsx("h4",{className:" uppercase text-center text-xl font-bold ",children:"Editar"}),e.jsx(ie,{})]})})}function ie(){const{markerSelected:n,updateMarker:s}=o.useContext(k),a=Object.values(m).filter(c=>c.type===y.MARKER),[t,r]=o.useState(null);o.useEffect(()=>{const c=a.find(x=>x.name===(n==null?void 0:n.type));r(c)},[n]);const l=c=>r(c);return n?e.jsx(S,{initialValues:{name:(n==null?void 0:n.name)||"",latitude:(n==null?void 0:n.latitude)||"",longitude:(n==null?void 0:n.longitude)||"",description:(n==null?void 0:n.description)||"",type:(n==null?void 0:n.type)||"",reserve_meters:(n==null?void 0:n.reserve_meters)||1,nap_buffer:(n==null?void 0:n.nap_buffer)||1,nap_thread:(n==null?void 0:n.nap_thread)||1,nap_ports:(n==null?void 0:n.nap_ports)||1},validationSchema:G({name:R().required("Ingrese el nombre del marcador"),latitude:N().required("Ingrese la latitud"),longitude:N().required("Ingrese la longitud"),reserve_meters:N().required("Ingrese los metros de reserva"),nap_buffer:N().required("Ingrese el buffer"),nap_thread:N().required("Ingrese el puerto"),nap_ports:N().required("Ingrese el numero de puertos")}),onSubmit:async c=>{await s(n.id,c)},children:({handleSubmit:c,values:x,handleChange:i,isSubmitting:u})=>e.jsxs("form",{onSubmit:c,className:" flex flex-col ",children:[e.jsx(w,{name:"name",label:"Nombre:",placeholder:"Nombre del marcador"}),e.jsxs("div",{className:" flex gap-3 ",children:[e.jsx(w,{name:"latitude",label:"Latitud:",placeholder:"Latitud"}),e.jsx(w,{name:"longitude",label:"Longitud:",placeholder:"Longitud"})]}),e.jsx(w,{name:"description",label:"Descripcion:",placeholder:"Descripcion del marcador",as:"textarea",classInput:" resizex-none min-h-16 "}),e.jsxs("div",{children:[e.jsxs("label",{className:" flex items-center gap-1 ",children:[e.jsx(M,{text:"Tipo de Marcador:"}),e.jsx("span",{className:" font-normal uppercase text-sm pb-1 ",children:t==null?void 0:t.name})]}),e.jsx("div",{className:" flex justify-evenly ",children:e.jsx(ae,{selected:t,onSelect:p=>{l(p),i({target:{name:"type",value:p.name}})}})})]}),(t==null?void 0:t.name)===m.RESERVA.name&&e.jsx(w,{name:"reserve_meters",type:"number",label:"METROS:",placeholder:"Metros de reserva"}),((t==null?void 0:t.name)===m.NAP1.name||(t==null?void 0:t.name)===m.NAP2.name)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" flex gap-4 ",children:[e.jsxs("div",{className:" flex flex-col gap-2 ",children:[e.jsx(M,{text:"Buffer:"}),e.jsx(T,{onChange:(p,d)=>i({target:{name:"nap_buffer",value:d}}),value:x.nap_buffer}),e.jsx(O,{name:"nap_buffer"})]}),e.jsxs("div",{className:" flex flex-col gap-2 ",children:[e.jsx(M,{text:"Hilo:"}),e.jsx(T,{onChange:(p,d)=>i({target:{name:"nap_thread",value:d}}),value:x.nap_thread}),e.jsx(O,{name:"nap_thread"})]})]}),e.jsxs("div",{children:[e.jsx(M,{text:"Numero de Puertos:"}),e.jsx(re,{value:x.nap_ports})]})]}),e.jsx("button",{type:"submit",className:f(" bg-blue-500 text-white rounded p-3 mt-2 uppercase font-bold hover:bg-blue-600 ",{" opacity-50 cursor-not-allowed ":u}),disabled:u,children:u?e.jsx(g,{icon:F,spin:!0}):"Guardar"})]})}):null}function w({label:n,classInput:s="",...a}){return e.jsxs("div",{className:" flex-1 flex flex-col ",children:[e.jsx(M,{text:n}),e.jsx(J,{name:a.name,className:f(" border rounded p-2 ",s),...a}),e.jsx("div",{className:" w-full h-6 text-red-500 text-sm ",children:e.jsx(O,{name:a.name})})]})}function M({text:n,className:s}){return e.jsx("label",{className:f(" font-bold text-sm uppercase pl-1 mb-1 ",s),children:n})}function oe({selected:n,onSelect:s}){const a=Object.values(m).filter(t=>t.type===y.FIBER);return n||(n=a[0]),e.jsx(e.Fragment,{children:a.map(t=>e.jsxs("button",{type:"button",className:f(" flex flex-col justify-center items-center w-[52px] aspect-square bg-transparent transition-all duration-300 py-1 px-1.5 rounded-lg hover:bg-black/5 ",{" bg-black/10 hover:bg-black/10 ":t.name===n.name}),onClick:()=>s(t),children:[e.jsx(g,{style:{color:t.color},className:"text-lg",icon:t.icon}),e.jsx("span",{className:" text-xs leading-3 ",children:t.name})]},t.name))})}function ce({fiberType:n,value:s,onChange:a}){const[t,r]=o.useState(null),l=c=>{a&&a(c)};return o.useEffect(()=>{n&&(n===m.DROP.name&&r([1,2,4,6,8,12]),n===m.MINI_ADSS.name&&r([6,8,12,24,48]),n===m.ADSS.name&&r([12,24,48,72,96]))},[n]),o.useEffect(()=>{t&&(t.includes(s)||l(t[0]))},[t]),n?e.jsx("div",{className:" flex justify-center gap-1 ",children:t==null?void 0:t.map(c=>e.jsx(ue,{label:c,selected:s,onClick:()=>l(c)},c))}):null}function ue({label:n,selected:s,...a}){const t=s==n;return e.jsx("button",{type:"button",className:f(" w-10 aspect-square bg-transparent transition-all duration-300 p-1.5 rounded-lg hover:scale-110 hover:bg-black/5 ",{" bg-black/10 hover:bg-black/10 ":t}),...a,children:e.jsx("span",{className:" font-normal ",children:n})})}function de(){const n=o.useRef(null),{isFiberFormOpen:s,closeFiberForm:a}=o.useContext(v);return o.useEffect(()=>{const t=r=>r.key==="Escape"&&a();return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[]),n.current&&(n.current.onclick=t=>{t.target===n.current&&a()}),e.jsx("div",{className:f(" absolute inset-0 flex justify-center items-center bg-black/10 backdrop-blur-sm ",{" hidden ":!s}),ref:n,children:e.jsxs("div",{className:" flex flex-col w-full max-w-[500px] p-5 bg-white rounded-lg shadow-lg ",children:[e.jsx("div",{className:" flex justify-end ",children:e.jsx("button",{onClick:a,type:"button",className:" flex justify-center items-center w-10 aspect-square rounded-full bg-black/10 transition duration-300 hover:rotate-90 ",children:e.jsx(g,{icon:$})})}),e.jsx("h4",{className:" uppercase text-center text-xl font-bold ",children:"Editar Fibra"}),e.jsx(xe,{})]})})}function xe(){const{fiberSelected:n,updateFiber:s,deleteFiber:a,isLoading:t}=o.useContext(v),r=Object.values(m).filter(i=>i.type===y.FIBER),[l,c]=o.useState(null);o.useEffect(()=>{const i=r.find(u=>u.name===(n==null?void 0:n.type));c(i)},[n]);const x=i=>c(i);return n?e.jsx(S,{initialValues:{name:(n==null?void 0:n.name)||"",type:(n==null?void 0:n.type)||"",threads:(n==null?void 0:n.threads)||"",serie:(n==null?void 0:n.serie)||"",description:(n==null?void 0:n.description)||""},validationSchema:G({name:R().required("Ingrese el nombre del marcador"),type:R().required("Seleccione el tipo de fibra"),threads:N().required("Seleccione el numero de hilos")}),onSubmit:async i=>{await s(n.id,i)},children:({handleSubmit:i,values:u,handleChange:p,isSubmitting:d})=>e.jsxs("form",{onSubmit:i,className:" flex flex-col ",children:[e.jsx(I,{name:"name",label:"Nombre:",placeholder:"Nombre del marcador"}),e.jsx(I,{name:"serie",label:"Serie:",placeholder:"Serie del Cable"}),e.jsx(I,{name:"description",label:"Descripcion:",placeholder:"Descripcion del marcador",as:"textarea",classInput:" resizex-none min-h-16 "}),e.jsxs("div",{className:" flex gap-3 w-full h-full ",children:[e.jsxs("div",{className:" min-w-44 flex flex-col justify-between ",children:[e.jsxs("label",{className:" flex justify-center items-center gap-1  ",children:[e.jsx(L,{text:"Tipo de Fibra:",className:" pl-1 "}),e.jsx("span",{className:" font-normal uppercase text-sm pb-1 mr-auto  ",children:l==null?void 0:l.name})]}),e.jsx("div",{className:" flex justify-center gap-1 ",children:e.jsx(oe,{selected:l,onSelect:h=>{x(h),p({target:{name:"type",value:h.name}})}})})]}),e.jsxs("div",{className:" flex-1 flex flex-col justify-between",children:[e.jsx(L,{className:" flex justify-center items-center ",text:"Numero de Hilos:"}),e.jsx(ce,{fiberType:l==null?void 0:l.name,value:u.threads,onChange:h=>p({target:{name:"threads",value:h}})})]})]}),e.jsxs("div",{className:" flex mt-4 ",children:[e.jsx("button",{type:"submit",className:f(" flex-1 bg-blue-500 text-white rounded p-3 mt-2 uppercase font-bold hover:bg-blue-600 ",{" opacity-50 cursor-not-allowed ":d||t}),disabled:d||t,children:d?e.jsx(g,{icon:F,spin:!0}):"Guardar"}),e.jsx("button",{type:"button",className:f(" flex-1 bg-red-500 text-white rounded p-3 mt-2 ml-2 uppercase font-bold hover:bg-red-600 ",{" opacity-50 cursor-not-allowed ":t||d}),disabled:t||d,onClick:()=>a(n.id),children:t?e.jsx(g,{icon:F,spin:!0}):"Eliminar"})]})]})}):null}function I({label:n,classInput:s="",classWrap:a,...t}){return e.jsxs("div",{className:f(" flex-1 flex flex-col  ",a),children:[e.jsx(L,{text:n}),e.jsx(J,{name:t.name,className:f(" border rounded p-2 ",s),...t}),e.jsx("div",{className:" w-full h-6 text-red-500 text-sm ",children:e.jsx(O,{name:t.name})})]})}function L({text:n,className:s}){return e.jsx("label",{className:f(" font-bold text-sm uppercase pl-1 mb-1 ",s),children:n})}function pe({mapRef:n}){const{toolSelected:s}=o.useContext(b),a=o.useRef(!0),{markers:t}=o.useContext(k),{fibers:r}=o.useContext(v);return o.useEffect(()=>{n.current&&(document.querySelector(".leaflet-container").style.cursor=s.cursor)},[s]),o.useEffect(()=>{if(!n.current)return;const l=n.current;t===null||r===null||!Array.isArray(t)||!Array.isArray(r)||t.length===0&&r.length===0||a.current!==!1&&(a.current===!0&&(a.current=!1),l.fitBounds([...t.map(c=>[c.latitude,c.longitude]),...r.map(c=>c.fiber_markers.map(x=>[x.latitude,x.longitude]))]))},[t,r]),{mapRef:n}}function me(){var x,i;const{fibers:n,fiberSelected:s}=o.useContext(v),{toolSelected:a}=o.useContext(b),[t,r]=o.useState(null),[l,c]=o.useState(null);return o.useEffect(()=>{if(!s)return r(null)},[s]),_({mousemove:u=>{if(c(u),a.type!==y.FIBER||!s)return r(null);const p=n.find(j=>j.id===s.id),d=p==null?void 0:p.fiber_markers;if(!d||d.length<1)return r(null);const h=d==null?void 0:d.map(j=>[j.latitude,j.longitude]);h.push([u.latlng.lat,u.latlng.lng]);const C=A(h);r(e.jsxs(e.Fragment,{children:[e.jsx("p",{className:" text-red-200 ",children:C}),e.jsx("p",{className:" text-white ",children:"Haga clic para continuar dibujando"})]}))}}),e.jsx("div",{className:" absolute z-[400] bg-black/50 p-2 rounded-lg pointer-events-none -translate-y-1/2 whitespace-nowrap ",style:{top:`${(x=l==null?void 0:l.containerPoint)==null?void 0:x.y}px`,left:`${((i=l==null?void 0:l.containerPoint)==null?void 0:i.x)+20}px`,display:t?"block":"none"},children:t})}function fe(){const{fibers:n,fiberSelected:s}=o.useContext(v),{toolSelected:a}=o.useContext(b),[t,r]=o.useState(null);return o.useEffect(()=>{if(!s)return r(null)},[s]),_({mousemove:l=>{if(a.type!==y.FIBER||!s)return r(null);const c=n.find(p=>p.id===s.id),x=c==null?void 0:c.fiber_markers;if(!x||x.length<1)return r(null);const i=x[x.length-1],u=[[i.latitude,i.longitude],[l.latlng.lat,l.latlng.lng]];r(u)}}),t?e.jsx(K,{pathOptions:{color:a.color,dashArray:"2 10",weight:5},positions:t}):null}function ye(){const{isSearching:n,searchLocation:s}=o.useContext(b),{isOpenHeaderOptions:a}=o.useContext(Q),{isMarkerFormOpen:t}=o.useContext(k),{isFiberFormOpen:r}=o.useContext(v);return e.jsxs("div",{className:" relative flex w-full h-full ",children:[e.jsx(le,{}),e.jsx(de,{}),e.jsx("div",{className:f(" relative flex w-full h-full p-7",{" -z-10 ":a||t||r}),children:e.jsxs("div",{className:" flex flex-col w-full h-full rounded-2xl shadow-xl overflow-hidden bg-white ",children:[e.jsxs("div",{className:" flex items-center py-1 px-4 ",children:[Object.values(m).map(l=>e.jsx(je,{tool:l},l.name)),e.jsxs("div",{className:f(" flex items-center border w-full max-w-96 py-2 px-2 ml-auto rounded ",{" bg-black/5 ":n," bg-white ":!n}),children:[e.jsx("input",{onKeyDown:l=>{l.key==="Enter"&&s(l.target.value)&&(l.target.value="")},className:" w-full ",type:"text",placeholder:"Buscar lugar",disabled:n}),n&&e.jsx(g,{icon:F,spin:!0}),!n&&e.jsx(g,{icon:U})]})]}),e.jsx(he,{})]})})]})}const he=()=>{const{mapRef:n}=o.useContext(b);return pe({mapRef:n}),e.jsxs(W,{ref:n,className:f(" flex w-full h-full cursor-pointer "),center:[-2.3093213892775175,-78.12541130262117],zoom:3,children:[e.jsxs(X,{children:[e.jsx(Z,{}),e.jsx(ne,{})]}),e.jsx(me,{}),e.jsx(fe,{})]})};function je({tool:n}){const{toolSelected:s,selectTool:a}=o.useContext(b),t=s.name===n.name,r=typeof n.icon=="string";return e.jsxs("button",{onClick:()=>a(n),className:f(" flex flex-col justify-between items-center py-1 px-3 h-full rounded transition-all hover:bg-black/5 hover:scale-110 ",{" opacity-80  ":!t," bg-black/5 hover:scale-100 ":t}),style:{color:n.color},children:[r?e.jsx("img",{className:" h-full max-h-6 aspect-square object-contain",src:n.icon,alt:n.name}):e.jsx(g,{className:"text-lg",icon:n.icon}),e.jsx("p",{className:" text-black text-[10.5px] ",children:n.name})]})}export{ye as default};
