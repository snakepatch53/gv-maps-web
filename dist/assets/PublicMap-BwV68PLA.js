import{g as h,j as t,L as m,F as j,d as g,M as w,u as y,r as c,c as M,t as p,h as v,i as N}from"./index-ad47tcAa.js";import{M as L,a as P,L as A,b as O,P as x,c as E,d as F}from"./MapLayerControl-FVSZuDU7.js";async function R(n){return await h({resource:"combos/get-public-map/"+n,all:!0})}const{Overlay:f}=F;function _(){return t.jsxs("div",{className:" relative flex flex-col gap-5 w-full h-screen p-7",children:[t.jsx("div",{className:" flex justify-center gap-2 w-full ",children:t.jsxs("div",{className:" flex justify-between items-center w-full max-w-[1400px] ",children:[t.jsxs(m,{to:"/login",className:" flex items-center w-full  ",children:[t.jsx("img",{className:" w-14 aspect-square ",src:"/logo.png",alt:"Logo de GV-Maps"}),t.jsx("h1",{className:" uppercase text-2xl  ",children:"GV-Maps"})]}),t.jsxs("div",{className:" flex items-center text-blue-800 ",children:[t.jsx("span",{className:" text-center leading-4 ",children:"Modo Vista"}),t.jsx(j,{className:" text-xl ",icon:g})]})]})}),t.jsx("div",{className:"flex justify-center w-full h-full",children:t.jsx("div",{className:" flex w-full max-w-[1400px] h-full rounded-2xl shadow-xl overflow-hidden bg-white ",children:t.jsx(w,{children:t.jsx(b,{})})})})]})}function b(){const{map_id:n}=y(),i=c.useRef(null),s=c.useRef(!0),[e,u]=c.useState(null),[l,d]=c.useState(null);return c.useEffect(()=>{R(n).then(r=>{var a,o;u((a=r==null?void 0:r.data)==null?void 0:a.markers),d((o=r==null?void 0:r.data)==null?void 0:o.fibers)})},[n]),c.useEffect(()=>{if(!i.current)return;const r=i.current;e===null||l===null||!Array.isArray(e)||!Array.isArray(l)||e.length===0&&l.length===0||s.current!==!1&&(s.current===!0&&(s.current=!1),r.fitBounds([...e.map(a=>[a.latitude,a.longitude]),...l.map(a=>a.fiber_markers.map(o=>[o.latitude,o.longitude]))]))},[e,l]),t.jsx(L,{ref:i,className:M(" flex w-full h-full cursor-pointer "),center:[-2.3093213892775175,-78.12541130262117],zoom:3,style:{height:"100%",width:"100%"},children:t.jsxs(P,{children:[t.jsx(C,{markers:e}),t.jsx(G,{fibers:l})]})})}function C({markers:n}){if(!n||n===null)return;const i=n.reduce((s,e)=>(s[e.type]||(s[e.type]=[]),s[e.type].push(e),s),{});return Object.entries(i).map(([s,e])=>{const u=Object.values(p).find(l=>l.name===s);return t.jsx(f,{name:s+"'s ("+(e==null?void 0:e.length)+")",checked:!0,children:t.jsx(A,{children:e.map(l=>t.jsx(O,{position:{lat:l.latitude,lng:l.longitude},icon:v({width:45,height:45,icon:u.icon}),children:t.jsx(x,{children:l.name_auto})},l.id))})},s)})}function G({fibers:n}){if(!n||n===null)return;const i=n.reduce((s,e)=>(s[e.type]||(s[e.type]=[]),s[e.type].push(e),s),{});return Object.entries(i).map(([s,e])=>t.jsx(f,{name:s+"'s ("+(e==null?void 0:e.length)+")",checked:!0,children:e.map(u=>{var r;const l=(r=u==null?void 0:u.fiber_markers)==null?void 0:r.map(a=>({lat:a.latitude,lng:a.longitude})),d=Object.values(p).find(a=>a.name===s);return t.jsx(E,{pathOptions:{color:d.color},positions:l,weight:d.weight,children:t.jsx(x,{children:N(l)})},u.id)})},s))}export{_ as default};