import{r as o,R as j,w as $,x,y as z,M as b,z as J,A as d,j as i,B as A,C as K,D as Q,H as ee,c as P,F as _,n as ne,E as T}from"./index-Da3z7JIb.js";function V(t,n){const e=o.useRef(n);o.useEffect(function(){n!==e.current&&t.attributionControl!=null&&(e.current!=null&&t.attributionControl.removeAttribution(e.current),n!=null&&t.attributionControl.addAttribution(n)),e.current=n},[t,n])}const te=1;function ae(t){return Object.freeze({__version:te,map:t})}function w(t,n){return Object.freeze({...t,...n})}const D=o.createContext(null),H=D.Provider;function v(){const t=o.useContext(D);if(t==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}function S(t){function n(e,a){const{instance:r,context:l}=t(e).current;return o.useImperativeHandle(a,()=>r),e.children==null?null:j.createElement(H,{value:l},e.children)}return o.forwardRef(n)}function re(t){function n(e,a){const[r,l]=o.useState(!1),{instance:c}=t(e,l).current;o.useImperativeHandle(a,()=>c),o.useEffect(function(){r&&c.update()},[c,r,e.children]);const u=c._contentNode;return u?$.createPortal(e.children,u):null}return o.forwardRef(n)}function oe(t){function n(e,a){const{instance:r}=t(e).current;return o.useImperativeHandle(a,()=>r),null}return o.forwardRef(n)}function ce(t){return function(e){const a=v(),r=t(e,a),{instance:l}=r.current,c=o.useRef(e.position),{position:u}=e;return o.useEffect(function(){return l.addTo(a.map),function(){l.remove()}},[a.map,l]),o.useEffect(function(){u!=null&&u!==c.current&&(l.setPosition(u),c.current=u)},[l,u]),r}}function N(t,n){const e=o.useRef();o.useEffect(function(){return n!=null&&t.instance.on(n),e.current=n,function(){e.current!=null&&t.instance.off(e.current),e.current=null}},[t,n])}function R(t,n){const e=t.pane??n.pane;return e?{...t,pane:e}:t}function le(t,n){return function(a,r){const l=v(),c=t(R(a,l),l);return V(l.map,a.attribution),N(c.current,a.eventHandlers),n(c.current,l,a,r),c}}function g(t,n,e){return Object.freeze({instance:t,context:n,container:e})}function C(t,n){return n==null?function(a,r){const l=o.useRef();return l.current||(l.current=t(a,r)),l}:function(a,r){const l=o.useRef();l.current||(l.current=t(a,r));const c=o.useRef(a),{instance:u}=l.current;return o.useEffect(function(){c.current!==a&&(n(u,a,c.current),c.current=a)},[u,a,r]),l}}function B(t,n){o.useEffect(function(){return(n.layerContainer??n.map).addLayer(t.instance),function(){var l;(l=n.layerContainer)==null||l.removeLayer(t.instance),n.map.removeLayer(t.instance)}},[n,t])}function F(t){return function(e){const a=v(),r=t(R(e,a),a);return V(a.map,e.attribution),N(r.current,e.eventHandlers),B(r.current,a),r}}function ue(t,n){const e=o.useRef();o.useEffect(function(){if(n.pathOptions!==e.current){const r=n.pathOptions??{};t.instance.setStyle(r),e.current=r}},[t,n])}function se(t){return function(e){const a=v(),r=t(R(e,a),a);return N(r.current,e.eventHandlers),B(r.current,a),ue(r.current,e),r}}function ie(t,n){const e=C(t,n),a=F(e);return S(a)}function fe(t,n){const e=C(t),a=le(e,n);return re(a)}function de(t,n){const e=C(t,n),a=se(e);return S(a)}function me(t,n){const e=C(t,n),a=F(e);return oe(a)}function pe(t,n,e){const{opacity:a,zIndex:r}=n;a!=null&&a!==e.opacity&&t.setOpacity(a),r!=null&&r!==e.zIndex&&t.setZIndex(r)}function ye(){return v().map}function q(t){const n=ye();return o.useEffect(function(){return n.on(t),function(){n.off(t)}},[n,t]),n}const he=C(function({children:n,...e},a){const r=new x.Control.Layers(void 0,void 0,e);return g(r,w(a,{layersControl:r}))},function(n,e,a){e.collapsed!==a.collapsed&&(e.collapsed===!0?n.collapse():n.expand())}),xe=ce(he),M=S(xe);function G(t){return function(e){const a=v(),r=o.useRef(e),[l,c]=o.useState(null),{layersControl:u,map:s}=a,m=o.useCallback(f=>{u!=null&&(r.current.checked&&s.addLayer(f),t(u,f,r.current.name),c(f))},[u,s]),y=o.useCallback(f=>{u==null||u.removeLayer(f),c(null)},[u]),h=o.useMemo(()=>w(a,{layerContainer:{addLayer:m,removeLayer:y}}),[a,m,y]);return o.useEffect(()=>{l!==null&&r.current!==e&&(e.checked===!0&&(r.current.checked==null||r.current.checked===!1)?s.addLayer(l):r.current.checked===!0&&(e.checked==null||e.checked===!1)&&s.removeLayer(l),r.current=e)}),e.children?j.createElement(H,{value:h},e.children):null}}M.BaseLayer=G(function(n,e,a){n.addBaseLayer(e,a)});M.Overlay=G(function(n,e,a){n.addOverlay(e,a)});function k(){return k=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},k.apply(this,arguments)}function ve({bounds:t,boundsOptions:n,center:e,children:a,className:r,id:l,placeholder:c,style:u,whenReady:s,zoom:m,...y},h){const[f]=o.useState({className:r,id:l,style:u}),[p,W]=o.useState(null);o.useImperativeHandle(h,()=>(p==null?void 0:p.map)??null,[p]);const X=o.useCallback(I=>{if(I!==null&&p===null){const L=new x.Map(I,y);e!=null&&m!=null?L.setView(e,m):t!=null&&L.fitBounds(t,n),s!=null&&L.whenReady(s),W(ae(L))}},[]);o.useEffect(()=>()=>{p==null||p.map.remove()},[p]);const Y=p?j.createElement(H,{value:p},a):c??null;return j.createElement("div",k({},f,{ref:X}),Y)}const ge=o.forwardRef(ve),U=ie(function({position:n,...e},a){const r=new x.Marker(n,e);return g(r,w(a,{overlayContainer:r}))},function(n,e,a){e.position!==a.position&&n.setLatLng(e.position),e.icon!=null&&e.icon!==a.icon&&n.setIcon(e.icon),e.zIndexOffset!=null&&e.zIndexOffset!==a.zIndexOffset&&n.setZIndexOffset(e.zIndexOffset),e.opacity!=null&&e.opacity!==a.opacity&&n.setOpacity(e.opacity),n.dragging!=null&&e.draggable!==a.draggable&&(e.draggable===!0?n.dragging.enable():n.dragging.disable())}),Ce=de(function({positions:n,...e},a){const r=new x.Polyline(n,e);return g(r,w(a,{overlayContainer:r}))},function(n,e,a){e.positions!==a.positions&&n.setLatLngs(e.positions)}),Z=fe(function(n,e){const a=new x.Popup(n,e.overlayContainer);return g(a,e)},function(n,e,{position:a},r){o.useEffect(function(){const{instance:c}=n;function u(m){m.popup===c&&(c.update(),r(!0))}function s(m){m.popup===c&&r(!1)}return e.map.on({popupopen:u,popupclose:s}),e.overlayContainer==null?(a!=null&&c.setLatLng(a),c.openOn(e.map)):e.overlayContainer.bindPopup(c),function(){var y;e.map.off({popupopen:u,popupclose:s}),(y=e.overlayContainer)==null||y.unbindPopup(),e.map.removeLayer(c)}},[n,e,r,a])}),E=me(function({url:n,...e},a){const r=new x.TileLayer(n,R(e,a));return g(r,a)},function(n,e,a){pe(n,e,a);const{url:r}=e;r!=null&&r!==a.url&&n.setUrl(r)});function Le(){const{map_id:t}=z(),{toolSelected:n}=o.useContext(b),{markers:e,addMarker:a,moveMarker:r,removeMarker:l}=o.useContext(J);if(q({click(c){n.name!==d.DOMO.name&&n.name!==d.MANGA.name&&n.name!==d.RESERVA.name&&n.name!==d.NAP1.name&&n.name!==d.NAP2.name&&n.name!==d.ONT.name||a({latitude:c.latlng.lat,longitude:c.latlng.lng,type:n.name,map_id:t})}}),!(!e||e===null))return e.map(c=>{const u=Object.values(d).find(s=>s.name===c.type);return i.jsx(U,{position:{lat:c.latitude,lng:c.longitude},draggable:n.name===d.MOVE.name,icon:A({icon:u.icon}),eventHandlers:{click:()=>{n.name===d.TRASH.name&&l(c.id)},dblclick:()=>{console.log("hola")},dragend:s=>{n.name===d.MOVE.name&&r(s,c.id)}},children:i.jsx(Z,{children:c.name_auto})},c.id)})}function Ee(){const{map_id:t}=z(),{fibers:n,handleClick:e,handleLineClick:a,handleDrag:r,onToolChange:l,removeFiberMarker:c}=o.useContext(K),{toolSelected:u}=o.useContext(b);if(o.useEffect(()=>{l()},[u]),q({click:s=>e(s,t,u)}),!(!n||n===null))return n==null?void 0:n.map(s=>{var h;const m=(h=s==null?void 0:s.fiber_markers)==null?void 0:h.map(f=>({lat:f.latitude,lng:f.longitude})),y=Object.values(d).find(f=>f.name===s.type);return i.jsxs("div",{children:[i.jsx(Ce,{pathOptions:{color:y.color},positions:m,weight:y.weight,eventHandlers:{click:f=>{u.name===d.MOVE.name&&a(f,s.id)}},children:u.name===d.POINTER.name&&i.jsx(Z,{children:Q(m)})}),(u.name===d.MOVE.name||u.name===d.TRASH.name)&&s.fiber_markers.map(f=>i.jsx(U,{position:{lat:f.latitude,lng:f.longitude},icon:A({width:20,height:20,icon:"/point.png"}),draggable:u.name===d.MOVE.name,eventHandlers:{click:()=>{u.name===d.TRASH.name&&c(f)},dragend:p=>{u.name===d.MOVE.name&&r(p,f)}}},f.id))]},s.id)})}const{BaseLayer:O}=M;function Re(){const{isOpenHeaderOptions:t}=o.useContext(ee);return i.jsx("div",{className:P(" relative flex w-full h-full p-7",{" -z-10 ":t}),children:i.jsxs("div",{className:" flex flex-col w-full h-full rounded-2xl shadow-xl overflow-hidden bg-white ",children:[i.jsxs("div",{className:" flex items-center py-1 px-4 ",children:[Object.values(d).map(n=>i.jsx(be,{tool:n},n.name)),i.jsxs("div",{className:" flex items-center border w-full max-w-96 py-2 px-2 ml-auto rounded ",children:[i.jsx("input",{className:" w-full ",type:"text",placeholder:"Buscar lugar"}),i.jsx(_,{icon:ne})]})]}),i.jsx(je,{})]})})}const Oe=async t=>await(await fetch(`https://nominatim.openstreetmap.org/search?q=${t}&format=json`)).json(),je=()=>{const{toolSelected:t}=o.useContext(b),n=o.useRef(null);return o.useEffect(()=>{if(n.current){const e=n.current;(async r=>{const l=await Oe(r);if(l.length>0){const{lat:c,lon:u}=l[0],s=T.latLng(c,u);T.marker(s).addTo(e).bindPopup("Ubicación encontrada").openPopup(),e.setView(s,13)}})("New York")}},[]),o.useEffect(()=>{n.current&&(document.querySelector(".leaflet-container").style.cursor=t.cursor)},[t]),i.jsxs(ge,{ref:n,className:P(" flex w-full h-full cursor-pointer "),center:{lat:-2.3093213892775175,lng:-78.12541130262117},zoom:16,style:{height:"100%",width:"100%"},children:[i.jsxs(M,{position:"topright",children:[i.jsx(O,{checked:!0,name:"Normal",children:i.jsx(E,{checked:!0,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),i.jsx(O,{name:"Satélite",children:i.jsx(E,{url:"http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})}),i.jsx(O,{name:"Light",children:i.jsx(E,{url:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"})}),i.jsx(O,{name:"Dark",children:i.jsx(E,{url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"})})]}),i.jsx(Le,{}),i.jsx(Ee,{})]})};function be({tool:t}){const{toolSelected:n,selectTool:e}=o.useContext(b),a=n.name===t.name,r=typeof t.icon=="string";return i.jsxs("button",{onClick:()=>e(t),className:P(" flex flex-col justify-between items-center py-1 px-3 h-full rounded transition-all hover:bg-black/5 hover:scale-110 ",{" opacity-80  ":!a," bg-black/5 hover:scale-100 ":a}),style:{color:t.color},children:[r?i.jsx("img",{className:" h-full max-h-6 aspect-square object-contain",src:t.icon,alt:t.name}):i.jsx(_,{className:"text-lg",icon:t.icon}),i.jsx("p",{className:" text-black text-[10.5px] ",children:t.name})]})}export{Re as default};